# CLONE_SPEC — Moment · The AI Partner for Investment Management

Source: https://moment.com/ · stack guess: React+Next.js · 16 route(s), 3 template(s), 5 section type(s).
Measured from the rendered pages at 1440, 1280 and 390px wide. Colours are hex. Values are measurements; role names are inferred from usage.

## Colours

| Token | Hex | Uses | Mostly used as |
|---|---|---|---|
| `color.neutral.01` | `#fafbfb` | 2069 | text, border |
| `color.neutral.02` | `#ffffff` | 1398 | text, fill |
| `color.teal.01` | `#5a7b7d` | 562 | fill |
| `color.teal.02` | `#2f4041` | 496 | fill |
| `color.neutral.03` | `#f7f8f8` | 432 | text, fill, border |
| `color.teal.03` | `#a9bcbc` | 410 | text |
| `color.teal.04` | `#dde7e7` | 180 | text |
| `color.neutral.04` | `#000000` | 125 | fill |
| `color.teal.05` | `#466363` | 118 | text, fill, bg |
| `color.teal.06` | `#b5d5d7` | 66 | fill |
| `color.neutral.05` | `#eef3f3` | 52 | text, bg |
| `color.teal.07` | `#213d3e` | 36 | bg, border |
| `color.teal.08` | `#183335` | 28 | text, bg |
| `color.neutral.06` | `#111d1be6` | 19 | bg |
| `color.neutral.07` | `#111d1bd9` | 16 | bg |
| `color.neutral.08` | `#333333` | 12 | border |
| `color.teal.09` | `#a9bcbc12` | 4 | bg |
| `color.neutral.09` | `#111d1b8c` | 4 | bg |
| `color.neutral.10` | `#a8afaccc` | 2 | text |
| `color.teal.10` | `#18333599` | 2 | bg |

Semantic roles:

