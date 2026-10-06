# clone/ — Moment · The AI Partner for Investment Management

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://moment.com/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **34** component(s) (41 section instance(s) over 16 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (the Tailwind utilities are not bundled, because Tailwind v3 output is unlayered and would override a site whose own CSS uses native `@layer`; the site's CSS alone styles the clone).
- `public/`: **39** real file(s), 1.1 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 1 still(s) captured** (0 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 2 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **16 element(s) forced visible.** These started hidden/offset on the original and were still hidden/offset when this clone was captured — the scroll-triggered animation that reveals them on the original did not fire the same way during capture. Rather than ship them permanently invisible, their hiding style was stripped so they render plainly (no animation, but visible). Rebuild the real scroll-in motion in the remix.
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (13 image reference(s), 13 resolved) |
| No tracker host in code or `public/` | PASS |
| No external hyperlink in `src/` | PASS (26 link(s) to other sites or uncaptured pages lost their target) |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 16 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | PASS: average 99.7% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 99.7% over 3 of 3 section(s) (reference: original crawl screenshot); page height 900 → 900 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `PointerEventsNone` | 80 → 80 px | 100.0% | 100.0% |
| 1 | `PointerEventsNone2` | 68 → 68 px | 100.0% | 100.0% |
| 2 | `MaskIntersect` | 900 → 900 px | 99.6% | 99.6% |

**`/careers`**: 100.0% over 3 of 3 section(s) (reference: original crawl screenshot); page height 2322 → 2322 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `PointerEventsNone5` | 80 → 80 px | 99.9% | 99.9% |
| 1 | `PointerEventsNone6` | 68 → 68 px | 100.0% | 100.0% |
| 2 | `MaskIntersect2` | 2322 → 2322 px | 100.0% | 100.0% |

**`/careers/b13c29c2-fe72-4055-86c8-fa8efbae416f`**: 99.6% over 2 of 2 section(s) (reference: original crawl screenshot); page height 2667 → 2667 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `PointerEventsNone10` | 80 → 80 px | 100.0% | 100.0% |
| 1 | `MaskIntersect5` | 2667 → 2667 px | 99.6% | 99.6% |

**`/careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2`**: 99.5% over 2 of 2 section(s) (reference: original crawl screenshot); page height 2899 → 2899 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `PointerEventsNone11` | 80 → 80 px | 100.0% | 100.0% |
| 1 | `MaskIntersect8` | 2899 → 2899 px | 99.5% | 99.5% |

**`/careers/1db991e4-9480-4847-b300-c430cc057d56`**: 99.6% over 2 of 2 section(s) (reference: original crawl screenshot); page height 2547 → 2547 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `PointerEventsNone11` | 80 → 80 px | 100.0% | 100.0% |
| 1 | `MaskIntersect10` | 2547 → 2547 px | 99.6% | 99.6% |

**`/careers/707c9117-1b1e-4260-96b3-28f735f7d840`**: 99.5% over 2 of 2 section(s) (reference: original crawl screenshot); page height 2761 → 2761 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `PointerEventsNone12` | 80 → 80 px | 100.0% | 100.0% |
| 1 | `MaskIntersect13` | 2761 → 2761 px | 99.5% | 99.5% |

