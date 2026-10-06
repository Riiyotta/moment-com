# https://moment.com/

Source: https://moment.com/ · website-builder crawl, 2026-10-06T08:16:10Z
Status: **measured-from-mirror** · production approved: **false**
16 routes · 3 templates · 5 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Careers pages, Group, Memo) account for 16 of 16 routes (100%). The remaining 0 routes span 0 templates.

| template | routes | share |
|---|---:|---:|
| Careers pages | 12 | 75% |
| Group | 3 | 19% |
| Memo | 1 | 6% |

## Page chrome

**16 routes carry chrome = `partial`** — Group, Memo, Careers pages.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.header` | SHELL | 3 | 16 | `src/sections/PointerEventsNone10.jsx` | Appears on all 16 routes. |
| `hero.mask-intersect` | HERO | 2 | 15 | `src/sections/MaskIntersect.jsx` | Appears on 15 routes. |
| `content.block` | CONTENT | 2 | 4 | `src/sections/PointerEventsNone2.jsx` | Appears on 4 routes. |
| `content.section` | CONTENT | 1 | 1 | `src/sections/Section.jsx` | Appears on 1 route. |
| `features.section` | FEATURES | 1 | 1 | `src/sections/WFull4.jsx` | Appears on 1 route. |

**3 shared sections** appear in more than one template and belong in a component library.

**2 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Group — `template.group`

3 routes · `/`, `/careers`, `/series-c` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×3 |
| 2 | CONTENT | `content.block` | shared ×2 |
| 3 | HERO | `hero.mask-intersect` | shared ×2 |

### Memo — `template.memo`

1 route · `/memo` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×3 |
| 2 | CONTENT | `content.block` | shared ×2 |
| 3 | CONTENT | `content.section` | page-local |
| 4 | CONTENT | `content.section` | page-local |
| 5 | CONTENT | `content.section` | page-local |
| 6 | CONTENT | `content.section` | page-local |
| 7 | FEATURES | `features.section` | page-local |
| 8 | CONTENT | `content.section` | page-local |

### Careers pages — `template.careers`

12 routes · `/careers/f8e990cd-4517-47bb-93b0-3c5f1fddeb07`, `/careers/b13c29c2-fe72-4055-86c8-fa8efbae416f`, `/careers/9e9306c1-987b-4609-ad5e-8eaa92f16d44`, `/careers/f679da84-db6f-4a08-801b-dd63508d6310`, `/careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2`, `/careers/30f72628-dd96-4fb2-b998-ab310e90ad82`, `/careers/1db991e4-9480-4847-b300-c430cc057d56`, `/careers/5fb2d42b-9542-4d54-999d-b8f4e0ee9490`, `/careers/9a3a451a-43bf-42cd-9c24-78e309c07104`, `/careers/707c9117-1b1e-4260-96b3-28f735f7d840`, `/careers/752a96ec-5ad1-456e-a98d-6c64c6dfa256`, `/careers/ed7b7afd-c6c1-4de5-a7b2-b504941c3da5` · chrome: **partial**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×3 |
| 2 | HERO | `hero.mask-intersect` | shared ×2 |

## Section reference

### SHELL

_Site chrome: navigation, header, footer, announcement bars and other elements carried across pages._

**`shell.header`** — "Header" — a <header> block named by its HTML landmark tag. Typically 80px tall at 1440px wide.

· Appears on all 16 routes. · appears on 16 routes · implemented by `src/sections/PointerEventsNone10.jsx`

### CONTENT

_The substantive body of a page: articles, listings, resources and general sections._

**`content.block`** — Untitled <div> block classified as content by its content. Typically 68px tall at 1440px wide.

· Appears on 4 routes. · appears on 4 routes · implemented by `src/sections/PointerEventsNone2.jsx`

**`content.section`** — Untitled <section> block classified as content by its content. Typically 770px tall at 1440px wide.

· Appears on 1 route. · appears on 1 routes · implemented by `src/sections/Section.jsx`

### HERO

_Page-opening block: the main headline (h1) and first call to action._

**`hero.mask-intersect`** — "mask-intersect" — a <div> block named by its CSS class; first heading: "The AI Partner forInvestment Management". Typically 2751px tall at 1440px wide.

· Appears on 15 routes. · appears on 15 routes · implemented by `src/sections/MaskIntersect.jsx`

### FEATURES

_Product explanation: capabilities, benefits, workflows and integrations._

**`features.section`** — Untitled <section> block classified as features by its content; the first one reads "THE END OF TOOLS". Typically 460px tall at 1440px wide.

· Appears on 1 route. · appears on 1 routes · implemented by `src/sections/WFull4.jsx`
