# Authentication Setup Notes

## Status

Authentication is **not yet connected**. The login, signup, and account pages
are fully built UI but have no backend. No fake authentication is performed.

---

## Recommended Options

### Option A — Supabase Auth (recommended)

Supabase provides hosted authentication with Google OAuth support, row-level
security, and a managed database. Best for this stack.

**Setup steps:**

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Enable Google OAuth provider in Supabase Auth settings
3. Add allowed redirect URLs
4. Install the Supabase client:
   ```bash
   npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
   ```
5. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
6. Create `lib/supabase.ts` with the client
7. Add auth callback route: `app/auth/callback/route.ts`
8. Wrap app with `SessionProvider` or use Supabase server helpers

### Option B — NextAuth.js

NextAuth (now Auth.js) supports many providers including Google.

**Setup steps:**

1. Install:
   ```bash
   npm install next-auth
   ```
2. Create `app/api/auth/[...nextauth]/route.ts`
3. Configure Google provider
4. Add environment variables:
   ```
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=https://kudapeptides.com
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

---

## Google OAuth Setup

Regardless of auth provider, Google OAuth requires:

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable the Google OAuth 2.0 API
4. Create OAuth credentials (Client ID + Secret)
5. Add authorized redirect URIs:
   - Development: `http://localhost:3000/auth/callback` (or NextAuth: `http://localhost:3000/api/auth/callback/google`)
   - Production: `https://kudapeptides.com/auth/callback`
6. Add credentials to `.env.local`

---

## Environment Variables Required

```env
# Supabase (if using Supabase Auth)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# NextAuth (if using NextAuth)
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Current Behavior

- `/login` — premium dark UI with Google button placeholder and email/password form
- `/signup` — premium dark UI with Google button placeholder and compliance checkbox
- `/account` — premium dashboard placeholder with section structure
- All auth actions show an informational alert (no fake auth performed)

**Do not hard-code fake login or fake Google authentication.**
Connect a real auth provider before enabling sign-in functionality.
