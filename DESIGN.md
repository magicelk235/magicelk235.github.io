# Magicelk Labs — Design System

The brand and visual rules for magicelklabs.com. Follow this when editing the
landing page or any page under this site.

## Name

Always **Magicelk Labs** — "Magicelk" is one word, capital M. Never "Magic Elk",
"MagicElk", or "magicelk labs".

Individual apps keep their own casing: **Spyglass**, **Viaduct**.

## Identity

Magicelk Labs is a one-person studio building focused, native Mac apps. The
umbrella brand borrows the **Spyglass palette** (teal + brass) as its house
colors. There is no separate "Labs" logo mark — the brand is expressed as a
**wordmark**. Each app shows its own app icon on its own row, never as a stand-in
for the whole studio.

## Colors

| Role         | Hex        | Use                                    |
|--------------|------------|----------------------------------------|
| Teal (top)   | `#0B3D3A`  | Hero gradient start, dark accent bands |
| Teal (bottom)| `#072826`  | Hero gradient end                      |
| Brass        | `#B8945F`  | Single accent: links, CTA, hovers      |
| Ink          | `#1d1d1f`  | Body text on light                     |
| Bg light     | `#f5f5f7`  | Page background, light mode            |
| Bg dark      | `#0f1514`  | Page background, dark mode             |

One accent only: **brass**. Do not introduce a second accent color anywhere.

Light and dark mode via `prefers-color-scheme`. The teal hero band is dark in
both modes (brass + off-white text on teal) — it is a fixed brand surface, not a
themed section.

## Typography

System font stack (SF Pro on Apple platforms). No web fonts — keeps the site
instant and native.

- Display / H1: bold, `letter-spacing:-.02em`, tight leading.
- Body: regular, `line-height:1.55`, `max-width:~65ch`.
- Emphasis inside headings: use **bold or the brass color**, never a second
  typeface.

## Motion

Restrained (MOTION dial ~4). CSS only, no JS animation libraries.

- Scroll-reveal: fade + 16px rise as sections enter, via IntersectionObserver.
- Hover: app rows and buttons lift `translateY(-2px)` / brass border.
- Everything collapses to static under `prefers-reduced-motion: reduce`.

## Layout

- Single `index.html`, native CSS in a `<style>` block. Zero build step
  (GitHub Pages static). Do not add a framework or bundler.
- Content column `max-width: 960px`, centered, `24px` side padding.
- Section rhythm: `~96px` vertical padding, generous whitespace (DENSITY ~3).
- Page order: **Hero → Intro/value → Apps → About → Footer**. Never jump hero
  straight into the app list; the intro strip bridges them.

## Sections

1. **Hero** — teal gradient band. Wordmark "Magicelk Labs" + tagline
   "Focused Mac apps." Two CTAs (see the apps / about). No icon in the hero.
2. **Intro** — one short paragraph on what the studio is + three value points
   (e.g. Native · Focused · One-time pricing). Bridges into the apps.
3. **Apps** — one row per app (alternating image side), each with the app's own
   icon, name, one-liner, a few feature chips, price, a macOS badge, and a
   "Learn more →" link to the app's existing page. Two apps today: Spyglass,
   Viaduct. Not a 3-equal-card grid.
4. **About** — short maker profile + links + "More about me →" to `/about`.
5. **Footer** — contact + social links, brass links.

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
