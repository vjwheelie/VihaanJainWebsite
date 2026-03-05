










# VihaanJainWebsite

---

## Contact form (SendGrid)

This project implements a server route that sends contact form submissions via SendGrid. To enable it locally or in production, add the following environment variables:

- `SENDGRID_API_KEY` — your SendGrid API key
- `SENDGRID_FROM_EMAIL` — email address to use as the sender (e.g. `noreply@yourdomain.com`)
- `CONTACT_TO_EMAIL` — email address that receives submissions (defaults to `jainvihaan65@gmail.com`)

If the env vars are not set, submissions will be logged to the server console (useful for local development). To test locally:

1. Run `pnpm install` (or `npm install`) to install dependencies.
2. Start dev server: `pnpm dev` or `npm run dev`.
3. Submit the contact form and check your terminal for logs or your inbox for sent messages.

---