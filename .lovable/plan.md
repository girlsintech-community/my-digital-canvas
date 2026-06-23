# Admin Dashboard + Bento Glass Cards

Lovable Cloud is now enabled. This unlocks real auth + persistent storage so any edit you make in the admin reflects instantly for every visitor.

## Phase 1 — Auth & Admin Shell
- Add **email/password auth** (your account: `manik23265@gmail.com`).
- Create `profiles` table (auto-created on signup) and a separate `user_roles` table with an `admin` role (security best practice, prevents privilege escalation).
- After you sign up once, I'll grant your account the `admin` role via SQL.
- Hidden entry: clicking the ❤️ in the footer navigates to `/admin/login`.
- `/admin` dashboard route, protected by an `admin` role check.

## Phase 2 — Editable Content Tables
Create database tables (with RLS: public read, admin-only write) for these sections, with admin CRUD UIs:
1. **Events Attended** (title, date, location, description, gallery images)
2. **Events Organised** (title, date, description)
3. **Podcasts** (title, YouTube URL, description)
4. **Diary entries** (title, body, date, mood)
5. **Recommendations** (name, role, text, date)
6. **Work Experience** (role, company, dates, bullets)
7. **Articles** (title, platform, URL, date)

Each section component is migrated to read from the DB (with the existing hardcoded content seeded as initial rows). Image uploads use Lovable Cloud Storage.

Sections that stay hardcoded for now (low edit frequency): Hero, About, Skills, Education, Certifications, Extracurriculars, Wall of Love. We can move these later anytime.

## Phase 3 — Bento Glass-morphism Card Redesign
- Add a reusable `BentoCard` component with backdrop-blur, translucent surface, subtle gradient border, soft inner glow, and hover lift.
- Apply across all card-like surfaces: Wall of Love, Community events, Work Experience, Recommendations, Podcasts, Articles, Diary entries.
- Keep the minimal B&W aesthetic intact (glass over the existing background, no color shift).

## Technical notes
- Auth uses Lovable Cloud (Supabase under the hood). No password hash in `.env` — the password lives only in your account in the auth system, properly hashed server-side. This is more secure than the hashed-env approach we discussed and means edits sync to all visitors automatically.
- All tables use RLS: anyone can read, only users with the `admin` role can write.
- Image uploads go to a Cloud Storage bucket.

## Out of scope (this round)
- "Code rewrites itself from the admin UI" — not buildable on a static site as I explained; Cloud is the standard alternative and gives the same end result for visitors.
- Editing the very low-frequency sections (Hero text, Skills list). Easy to add later.

Approve and I'll start with Phase 1 (auth + shell + heart-emoji entry).