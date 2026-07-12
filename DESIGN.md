# Magicelk Labs — Design System

The brand and visual rules for magicelklabs.com. Follow this when editing any
page under this site. The voice is **built, precise, structural** (the studio
sells small engineered tools; Viaduct is literally named after a bridge).

## Name

Always **Magicelk Labs** — "Magicelk" is one word, capital M. Never "Magic Elk",
"MagicElk", or "magicelk labs".

Individual apps keep their own casing: **Spyglass**, **Viaduct**.

## Typography

- **Display (h1, h2, numerals, wordmarks):** Cabinet Grotesk (Fontshare CDN,
  weights 500/700/800). Headings weight 800, `letter-spacing:-.02em` to
  `-.025em`. No italics anywhere (the family has none; synthesized italics are
  banned).
- **Body / UI:** Inter on Viaduct + extensions pages; system stack (SF Pro) on
  Spyglass, root, and about. h3 and smaller stay in the body family unless
  explicitly `font-display`.
- Emphasis inside headings: color (brass or teal) + weight. Never a second
  family, never italic.

## Colors

House palette (root, about, privacy chrome): warm-neutral canvas `#FAFAF9`
(dark `#111413`), ink `#1A1A1C`/`#F4F4F2`, hairlines at ~12% ink, **brass**
accent `#8A6A38` (dark `#C9A876`).

**Committed color, not timid accents.** Viaduct's brand surfaces are drenched
in deep teal (`linear-gradient(168deg,#0F4D48,#093732)` — the `.hero-band` /
`.pro-panel` / `.cta` gradient), identical in light and dark mode. It carries
the hero, the Pro pricing panel, and the closing CTA. Spyglass keeps its own
teal band (`--teal-top`/`--teal-bot`) with brass CTAs. On-band text: near-white
ink `#F2FBF9`, body `#C6E3DE`, dim `#93C2BB`, bright accent `#6EE0D1`; on-band
primary buttons are white with dark-teal text.

One accent per page. Light + dark preserved via existing toggles (`theme`,
`vd-theme`, `sg-theme`).

## Signature moves

- **Ruled structure.** Sections are organized by hairline rules: ledger-style
  feature rows (title 4-col / body 8-col), stat rows split by vertical rules,
  numbered columns.
- **Bare numerals.** Process steps use large bare Cabinet Grotesk numerals in
  the accent color. Never numbers inside circles or chips.
- **Band bookends.** Product pages open and close on a drenched brand band.

## Banned (AI tells — do not reintroduce)

- Gradient-stroke "glow" borders on cards (`.glow-*` masks).
- Radial glow blobs / "crown" halos behind heroes.
- Glassmorphism pills and glass frames as decoration (nav blur is the only
  backdrop-filter allowed).
- Icon-in-rounded-tile bento grids; identical card grids.
- Progress bars with filled tracks as marketing viz.
- Traffic-light dots on fake windows/terminals.
- Floating/looping decorative animation (exception: the low-opacity
  `data-mm-ambient` band luminance drift; nothing else loops).
- Em dashes in visible copy (titles/og tags exempt).
- Italic display type; serif display type.

## Layout

- Content column: `max-width:1080px` (house pages) or existing `max-w-6xl`
  (product pages); 24px side padding.
- House pages: masthead (wordmark + small nav + hairline), left-aligned heroes,
  4fr/8fr side-label grids, index rows with hairlines.
- Section headers: left-aligned h2, optional hairline `border-top` rule above.
  Centered composition is reserved for band CTAs and manifesto heroes.

## Motion

Apple-grade scroll choreography via GSAP 3.13 (+ ScrollTrigger + SplitText,
jsDelivr CDN) driven by the shared runtime **`/assets/motion.js`**. Pages opt
elements in with data attributes:

- `data-mm="lines"` masked line-by-line headline reveal (SplitText);
  `data-mm="rise" / "fade" / "media"` for blocks and screenshots;
  `data-mm-load` runs at load (above the fold), otherwise on scroll-enter.
- `data-mm-stagger` staggers direct children; `data-mm-parallax` slow drift;
  `data-mm-counter` count-up numerals.
