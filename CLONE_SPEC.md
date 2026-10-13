# CLONE_SPEC — Moment · The AI Partner for Investment Management

Source: https://moment.com/ · stack guess: React+Next.js · 16 route(s), 5 template(s), 17 section type(s).
Measured from the rendered pages at 1440, 1280 and 390px wide. Colours are hex. Values are measurements; role names are inferred from usage.

## Colours

| Token | Hex | Uses | Mostly used as |
|---|---|---|---|
| `color.neutral.01` | `#fafbfb` | 2469 | text, border |
| `color.neutral.02` | `#ffffff` | 1590 | text, fill |
| `color.teal.01` | `#5a7b7d` | 562 | fill |
| `color.teal.02` | `#2f4041` | 496 | fill |
| `color.neutral.03` | `#f7f8f8` | 448 | text, border, fill |
| `color.teal.03` | `#a9bcbc` | 410 | text |
| `color.teal.04` | `#dde7e7` | 292 | text |
| `color.neutral.04` | `#000000` | 125 | fill |
| `color.teal.05` | `#466363` | 118 | text, fill, bg |
| `color.neutral.05` | `#333333` | 108 | border |
| `color.neutral.06` | `#111d1be6` | 83 | bg |
| `color.neutral.07` | `#eef3f3` | 68 | bg, text |
| `color.teal.06` | `#b5d5d7` | 66 | fill |
| `color.teal.07` | `#183335` | 44 | text, bg |
| `color.teal.08` | `#213d3e` | 36 | bg, border |
| `color.neutral.08` | `#111d1b` | 32 | bg |
| `color.neutral.09` | `#111d1bd9` | 16 | bg |
| `color.teal.09` | `#a9bcbc12` | 4 | bg |
| `color.neutral.10` | `#111d1b8c` | 4 | bg |
| `color.neutral.11` | `#a8afaccc` | 2 | text |
| `color.teal.10` | `#18333599` | 2 | bg |

Semantic roles:

