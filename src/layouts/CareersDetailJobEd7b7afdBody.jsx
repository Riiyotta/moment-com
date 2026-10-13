// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/ed7b7afd-c6c1-4de5-a7b2-b504941c3da5
import A from "../lib/A.jsx";
import CareersJobHeaderJobEd7b7afd from "../sections/careers-job-header/JobEd7b7afd.jsx";
import CareersJobDescriptionBlockJobEd7b7afd1 from "../sections/careers-job-description-block/JobEd7b7afd1.jsx";
import CareersJobDescriptionBlockJobEd7b7afd2 from "../sections/careers-job-description-block/JobEd7b7afd2.jsx";
import CareersJobDescriptionBlockJobEd7b7afd3 from "../sections/careers-job-description-block/JobEd7b7afd3.jsx";
import CareersJobDescriptionBlockJobEd7b7afd4 from "../sections/careers-job-description-block/JobEd7b7afd4.jsx";
import CareersJobDescriptionBlockJobEd7b7afd5 from "../sections/careers-job-description-block/JobEd7b7afd5.jsx";
import CareersJobDescriptionBlockJobEd7b7afd6 from "../sections/careers-job-description-block/JobEd7b7afd6.jsx";
import CareersApplyCtaJobEd7b7afd from "../sections/careers-apply-cta/JobEd7b7afd.jsx";

export default function CareersDetailJobEd7b7afdBody() {
  return (
    <div data-clone-section="CareersDetailJobEd7b7afdBody" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJobEd7b7afd />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJobEd7b7afd1 />
                    <CareersJobDescriptionBlockJobEd7b7afd2 />
                    <CareersJobDescriptionBlockJobEd7b7afd3 />
                    <CareersJobDescriptionBlockJobEd7b7afd4 />
                    <CareersJobDescriptionBlockJobEd7b7afd5 />
                    <CareersJobDescriptionBlockJobEd7b7afd6 />
                  </div>
                  <CareersApplyCtaJobEd7b7afd />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
