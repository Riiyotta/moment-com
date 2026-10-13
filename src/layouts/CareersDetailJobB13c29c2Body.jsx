// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/b13c29c2-fe72-4055-86c8-fa8efbae416f
import A from "../lib/A.jsx";
import CareersJobHeaderJobB13c29c2 from "../sections/careers-job-header/JobB13c29c2.jsx";
import CareersJobDescriptionBlockJobB13c29c21 from "../sections/careers-job-description-block/JobB13c29c21.jsx";
import CareersJobDescriptionBlockJobB13c29c22 from "../sections/careers-job-description-block/JobB13c29c22.jsx";
import CareersJobDescriptionBlockJobB13c29c23 from "../sections/careers-job-description-block/JobB13c29c23.jsx";
import CareersJobDescriptionBlockJobB13c29c24 from "../sections/careers-job-description-block/JobB13c29c24.jsx";
import CareersJobDescriptionBlockJobB13c29c25 from "../sections/careers-job-description-block/JobB13c29c25.jsx";
import CareersJobDescriptionBlockJobB13c29c26 from "../sections/careers-job-description-block/JobB13c29c26.jsx";
import CareersApplyCtaJobB13c29c2 from "../sections/careers-apply-cta/JobB13c29c2.jsx";

export default function CareersDetailJobB13c29c2Body() {
  return (
    <div data-clone-section="CareersDetailJobB13c29c2Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJobB13c29c2 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJobB13c29c21 />
                    <CareersJobDescriptionBlockJobB13c29c22 />
                    <CareersJobDescriptionBlockJobB13c29c23 />
                    <CareersJobDescriptionBlockJobB13c29c24 />
                    <CareersJobDescriptionBlockJobB13c29c25 />
                    <CareersJobDescriptionBlockJobB13c29c26 />
                  </div>
                  <CareersApplyCtaJobB13c29c2 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
