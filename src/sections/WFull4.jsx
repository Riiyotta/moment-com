// IA section(s): features.section (ia/ia.json, design-repo/sections/)
// w-full — the section's real markup, read from the rendered page (route /memo, section 6).
export default function WFull4() {
  return (
    <section data-page-reveal="3" className="w-full px-16 py-32 min-[800px]:px-40 min-[1000px]:py-40" data-clone-section="WFull4">
      <div className="mx-auto w-full max-w-552">
        <div className="flex flex-col gap-y-20 min-[1000px]:gap-y-32">
          <header className="flex flex-col items-center gap-y-8 text-center text-text-primary min-[1000px]:gap-y-20">
            <p className="text-[2rem] leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">
              {"Part "}
              IV
              .
            </p>
            <h2 className="font-semibold text-[2rem] uppercase italic leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">The End of Tools</h2>
          </header>
          <div style={{ "textAlign": "start" }} className="text-pretty text-[#dde7e7] tracking-[0.012em] antialiased rich-text rich-text-memo" data-text-ready="">
            <p>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.801409px" }}>For 40 years, investment management software has meant one tool per workflow.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.201727px", "textIndent": "-0.5896px" }}>One tool for buying a bond. One tool for buying an individual stock. One tool for</span>
              <span data-kp-line="" data-kp-break="hyphen" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.316413px" }}>rebalancing a portfolio. One tool for generating proposals. One tool for conduct-</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>ing tax‑transition analyses. One tool for explaining what happened. And so on.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.656775px", "textIndent": "-0.62712px" }}>These tools were the only way to deliver this work in the era they were built. That</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.100764px", "textIndent": "-0.25984px" }}>era assumed software was hard, integrations were brittle, and humans would sit</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>between the tools and make them work together.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="hyphen" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.152311px", "textIndent": "-0.62712px" }}>That era is now over, and the largest financial institutions in the world are build-</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>ing the future with us.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
