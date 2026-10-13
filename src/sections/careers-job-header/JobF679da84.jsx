import A from "../../lib/A.jsx";

// careers.job-header · Job header — design-repo/sections/careers.job-header.json

export default function CareersJobHeaderJobF679da84() {
  return (
    <div data-clone-section="CareersJobHeaderJobF679da84" className="flex min-w-0 flex-col gap-24 min-[1000px]:sticky min-[1000px]:top-[190px] min-[1000px]:w-1/2">
      <div className="flex flex-col gap-20">
        <p className="text-micro-mono text-text-paragraph uppercase">
          <A className="focus-ring hover:text-text-primary-green" href="/careers">Careers</A>
          {" "}
          {"/ "}
          Security
        </p>
        <h1 data-page-reveal="1" className="title-3 text-text-primary-green">{"Head of Security "}</h1>
      </div>
      <dl data-page-reveal="2" className="flex flex-col gap-8">
        <div className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-16 text-regular">
          <dt className="text-text-secondary">Team</dt>
          <dd className="text-text-paragraph-dark-gray [overflow-wrap:anywhere]">Security</dd>
        </div>
        <div className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-16 text-regular">
          <dt className="text-text-secondary">Location</dt>
          <dd className="text-text-paragraph-dark-gray [overflow-wrap:anywhere]">New York</dd>
        </div>
        <div className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-16 text-regular">
          <dt className="text-text-secondary">Work mode</dt>
          <dd className="text-text-paragraph-dark-gray [overflow-wrap:anywhere]">In-person</dd>
        </div>
        <div className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-16 text-regular">
          <dt className="text-text-secondary">Base salary</dt>
          <dd className="text-text-paragraph-dark-gray [overflow-wrap:anywhere]">$275K – $325K</dd>
        </div>
      </dl>
      <div>
        <a className="focus-ring inline-flex items-center justify-center gap-8 h-32 rounded-4 px-12 pt-[5px] pb-[4px] text-[1.4rem] leading-[2rem] tracking-[-0.14px] transition-colors duration-200 bg-surface-button-primary border border-border-button-primary text-text-button-primary hover:bg-surface-button-primary-hover hover:border-border-button-primary-hover hover:text-text-button-primary-hover cursor-pointer" title="Apply" target="_blank" rel="noopener noreferrer">Apply</a>
      </div>
    </div>
  );
}
