# Deployment Notes

## Domain

**kudapeptides.com** — owned and managed separately from this codebase.

---

## Recommended Hosting: Vercel

Vercel is the native deployment platform for Next.js and the simplest option.

### Steps

1. **Push the project to GitHub** (create a repo if not done)
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repo
   - Vercel auto-detects Next.js — no configuration needed
3. **Connect kudapeptides.com:**
   - In Vercel project → Settings → Domains
   - Add `kudapeptides.com` and `www.kudapeptides.com`
4. **Update DNS at your registrar:**

   | Type | Name | Value |
   |------|------|-------|
   | A    | @    | 76.76.21.21 (Vercel IP — confirm in Vercel dashboard) |
   | CNAME| www  | cname.vercel-dns.com |

   *Exact values are shown in Vercel's domain setup screen.*

5. **Verify SSL:** Vercel provisions Let's Encrypt SSL automatically. Allow 5–15 minutes for DNS propagation.

---

## Environment Variables

Set these in Vercel → Settings → Environment Variables:

```
# Required for auth (once connected)
NEXTAUTH_SECRET=
NEXTAUTH_URL=https://kudapeptides.com

# Supabase (if using Supabase Auth)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Payment processor (once approved)
PAYMENT_GATEWAY_API_KEY=
PAYMENT_GATEWAY_MERCHANT_ID=
```

Do not commit `.env.local` to version control.

---

## Alternative Hosting Options

- **Netlify** — similar to Vercel, supports Next.js App Router
- **Railway** — good for full-stack with database
- **Render** — flexible, supports Docker containers
- **AWS Amplify** — enterprise option

---

## Pre-Deployment Checklist

- [ ] TypeScript build passes: `npm run build`
- [ ] No broken image paths (`/kuda/products/*.png`)
- [ ] Logo loads correctly at `/kuda/kuda-logo-transparent.png`
- [ ] Cart persists across page refreshes (localStorage)
- [ ] Compliance text is present on all product pages
- [ ] Checkout page does not collect card numbers
- [ ] All policy pages are present (`/terms`, `/privacy-policy`, `/disclaimer`, etc.)
- [ ] Environment variables set in hosting dashboard
- [ ] DNS records updated at registrar
- [ ] SSL is active (HTTPS)
- [ ] www redirect is working

---

## Notes

- The app is fully statically renderable except for client components (cart, header).
- No live database is required until auth/orders are connected.
- Payment processing must be separately approved before enabling real checkout.
