// Runtime behaviour the original page's scripts applied after hydration, which a static capture freezes at the
// capture moment / capture width (1440px). Each helper returns a cleanup function.

// 1. --site-banner-height: the original writes the announcement banner's measured height inline on the site canvas
//    (68px at xl, 105px on mobile where the banner wraps). Header offsets (pt-[max(80px,var(--site-banner-bottom)+40px)],
//    --site-home-banner-space) derive from it, so a frozen 68px shifted every mobile page up by 37px.
export function syncBannerHeight() {
  const canvas = document.querySelector("[data-site-canvas]");
  const ann = document.querySelector("[data-site-announcement]");
  if (!canvas || !ann || !("ResizeObserver" in window)) return () => {};
  const set = () => { const h = ann.offsetHeight; if (h) canvas.style.setProperty("--site-banner-height", `${h}px`); };
  const ro = new ResizeObserver(set);
  ro.observe(ann);
  set();
  return () => ro.disconnect();
}

// 2. Knuth-Plass line spans ([data-kp-line]): the original re-breaks and re-justifies them for the current width.
//    The capture baked the 1440px result (block, nowrap, per-line word-spacing). Keep those lines while the layout is
//    still the one they were broken for; otherwise let them flow as justified, hyphenated text
//    (styles: [data-kp-flow] in src/styles/clone.css). Hyphen-break lines lose their trailing "-" while flowing.
const KP_SLACK = 12;
export function reflowKpLines() {
  if (!("ResizeObserver" in window)) return () => {};
  const groups = new Map();
  document.querySelectorAll("[data-kp-line]").forEach((l) => {
    const p = l.parentElement;
    if (!groups.has(p)) groups.set(p, []);
    groups.get(p).push(l);
  });
  if (!groups.size) return () => {};
  const range = document.createRange();
  const contentW = (l) => { range.selectNodeContents(l); return range.getBoundingClientRect().width + (parseFloat(l.style.textIndent) || 0); };
  const hyphenTails = new Map(); // line -> its trailing text node ending in "-"
  groups.forEach((lines) => lines.forEach((l) => {
    if (l.dataset.kpBreak !== "hyphen") return;
    let t = l.lastChild;
    while (t && t.nodeType !== 3) t = t.lastChild;
    if (t && /-$/.test(t.data)) hyphenTails.set(l, t);
  }));
  const setFlow = (p, lines, flow) => {
    if (flow === p.hasAttribute("data-kp-flow")) return;
    if (flow) {
      const ta = getComputedStyle(p).textAlign;
      p.setAttribute("data-kp-flow", /^(start|left|justify)$/.test(ta) ? "justify" : "");
    } else p.removeAttribute("data-kp-flow");
    lines.forEach((l) => {
      const t = hyphenTails.get(l);
      if (!t) return;
      if (flow && /-$/.test(t.data)) t.data = t.data.slice(0, -1);
      else if (!flow && !/-$/.test(t.data)) t.data += "-";
    });
  };
  // The capture's layout (container widths and the text's letter-spacing) holds from the site's 1000px breakpoint up
  // (measured identical at 1000, 1280 and 1440). Below it the original always re-breaks, so the lines flow there; above
  // it the baked lines stay unless the container drifts outside +/-KP_SLACK of them (they naturally sit within -7..+9px).
  const desktop = window.matchMedia("(min-width: 1000px)");
  const evaluate = (p) => {
    const lines = groups.get(p);
    if (!desktop.matches) { setFlow(p, lines, true); return; }
    setFlow(p, lines, false); // measure the baked lines (synchronous: no frame is painted in between)
    const avail = p.clientWidth;
    if (!avail) return;
    const w = Math.max(0, ...lines.filter((l) => l.dataset.kpBreak !== "end").map(contentW));
    setFlow(p, lines, w ? Math.abs(avail - w) > KP_SLACK : lines.some((l) => contentW(l) > avail + KP_SLACK));
  };
  const all = () => groups.forEach((_, p) => evaluate(p));
  const ro = new ResizeObserver((entries) => entries.forEach((e) => evaluate(e.target)));
  let cancelled = false;
  // Webfont metrics matter for the measurement: fonts.ready can resolve before the font-display:block faces have
  // started loading, so load them explicitly and re-evaluate whenever any font load finishes.
  const start = () => { if (!cancelled) { all(); groups.forEach((_, p) => ro.observe(p)); } };
  const faces = [...document.fonts].filter((f) => /twkLausanne/i.test(f.family));
  Promise.all(faces.map((f) => f.load().catch(() => {}))).then(() => document.fonts.ready).then(start);
  document.fonts.addEventListener("loadingdone", all);
  desktop.addEventListener("change", all);
  return () => { cancelled = true; ro.disconnect(); document.fonts.removeEventListener("loadingdone", all); desktop.removeEventListener("change", all); };
}