- `surface.default` → `color.neutral.06` (#111d1be6): most-used opaque background (83 uses)
- `surface.alt` → `color.neutral.07` (#eef3f3): second most-used neutral background (40 uses)
- `surface.inverse` → `color.neutral.07` (#eef3f3): most-used background neutral, with opposite lightness to surface.default (40 uses)
- `surface.accent` → `color.teal.07` (#183335): most-used saturated background (4 uses)
- `text.primary` → `color.neutral.01` (#fafbfb): most-used text colour (2467 uses)
- `text.secondary` → `color.teal.03` (#a9bcbc): most-used neutral text colour with lower contrast than text.primary on surface.default (410 uses)
- `text.inverse` → `color.teal.05` (#466363): most-used text colour neutral, with opposite lightness to text.primary (104 uses)
- `text.accent` → `color.teal.07` (#183335): most-used saturated text/fill colour (40 uses)
- `border.default` → `color.neutral.05` (#333333): most-used border colour (108 uses)
- `accent.primary` → `color.teal.07` (#183335): most-used saturated colour overall (44 uses)

## Type roles

| Role | Family | Size | Line height | Weight | Inferred from |
|---|---|---|---|---|---|
| `typography.display` | twkLausanne | 40px | 48px | 350 | most-used style on display text (12 uses) |
| `typography.heading` | twkLausanne | 10px | 15px | 400 | most-used style on heading text (16 uses) |
| `typography.body` | twkLausanne | 16px | 26px | 350 | most-used style on body text (757 uses) |
| `typography.label` | twkLausanne | 14px | 20px | 350 | most-used style on label text (96 uses) |

## Radii

- `radius.4`: 4px (200 uses)
- `radius.1`: 1px (64 uses)
- `radius.3`: 3px (15 uses)
- `radius.2`: 2px (8 uses)

## Motion

- `duration.200ms`: 0.2s (1620 uses)
- `duration.300ms`: 0.3s (226 uses)
- `duration.650ms`: 0.65s (104 uses)
- `duration.150ms`: 0.15s (30 uses)
- `duration.350ms`: 0.35s (16 uses)
- `duration.400ms`: 0.4s (16 uses)
- `duration.NaNms`: auto (16 uses)
- `duration.1680ms`: 1.68s (14 uses)
- `easing.01`: ease (1722 uses)
- `easing.02`: cubic-bezier(0.4, 0, 0.2, 1) (158 uses)
- `easing.03`: linear (92 uses)
- `easing.04`: cubic-bezier(0.16, 1, 0.3, 1) (52 uses)
- `easing.05`: cubic-bezier(0.25, 0.1, 0.25, 1) (44 uses)
- `easing.06`: cubic-bezier(0.4, 0, 1, 1) (20 uses)

## Breakpoints (from the site's CSS)

- `breakpoint.360`: 360px
- `breakpoint.400`: 400px
- `breakpoint.500`: 500px
- `breakpoint.599`: 599px
- `breakpoint.600`: 600px
- `breakpoint.640`: 640px
- `breakpoint.800`: 800px
- `breakpoint.928`: 928px
- `breakpoint.1000`: 1000px
- `breakpoint.1200`: 1200px

## Layout

- `layout.contentWidth`: 1440px (most common width of a section's first child at a 1440px viewport (measured, not a max-width rule))
- `layout.gutter`: 444px (most common left offset of section content at 1440px)
- `layout.sectionPaddingTop`: {radius.1} (most common padding-top of a section)
- `layout.sectionPaddingBottom`: {radius.1} (most common padding-bottom of a section)
- `layout.gridGap`: {space.11} (most common column-gap of a grid/flex container inside a section)
- `layout.gridGap.content`: {space.8} (most common column-gap of a CONTENT section (differs from the sitewide mode))
- `layout.sectionPaddingTop.features`: {space.40} (most common padding-top of a FEATURES section (differs from the sitewide mode))
- `layout.sectionPaddingBottom.features`: {space.40} (most common padding-bottom of a FEATURES section (differs from the sitewide mode))
- `layout.gridGap.hero`: {space.24} (most common column-gap of a HERO section (differs from the sitewide mode))

## Sections

One entry per design-repo section (0.2.0 decomposition: each section is a single responsibility). Heights are measured at 1440x900 and 390x844 on the route named in each contract (`responsive.measuredOnRoute`). Per-section colour/typography is not repeated here: the colour, type, radius and layout tokens above are site-wide and the section contracts reference them.

### `banner.announcement` (BANNER)

- appears on 4 route(s), 4 instance(s); tag `<div>`, named "Announcement banner"
- purpose: Announces the $78M Series C and routes the visitor to the memo and the press release.
- height: 68px @1440 · 105px @390
- motion: css-transition
- content budget: body ≤1×7w, ctas ≤2×5w
- assets: none
- implemented by: `src/sections/banner-announcement/Careers.jsx` (+3 more)

### `careers.apply-cta` (CAREERS)

- appears on 12 route(s), 12 instance(s); tag `<div>`, named "Apply call to action"
- purpose: Closes a role page with the 'Interested in this role?' prompt and the Apply link.
- height: 97px @1440 · 97px @390
- motion: css-transition
- content budget: body ≤1×4w, ctas ≤1×4w
- assets: none
- implemented by: `src/sections/careers-apply-cta/Job1db991e4.jsx` (+11 more)

### `careers.job-description-block` (CAREERS)

- appears on 12 route(s), 76 instance(s); tag `<h2>`, named "Job description block"
- purpose: One headed block of a role description (mission, about, the role, requirements, compensation).
- height: 556px @1440 · 812px @390
- motion: none
- content budget: heading ≤8w, body ≤8×77w
- assets: none
- implemented by: `src/sections/careers-job-description-block/Job1db991e41.jsx` (+75 more)

### `careers.job-group` (CAREERS)

- appears on 1 route(s), 5 instance(s); tag `<div>`, named "Job group"
- purpose: Lists the open roles of one department as numbered rows that link to the role pages.
- height: 335px @1440 · 335px @390
- motion: css-transition
- content budget: heading ≤5w, items ≤6×6w
- assets: none
- implemented by: `src/sections/careers-job-group/Careers1.jsx` (+4 more)

### `careers.job-header` (CAREERS)

- appears on 12 route(s), 12 instance(s); tag `<div>`, named "Job header"
- purpose: Identifies a role: breadcrumb, title, the team/location/work-mode/salary facts and the first Apply link.
- height: 284px @1440 · 272px @390
- motion: css-animation, css-transition, scroll-linked
- content budget: heading ≤6w, subheading ≤5w, ctas ≤2×1w, items ≤4×2w
- assets: none
- implemented by: `src/sections/careers-job-header/Job1db991e4.jsx` (+11 more)

### `conversion.contact-dialog` (CONVERSION)

- appears on 16 route(s), 16 instance(s); tag `<div>`, named "Contact dialog"
- purpose: The site-wide 'Request a demo' modal opened from the header's Contact action: a six-field lead form.
- height: 0px @1440 · 0px @390 (closed modal overlay: takes no space in the page flow (position: fixed))
- motion: css-transition
- content budget: heading ≤3w, ctas ≤1×1w, items ≤6×6w
- assets: none
- implemented by: `src/sections/conversion-contact-dialog/ConversionContactDialog.jsx`

### `editorial.memo-part` (EDITORIAL)

- appears on 1 route(s), 4 instance(s); tag `<section>`, named "Memo part"
- purpose: One numbered part of the memo: a 'Part N' eyebrow, a heading and the argument's paragraphs.
- height: 1116px @1440 · 1268px @390
- motion: css-animation
- content budget: heading ≤4w, subheading ≤3w, body ≤11×70w
- assets: none
- implemented by: `src/sections/editorial-memo-part/Memo1.jsx` (+3 more)

### `editorial.memo-signoff` (EDITORIAL)

- appears on 1 route(s), 1 instance(s); tag `<section>`, named "Memo sign-off"
- purpose: Closes the memo with the company name, the memo title and the date between dashed rules.
- height: 770px @1440 · 718px @390
- motion: css-animation
- content budget: heading ≤1w, body ≤2×7w
- assets: none
- implemented by: `src/sections/editorial-memo-signoff/Memo.jsx`

### `editorial.press-meta` (EDITORIAL)

- appears on 1 route(s), 1 instance(s); tag `<div>`, named "Press dateline"
- purpose: Gives the press release its dateline and a link to the external news coverage.
- height: 16px @1440 · 40px @390
- motion: css-transition
- content budget: body ≤1×7w, ctas ≤1×2w
- assets: none
- implemented by: `src/sections/editorial-press-meta/SeriesC.jsx`

### `editorial.prose` (EDITORIAL)

- appears on 1 route(s), 4 instance(s); tag `<div>`, named "Press prose block"
- purpose: One unit of press-release copy: an optional framed subheading followed by rich-text paragraphs.
- height: 1133px @1440 · 1515px @390
- motion: none
- content budget: heading ≤9w, body ≤9×101w
- assets: none
- implemented by: `src/sections/editorial-prose/SeriesC1.jsx` (+3 more)

### `hero.canvas-statement` (HERO)

- appears on 1 route(s), 1 instance(s); tag `<div>`, named "Canvas statement hero"
- purpose: Opens the home page: a canvas-animated backdrop with the h1 value statement and one supporting line.
- height: 900px @1440 · 844px @390
- motion: canvas-animation, css-animation
- content budget: heading ≤6w, subheading ≤9w
- assets: none
- implemented by: `src/sections/hero-canvas-statement/Home.jsx`

### `hero.memo-masthead` (HERO)

- appears on 1 route(s), 1 instance(s); tag `<section>`, named "Memo masthead"
- purpose: Opens the memo: title, author and date over breakpoint-specific animated line-art sweeps.
- height: 911px @1440 · 706px @390
- motion: css-animation
- content budget: heading ≤7w, body ≤2×2w, images ≤2×Nonew
- assets: background
- implemented by: `src/sections/hero-memo-masthead/Memo.jsx`

### `hero.press-headline` (HERO)

- appears on 1 route(s), 1 instance(s); tag `<header>`, named "Press headline"
- purpose: Opens the Series C press release: the announcement headline and its standfirst.
- height: 376px @1440 · 224px @390
- motion: css-animation
- content budget: heading ≤17w, subheading ≤21w
- assets: none
- implemented by: `src/sections/hero-press-headline/SeriesC.jsx`

### `hero.title-intro` (HERO)

- appears on 1 route(s), 1 instance(s); tag `<div>`, named "Careers title and intro"
- purpose: Opens the careers index: the recruiting h1 and the company pitch paragraphs, over the graph-paper backdrop.
- height: 900px @1440 · 852px @390
- motion: css-animation
- content budget: heading ≤8w, body ≤5×52w
- assets: none
- implemented by: `src/sections/hero-title-intro/Careers.jsx`

### `proof.logo-strip` (PROOF)

- appears on 1 route(s), 1 instance(s); tag `<div>`, named "Customer logo strip"
- purpose: Shows the customer firms that build on the platform as a row/grid of third-party logos.
- height: 32px @1440 · 144px @390 (desktop 1440 height is that of the lg+ variant (lines 315-339): metrics line 20px, logo row 32px; the stacked variant is 0px (display: none) at that width)
- motion: css-animation
- content budget: images ≤6×Nonew
- assets: customer-logo
- implemented by: `src/sections/proof-logo-strip/Home.jsx`

### `proof.metrics-line` (PROOF)

- appears on 1 route(s), 1 instance(s); tag `<p>`, named "Metrics line"
- purpose: States the scale of the platform in one line (assets and advisors) directly above the customer logos.
- height: 20px @1440 · 20px @390 (desktop 1440 height is that of the lg+ variant (lines 315-339): metrics line 20px, logo row 32px; the stacked variant is 0px (display: none) at that width)
- motion: css-animation
- content budget: body ≤1×6w
- assets: none
- implemented by: `src/sections/proof-metrics-line/Home.jsx`

### `shell.header` (SHELL)

- appears on 16 route(s), 16 instance(s); tag `<header>`, named "Header"
- purpose: Orients the visitor and provides the site-wide navigation (Memo, Careers, Contact) plus the market-status readout; fixed to the top of every page.
- height: 80px @1440 · 74px @390
- motion: css-animation, css-transition
- content budget: body ≤2×3w, ctas ≤5×2w
- assets: none
- implemented by: `src/sections/shell-header/Careers.jsx` (+8 more)

## Routes

| Route | Template | Sections in order |
|---|---|---|
| `/` | `template.home` | `shell.header` → `banner.announcement` → `hero.canvas-statement` → `proof.metrics-line` → `proof.logo-strip` → `conversion.contact-dialog` |
| `/memo` | `template.memo` | `shell.header` → `banner.announcement` → `hero.memo-masthead` → `editorial.memo-part` → `editorial.memo-part` → `editorial.memo-part` → `editorial.memo-part` → `editorial.memo-signoff` → `conversion.contact-dialog` |
| `/careers` | `template.careers-index` | `shell.header` → `banner.announcement` → `hero.title-intro` → `careers.job-group` → `careers.job-group` → `careers.job-group` → `careers.job-group` → `careers.job-group` → `conversion.contact-dialog` |
| `/series-c` | `template.press-release` | `shell.header` → `banner.announcement` → `hero.press-headline` → `editorial.press-meta` → `editorial.prose` → `editorial.prose` → `editorial.prose` → `editorial.prose` → `conversion.contact-dialog` |
| `/careers/f8e990cd-4517-47bb-93b0-3c5f1fddeb07` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/b13c29c2-fe72-4055-86c8-fa8efbae416f` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/9e9306c1-987b-4609-ad5e-8eaa92f16d44` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/f679da84-db6f-4a08-801b-dd63508d6310` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/30f72628-dd96-4fb2-b998-ab310e90ad82` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/1db991e4-9480-4847-b300-c430cc057d56` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/5fb2d42b-9542-4d54-999d-b8f4e0ee9490` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/9a3a451a-43bf-42cd-9c24-78e309c07104` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/707c9117-1b1e-4260-96b3-28f735f7d840` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/752a96ec-5ad1-456e-a98d-6c64c6dfa256` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
| `/careers/ed7b7afd-c6c1-4de5-a7b2-b504941c3da5` | `template.careers-detail` | `shell.header` → `careers.job-header` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.job-description-block` → `careers.apply-cta` → `conversion.contact-dialog` |
