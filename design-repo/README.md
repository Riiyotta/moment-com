# moment-com — Design Repo

Machine-validated design system extracted from a live site, structured per the design-repo BUILD-GUIDE.
Status: **design-review-pending** (`productionApproved: false`). The source is a real, live site: see `assets/asset-roles.json`
for what a generator may and may not reproduce.

## Counts

- Sections: 17
- Templates: 5
- Routes: 16
- Primitives: 12
- Components: 31
- Assets: 47
- Foundation tokens: 110
- Semantic tokens: 18
- Rules: 8

## Layout

- `tokens/00-foundation → 10-semantic → 20-component → 30-layout → themes`, and `tokens/llm/` (catalog, policy, allowlist)
- `primitives/`, `components/`, `sections/` (one contract per section type), `templates/templates.json` (structured nodes)
- `compatibility/graph.json` (rules with severity), `assets/asset-roles.json`, `motion/motion-contract.json`
- `schema/` (draft-07 PageSpec schema, example, semantic validator, adversarial tests), `extraction/` (citations, admission)

## Sections are small, single-purpose retrieval units (0.2.0)

0.1.0 shipped five sections, one of which (`hero.mask-intersect`) stood for 2,751px (desktop) / 3,493px (mobile) of page: 30 paragraphs,
13 images and five unrelated responsibilities. It is retired, together with `content.block`, `content.section`, `features.section`,
`template.group` and `template.careers` (see `retiredSectionIds` / `retiredTemplateIds` in `compatibility/graph.json`; the validator
rejects them by name and says what replaced them).

| Page family (template) | Sections, in order |
|---|---|
| Home (`template.home`) | shell.header · banner.announcement · hero.canvas-statement · proof.metrics-line · proof.logo-strip · conversion.contact-dialog |
| Memo (`template.memo`) | shell.header · banner.announcement · hero.memo-masthead · editorial.memo-part ×4 · editorial.memo-signoff · conversion.contact-dialog |
| Careers index (`template.careers-index`) | shell.header · banner.announcement · hero.title-intro · careers.job-group ×5 · conversion.contact-dialog |
| Press release (`template.press-release`) | shell.header · banner.announcement · hero.press-headline · editorial.press-meta · editorial.prose ×4 · conversion.contact-dialog |
| Careers detail (`template.careers-detail`, 12 routes) | shell.header · careers.job-header · careers.job-description-block ×4-8 · careers.apply-cta · conversion.contact-dialog |

Each contract carries a `retrieval` block (stable `semanticLabel`, `kind`, summary, keywords, page families) and a `granularity` block
(one responsibility, recomputed copy/image/body capacity). `compatibility/graph.json` holds the `granularityPolicy` thresholds, the
`sectionKinds` vocabulary and per-section adjacency, all recomputed from `templates/templates.json` by `verify_all.py`.

**Not on the measured site, so not invented:** footer, testimonial, feature intro / feature grid, product showcase (`sectionKinds[*].observedSections = 0`).
The site has no footer element; the closing element of every page is the contact dialog.

## Asset protection

Roles are split into generic decorative roles (`icon`, `illustration`, `background`, `hero-image`, `content-image`, `editorial-illustration`) and
protected roles (`logo`, `customer-logo`, `partner-logo`, `avatar`, `author-photo`, `product-screenshot`, `social-card`, `live-embed`,
`founder-contact-email`). Protected roles are pinned to a policy, may only appear in a section whose contract names them, and must carry
`source: placeholder|supplied` in a PageSpec. The six customer logos (12 files) that 0.1.0 filed as illustration/icon are now `customer-logo`
with the real firm in `entity`; `verify_all.py` re-derives this from what each cited section range actually renders.

## What is measured vs inferred

Values (colours, sizes, spacing, radii, widths, word counts, line ranges) are measured. Semantic role **names**
(`text.primary`, `surface.alt`…), section **categories**, asset **roles** and section **purposes** are heuristics and are labelled
`basis` / `inferred`. Review them before production use.

## Admit this repo

```
python3 extraction/verify_all.py      # files, entryPoints, counts, parity, citations, pinned policies, schema, adversarial suite
python3 extraction/prove_drift.py     # proves each check fails on injected drift
```
