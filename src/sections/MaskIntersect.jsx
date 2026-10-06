// IA section(s): hero.mask-intersect (ia/ia.json, design-repo/sections/)
// mask-intersect — the section's real markup, read from the rendered page (route /, section 2).
export default function MaskIntersect() {
  return (
    <div className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }} data-clone-section="MaskIntersect">
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <section data-page-composition="true" data-home-intro="ready" className={"relative flex min-h-dvh w-full flex-col lg:h-dvh lg:overflow-hidden short-landscape:h-auto short-landscape:overflow-visible [&_[data-page-reveal='1']]:[--reveal-delay:var(--page-stagger-word,0.06s)] [&_[data-page-reveal='2']]:[--reveal-delay:calc((1+var(--page-heading-count,0))*var(--page-stagger-word,0.06s))] [&_[data-page-reveal='3']]:[--reveal-delay:calc((1+var(--page-heading-count,0)+var(--page-subtitle-count,0))*var(--page-stagger-word,0.06s))] data-[home-intro=pending]:[&_:is([data-page-reveal],[data-reveal-word],[data-reveal-item])]:[animation-delay:calc(6s+var(--item-delay,var(--reveal-delay,0s)))]"} style={{ "--home-test-max-w": "1800px", "--page-heading-count": "6", "--page-subtitle-count": "2" }}>
            <div className="relative mt-[74px] lg:mt-0 lg:h-full lg:overflow-hidden short-landscape:mt-80 short-landscape:h-auto short-landscape:overflow-visible">
              <div className="relative min-h-full lg:h-full short-landscape:h-auto short-landscape:min-h-[480px]">
                <div className="pointer-events-none absolute inset-x-0 -top-[74px] h-dvh overflow-hidden opacity-50 lg:inset-0 lg:h-full lg:opacity-100 short-landscape:-top-80 short-landscape:bottom-auto short-landscape:h-[560px]">
                  <div aria-hidden="true" className="absolute inset-0 h-full w-full max-lg:[mask-image:linear-gradient(to_bottom,black_calc(100%-min(28%,280px)),transparent)]">
                    <img src="/stills/bbd63372.png" alt="" className="pointer-events-auto block h-full w-full" style={{ "transition": "none", "opacity": "1" }} width={1440} height={900} />
                  </div>
                </div>
                <div className="pointer-events-none relative z-10 flex min-h-[calc(100dvh-74px)] flex-col px-24 pb-24 sm:px-40 lg:hidden" style={{ "width": "var(--site-viewport-width, 100vw)" }}>
                  <div aria-hidden="true" className="h-[var(--site-home-banner-space,0px)] shrink-0"></div>
                  <div className="flex flex-1 flex-col items-center justify-center gap-16 py-16">
                    <h1 data-page-reveal="1" className="pointer-events-auto w-full text-center font-[350] font-sans text-[2.4rem] text-text-primary leading-[1.05] tracking-[-0.02em] sm:text-[2.8rem]">
                      <span data-text-reveal="words">
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>The</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "1" }}>AI</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "2" }}>Partner</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "3" }}>for</span>
                        <br />
                        <span data-reveal-word="true" style={{ "--text-index": "4" }}>Investment</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "5" }}>Management</span>
                      </span>
                    </h1>
                    <p data-page-reveal="2" className="pointer-events-auto w-full max-w-[324px] text-balance text-center font-[350] font-sans text-[1.8rem] text-text-link leading-[calc(1.05*7/6)] tracking-[-0.015em]">
                      <span data-text-reveal="lines">
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>Building</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>the</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>future</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>with</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>the</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>{"world's"}</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>largest</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>wealth</span>
                        {" "}
                        <span data-reveal-word="true" style={{ "--text-index": "0" }}>firms.</span>
                      </span>
                    </p>
                  </div>
                  <div data-page-reveal="3" className="flex shrink-0 flex-col items-center gap-14">
                    <p data-reveal-item="true" className="text-balance text-center text-[#a7afac]/80 text-small">$10T+ in assets. 60K+ financial advisors.</p>
                    <div className="grid w-full grid-cols-[repeat(2,minmax(0,var(--logo-column)))] justify-center gap-x-28 opacity-80 md:grid-cols-[repeat(3,minmax(0,var(--logo-column)))]" style={{ "--logo-column": "152px" }}>
                      <div data-reveal-item="true" className="flex h-48 min-w-0 items-center justify-center" style={{ "--reveal-index": "1" }}>
                        <div style={{ "width": "68.4211%" }}>
                          <img alt="Edward Jones" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/84fe0c88bfbd0f6a259755ec279a39aab7b3c7e7-107x18__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-1.6%)" }} />
                        </div>
                      </div>
                      <div data-reveal-item="true" className="flex h-48 min-w-0 items-center justify-center" style={{ "--reveal-index": "2" }}>
                        <div style={{ "width": "84.2105%" }}>
                          <img alt="LPL Financial" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/0267a87663c0d64389c763ae369c01e115412eed-131x16__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-9.11%)" }} />
                        </div>
                      </div>
                      <div data-reveal-item="true" className="flex h-48 min-w-0 items-center justify-center" style={{ "--reveal-index": "3" }}>
                        <div style={{ "width": "78.9474%" }}>
                          <img alt="Hightower" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/072a42483575d6d25eeab2098209b56341191e55-114x21__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(0.98%)" }} />
                        </div>
                      </div>
                      <div data-reveal-item="true" className="flex h-48 min-w-0 items-center justify-center" style={{ "--reveal-index": "4" }}>
                        <div style={{ "width": "100%" }}>
                          <img alt="Creative Planning" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/6e0a205c1dce67a42c8d9c2bb4c7e4a82766e431-167x19__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(2.66%)" }} />
                        </div>
                      </div>
                      <div data-reveal-item="true" className="flex h-48 min-w-0 items-center justify-center" style={{ "--reveal-index": "5" }}>
                        <div style={{ "width": "47.3684%" }}>
                          <img alt="Altruist" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/c3b8b03f86989bd3b97ceda2adbe1bfa14148c9e-58x16__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-5.25%)" }} />
                        </div>
                      </div>
                      <div data-reveal-item="true" className="flex h-48 min-w-0 items-center justify-center" style={{ "--reveal-index": "6" }}>
                        <div style={{ "width": "58.5526%" }}>
                          <img alt="Ramp" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/28af6c52377bbbb4489aa32433e6a77c440947cd-74x21__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-1.07%)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block short-landscape:relative short-landscape:min-h-[480px]">
                  <div className="absolute inset-0 flex items-center justify-center px-32 xl:px-40">
                    <div className="items-baseline-last mx-auto flex w-full flex-row justify-between gap-64 xl:gap-80" style={{ "maxWidth": "1800px" }}>
                      <h1 data-page-reveal="1" className="whitespace-nowrap font-[350] font-sans text-[clamp(1.75rem,2.6vw,3.5rem)] text-text-primary leading-[1.05] tracking-[-0.02em]">
                        <span data-text-reveal="words">
                          <span data-reveal-word="true" style={{ "--text-index": "0" }}>The</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "1" }}>AI</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "2" }}>Partner</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "3" }}>for</span>
                          <br />
                          <span data-reveal-word="true" style={{ "--text-index": "4" }}>Investment</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "5" }}>Management</span>
                        </span>
                      </h1>
                      <p data-page-reveal="2" className="max-w-[324px] shrink-0 text-balance font-[350] font-sans text-[1.8rem] text-text-link leading-[calc(1.05*7/6)] tracking-[-0.015em] xl:text-[2rem]">
                        <span data-text-reveal="lines">
                          <span data-reveal-word="true" style={{ "--text-index": "0" }}>Building</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "0" }}>the</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "0" }}>future</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "0" }}>with</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "0" }}>the</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "1" }}>{"world's"}</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "1" }}>largest</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "1" }}>wealth</span>
                          {" "}
                          <span data-reveal-word="true" style={{ "--text-index": "1" }}>firms.</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div data-page-reveal="3" className="absolute inset-x-0 bottom-30 px-32 xl:px-40">
                    <div className="mx-auto flex w-full flex-row flex-wrap items-center justify-center gap-x-144 gap-y-18" style={{ "maxWidth": "1800px" }}>
                      <p data-reveal-item="true" className="shrink-0 text-balance text-center text-[#a7afac]/80 text-small">$10T+ in assets. 60K+ financial advisors.</p>
                      <div className="@container flex min-w-0 flex-1 items-center justify-between opacity-80" style={{ "flexBasis": "785px", "maxWidth": "1145px" }}>
                        <div data-reveal-item="true" className="flex h-32 shrink-0 items-center" style={{ "--reveal-index": "1", "width": "min(104px, 13.2484cqw)" }}>
                          <img alt="Edward Jones" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/84fe0c88bfbd0f6a259755ec279a39aab7b3c7e7-107x18__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-1.6%)" }} />
                        </div>
                        <div data-reveal-item="true" className="flex h-32 shrink-0 items-center" style={{ "--reveal-index": "2", "width": "min(128px, 16.3057cqw)" }}>
                          <img alt="LPL Financial" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/0267a87663c0d64389c763ae369c01e115412eed-131x16__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-9.11%)" }} />
                        </div>
                        <div data-reveal-item="true" className="flex h-32 shrink-0 items-center" style={{ "--reveal-index": "3", "width": "min(120px, 15.2866cqw)" }}>
                          <img alt="Hightower" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/072a42483575d6d25eeab2098209b56341191e55-114x21__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(0.98%)" }} />
                        </div>
                        <div data-reveal-item="true" className="flex h-32 shrink-0 items-center" style={{ "--reveal-index": "4", "width": "min(152px, 19.3631cqw)" }}>
                          <img alt="Creative Planning" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/6e0a205c1dce67a42c8d9c2bb4c7e4a82766e431-167x19__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(2.66%)" }} />
                        </div>
                        <div data-reveal-item="true" className="flex h-32 shrink-0 items-center" style={{ "--reveal-index": "5", "width": "min(72px, 9.17197cqw)" }}>
                          <img alt="Altruist" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/c3b8b03f86989bd3b97ceda2adbe1bfa14148c9e-58x16__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-5.25%)" }} />
                        </div>
                        <div data-reveal-item="true" className="flex h-32 shrink-0 items-center" style={{ "--reveal-index": "6", "width": "min(89px, 11.3376cqw)" }}>
                          <img alt="Ramp" className="h-auto max-h-28 min-w-0 max-w-full object-contain" src="/_ext/cdn.sanity.io/images/jsu06cwb/production/28af6c52377bbbb4489aa32433e6a77c440947cd-74x21__e4f09a51.svg" style={{ "width": "100%", "transform": "translateY(-1.07%)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
