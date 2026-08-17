# Design system

Personal portfolio, brand register. The read: a single page for recruiters,
collaborators and other developers, in a machined, terminal adjacent voice.
Dials: variance 7, motion 7, density 5.

## Color

Amber phosphor on machined off-black. One accent, one theme, no light mode.

| Token | Value | Use |
| --- | --- | --- |
| `--color-ground` | `#0f0d0b` | page canvas, warm near black |
| `--color-panel` | `#16130f` | Worldspawn band, code specimen, frames |
| `--color-ink` | `#f6f1e8` | headings and lead lines |
| `--color-body` | `#cac2b5` | body copy |
| `--color-mute` | `#a49b8d` | mono metadata only |
| `--color-amber` | `#f2a63c` | the single accent, and the closing band |
| `--color-rule` | `rgba(242,166,60,.16)` | hairlines |

Contrast on the ground: ink 17.2:1, body 11:1, mute 7.1:1, amber 9.5:1. On the
amber band, `#17120a` reads 9.1:1 and `#3a2a10` reads 6.8:1. Everything visible
clears 4.5:1, muted steps included.

A fixed grain layer at 3.2% sits over the whole page. Large near black areas
band on real displays; the grain is the fix, and it never scrolls.

## Type

- Display and body: **Archivo** variable. Headings at weight 800, width 110 to
  118, tracking `-0.02em` to `-0.035em`. Body at 400.
- Mono: **JetBrains Mono** at 11 to 14px for labels, counts, file names, code,
  and every button. Numerals are tabular everywhere.
- h1 is `clamp(2.6rem, 6.4vw, 5.25rem)` and must stay at two lines on desktop.
- No italics, no serif, no second display family.

## Structure

- Content column `max-width: 1200px`, 24px side padding, one `wrap` utility.
- Radius is 2px on every surface. Buttons are sharp, never pills.
- Sections are separated by hairlines, not shadows or cards. Grids that need
  cell separation use `gap: 1px` over a rule colored parent.
- One layout family per section: bottom anchored hero, two up media split,
  ledger rows with a code specimen, sprite band, three ruled columns, side label
  grid, drenched closing band.
- Zero section eyebrows. Position on the page already says what a section is.

## Motion

React Bits components, vendored in `src/reactbits/`, each used once and for a
reason:

| Component | Where | Why |
| --- | --- | --- |
| `Threads` | hero background | ambient amber field, lazy loaded, parks itself off screen and on hidden tabs |
| `SplitText` | hero headline | the single entrance moment |
| `AnimatedContent` | via `Reveal` | section entrances, varied distance and direction |
| `DecryptedText` | "Close to the metal" | resolves the heading, which is what a compiler does |
| `CountUp` | Worldspawn stats | real counts from the game repo |
| `PixelTransition` | player sprite | idle to attack, pixel art wipe on a pixel art game |
| `TiltedCard` | app screenshots | a few degrees of tilt on framed media, fine pointer only |

Rules that hold: durations 100 to 800ms on exponential ease out curves, no
bounce, no marquees, no cursor spotlights, no magnetic buttons, no decorative
loops beyond the hero field. Every effect is skipped under
`prefers-reduced-motion`, and content renders without it, never gated behind a
tween. `main.tsx` does not use StrictMode, because its double invoked effects
revert GSAP timelines and leave split lines parked at their from state.

## Content rules

- Every number on the page is counted from a repository. No invented precision.
- No em dashes or en dashes in visible copy.
- Nothing muted sits under a heading, a button, or an image.
- One CTA label for one intent: "Email me" in the nav and in the closing band.
- Worldspawn is presented as a game. The engine behind it is not a subject here.

## Assets

- `public/worldspawn/*.gif`: creature and player sprites copied from the
  Worldspawn game repo, 14 to 24px, rendered with `image-rendering: pixelated`.
- `public/apps/*`: Viaduct and Spyglass icons and dark mode screenshots from the
  Magicelk Labs media kit.
- `public/mathspace/*`: ship and meteor sprites from the MathSpace repo.
- `public/og.png`: 1200x630 social card, rendered from a temporary HTML file at
  the same tokens as the site.

## Banned

Gradient text, glow borders, radial blobs behind the hero, glassmorphism beyond
the nav blur, icon in rounded tile grids, fake terminal chrome with traffic
light dots, marquees, scroll cues, version chips, section eyebrows, and small
gray print under buttons.
