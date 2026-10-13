// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/5fb2d42b-9542-4d54-999d-b8f4e0ee9490
import A from "../lib/A.jsx";
import CareersJobHeaderJob5fb2d42b from "../sections/careers-job-header/Job5fb2d42b.jsx";
import CareersJobDescriptionBlockJob5fb2d42b1 from "../sections/careers-job-description-block/Job5fb2d42b1.jsx";
import CareersJobDescriptionBlockJob5fb2d42b2 from "../sections/careers-job-description-block/Job5fb2d42b2.jsx";
import CareersJobDescriptionBlockJob5fb2d42b3 from "../sections/careers-job-description-block/Job5fb2d42b3.jsx";
import CareersJobDescriptionBlockJob5fb2d42b4 from "../sections/careers-job-description-block/Job5fb2d42b4.jsx";
import CareersJobDescriptionBlockJob5fb2d42b5 from "../sections/careers-job-description-block/Job5fb2d42b5.jsx";
import CareersJobDescriptionBlockJob5fb2d42b6 from "../sections/careers-job-description-block/Job5fb2d42b6.jsx";
import CareersApplyCtaJob5fb2d42b from "../sections/careers-apply-cta/Job5fb2d42b.jsx";

export default function CareersDetailJob5fb2d42bBody() {
  return (
    <div data-clone-section="CareersDetailJob5fb2d42bBody" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob5fb2d42b />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob5fb2d42b1 />
                    <CareersJobDescriptionBlockJob5fb2d42b2 />
                    <CareersJobDescriptionBlockJob5fb2d42b3 />
                    <CareersJobDescriptionBlockJob5fb2d42b4 />
                    <CareersJobDescriptionBlockJob5fb2d42b5 />
                    <CareersJobDescriptionBlockJob5fb2d42b6 />
                  </div>
                  <CareersApplyCtaJob5fb2d42b />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
