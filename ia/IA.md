# https://moment.com/

Source: https://moment.com/ · website-builder crawl, 2026-10-06T08:16:10Z
Status: **measured-from-mirror** · production approved: **false**
16 routes · 5 templates · 17 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Careers detail, Home, Memo) account for 14 of 16 routes (88%). The remaining 2 routes span 2 templates.

| template | routes | share |
|---|---:|---:|
| Careers detail | 12 | 75% |
| Home | 1 | 6% |
| Memo | 1 | 6% |
| Careers index | 1 | 6% |
| Press release | 1 | 6% |

## Page chrome

**16 routes carry chrome = `partial`** — Home, Memo, Careers index, Press release, Careers detail.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `conversion.contact-dialog` | CONVERSION | 5 | 16 | `src/sections/conversion-contact-dialog/ConversionContactDialog.jsx` | Appears on all 16 routes. |
| `shell.header` | SHELL | 5 | 16 | `src/sections/shell-header/Careers.jsx` | Appears on all 16 routes. |
| `careers.apply-cta` | CAREERS | 1 | 12 | `src/sections/careers-apply-cta/Job1db991e4.jsx` | Appears on 12 routes. |
| `careers.job-description-block` | CAREERS | 1 | 12 | `src/sections/careers-job-description-block/Job1db991e41.jsx` | Appears on 12 routes. |
| `careers.job-header` | CAREERS | 1 | 12 | `src/sections/careers-job-header/Job1db991e4.jsx` | Appears on 12 routes. |
| `banner.announcement` | BANNER | 4 | 4 | `src/sections/banner-announcement/Careers.jsx` | Appears on 4 routes. |
| `careers.job-group` | CAREERS | 1 | 1 | `src/sections/careers-job-group/Careers1.jsx` | Appears on 1 routes. |
| `editorial.memo-part` | EDITORIAL | 1 | 1 | `src/sections/editorial-memo-part/Memo1.jsx` | Appears on 1 routes. |
| `editorial.memo-signoff` | EDITORIAL | 1 | 1 | `src/sections/editorial-memo-signoff/Memo.jsx` | Appears on 1 routes. |
| `editorial.press-meta` | EDITORIAL | 1 | 1 | `src/sections/editorial-press-meta/SeriesC.jsx` | Appears on 1 routes. |
| `editorial.prose` | EDITORIAL | 1 | 1 | `src/sections/editorial-prose/SeriesC1.jsx` | Appears on 1 routes. |
| `hero.canvas-statement` | HERO | 1 | 1 | `src/sections/hero-canvas-statement/Home.jsx` | Appears on 1 routes. |
| `hero.memo-masthead` | HERO | 1 | 1 | `src/sections/hero-memo-masthead/Memo.jsx` | Appears on 1 routes. |
| `hero.press-headline` | HERO | 1 | 1 | `src/sections/hero-press-headline/SeriesC.jsx` | Appears on 1 routes. |
| `hero.title-intro` | HERO | 1 | 1 | `src/sections/hero-title-intro/Careers.jsx` | Appears on 1 routes. |
| `proof.logo-strip` | PROOF | 1 | 1 | `src/sections/proof-logo-strip/Home.jsx` | Appears on 1 routes. |
| `proof.metrics-line` | PROOF | 1 | 1 | `src/sections/proof-metrics-line/Home.jsx` | Appears on 1 routes. |

**3 shared sections** appear in more than one template and belong in a component library.

**14 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Home — `template.home`

1 route · `/` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×5 |
| 2 | BANNER | `banner.announcement` | shared ×4 |
| 3 | HERO | `hero.canvas-statement` | page-local |
| 4 | PROOF | `proof.metrics-line` | page-local |
| 5 | PROOF | `proof.logo-strip` | page-local |
| 6 | CONVERSION | `conversion.contact-dialog` | shared ×5 |

### Memo — `template.memo`

