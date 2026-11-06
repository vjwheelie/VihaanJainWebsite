# vihaan-jain.com

Personal site. Next.js, Tailwind, deployed on Vercel.

## Editing

- **All copy** lives in `lib/site.ts`. Pages read from it.
- **Resume PDF**: the Download PDF link on /resume serves `public/Vihaan-Jain-Resume.pdf`. Replace that file (same name) whenever your resume changes; the /resume page itself reads from `lib/site.ts`.
- **Photos and video** go in `public/media/`. See the README there for file names; empty frames fill in on the next build.
- **Writing** is markdown in `content/writing/`, switched off for now with `showWriting`. When it's on, posts with `draft: true` show locally but not on the live site, and the Writing link stays hidden until at least one post is published.
- **Flags** at the top of `lib/site.ts`: `showNSA` (on: lists the NSA title, program and dates, and the clearance line on the resume page only), `showPendingMedia` (turn off before submitting if any media is missing) and `showWriting` (off).

## Running it

```bash
npm install
npm run dev
```
