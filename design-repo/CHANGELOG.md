# Changelog

## 0.2.0 — section decomposition
- Retired `hero.mask-intersect` (2,751/3,493px, 30 paragraphs, 13 images, five responsibilities), `content.block`, `content.section`, `features.section`.
  Replaced by 17 single-purpose sections (see README). `features.section` was memo Part IV ("The End of Tools"), not a feature block: it is an `editorial.memo-part`.
- Templates re-composed by page family: `template.group` (home + careers index + press release) and `template.careers` are replaced by
  `template.home`, `template.careers-index`, `template.press-release`, `template.careers-detail`; `template.memo` kept. Every template now ends
  with `conversion.contact-dialog` (previously folded into the last section's range), which makes `SHELL_MUST_BE_LAST` a real, tested rule.
- Asset registry: the six customer logos still cited the retired `hero.mask-intersect` as their section; they now cite `proof.logo-strip`
  (recon/mirror/src/index.html:252-283). `verify_all.py` now rejects an asset or embed citing a section with no contract, and an asset whose
  cited section is not the one whose snapshot range renders it; both are covered by `prove_drift.py`.
- Fixed contract defects found while decomposing: the announcement banner holds **two** links (memo, press release), the old contract allowed one;
  the home hero subheading is 9 words, the old budget was 6.
- Graph: added `MUST_FOLLOW_OBSERVED_PREDECESSOR` (adjacency recomputed from templates), per-section `compatibility`, `sectionKinds`,
  `granularityPolicy`, retired-id tables; `NO_ADJACENT_SAME_CATEGORY` exceptions are now recomputed instead of hand-written.
- Assets: added `partner-logo`, `author-photo`, `product-screenshot`, `editorial-illustration`, `social-card`; reclassified the six customer logos,
  the brand marks and the share image; `protectedRoles` / `genericDecorativeRoles` lists; PageSpec images require `source` for protected roles.
- Validator: retired ids rejected by name, `mustFollow`, protected-role `source` rule. Adversarial suite 26 → 43 cases (the previously skipped
  `SHELL_MUST_BE_LAST` and motion cases now run). `verify_all.py` gained granularity, retired-id, label, adjacency and asset-audit checks;
  `prove_drift.py` gained 18 injections proving each fails.
- Heights re-measured at 1440x900 and 390x844 on `/`, `/memo`, `/careers`, `/series-c` and one role page (`measuredOnRoute` in each contract).
- The runnable clone is split to match: `src/sections/<section-id>/` holds one component per section instance (150 files under `src/sections/` and `src/layouts/`),
  `src/layouts/*Body.jsx` keep only the page wrappers, and one shared `ConversionContactDialog` replaces 16 inline copies. Every page's server-rendered
  markup is unchanged (17 pages compared before/after, ignoring the `data-clone-section` debug attribute). Contracts' `implementedBy` now point at those
  files and `verify_all.py` checks that they exist, sit in the section's own folder and that no component is left unclaimed.
- `ia/ia.json`, `ROUTES.md`, `CLONE_SPEC.md`, `CLONE.md` and `clone-manifest.json` were regenerated to the 0.2.0 sections and templates.
- `verify_all.py` now admits a bare `design-repo/` (no `recon/` beside it) with warnings instead of failing; a declared-but-missing evidence folder still fails
  whenever `recon/` exists.

## 0.1.0 — 2026-10-06T08:16:10Z
- Initial extraction from https://moment.com/: 5 sections, 3 templates, 16 routes.
