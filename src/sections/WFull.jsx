// IA section(s): content.section (ia/ia.json, design-repo/sections/)
// w-full — the section's real markup, read from the rendered page (route /memo, section 3).
export default function WFull() {
  return (
    <section data-page-reveal="3" className="w-full px-16 py-32 min-[800px]:px-40 min-[1000px]:py-40" data-clone-section="WFull">
      <div className="mx-auto w-full max-w-552">
        <div className="flex flex-col gap-y-20 min-[1000px]:gap-y-32">
          <header className="flex flex-col items-center gap-y-8 text-center text-text-primary min-[1000px]:gap-y-20">
            <p className="text-[2rem] leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">
              {"Part "}
              I
              .
            </p>
            <h2 className="font-semibold text-[2rem] uppercase italic leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">Agents</h2>
          </header>
          <div style={{ "textAlign": "start" }} className="text-pretty text-[#dde7e7] tracking-[0.012em] antialiased rich-text rich-text-memo" data-text-ready="">
            <p>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap", "textIndent": "-0.746719px" }}>Agents are coming to investment management.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.41189px", "textIndent": "-0.746719px" }}>Agents can already build personalized portfolios, rebalance accounts, generate</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "2.10406px" }}>proposals, check restrictions against client IPSs, compare client notes to cash</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.78537px" }}>redemption requests, propose client‑specific trade ideas, find ways to improve</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-1.37556px" }}>trade execution quality, monitor portfolios against a client’s financial plan, resolve</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.361066px" }}>reconciliation failures, investigate operational breaks, and generate personalized</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.836712px" }}>reports with commentary commingling the firm’s perspective with client‑specific</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>needs.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-1.19111px", "textIndent": "-0.62712px" }}>They can do this proactively, continuously, and at the scale of every account, every</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>position, and every trade for the world’s largest financial institutions.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>But agents cannot do any of this on today’s investment management software.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
