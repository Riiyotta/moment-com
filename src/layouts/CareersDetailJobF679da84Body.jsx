// page body shell (wrappers and layout only; sections live in src/sections/) · /careers/f679da84-db6f-4a08-801b-dd63508d6310
import A from "../lib/A.jsx";
import CareersJobHeaderJobF679da84 from "../sections/careers-job-header/JobF679da84.jsx";
import CareersJobDescriptionBlockJobF679da841 from "../sections/careers-job-description-block/JobF679da841.jsx";
import CareersJobDescriptionBlockJobF679da842 from "../sections/careers-job-description-block/JobF679da842.jsx";
import CareersJobDescriptionBlockJobF679da843 from "../sections/careers-job-description-block/JobF679da843.jsx";
import CareersJobDescriptionBlockJobF679da844 from "../sections/careers-job-description-block/JobF679da844.jsx";
import CareersJobDescriptionBlockJobF679da845 from "../sections/careers-job-description-block/JobF679da845.jsx";
import CareersJobDescriptionBlockJobF679da846 from "../sections/careers-job-description-block/JobF679da846.jsx";
import CareersJobDescriptionBlockJobF679da847 from "../sections/careers-job-description-block/JobF679da847.jsx";
import CareersJobDescriptionBlockJobF679da848 from "../sections/careers-job-description-block/JobF679da848.jsx";
import CareersApplyCtaJobF679da84 from "../sections/careers-apply-cta/JobF679da84.jsx";

export default function CareersDetailJobF679da84Body() {
  return (
    <div data-clone-section="CareersDetailJobF679da84Body" className={"[--edge-feather:24px] [--edge-header:var(--edge-mobile-header,74px)] [--edge-side:16px] lg:[--edge-header:80px] lg:[--edge-side:32px] xl:[--edge-side:40px] mask-intersect mask-no-repeat [mask-image:linear-gradient(to_bottom,black_calc(100%-var(--edge-feather)),transparent),linear-gradient(to_right,transparent,black_var(--edge-side),black_calc(100%-var(--edge-side)),transparent)] [&_:is(a,button,input,select,textarea,[tabindex],[id])]:scroll-mt-[calc(var(--edge-header)+var(--edge-feather))]"} style={{ "--edge-mobile-header": "74px" }}>
      <div data-page-transition="settled">
        <div data-page-surface="true" data-page-composition="true">
          <div className="pb-[140px]">
            <section className="w-full px-16 pt-[140px] pb-[50px] min-[800px]:px-40 min-[1000px]:pt-[190px] min-[800px]:pt-[160px]">
              <div className="mx-auto flex max-w-1130 flex-col gap-40 min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-24" style={{ "--header-offset": "108px" }}>
                <CareersJobHeaderJobF679da84 />
                <div data-page-reveal="3" className="min-w-0 pb-64 min-[1000px]:w-1/2 min-[1000px]:pt-[var(--header-offset)] min-[1200px]:pb-80">
                  <div style={{ "textAlign": "start" }} className="text-pretty rich-text" data-text-ready="">
                    <CareersJobDescriptionBlockJobF679da841 />
                    <CareersJobDescriptionBlockJobF679da842 />
                    <CareersJobDescriptionBlockJobF679da843 />
                    <CareersJobDescriptionBlockJobF679da844 />
                    <CareersJobDescriptionBlockJobF679da845 />
                    <CareersJobDescriptionBlockJobF679da846 />
                    <CareersJobDescriptionBlockJobF679da847 />
                    <CareersJobDescriptionBlockJobF679da848 />
                  </div>
                  <CareersApplyCtaJobF679da84 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
