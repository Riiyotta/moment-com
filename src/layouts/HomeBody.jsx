// page body shell (wrappers and layout only; sections live in src/sections/) · /
import HeroCanvasStatementHome, { HeroCanvasStatementHomeBackdrop, HeroCanvasStatementHomeDesktop } from "../sections/hero-canvas-statement/Home.jsx";
import ProofMetricsLineHome from "../sections/proof-metrics-line/Home.jsx";
import ProofLogoStripHome, { ProofLogoStripHomeDesktop } from "../sections/proof-logo-strip/Home.jsx";

export default function HomeBody() {
  return (
    <div data-clone-section="HomeBody" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <section data-page-composition="true" data-home-intro="ready" className={"relative flex min-h-dvh w-full flex-col lg:h-dvh lg:overflow-hidden short-landscape:h-auto short-landscape:overflow-visible [&_[data-page-reveal='1']]:[--reveal-delay:var(--page-stagger-word,0.06s)] [&_[data-page-reveal='2']]:[--reveal-delay:calc((1+var(--page-heading-count,0))*var(--page-stagger-word,0.06s))] [&_[data-page-reveal='3']]:[--reveal-delay:calc((1+var(--page-heading-count,0)+var(--page-subtitle-count,0))*var(--page-stagger-word,0.06s))] data-[home-intro=pending]:[&_:is([data-page-reveal],[data-reveal-word],[data-reveal-item])]:[animation-delay:calc(6s+var(--item-delay,var(--reveal-delay,0s)))]"} style={{ "--home-test-max-w": "1800px", "--page-heading-count": "6", "--page-subtitle-count": "2" }}>
            <div className="relative mt-[74px] lg:mt-0 lg:h-full lg:overflow-hidden short-landscape:mt-80 short-landscape:h-auto short-landscape:overflow-visible">
              <div className="relative min-h-full lg:h-full short-landscape:h-auto short-landscape:min-h-[480px]">
                <HeroCanvasStatementHomeBackdrop />
                <div className="pointer-events-none relative z-10 flex min-h-[calc(100dvh-74px)] flex-col px-24 pb-24 sm:px-40 lg:hidden" style={{ "width": "var(--site-viewport-width, 100vw)" }}>
                  <div aria-hidden="true" className="h-[var(--site-home-banner-space,0px)] shrink-0"></div>
                  <HeroCanvasStatementHome />
                  <div data-page-reveal="3" className="flex shrink-0 flex-col items-center gap-14">
                    <ProofMetricsLineHome />
                    <ProofLogoStripHome />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block short-landscape:relative short-landscape:min-h-[480px]">
                  <HeroCanvasStatementHomeDesktop />
                  <ProofLogoStripHomeDesktop />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
