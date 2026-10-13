// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/30f72628-dd96-4fb2-b998-ab310e90ad82
import A from "../lib/A.jsx";
import CareersJobHeaderJob30f72628 from "../sections/careers-job-header/Job30f72628.jsx";
import CareersJobDescriptionBlockJob30f726281 from "../sections/careers-job-description-block/Job30f726281.jsx";
import CareersJobDescriptionBlockJob30f726282 from "../sections/careers-job-description-block/Job30f726282.jsx";
import CareersJobDescriptionBlockJob30f726283 from "../sections/careers-job-description-block/Job30f726283.jsx";
import CareersJobDescriptionBlockJob30f726284 from "../sections/careers-job-description-block/Job30f726284.jsx";
import CareersJobDescriptionBlockJob30f726285 from "../sections/careers-job-description-block/Job30f726285.jsx";
import CareersJobDescriptionBlockJob30f726286 from "../sections/careers-job-description-block/Job30f726286.jsx";
import CareersApplyCtaJob30f72628 from "../sections/careers-apply-cta/Job30f72628.jsx";

export default function CareersDetailJob30f72628Body() {
  return (
    <div data-clone-section="CareersDetailJob30f72628Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob30f72628 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob30f726281 />
                    <CareersJobDescriptionBlockJob30f726282 />
                    <CareersJobDescriptionBlockJob30f726283 />
                    <CareersJobDescriptionBlockJob30f726284 />
                    <CareersJobDescriptionBlockJob30f726285 />
                    <CareersJobDescriptionBlockJob30f726286 />
                  </div>
                  <CareersApplyCtaJob30f72628 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
