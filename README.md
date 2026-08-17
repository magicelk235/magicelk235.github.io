# magicelk235.github.io

Personal site for Yehonatan Cohen. One page: the Mac apps, the low-level work,
Worldspawn, and how to get in touch.

Vite, React, TypeScript and Tailwind v4. The animated pieces come from
[React Bits](https://reactbits.dev) and live in `src/reactbits/`, vendored as
source so they can be edited like any other component.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type check, then bundle into dist/
npm run preview  # serve the built bundle
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. This needs **Settings, Pages, Source: GitHub
Actions** once; the old branch based deploy will not pick up the build.

## Layout

```
src/
  sections/     one file per band of the page
  components/   nav, footer, reveal wrapper, code specimen, framed screenshot
  reactbits/    vendored React Bits components
  data.ts       every fact and string that repeats
public/
  worldspawn/   sprites from the game repo
  apps/         app icons and screenshots
  mathspace/    ship and meteor sprites
```

`DESIGN.md` has the visual rules. Read it before changing anything visible.
