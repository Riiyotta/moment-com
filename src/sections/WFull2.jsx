// IA section(s): content.section (ia/ia.json, design-repo/sections/)
// w-full — the section's real markup, read from the rendered page (route /memo, section 4).
export default function WFull2() {
  return (
    <section data-page-reveal="3" className="w-full px-16 py-32 min-[800px]:px-40 min-[1000px]:py-40" data-clone-section="WFull2">
      <div className="mx-auto w-full max-w-552">
        <div className="flex flex-col gap-y-20 min-[1000px]:gap-y-32">
          <header className="flex flex-col items-center gap-y-8 text-center text-text-primary min-[1000px]:gap-y-20">
            <p className="text-[2rem] leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">
              {"Part "}
              II
              .
            </p>
            <h2 className="font-semibold text-[2rem] uppercase italic leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">Patches</h2>
          </header>
          <div style={{ "textAlign": "start" }} className="text-pretty text-[#dde7e7] tracking-[0.012em] antialiased rich-text rich-text-memo" data-text-ready="">
            <p>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>Investment management software was not designed. It accumulated.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.171222px", "textIndent": "-0.5896px" }}>Over the last 40 years, each layer of investment management tools patched a gap</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.265508px" }}>left exposed by the layer before it. Every workflow became a category of software</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>vendors, each with a handcrafted tool built to patch that one specific workflow.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.264678px" }}>Fixed income platforms patched the inability of trading systems to handle bonds.</span>
              <span data-kp-line="" data-kp-break="hyphen" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "2.77783px" }}>Rebalancers patched the inability of advisor workstations to optimize portfo-</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.206452px" }}>lios. UMA platforms patched the inability of rebalancers to coordinate accounts,</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.681124px" }}>sleeves, and managers. Direct indexing platforms patched the inability of UMA</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>platforms to tax optimize. Spreadsheets patched everything else.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.09261px" }}>Eventually it became easy to confuse this patchwork for a system. But it is not</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.278894px" }}>a system. A system is something whose parts are designed to work together as a</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.678488px" }}>unified whole. The current stack is a patchwork of tools, each designed for one</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>specific workflow, stitched together after the fact by the person using them.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.41626px", "textIndent": "-0.62712px" }}>The real system was the people who learned which tool could be trusted for a</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.284548px" }}>given piece of data, which information needed to be copied over from one tool to</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.78804px" }}>another, which report needed to be adjusted to capture holdings the tool didn’t</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.36538px" }}>support, which approval happened outside the tool, which exception mattered,</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.84586px" }}>and which spreadsheets in which shared folders filled the inevitable gaps left</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>by all of the tools.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