// 3. Header market clock: the original shows live New York time and NYSE open/closed (chunk 06d7pp_4r-mr-.js, tx()),
//    refreshed every 10s. The capture froze the time it was taken. Holidays come from /api/market-status on the
//    original; this clone has no API, so it uses weekday 9:30-16:00 ET.
const OPEN_COLOR = "#41D975";
const CLOSED_COLOR = "#213D3E";
function nyNow(d = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit", hour12: false, weekday: "short" }).formatToParts(d);
  const get = (t) => parts.find((p) => p.type === t)?.value ?? "";
  let h = parseInt(get("hour"), 10); if (h === 24) h = 0;
  const mins = h * 60 + parseInt(get("minute"), 10);
  const weekend = get("weekday") === "Sat" || get("weekday") === "Sun";
  return {
    isOpen: !weekend && mins >= 570 && mins < 960,
    time: new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit", hour12: true }).format(d),
  };
}
export function marketClock() {
  const clocks = [...document.querySelectorAll(".tabular-nums")].filter((el) => / ET$/.test(el.textContent));
  if (!clocks.length) return () => {};
  const tick = () => {
    const { isOpen, time } = nyNow();
    clocks.forEach((clock) => {
      clock.textContent = `${time} ET`;
      const label = clock.parentElement?.firstChild;
      if (label && label.nodeType === 3) label.data = isOpen ? "Market open" : "Market closed";
      const dot = clock.closest(".inline-flex")?.querySelector(".size-4");
      if (!dot) return;
      const base = dot.querySelector(".rounded-full:not(.animate-market-pulse)");
      if (base) base.style.backgroundColor = isOpen ? OPEN_COLOR : CLOSED_COLOR;
      let pulse = dot.querySelector(".animate-market-pulse");
      if (isOpen && !pulse) {
        pulse = document.createElement("span");
        pulse.className = "absolute inset-0 origin-center animate-market-pulse rounded-full";
        pulse.style.backgroundColor = OPEN_COLOR;
        dot.prepend(pulse);
      } else if (!isOpen && pulse) pulse.remove();
    });
  };
  tick();
  const id = setInterval(tick, 10000);
  return () => clearInterval(id);
}

// 4. Header mobile menu: the original toggles the drawer (the fixed panel wrapping the last nav[aria-label=Primary])
//    and swaps the button to "Close menu" with an X icon. Escape leaves it open on the original; following a link closes it.
const MENU_CLOSED = ["pointer-events-none", "invisible", "-translate-y-8", "opacity-0"];
const MENU_OPEN = ["pointer-events-auto", "visible", "translate-y-0", "opacity-100"];
const X_ICON = '<svg aria-hidden="true" class="size-12" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L10.75 10.75M10.75 0.75L0.75 10.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>';
export function mobileMenu() {
  const btn = document.querySelector('button[aria-label="Open menu"]');
  const drawer = [...document.querySelectorAll('nav[aria-label="Primary"]')].pop()?.closest(".fixed");
  if (!btn || !drawer) return () => {};
  const burger = btn.innerHTML;
  const set = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = open ? X_ICON : burger;
    drawer.classList.remove(...(open ? MENU_CLOSED : MENU_OPEN));
    drawer.classList.add(...(open ? MENU_OPEN : MENU_CLOSED));
    drawer.toggleAttribute("inert", !open);
  };
  const onBtn = () => set(btn.getAttribute("aria-expanded") !== "true");
  const onDrawer = (e) => { if (e.target.closest("a")) set(false); };
  btn.addEventListener("click", onBtn);
  drawer.addEventListener("click", onDrawer);
  return () => { set(false); btn.removeEventListener("click", onBtn); drawer.removeEventListener("click", onDrawer); };
}

// 5. "Request a demo" dialog: every "Contact" button opens the captured Base UI dialog (backdrop, positioner, popup),
//    with the page scroll locked; Close, Escape and a click outside the popup close it. The HubSpot form inside is a
//    third-party embed this offline clone does not load, so the panel keeps its "Loading contact form…" state.
export function contactDialog() {
  const popup = document.querySelector('[role="dialog"][data-base-ui-focusable]');
  const portal = popup?.closest("[data-base-ui-portal]");
  if (!portal) return () => {};
  const layers = [...portal.children, popup];
  let returnFocus = null, timer;
  const open = () => {
    clearTimeout(timer);
    returnFocus = document.activeElement;
    layers.forEach((el) => { el.hidden = false; el.removeAttribute("data-closed"); el.setAttribute("data-open", ""); el.setAttribute("data-starting-style", ""); });
    portal.children[1].style.pointerEvents = "";
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => requestAnimationFrame(() => layers.forEach((el) => el.removeAttribute("data-starting-style"))));
    popup.focus();
  };
  const close = () => {
    if (!popup.hasAttribute("data-open")) return;
    layers.forEach((el) => { el.removeAttribute("data-open"); el.setAttribute("data-ending-style", ""); });
    document.body.style.overflow = "";
    timer = setTimeout(() => layers.forEach((el) => { el.removeAttribute("data-ending-style"); el.setAttribute("data-closed", ""); el.hidden = true; }), 250);
    returnFocus?.focus?.();
  };
  const onClick = (e) => {
    const b = e.target.closest("button");
    if (b && !portal.contains(b) && b.textContent.trim() === "Contact") { e.preventDefault(); open(); return; }
    if (!popup.hasAttribute("data-open")) return;
    if ((b && b.getAttribute("aria-label") === "Close" && popup.contains(b)) || (portal.contains(e.target) && !popup.contains(e.target))) close();
  };
  const onKey = (e) => { if (e.key === "Escape") close(); };
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKey);
  return () => { clearTimeout(timer); close(); document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
}

// 6. [data-text-reveal="lines"]: the original numbers each word's --text-index by the visual line it lands on, so the
//    stagger follows the wrap at the current width. The capture baked the 1440px numbering into the (then hidden)
//    mobile copy, so its second line started one step early.
export function lineRevealIndex() {
  const number = () => document.querySelectorAll('[data-text-reveal="lines"]').forEach((group) => {
    let line = -1, top = null;
    group.querySelectorAll("[data-reveal-word]").forEach((w) => {
      const r = w.getClientRects()[0];
      if (!r) return;
      if (top === null || r.top > top + 1) { line++; top = r.top; }
      w.style.setProperty("--text-index", String(line));
    });
  });
  number();
  document.fonts.ready.then(number);
  return () => {};
}
