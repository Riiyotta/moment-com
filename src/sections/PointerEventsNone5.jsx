// IA section(s): shell.header (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// pointer-events-none — the section's real markup, read from the rendered page (route /careers, section 0).
export default function PointerEventsNone5() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[74px] w-[var(--site-viewport-width,100vw)] lg:h-[80px]" style={{ "--home-test-header-h-mobile": "74px", "--home-test-header-h-desktop": "80px" }} data-clone-section="PointerEventsNone5">
      <div data-chrome-reveal="true" className="relative grid h-full w-full grid-cols-[auto_1fr_auto] items-center px-24 sm:px-40 md:grid-cols-[1fr_auto_1fr] lg:hidden">
        <button type="button" aria-label="Open menu" aria-expanded="false" className="focus-ring pointer-events-auto col-start-3 row-start-1 inline-flex size-40 items-center justify-center justify-self-end rounded-1 text-text-primary transition-colors md:col-start-1 md:justify-self-start bg-[rgba(17,29,27,0.9)] hover:bg-[rgba(24,51,53,0.6)]">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 7.5H20.25M3.75 12H20.25M3.75 16.5H20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <A aria-label="Moment home" className="focus-ring pointer-events-auto col-start-1 row-start-1 flex items-center justify-self-start text-text-primary-green md:col-start-2 md:justify-self-center" href="/">
          <svg aria-hidden="true" className="h-15 w-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3609 5.17862L25.954 0.0869546L23.0723 9.22551C22.9442 9.63262 22.6532 9.96736 22.2697 10.1526L11.2171 15.4652C10.7652 15.6822 10.2729 15.2549 10.4242 14.7764L11.5928 11.0719C11.7325 10.6282 11.2758 10.2307 10.8567 10.4323L0.261719 15.5221L3.14339 6.38352C3.27153 5.97642 3.56249 5.64167 3.94594 5.45645L14.9986 0.143874C15.4505 -0.0731821 15.9428 0.354179 15.7915 0.832668L14.6229 4.53709C14.4832 4.98085 14.9398 5.37831 15.3589 5.17669L15.3609 5.17862Z" fill="currentColor" />
          </svg>
        </A>
        <div className="pointer-events-auto col-start-3 row-start-1 hidden justify-self-end md:flex">
          <div className="inline-flex items-center gap-[11px] text-small text-text-link leading-none">
            <span aria-hidden="true" className="relative inline-block size-4 shrink-0 align-middle" style={{ "transform": "translateY(-1.5px)" }}>
              <span className="absolute inset-0 rounded-full" style={{ "backgroundColor": "#213D3E" }}></span>
            </span>
            <span className="whitespace-nowrap">
              Market closed
              {" "}
              <span aria-hidden="true" className="[font-feature-settings:'case']">·</span>
              {" "}
              <span className="tabular-nums">4:17 AM ET</span>
            </span>
          </div>
        </div>
      </div>
      <div data-chrome-reveal="true" className="relative hidden h-full w-full px-32 pb-[5px] lg:block xl:px-40">
        <div className="mx-auto grid h-full w-full grid-cols-[1fr_auto_1fr] items-center" style={{ "maxWidth": "var(--home-test-max-w, 1800px)" }}>
          <div className="pointer-events-auto -ml-12 justify-self-start">
            <nav className="flex items-center gap-8" aria-label="Primary">
              <A className="focus-ring relative flex items-center rounded-[4px] bg-transparent text-small text-text-link whitespace-nowrap transition-[color,background-color] duration-200 hover:text-text-link-hover focus-visible:bg-surface-link-hover focus-visible:text-text-link-hover px-12 pt-[5.5px] pb-[2.5px] hover:bg-[rgba(24,51,53,0.6)]" href="/memo">Memo</A>
              <A className="focus-ring relative flex items-center rounded-[4px] text-small whitespace-nowrap transition-[color,background-color] duration-200 hover:text-text-link-hover focus-visible:bg-surface-link-hover focus-visible:text-text-link-hover px-12 pt-[5.5px] pb-[2.5px] hover:bg-[rgba(24,51,53,0.6)] bg-surface-link-hover text-text-link-hover" href="/careers">Careers</A>
              <button type="button" className="focus-ring relative flex items-center rounded-[4px] bg-transparent text-small text-text-link whitespace-nowrap transition-[color,background-color] duration-200 hover:text-text-link-hover focus-visible:bg-surface-link-hover focus-visible:text-text-link-hover px-12 pt-[5.5px] pb-[2.5px] hover:bg-[rgba(24,51,53,0.6)]">Contact</button>
            </nav>
          </div>
          <A aria-label="Moment home" className="focus-ring pointer-events-auto flex items-center text-text-primary-green" href="/">
            <svg aria-hidden="true" className="h-15 w-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3609 5.17862L25.954 0.0869546L23.0723 9.22551C22.9442 9.63262 22.6532 9.96736 22.2697 10.1526L11.2171 15.4652C10.7652 15.6822 10.2729 15.2549 10.4242 14.7764L11.5928 11.0719C11.7325 10.6282 11.2758 10.2307 10.8567 10.4323L0.261719 15.5221L3.14339 6.38352C3.27153 5.97642 3.56249 5.64167 3.94594 5.45645L14.9986 0.143874C15.4505 -0.0731821 15.9428 0.354179 15.7915 0.832668L14.6229 4.53709C14.4832 4.98085 14.9398 5.37831 15.3589 5.17669L15.3609 5.17862Z" fill="currentColor" />
            </svg>
          </A>
          <div className="pointer-events-auto justify-self-end pt-[5.5px] pb-[2.5px]">
            <div className="inline-flex items-center gap-[11px] text-small text-text-link leading-none">
              <span aria-hidden="true" className="relative inline-block size-4 shrink-0 align-middle" style={{ "transform": "translateY(-1.5px)" }}>
                <span className="absolute inset-0 rounded-full" style={{ "backgroundColor": "#213D3E" }}></span>
              </span>
              <span className="whitespace-nowrap">
                Market closed
                {" "}
                <span aria-hidden="true" className="[font-feature-settings:'case']">·</span>
                {" "}
                <span className="tabular-nums">4:17 AM ET</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
