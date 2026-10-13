// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/752a96ec-5ad1-456e-a98d-6c64c6dfa256
import A from "../lib/A.jsx";
import CareersJobHeaderJob752a96ec from "../sections/careers-job-header/Job752a96ec.jsx";
import CareersJobDescriptionBlockJob752a96ec1 from "../sections/careers-job-description-block/Job752a96ec1.jsx";
import CareersJobDescriptionBlockJob752a96ec2 from "../sections/careers-job-description-block/Job752a96ec2.jsx";
import CareersJobDescriptionBlockJob752a96ec3 from "../sections/careers-job-description-block/Job752a96ec3.jsx";
import CareersJobDescriptionBlockJob752a96ec4 from "../sections/careers-job-description-block/Job752a96ec4.jsx";
import CareersJobDescriptionBlockJob752a96ec5 from "../sections/careers-job-description-block/Job752a96ec5.jsx";
import CareersJobDescriptionBlockJob752a96ec6 from "../sections/careers-job-description-block/Job752a96ec6.jsx";
import CareersJobDescriptionBlockJob752a96ec7 from "../sections/careers-job-description-block/Job752a96ec7.jsx";
import CareersApplyCtaJob752a96ec from "../sections/careers-apply-cta/Job752a96ec.jsx";

export default function CareersDetailJob752a96ecBody() {
  return (
    <div data-clone-section="CareersDetailJob752a96ecBody" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJob752a96ec />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJob752a96ec1 />
                    <CareersJobDescriptionBlockJob752a96ec2 />
                    <CareersJobDescriptionBlockJob752a96ec3 />
                    <CareersJobDescriptionBlockJob752a96ec4 />
                    <CareersJobDescriptionBlockJob752a96ec5 />
                    <CareersJobDescriptionBlockJob752a96ec6 />
                    <CareersJobDescriptionBlockJob752a96ec7 />
                  </div>
                  <CareersApplyCtaJob752a96ec />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
