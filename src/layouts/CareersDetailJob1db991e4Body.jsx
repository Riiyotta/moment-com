// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/1db991e4-9480-4847-b300-c430cc057d56
import A from "../lib/A.jsx";
import CareersJobHeaderJob1db991e4 from "../sections/careers-job-header/Job1db991e4.jsx";
import CareersJobDescriptionBlockJob1db991e41 from "../sections/careers-job-description-block/Job1db991e41.jsx";
import CareersJobDescriptionBlockJob1db991e42 from "../sections/careers-job-description-block/Job1db991e42.jsx";
import CareersJobDescriptionBlockJob1db991e43 from "../sections/careers-job-description-block/Job1db991e43.jsx";
import CareersJobDescriptionBlockJob1db991e44 from "../sections/careers-job-description-block/Job1db991e44.jsx";
import CareersJobDescriptionBlockJob1db991e45 from "../sections/careers-job-description-block/Job1db991e45.jsx";
import CareersJobDescriptionBlockJob1db991e46 from "../sections/careers-job-description-block/Job1db991e46.jsx";
import CareersApplyCtaJob1db991e4 from "../sections/careers-apply-cta/Job1db991e4.jsx";

export default function CareersDetailJob1db991e4Body() {
  return (
    <div data-clone-section="CareersDetailJob1db991e4Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob1db991e4 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob1db991e41 />
                    <CareersJobDescriptionBlockJob1db991e42 />
                    <CareersJobDescriptionBlockJob1db991e43 />
                    <CareersJobDescriptionBlockJob1db991e44 />
                    <CareersJobDescriptionBlockJob1db991e45 />
                    <CareersJobDescriptionBlockJob1db991e46 />
                  </div>
                  <CareersApplyCtaJob1db991e4 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
