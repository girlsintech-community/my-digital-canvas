

## Plan: Fix Mobile Issues

### Problems Identified

1. **Resume page not loading on mobile**: The resume route `/resume` likely fails on direct navigation or refresh because the server doesn't handle client-side routes. This is a known SPA issue — but since this is Vite with BrowserRouter, it should work in preview. More likely the issue is that mobile nav links for "resume" use `href="/resume"` which triggers a full page reload. Need to use `navigate()` for internal routes.

2. **Mobile menu button centered**: Line 31 in Nav.tsx uses `justify-center` — the hamburger button appears centered. Need `justify-end` on mobile.

3. **Social links opening in browser instead of app**: The social links use `target="_blank"` which forces browser. Need to use deep link / intent URLs for mobile apps.

### Changes

#### 1. Fix Nav.tsx — Menu button alignment + resume navigation
- Change the nav container from `justify-center` to `justify-between` (or `justify-end` on mobile) so the hamburger menu appears top-right.
- For the "resume" link (and any non-hash link), use `e.preventDefault()` + `navigate()` instead of default anchor behavior to avoid full page reloads that break SPA routing.

#### 2. Fix Hero.tsx — Social deep links for mobile apps
- Replace social URLs with intent-friendly URLs where possible:
  - YouTube: `https://www.youtube.com/@themanikdiaries` (YouTube app intercepts this automatically)
  - Instagram: `https://instagram.com/manik.3000` (Instagram app intercepts this)
  - Twitter/X: `https://twitter.com/themanikdiaries` (X app intercepts this)
  - LinkedIn: same URL (app intercepts)
  - GitHub: same URL
- Remove `target="_blank"` and `rel="noopener noreferrer"` — these force the browser. Without them, mobile OS will offer to open in the native app if installed.

#### 3. Resume page scroll fix
- Add `window.scrollTo(0, 0)` on mount in Resume.tsx to ensure the page starts at top.

### Files to Edit
- `src/components/sections/Nav.tsx` — menu alignment + SPA navigation for internal routes
- `src/components/sections/Hero.tsx` — remove `target="_blank"` to allow app deep linking
- `src/pages/Resume.tsx` — scroll to top on mount

