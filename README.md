# vihaan-jain.com

Personal site. Next.js, Tailwind, deployed on Vercel.

## Editing

- **All copy** lives in `lib/site.ts`. Pages read from it.
- **Photos and video** go in `public/media/`. See the README there for file names; empty frames fill in on the next build.
- **Writing** is markdown in `content/writing/`. Posts with `draft: true` show locally but not on the live site, and the Writing link stays hidden until at least one post is published.
- **Flags** at the top of `lib/site.ts`: `showNSA` (off until approved) and `showPendingMedia` (turn off before submitting if any media is missing).

## Running it

```bash
npm install
npm run dev
```
