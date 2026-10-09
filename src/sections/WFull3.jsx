// IA section(s): content.section (ia/ia.json, design-repo/sections/)
// w-full — the section's real markup, read from the rendered page (route /memo, section 5).
export default function WFull3() {
  return (
    <section data-page-reveal="3" className="w-full px-16 py-32 min-[800px]:px-40 min-[1000px]:py-40" data-clone-section="WFull3">
      <div className="mx-auto w-full max-w-552">
        <div className="flex flex-col gap-y-20 min-[1000px]:gap-y-32">
          <header className="flex flex-col items-center gap-y-8 text-center text-text-primary min-[1000px]:gap-y-20">
            <p className="text-[2rem] leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">
              {"Part "}
              {"III."}
            </p>
            <h2 className="font-semibold text-[2rem] uppercase italic leading-[2.8rem] min-[1000px]:text-[2.4rem] min-[1000px]:leading-[3.2rem]">The Operating System</h2>
          </header>
          <div style={{ "textAlign": "start" }} className="text-pretty text-[#dde7e7] tracking-[0.012em] antialiased rich-text rich-text-memo" data-text-ready="">
            <p>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap", "textIndent": "-0.62712px" }}>To do real work safely, agents need an operating system.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.757974px", "textIndent": "-0.62712px" }}>They need a single source of truth for the data they query, the context required</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.616568px" }}>to interpret it, the controls that govern what they can see and do, and the audit</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-1.02765px" }}>
                {"trail that explains what happened "}
                <span className="[font-feature-settings:'case'_1]">—</span>
                {" with the ability for humans to safely monitor,"}
              </span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>review, and intervene as necessary.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>Perhaps surprisingly, this operating system reduces to just seven primitives:</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "2.89313px" }}>
                <strong>Data.</strong>
                {" The complete state of the world, normalized and tracked in real‑time."}
              </span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.16214px", "textIndent": "-0.746719px" }}>Accounts, households, positions, tax lots, security master, market data, trading</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.336551px" }}>venues, custodians, books and records, restrictions, transactions, and post‑trade</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>
                {"booking "}
                <span className="[font-feature-settings:'case'_1]">—</span>
                {" all integrated in one data model."}
              </span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="hyphen" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.64966px", "textIndent": "-0.535999px" }}>
                <strong>Context.</strong>
                {" The nuance required to interpret that data correctly. Account strate-"}
              </span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.46206px" }}>gies, sleeves, household relationships, advisor preferences, eligibility rules, tax</span>
              <span data-kp-line="" data-kp-break="hyphen" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.216709px" }}>assumptions, and the history that connects them. Plus the memory of every pre-</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>vious interaction with that client, portfolio, and account.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.148316px" }}>
                <strong>Engines.</strong>
                {" The compute that changes the state of the system. Order management,"}
              </span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.71603px", "textIndent": "-0.25984px" }}>execution management, portfolio accounting, portfolio optimization, pre‑trade</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "4.87104px", "textIndent": "-0.24976px" }}>compliance, post‑trade booking, allocation, scenario analysis, reconciliation,</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>reporting, and best execution.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.91303px", "textIndent": "-0.535999px" }}>
                <strong>Controls.</strong>
                {" The permissions that govern what each user and each agent can see"}
              </span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.265108px" }}>and do. Who can see what, who can do what, what requires approval, what must</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>be blocked, and what must be escalated.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.701847px", "textIndent": "-0.5896px" }}>
                <strong>Queries.</strong>
                {" The ability to ask any question across the data model and get an answer"}
              </span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>in seconds.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="hyphen" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.121599px", "textIndent": "-0.746719px" }}>
                <strong>Actions.</strong>
                {" The operations that change the state of the data model. Buy, sell, rebal-"}
              </span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>ance, allocate, approve, reject, route, cancel, book, report, explain.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.235065px", "textIndent": "-0.746719px" }}>
                <strong>Audit trail.</strong>
                {" A complete, queryable record of every action taken by every human"}
              </span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>and every agent, with the context, data, and reasoning behind it.</span>
            </p>
            <p>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "1.07932px" }}>
                {"Every workflow in investment management "}
                <span className="[font-feature-settings:'case'_1]">—</span>
                {" for every user, every asset class,"}
              </span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.274305px", "textIndent": "-0.25984px" }}>
                {"every currency "}
                <span className="[font-feature-settings:'case'_1]">—</span>
                {" reduces to a composition of these primitives. A UMA platform"}
              </span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "-0.310364px" }}>is a set of workflows. A fixed income platform is a set of workflows. A rebalancer,</span>
              <span data-kp-line="" data-kp-break="space" style={{ "display": "block", "whiteSpace": "nowrap", "wordSpacing": "0.17871px" }}>a reporting tool, a proposal tool, a reconciliation tool, a direct indexing platform</span>
              <span data-kp-line="" data-kp-break="end" style={{ "display": "block", "whiteSpace": "nowrap" }}>are all workflows built on top of the same core primitives.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
