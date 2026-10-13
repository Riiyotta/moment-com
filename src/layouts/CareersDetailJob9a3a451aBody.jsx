// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/9a3a451a-43bf-42cd-9c24-78e309c07104
import A from "../lib/A.jsx";
import CareersJobHeaderJob9a3a451a from "../sections/careers-job-header/Job9a3a451a.jsx";
import CareersJobDescriptionBlockJob9a3a451a1 from "../sections/careers-job-description-block/Job9a3a451a1.jsx";
import CareersJobDescriptionBlockJob9a3a451a2 from "../sections/careers-job-description-block/Job9a3a451a2.jsx";
import CareersJobDescriptionBlockJob9a3a451a3 from "../sections/careers-job-description-block/Job9a3a451a3.jsx";
import CareersJobDescriptionBlockJob9a3a451a4 from "../sections/careers-job-description-block/Job9a3a451a4.jsx";
import CareersJobDescriptionBlockJob9a3a451a5 from "../sections/careers-job-description-block/Job9a3a451a5.jsx";
import CareersJobDescriptionBlockJob9a3a451a6 from "../sections/careers-job-description-block/Job9a3a451a6.jsx";
import CareersJobDescriptionBlockJob9a3a451a7 from "../sections/careers-job-description-block/Job9a3a451a7.jsx";
import CareersApplyCtaJob9a3a451a from "../sections/careers-apply-cta/Job9a3a451a.jsx";

export default function CareersDetailJob9a3a451aBody() {
  return (
    <div data-clone-section="CareersDetailJob9a3a451aBody" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob9a3a451a />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob9a3a451a1 />
                    <CareersJobDescriptionBlockJob9a3a451a2 />
                    <CareersJobDescriptionBlockJob9a3a451a3 />
                    <CareersJobDescriptionBlockJob9a3a451a4 />
                    <CareersJobDescriptionBlockJob9a3a451a5 />
                    <CareersJobDescriptionBlockJob9a3a451a6 />
                    <CareersJobDescriptionBlockJob9a3a451a7 />
                  </div>
                  <CareersApplyCtaJob9a3a451a />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
