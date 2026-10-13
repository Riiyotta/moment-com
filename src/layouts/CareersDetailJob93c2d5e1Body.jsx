// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2
import A from "../lib/A.jsx";
import CareersJobHeaderJob93c2d5e1 from "../sections/careers-job-header/Job93c2d5e1.jsx";
import CareersJobDescriptionBlockJob93c2d5e11 from "../sections/careers-job-description-block/Job93c2d5e11.jsx";
import CareersJobDescriptionBlockJob93c2d5e12 from "../sections/careers-job-description-block/Job93c2d5e12.jsx";
import CareersJobDescriptionBlockJob93c2d5e13 from "../sections/careers-job-description-block/Job93c2d5e13.jsx";
import CareersJobDescriptionBlockJob93c2d5e14 from "../sections/careers-job-description-block/Job93c2d5e14.jsx";
import CareersJobDescriptionBlockJob93c2d5e15 from "../sections/careers-job-description-block/Job93c2d5e15.jsx";
import CareersJobDescriptionBlockJob93c2d5e16 from "../sections/careers-job-description-block/Job93c2d5e16.jsx";
import CareersApplyCtaJob93c2d5e1 from "../sections/careers-apply-cta/Job93c2d5e1.jsx";

export default function CareersDetailJob93c2d5e1Body() {
  return (
    <div data-clone-section="CareersDetailJob93c2d5e1Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob93c2d5e1 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob93c2d5e11 />
                    <CareersJobDescriptionBlockJob93c2d5e12 />
                    <CareersJobDescriptionBlockJob93c2d5e13 />
                    <CareersJobDescriptionBlockJob93c2d5e14 />
                    <CareersJobDescriptionBlockJob93c2d5e15 />
                    <CareersJobDescriptionBlockJob93c2d5e16 />
                  </div>
                  <CareersApplyCtaJob93c2d5e1 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
