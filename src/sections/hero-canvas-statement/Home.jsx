// hero.canvas-statement · Canvas statement hero — design-repo/sections/hero.canvas-statement.json

export default function HeroCanvasStatementHome() {
  return (
    <div data-clone-section="HeroCanvasStatementHome" className="flex flex-1 flex-col items-center justify-center gap-16 py-16">
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
  );
}

export function HeroCanvasStatementHomeBackdrop() {
  return (
    <div data-clone-section="HeroCanvasStatementHomeBackdrop" className="pointer-events-none absolute inset-x-0 -top-[74px] h-dvh overflow-hidden opacity-50 lg:inset-0 lg:h-full lg:opacity-100 short-landscape:-top-80 short-landscape:bottom-auto short-landscape:h-[560px]">
      <div aria-hidden="true" className="absolute inset-0 h-full w-full max-lg:[mask-image:linear-gradient(to_bottom,black_calc(100%-min(28%,280px)),transparent)]">
        <img src="/stills/bbd63372.png" alt="" className="pointer-events-auto block h-full w-full" style={{ "transition": "none", "opacity": "1" }} width={1440} height={900} />
      </div>
    </div>
  );
}

export function HeroCanvasStatementHomeDesktop() {
  return (
    <div data-clone-section="HeroCanvasStatementHomeDesktop" className="absolute inset-0 flex items-center justify-center px-32 xl:px-40">
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
  );
}
