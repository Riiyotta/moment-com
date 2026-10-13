// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/9e9306c1-987b-4609-ad5e-8eaa92f16d44
import A from "../lib/A.jsx";
import CareersJobHeaderJob9e9306c1 from "../sections/careers-job-header/Job9e9306c1.jsx";
import CareersJobDescriptionBlockJob9e9306c11 from "../sections/careers-job-description-block/Job9e9306c11.jsx";
import CareersJobDescriptionBlockJob9e9306c12 from "../sections/careers-job-description-block/Job9e9306c12.jsx";
import CareersJobDescriptionBlockJob9e9306c13 from "../sections/careers-job-description-block/Job9e9306c13.jsx";
import CareersJobDescriptionBlockJob9e9306c14 from "../sections/careers-job-description-block/Job9e9306c14.jsx";
import CareersJobDescriptionBlockJob9e9306c15 from "../sections/careers-job-description-block/Job9e9306c15.jsx";
import CareersJobDescriptionBlockJob9e9306c16 from "../sections/careers-job-description-block/Job9e9306c16.jsx";
import CareersApplyCtaJob9e9306c1 from "../sections/careers-apply-cta/Job9e9306c1.jsx";

export default function CareersDetailJob9e9306c1Body() {
  return (
    <div data-clone-section="CareersDetailJob9e9306c1Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob9e9306c1 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob9e9306c11 />
                    <CareersJobDescriptionBlockJob9e9306c12 />
                    <CareersJobDescriptionBlockJob9e9306c13 />
                    <CareersJobDescriptionBlockJob9e9306c14 />
                    <CareersJobDescriptionBlockJob9e9306c15 />
                    <CareersJobDescriptionBlockJob9e9306c16 />
                  </div>
                  <CareersApplyCtaJob9e9306c1 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