1 route · `/memo` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×5 |
| 2 | BANNER | `banner.announcement` | shared ×4 |
| 3 | HERO | `hero.memo-masthead` | page-local |
| 4 | EDITORIAL | `editorial.memo-part` | page-local |
| 5 | EDITORIAL | `editorial.memo-part` | page-local |
| 6 | EDITORIAL | `editorial.memo-part` | page-local |
| 7 | EDITORIAL | `editorial.memo-part` | page-local |
| 8 | EDITORIAL | `editorial.memo-signoff` | page-local |
| 9 | CONVERSION | `conversion.contact-dialog` | shared ×5 |

### Careers index — `template.careers-index`

1 route · `/careers` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×5 |
| 2 | BANNER | `banner.announcement` | shared ×4 |
| 3 | HERO | `hero.title-intro` | page-local |
| 4 | CAREERS | `careers.job-group` | page-local |
| 5 | CAREERS | `careers.job-group` | page-local |
| 6 | CAREERS | `careers.job-group` | page-local |
| 7 | CAREERS | `careers.job-group` | page-local |
| 8 | CAREERS | `careers.job-group` | page-local |
| 9 | CONVERSION | `conversion.contact-dialog` | shared ×5 |

### Press release — `template.press-release`

1 route · `/series-c` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×5 |
| 2 | BANNER | `banner.announcement` | shared ×4 |
| 3 | HERO | `hero.press-headline` | page-local |
| 4 | EDITORIAL | `editorial.press-meta` | page-local |
| 5 | EDITORIAL | `editorial.prose` | page-local |
| 6 | EDITORIAL | `editorial.prose` | page-local |
| 7 | EDITORIAL | `editorial.prose` | page-local |
| 8 | EDITORIAL | `editorial.prose` | page-local |
| 9 | CONVERSION | `conversion.contact-dialog` | shared ×5 |

### Careers detail — `template.careers-detail`

12 routes · `/careers/f8e990cd-4517-47bb-93b0-3c5f1fddeb07`, `/careers/b13c29c2-fe72-4055-86c8-fa8efbae416f`, `/careers/9e9306c1-987b-4609-ad5e-8eaa92f16d44`, `/careers/f679da84-db6f-4a08-801b-dd63508d6310`, `/careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2`, `/careers/30f72628-dd96-4fb2-b998-ab310e90ad82`, `/careers/1db991e4-9480-4847-b300-c430cc057d56`, `/careers/5fb2d42b-9542-4d54-999d-b8f4e0ee9490`, `/careers/9a3a451a-43bf-42cd-9c24-78e309c07104`, `/careers/707c9117-1b1e-4260-96b3-28f735f7d840`, `/careers/752a96ec-5ad1-456e-a98d-6c64c6dfa256`, `/careers/ed7b7afd-c6c1-4de5-a7b2-b504941c3da5` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×5 |
| 2 | CAREERS | `careers.job-header` | page-local |
| 3 | CAREERS | `careers.job-description-block` | page-local |
| 4 | CAREERS | `careers.job-description-block` | page-local |
| 5 | CAREERS | `careers.job-description-block` | page-local |
| 6 | CAREERS | `careers.job-description-block` | page-local |
| 7 | CAREERS | `careers.job-description-block` | page-local |
| 8 | CAREERS | `careers.apply-cta` | page-local |
| 9 | CONVERSION | `conversion.contact-dialog` | shared ×5 |

## Section reference

### SHELL

_Site chrome: navigation, header and other elements carried across pages._

**`shell.header`** — Orients the visitor and provides the site-wide navigation (Memo, Careers, Contact) plus the market-status readout; fixed to the top of every page. One responsibility: site chrome. Typically 80px tall at 1440px wide.

· Appears on all 16 routes. · appears on 16 routes · implemented by `src/sections/shell-header/Careers.jsx`

### BANNER

_Announcement strips that route the visitor to news or other pages._

**`banner.announcement`** — Announces the $78M Series C and routes the visitor to the memo and the press release. One responsibility: announcement. Typically 68px tall at 1440px wide.

