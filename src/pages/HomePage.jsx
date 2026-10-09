import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import PointerEventsNone from "../sections/PointerEventsNone.jsx";
import PointerEventsNone2 from "../sections/PointerEventsNone2.jsx";
import MaskIntersect from "../sections/MaskIntersect.jsx";


// Route / — 3 section(s), in page order.
export default function HomePage() {
  usePageChrome({ title: "Moment · The AI Partner for Investment Management", html: { "lang": "en", "class": "twklausanne_8165b9b1-module__lyC6-a__variable twkeverettmono_eeb061f3-module__scOF0q__variable" }, body: { "class": "h-full" } });
  return (
    <>
    <div hidden></div>
    <div className="contents">
      <div data-site-canvas="true" className="relative w-[var(--site-viewport-width,100vw)] bg-[linear-gradient(154deg,#0A1312_calc(100svh*0.1822+65px),#111D1B_calc(100svh*0.8988))] [--site-banner-bottom:0px] [--site-banner-height:105px] [--site-banner-top:74px] [--site-home-banner-space:0px] lg:[--site-banner-top:75px] xl:[--site-banner-height:68px] has-[[data-site-announcement]]:[--site-banner-bottom:calc(var(--site-banner-top)+var(--site-banner-height))] has-[[data-site-announcement]]:[--site-home-banner-space:calc(var(--site-banner-bottom)-74px)] stix_two_text_c05fb4e7-module__FftGeG__variable jetbrains_mono_7dbd547a-module__2I1Dga__variable" style={{ "--page-beat": "0.6s", "--page-stagger-word": "0.06s", "--page-stagger-line": "0.06s", "--page-stagger-group": "0.05s", "--page-stagger-logo": "0.06s", "--page-enter": "0.65s", "--page-item-enter": "2.1s", "--page-item-ease": "cubic-bezier(0.25,0.1,0.25,1)", "--page-exit": "0.2s", "--page-ease": "cubic-bezier(0.16,1,0.3,1)", "--page-exit-ease": "cubic-bezier(0.4,0,1,1)" }}>
        <PointerEventsNone />
        <div inert="" className="motion-reduce:translate-none fixed inset-x-16 top-[68px] z-[99] flex flex-col border border-border-secondary-green bg-surface-bg-secondary p-16 transition-[opacity,translate,visibility] duration-250 ease-out-quart lg:hidden pointer-events-none invisible -translate-y-8 opacity-0" style={{ "backgroundColor": "rgba(17, 29, 27, 0.92)", "backdropFilter": "blur(8px)" }}>
          <nav className="flex flex-col items-end gap-8 md:items-start" aria-label="Primary">
            <A className="focus-ring relative items-center bg-transparent text-small text-text-link whitespace-nowrap transition-[color,background-color] duration-200 hover:bg-surface-link-hover hover:text-text-link-hover focus-visible:bg-surface-link-hover focus-visible:text-text-link-hover inline-flex rounded-1 px-12 pt-6 pb-2" href="/memo">Memo</A>
            <A className="focus-ring relative items-center bg-transparent text-small text-text-link whitespace-nowrap transition-[color,background-color] duration-200 hover:bg-surface-link-hover hover:text-text-link-hover focus-visible:bg-surface-link-hover focus-visible:text-text-link-hover inline-flex rounded-1 px-12 pt-6 pb-2" href="/careers">Careers</A>
            <button type="button" className="focus-ring relative items-center bg-transparent text-small text-text-link whitespace-nowrap transition-[color,background-color] duration-200 hover:bg-surface-link-hover hover:text-text-link-hover focus-visible:bg-surface-link-hover focus-visible:text-text-link-hover inline-flex rounded-1 px-12 pt-6 pb-2">Contact</button>
          </nav>
        </div>
        <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[74px] w-[var(--site-viewport-width,100vw)] overflow-clip lg:h-[72px] [mask-image:linear-gradient(black_58px,transparent)] lg:[mask-image:linear-gradient(black_56px,transparent)] before:pointer-events-auto before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[58px] before:content-[''] lg:before:h-[56px]">
          <div className="absolute inset-x-0 top-0 h-[calc(100svh+100%)] animate-header-fade-ground [animation-range:0_100svh] [animation-timeline:scroll(root_block)] bg-[linear-gradient(154deg,#0A1312_calc(100svh*0.1822+65px),#111D1B_calc(100svh*0.8988))]"></div>
        </div>
        <div className="animate-banner-reveal [transition:--banner-exit_var(--page-exit,0.2s)_var(--page-exit-ease,cubic-bezier(0.4,0,1,1))] motion-reduce:animate-none motion-reduce:transition-none pointer-events-none absolute inset-x-0 top-(--site-banner-top) z-30 not-has-[[data-site-announcement]]:hidden scroll-mt-(--site-banner-top) px-24 sm:px-40 lg:px-32 xl:px-40">
          <div data-site-announcement="true">
            <div className="mx-auto w-full max-w-[1800px]">
              <PointerEventsNone2 />
            </div>
          </div>
        </div>
        <main id="main-content" className="relative z-[1] min-h-[100dvh]">
          <MaskIntersect />
        </main>
      </div>
    </div>
    <next-route-announcer style={{ "position": "absolute" }}></next-route-announcer>
    <div id="_r_1_" data-base-ui-portal="">
      <div data-closed="" role="presentation" hidden className="fixed inset-0 z-[200] bg-black/50 transition-opacity duration-350 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-250" style={{ "userSelect": "none" }}></div>
      <div data-closed="" role="presentation" hidden className="fixed inset-0 z-[200] flex items-start justify-center overflow-auto p-8 min-[800px]:p-16" style={{ "pointerEvents": "none" }}>
        <div data-closed="" id="_r_0_" role="dialog" tabIndex="-1" data-base-ui-focusable="" hidden className="my-auto outline-none transition-opacity duration-350 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-250 motion-safe:transition-[opacity,scale] motion-safe:duration-350 motion-safe:data-[ending-style]:duration-250 motion-safe:data-[starting-style]:scale-[0.96] motion-safe:data-[ending-style]:scale-[0.96] w-full max-w-[554px]" aria-labelledby="base-ui-_r_4_" style={{ "--nested-dialogs": "0" }}>
          <h2 id="base-ui-_r_4_" className="m-0 sr-only">Request a demo</h2>
          <div className="frosted-frame relative h-max shrink-0 rounded-4 border border-transparent px-8 py-24 [--frosted-frame-inset:-1px] lg:w-[554px] lg:px-16 lg:py-32 hubspot-form-module__XKRRNa__panel">
            <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-[inherit] bg-[rgba(17,29,27,0.85)] backdrop-blur-[4px]"></span>
            <button type="button" tabIndex="0" aria-label="Close" className="absolute top-4 right-4 z-[1] flex size-32 items-center justify-center text-text-primary hover:opacity-80 lg:top-8 lg:right-8">
              <svg aria-hidden="true" className="size-12" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.75L10.75 10.75M10.75 0.75L0.75 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="relative" aria-busy="true">
              <p role="status" className="absolute inset-0 flex items-center justify-center text-small text-text-secondary">Loading contact form…</p>
              <div id="hubspot-form" className="hubspot-form-module__XKRRNa__form"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
