// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/707c9117-1b1e-4260-96b3-28f735f7d840
import A from "../lib/A.jsx";
import CareersJobHeaderJob707c9117 from "../sections/careers-job-header/Job707c9117.jsx";
import CareersJobDescriptionBlockJob707c91171 from "../sections/careers-job-description-block/Job707c91171.jsx";
import CareersJobDescriptionBlockJob707c91172 from "../sections/careers-job-description-block/Job707c91172.jsx";
import CareersJobDescriptionBlockJob707c91173 from "../sections/careers-job-description-block/Job707c91173.jsx";
import CareersJobDescriptionBlockJob707c91174 from "../sections/careers-job-description-block/Job707c91174.jsx";
import CareersJobDescriptionBlockJob707c91175 from "../sections/careers-job-description-block/Job707c91175.jsx";
import CareersJobDescriptionBlockJob707c91176 from "../sections/careers-job-description-block/Job707c91176.jsx";
import CareersJobDescriptionBlockJob707c91177 from "../sections/careers-job-description-block/Job707c91177.jsx";
import CareersApplyCtaJob707c9117 from "../sections/careers-apply-cta/Job707c9117.jsx";

export default function CareersDetailJob707c9117Body() {
  return (
    <div data-clone-section="CareersDetailJob707c9117Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob707c9117 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob707c91171 />
                    <CareersJobDescriptionBlockJob707c91172 />
                    <CareersJobDescriptionBlockJob707c91173 />
                    <CareersJobDescriptionBlockJob707c91174 />
                    <CareersJobDescriptionBlockJob707c91175 />
                    <CareersJobDescriptionBlockJob707c91176 />
                    <CareersJobDescriptionBlockJob707c91177 />
                  </div>
                  <CareersApplyCtaJob707c9117 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