· Appears on 4 routes. · appears on 4 routes · implemented by `src/sections/banner-announcement/Careers.jsx`

### HERO

_Page-opening block: the main headline (h1) that names the page._

**`hero.canvas-statement`** — Opens the home page: a canvas-animated backdrop with the h1 value statement and one supporting line. One responsibility: page opener. Typically 900px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/hero-canvas-statement/Home.jsx`

**`hero.memo-masthead`** — Opens the memo: title, author and date over breakpoint-specific animated line-art sweeps. One responsibility: page opener. Typically 911px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/hero-memo-masthead/Memo.jsx`

**`hero.press-headline`** — Opens the Series C press release: the announcement headline and its standfirst. One responsibility: page opener. Typically 376px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/hero-press-headline/SeriesC.jsx`

**`hero.title-intro`** — Opens the careers index: the recruiting h1 and the company pitch paragraphs, over the graph-paper backdrop. One responsibility: page opener. Typically 900px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/hero-title-intro/Careers.jsx`

### PROOF

_Evidence of scale or credibility: metrics lines and customer logos._

**`proof.logo-strip`** — Shows the customer firms that build on the platform as a row/grid of third-party logos. One responsibility: customer proof. Typically 32px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/proof-logo-strip/Home.jsx`

**`proof.metrics-line`** — States the scale of the platform in one line (assets and advisors) directly above the customer logos. One responsibility: scale proof. Typically 20px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/proof-metrics-line/Home.jsx`

### EDITORIAL

_Long-form or press copy: memo parts, press-release prose._

**`editorial.memo-part`** — One numbered part of the memo: a 'Part N' eyebrow, a heading and the argument's paragraphs. One responsibility: argument. Typically 1116px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/editorial-memo-part/Memo1.jsx`

**`editorial.memo-signoff`** — Closes the memo with the company name, the memo title and the date between dashed rules. One responsibility: closing. Typically 770px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/editorial-memo-signoff/Memo.jsx`

**`editorial.press-meta`** — Gives the press release its dateline and a link to the external news coverage. One responsibility: press metadata. Typically 16px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/editorial-press-meta/SeriesC.jsx`

**`editorial.prose`** — One unit of press-release copy: an optional framed subheading followed by rich-text paragraphs. One responsibility: press copy. Typically 1133px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/editorial-prose/SeriesC1.jsx`

### CAREERS

_Recruiting: job listings and role pages._

**`careers.apply-cta`** — Closes a role page with the 'Interested in this role?' prompt and the Apply link. One responsibility: job conversion. Typically 97px tall at 1440px wide.

· Appears on 12 routes. · appears on 12 routes · implemented by `src/sections/careers-apply-cta/Job1db991e4.jsx`

**`careers.job-description-block`** — One headed block of a role description (mission, about, the role, requirements, compensation). One responsibility: job copy. Typically 556px tall at 1440px wide.

· Appears on 12 routes. · appears on 12 routes · implemented by `src/sections/careers-job-description-block/Job1db991e41.jsx`

**`careers.job-group`** — Lists the open roles of one department as numbered rows that link to the role pages. One responsibility: job listing. Typically 335px tall at 1440px wide.

· Appears on 1 routes. · appears on 1 routes · implemented by `src/sections/careers-job-group/Careers1.jsx`

**`careers.job-header`** — Identifies a role: breadcrumb, title, the team/location/work-mode/salary facts and the first Apply link. One responsibility: job identity. Typically 284px tall at 1440px wide.

· Appears on 12 routes. · appears on 12 routes · implemented by `src/sections/careers-job-header/Job1db991e4.jsx`

### CONVERSION

_Lead capture: the site-wide Request-a-demo dialog._

**`conversion.contact-dialog`** — The site-wide 'Request a demo' modal opened from the header's Contact action: a six-field lead form. One responsibility: lead capture.

· Appears on all 16 routes. · appears on 16 routes · implemented by `src/sections/conversion-contact-dialog/ConversionContactDialog.jsx`
