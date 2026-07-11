# GKS Govt. V&HSS — Batch of 2026 · Digital Yearbook

A premium, emotional, Apple-inspired digital yearbook built with Next.js 14
(App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Deploy. Every push to `main` redeploys automatically.

## Where to put your real content

All content lives in plain TypeScript files under `/data`, so you don't need
to touch component code to update it.

| What                     | File                          |
|---------------------------|-------------------------------|
| Students                  | `data/students.ts`            |
| Teachers                  | `data/teachers.ts`             |
| Events timeline            | `data/events.ts`               |
| Gallery photos             | `data/gallery.ts`              |
| Memory Wall messages       | `data/memories.ts`             |
| Videos (YouTube IDs)       | `app/videos/page.tsx`          |

Photos go in `public/images/students/` and `public/images/gallery/` — replace
the placeholder `.svg` files with real `.jpg`/`.png` files and update the
`photo` / `src` fields in the data files to match.

Background music: drop an MP3 at `public/audio/theme.mp3` and the music
toggle in the navbar will play it.

## Design system

- **Colors:** Ivory `#FBFAF7`, Ink `#0B0B0C`, Gold `#C9A54B`, Dusk Blue `#7FA8C9`
  (see `tailwind.config.ts`).
- **Type:** Poppins (headings), Inter (body), Caveat (handwritten — used only
  for signatures and the Memory Wall).
- **Signature motif:** the "horizon line" — a thin gold line with a traveling
  point of light — appears under every section heading, echoing the sunrise
  silhouette in the hero.

## Features included

- Animated hero with school silhouette + sunrise, Enter button
- Students grid with search + roll-number filter, individual profile pages
- Teachers section, Events timeline with scroll animations
- Masonry gallery with category filters + fullscreen lightbox
- Memory Wall (handwritten sticky-note style)
- Guest Book (visitor messages, saved locally in the browser)
- Video page with YouTube embeds
- Dark/light mode (persisted), scroll progress bar, back-to-top button
- Confetti burst on the graduation moment in the Events timeline
- Hidden Easter egg — click the "GKS · 10B" logo 5 times
- SEO metadata, sitemap.xml, robots.txt
- Fully responsive, keyboard-focus visible, respects reduced-motion

## Notes

- The Guest Book currently stores new entries in the visitor's own browser
  (`localStorage`) so it works without a backend. For a shared guest book
  visible to everyone, you'd wire the form up to a small database (e.g.
  Vercel Postgres, Supabase, or Firebase) — happy to help with that next.
- All names, photos, and messages currently in the data files are placeholder
  sample content — swap them for your real classmates.
