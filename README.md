# 4orm Finance Data Room - Next.js wrapper (look-preserving)

This is the existing static data room wrapped in a thin Next.js app so it can be
gated with Clerk **without changing the look**. Every page, document, font, and
asset is the same; Next.js only adds the server-side login check.

## What's here
- `public/` - the entire existing data room, unchanged (index, data-room, roadmap,
  visual-data, privacy, terms, `documents/`, `assets/`) plus `pending.html`.
- `next.config.mjs` - rewrites `/` to the existing `public/index.html`.
- `middleware.ts` - protects the member page and every document; open pages stay open.
- `app/` - `ClerkProvider` + brand-matchable `/sign-in` and `/sign-up` screens.
- `.env.example` - where the Clerk keys go.

## Protected vs open
- **Open:** `/` (landing), `privacy.html`, `terms.html`, `assets/*`, `/sign-in`, `/sign-up`.
- **Protected (signed-in + approved):** `data-room.html`, `roadmap.html`, `visual-data.html`, `documents/*`.

## Setup (developer, ~15 min)
1. `npm install`
2. In the Clerk Dashboard: enable Google, Microsoft, and Email sign-in. (Proton users
   sign in via Email - there is no public "Sign in with Proton".)
3. Copy `.env.example` to `.env.local` and paste your Clerk keys.
4. `npm run dev` and confirm the room looks identical and that opening a document
   while signed out redirects to sign-in.
5. Push to GitHub; connect the repo to Vercel; it auto-deploys. Point the domain
   (data.4ormfinance.com / 4ormdr.com) at the Vercel project.

> You can also run Clerk's own installer prompt (Dashboard > Overview) *inside this
> project* - it will detect Next.js and finish the wiring. Do NOT run it on an empty
> folder or it scaffolds a blank starter instead of this room.

## The approval gate (vetting)
- Turn on **Waitlist** (or Allowlist) in Clerk so nobody enters until you approve them.
- When you approve someone, set their `publicMetadata.approved = true` in Clerk.
  The middleware sends approved users into the room and everyone else to `pending.html`.
- Capture the accredited-investor self-certification (the Form 45-106F9 acknowledgement
  already in the room) at request time and store it on the user record.

## Hardening (Phase 5+, recommended before the raise opens)
- Move `documents/` out of `public/` into **private Vercel Blob**; serve each file
  through a serverless function that checks the session and returns a short-lived
  **signed URL**, so document links can't be shared or reached directly.
- Add an **audit log** (who opened what, when, IP) with ~7-year retention.
- Add **watermarking** (viewer email + timestamp) and one-click **revocation**.

## Note
If a `vercel.json` from the old static site is present, delete it - Vercel
auto-detects Next.js and it is not needed.

*Technical scaffold, not legal advice. Have counsel confirm the accredited-investor
process and record-keeping meet NI 45-106 / OSC expectations before the raise opens.*
