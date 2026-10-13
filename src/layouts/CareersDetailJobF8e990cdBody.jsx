// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/f8e990cd-4517-47bb-93b0-3c5f1fddeb07
import A from "../lib/A.jsx";
import CareersJobHeaderJobF8e990cd from "../sections/careers-job-header/JobF8e990cd.jsx";
import CareersJobDescriptionBlockJobF8e990cd1 from "../sections/careers-job-description-block/JobF8e990cd1.jsx";
import CareersJobDescriptionBlockJobF8e990cd2 from "../sections/careers-job-description-block/JobF8e990cd2.jsx";
import CareersJobDescriptionBlockJobF8e990cd3 from "../sections/careers-job-description-block/JobF8e990cd3.jsx";
import CareersJobDescriptionBlockJobF8e990cd4 from "../sections/careers-job-description-block/JobF8e990cd4.jsx";
import CareersJobDescriptionBlockJobF8e990cd5 from "../sections/careers-job-description-block/JobF8e990cd5.jsx";
import CareersApplyCtaJobF8e990cd from "../sections/careers-apply-cta/JobF8e990cd.jsx";

export default function CareersDetailJobF8e990cdBody() {
  return (
    <div data-clone-section="CareersDetailJobF8e990cdBody" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJobF8e990cd />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJobF8e990cd1 />
                    <CareersJobDescriptionBlockJobF8e990cd2 />
                    <CareersJobDescriptionBlockJobF8e990cd3 />
                    <CareersJobDescriptionBlockJobF8e990cd4 />
                    <CareersJobDescriptionBlockJobF8e990cd5 />
                  </div>
                  <CareersApplyCtaJobF8e990cd />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