- `data-mm-replay` on a section: entrances inside re-run every time it
  scrolls back into view (used on Viaduct's compat layer); default is once.
- `data-mm-pin` + `data-mm-pin-stage/-item/-panel`: pinned walkthroughs
  (Viaduct's Drop → Convert → Done, Spyglass's file-type gallery). Pin engages
  only ≥1024px + fine pointer; below that the CSS fallback is a static stack
  with per-panel captions.

Continuous "premium" layer (all fine-pointer-gated, all dead under reduced
motion):

- **Lenis inertial scroll** (CDN, wired into GSAP's ticker; anchors route
  through `lenis.scrollTo`).
- `data-mm-ambient="teal|brass"`: two soft light orbs drift slowly inside
  brand bands. This is the ONE sanctioned looping animation; it is band
  luminance, not floating decoration. Keep opacity ≤ .15.
- `data-mm-scrub`: hero media settles smaller as it scrolls away (nest it
  inside the entrance element, never on the same node).
- `data-mm-tilt`: ±4.5° pointer tilt on framed media.
- `data-mm-magnet`: cursor-magnetic primary CTAs.
- `data-mm-spot="teal|brass"`: cursor spotlight wash on cards.
- `.mm-progress`: scroll-progress hairline under the nav (accent color).

Safety contract: an inline head script adds `html.mm` (skipped under
`prefers-reduced-motion`) and CSS hides `[data-mm]` only under that class;
motion.js reveals everything, and a 2s failsafe strips the class if GSAP never
arrives. motion.js also neutralizes CSS `scroll-behavior:smooth` during
ScrollTrigger refresh, pauses Lenis while ScrollTrigger measures, and calls
`ScrollTrigger.sort()` before refresh (pins are created after entrance
triggers; without the sort, everything below a pin fires ~2000px early).
Re-refreshes on `load`.
Videos pause off-screen and gain controls (no autoplay/loop) under reduced
motion. Hover stays 1–2px lifts; no other decorative loops beyond the ambient
band light.

## App facts (source of truth: Google Drive media kits)

**Spyglass** — Real Quick Look previews for Google Workspace files on macOS.
Press Space on a `.gdoc` / `.gsheet` / `.gslides` / `.gdraw` / `.gform` /
`.gsite` and see the document, not raw JSON. Free tier: branded info cards,
offline, no sign-in. Paid: $9 one-time, rendered first-page previews. macOS 14+.

**Viaduct** — Run Chrome extensions in Safari, natively. Drop in a `.zip`,
`.crx`, or Chrome Web Store link; Viaduct converts, signs, and installs it into
Safari. Runs in Safari's own engine (keeps battery life). Free for 2
conversions, then $19 one-time (unlimited + auto-resigning). macOS 13+. Beta.

## Assets

- `spyglass/assets/spyglass-appicon-{light,dark}-1024.png` — Spyglass icon.
- `viaduct/assets/viaduct-icon-{light,dark}.png` — Viaduct icon (256px, web).
- Use the light icon on dark surfaces and the dark icon on light surfaces.
- Media-kit screenshots (source: Google Drive → "My Drive/media kits", mounted
  locally) converted with `cwebp -q 82 -resize 1800 0`:
  - `spyglass/assets/spyglass-shot-{docs,sheets,slides,drawings}-{light,dark}.webp`
    (1800×1474) and `spyglass-menubar-{light,dark}.webp` (1400×1567).
  - `viaduct/assets/viaduct-{main,developer}-{light,dark}.webp` and
    `viaduct-step-{select,convert,succeed}-{light,dark}.webp` (1800×1324).
  - `viaduct/assets/viaduct-store-install.mp4` (1600w, ~1.9 MB) + poster: the
    full uncut Chrome-Web-Store-to-Safari install capture.
- Light/dark image pairs swap via Tailwind `block dark:hidden` /
  `hidden dark:block`; never add a bare `display:block` CSS rule on those imgs
  (it outranks Tailwind's `.hidden` and shows both variants at once).

## Build

Static, zero build step, except `viaduct/extensions/build.js` which generates
the 20 extension guides + hub + sitemap: `node build.js` after editing it.