- `surface.default` → `color.teal.07` (#213d3e): most-used opaque background (32 uses)
- `surface.alt` → `color.neutral.05` (#eef3f3): second most-used neutral background (24 uses)
- `surface.inverse` → `color.neutral.05` (#eef3f3): most-used background neutral, with opposite lightness to surface.default (24 uses)
- `surface.accent` → `color.teal.08` (#183335): most-used saturated background (4 uses)
- `text.primary` → `color.neutral.01` (#fafbfb): most-used text colour (2067 uses)
- `text.secondary` → `color.teal.03` (#a9bcbc): most-used neutral text colour with lower contrast than text.primary on surface.default (410 uses)
- `text.inverse` → `color.teal.05` (#466363): most-used text colour neutral, with opposite lightness to text.primary (104 uses)
- `text.accent` → `color.teal.08` (#183335): most-used saturated text/fill colour (24 uses)
- `border.default` → `color.neutral.03` (#f7f8f8): most-used border colour (24 uses)
- `accent.primary` → `color.teal.08` (#183335): most-used saturated colour overall (28 uses)

## Type roles

| Role | Family | Size | Line height | Weight | Inferred from |
|---|---|---|---|---|---|
| `typography.display` | twkLausanne | 40px | 48px | 350 | most-used style on display text (12 uses) |
| `typography.heading` | twkLausanne | 10px | 15px | 400 | most-used style on heading text (16 uses) |
| `typography.body` | twkLausanne | 16px | 26px | 350 | most-used style on body text (757 uses) |
| `typography.label` | twkLausanne | 14px | 20px | 350 | most-used style on label text (96 uses) |

## Radii

- `radius.4`: 4px (104 uses)
- `radius.1`: 1px (64 uses)
- `radius.3`: 3px (15 uses)
- `radius.2`: 2px (8 uses)

## Motion

- `duration.200ms`: 0.2s (1700 uses)
- `duration.650ms`: 0.65s (104 uses)
- `duration.150ms`: 0.15s (30 uses)
- `duration.400ms`: 0.4s (16 uses)
- `duration.NaNms`: auto (16 uses)
- `duration.1680ms`: 1.68s (14 uses)
- `duration.1620ms`: 1.62s (8 uses)
- `duration.3200ms`: 3.2s (8 uses)
- `easing.01`: ease (1562 uses)
- `easing.02`: cubic-bezier(0.4, 0, 0.2, 1) (158 uses)
- `easing.03`: linear (92 uses)
- `easing.04`: cubic-bezier(0.16, 1, 0.3, 1) (52 uses)
- `easing.05`: cubic-bezier(0.25, 0.1, 0.25, 1) (44 uses)
- `easing.06`: cubic-bezier(0.4, 0, 1, 1) (20 uses)

## Breakpoints (from the site's CSS)

- `breakpoint.360`: 360px
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

Height = median across the type's instances. Phone/laptop columns come from the same section re-measured at that width.

### `shell.header` (SHELL)

- appears on 16 route(s), 16 instance(s); tag `<header>`, named "Header"
- height: 80px @1440 · 80px @1280 · 74px @390
- columns: 3 @1440 · 3 @1280 · 1 @390
- box: padding 0/0px · first child 1440px wide · gap 11px
- colour: background #111d1b · text #fafbfb · align start
- motion: css-transition, css-animation

### `content.block` (CONTENT)

- appears on 4 route(s), 4 instance(s); tag `<div>`, named "Block"
- height: 68px @1440 · 68px @1280 · 105px @390
- columns: 5 @1440 · 5 @1280 · 1 @390
- box: padding 1/1px · first child 1360px wide · gap 8px
- colour: background #111d1b · text #fafbfb · align left
- body: JetBrains Mono 12px/16px weight 400 #dde7e7
- motion: css-transition

### `hero.mask-intersect` (HERO)

- appears on 15 route(s), 15 instance(s); tag `<div>`, named "mask-intersect"
- height: 2751px @1440 · 2751px @1280 · 3493px @390
- columns: 1 @1440 · 1 @1280 · 1 @390
- box: padding 0/0px · first child 1440px wide · gap 24px
- colour: background #111d1b · text #fafbfb · align start
- headline: twkLausanne 40px/48px weight 350 tracking -1.2px #f7f8f8
- body: twkEverettMono 12px/16px weight 400 #a9bcbc
- layout: two text columns, 553 / 553px, text on the left
- motion: css-transition, css-animation, canvas-animation, scroll-linked
- example headline: "The AI Partner forInvestment Management"

### `content.section` (CONTENT)

- appears on 1 route(s), 5 instance(s); tag `<section>`, named "Section"
- height: 770px @1440 · 770px @1280 · 718px @390
- columns: 1 @1440 · 1 @1280 · 1 @390
- box: padding 40/40px · first child 552px wide · gap none
- colour: background #111d1b · text #fafbfb · align center
- headline: STIX Two Text 24px/32px weight 600 #fafbfb
- body: STIX Two Text 24px/32px weight 400 #fafbfb
- motion: css-transition, css-animation

### `features.section` (FEATURES)

- appears on 1 route(s), 1 instance(s); tag `<section>`, named "Section"
- height: 460px @1440 · 460px @1280 · 512px @390
- columns: 1 @1440 · 1 @1280 · 1 @390
- box: padding 40/40px · first child 552px wide · gap none
- colour: background #111d1b · text #fafbfb · align center
- headline: STIX Two Text 24px/32px weight 600 #fafbfb
- body: STIX Two Text 24px/32px weight 400 #fafbfb
- motion: css-transition, css-animation
- example headline: "THE END OF TOOLS"

## Routes

| Route | Template | Sections in order |
|---|---|---|
| `/` | `template.group` | `shell.header` → `content.block` → `hero.mask-intersect` |
| `/memo` | `template.memo` | `shell.header` → `content.block` → `content.section` → `content.section` → `content.section` → `content.section` → `features.section` → `content.section` |
| `/careers` | `template.group` | `shell.header` → `content.block` → `hero.mask-intersect` |
| `/series-c` | `template.group` | `shell.header` → `content.block` → `hero.mask-intersect` |
| `/careers/f8e990cd-4517-47bb-93b0-3c5f1fddeb07` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/b13c29c2-fe72-4055-86c8-fa8efbae416f` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/9e9306c1-987b-4609-ad5e-8eaa92f16d44` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/f679da84-db6f-4a08-801b-dd63508d6310` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/30f72628-dd96-4fb2-b998-ab310e90ad82` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/1db991e4-9480-4847-b300-c430cc057d56` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/5fb2d42b-9542-4d54-999d-b8f4e0ee9490` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/9a3a451a-43bf-42cd-9c24-78e309c07104` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/707c9117-1b1e-4260-96b3-28f735f7d840` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/752a96ec-5ad1-456e-a98d-6c64c6dfa256` | `template.careers` | `shell.header` → `hero.mask-intersect` |
| `/careers/ed7b7afd-c6c1-4de5-a7b2-b504941c3da5` | `template.careers` | `shell.header` → `hero.mask-intersect` |
