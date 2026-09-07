# Whale Love 🐋❤️

Standalone Whale Love web app. Floot is not part of this deployment architecture.

## Stack
- Next.js 16.3.4 + React 19
- Static export for Cloudflare Pages
- Supabase Auth / Postgres / Realtime / Storage
- Black + gold glassmorphism UI

## Cloudflare Pages
Build command: `npm run build`
Output directory: `out`

Environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Never add a Supabase secret/service-role key to the browser or repository.

## Google OAuth
Enable Google in Supabase Auth and configure the Google OAuth client there. Add the final Cloudflare Pages URL to the allowed redirect URLs in Supabase and Google Cloud.
