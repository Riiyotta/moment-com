// conversion.contact-dialog · design-repo/sections/conversion.contact-dialog.json
// The site-wide "Request a demo" modal, closed by default. The original page ids differ per page, so they are props.
export const CAREERS_IDS = {"portal": "_R_5plebtb_", "dialog": "_R_plebtb_", "title": "base-ui-_r_0_"};

export default function ConversionContactDialog({ ids = CAREERS_IDS }) {
  return (
    <div id={ids.portal} data-base-ui-portal="">
      <div data-closed="" role="presentation" hidden className="fixed inset-0 z-[200] bg-black/50 transition-opacity duration-350 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-250" style={{ "userSelect": "none" }}></div>
      <div data-closed="" role="presentation" hidden className="fixed inset-0 z-[200] flex items-start justify-center overflow-auto p-8 min-[800px]:p-16" style={{ "pointerEvents": "none" }}>
        <div data-closed="" id={ids.dialog} role="dialog" tabIndex="-1" data-base-ui-focusable="" hidden className="my-auto outline-none transition-opacity duration-350 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-250 motion-safe:transition-[opacity,scale] motion-safe:duration-350 motion-safe:data-[ending-style]:duration-250 motion-safe:data-[starting-style]:scale-[0.96] motion-safe:data-[ending-style]:scale-[0.96] w-full max-w-[554px]" aria-labelledby={ids.title} style={{ "--nested-dialogs": "0" }}>
          <h2 id={ids.title} className="m-0 sr-only">Request a demo</h2>
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
  );
}
