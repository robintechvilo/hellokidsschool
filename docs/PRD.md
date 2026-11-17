# Hello Kids Pre-School & Day Care — Website PRD

| | |
|---|---|
| **Domain** | https://hellokidsschool.com |
| **Language** | English only (all site content) |
| **Hosting** | Phase 1: Vercel → Phase 2: own VPS |
| **Design reference** | https://www.malherbe-school.com (layout & section rhythm) |
| **Brand sources** | `assets/brand/logo.jpg`, `assets/brand/banner.jpg` |
| **Version / date** | v1.0 — 17 Nov 2026 |

---

## 1. Goals

1. **Get admissions:** turn Facebook and Google visitors into admission inquiries and campus visits. This is the main KPI.
2. **Build parent trust:** show a safe, AC, tech-enabled pre-school with trained teachers.
3. **Make the brand obvious:** within 3 seconds, a parent should know this is a colorful, joyful school for little kids.
4. **Make contact easy:** call, WhatsApp, directions and Facebook should be one tap away on mobile.
5. **Let the school run the site itself:** every text, photo, class, fee, event, notice, testimonial and setting can be changed from an **Admin Panel** with no developer involved (see Section 6A).

**Primary audience:** parents in Mirpur / West Shewrapara, Dhaka, with children aged about 2–6. Most visit on mobile phones (expect 80%+ mobile traffic), often on 3G/4G.

**Success metrics (first 3 months):** inquiry form submissions, WhatsApp clicks, call clicks, "Book a Visit" submissions, Lighthouse mobile score ≥ 90, LCP < 2.5s.

---

## 2. School facts (from the banner)

- **Name:** Hello Kids Pre-School & Day Care
- **Taglines:** "Play – Learn – Grow" (logo), "Where Kids Learn & Grow" (banner)
- **Medium:** English Medium · English Version
- **Classes:** Pre Play, Play, LKG, UKG
- **Offer:** Admission Open, 50% OFF *(confirm what the 50% applies to — admission fee or tuition — and the deadline)*
- **Facilities:**
  - Day Care
  - Early Education
  - Extracurricular (Art, Music, Dance)
  - Kids Play Zone
  - Well Trained Teachers
  - Smart Pre-School Technology
  - AC Class Room
  - Educational Study Tours
- **Address:** 778, West Shewrapara (Beside Metro Station Pillar No: 307), Mirpur, Dhaka-1216
- **Phone / WhatsApp:** 01901 641 644 (`tel:+8801901641644`, `wa.me/8801901641644`)
- **Facebook:** Hello Kids Pre School & Day Care *(page URL needed)*

> ⚠️ **Content needed from the school:** see Section 11.

---

## 3. Reference-site analysis (malherbe-school.com)

Here is what we keep from the reference, and what we change for our audience.

| Reference pattern | Our adaptation |
|---|---|
| Thin orange **top bar** with phone, email, address and social icons | Navy top bar: phone, address, Facebook and WhatsApp. Hidden on mobile and replaced by a sticky bottom action bar |
| **Centered logo** + hamburger / mega-menu | Logo on the left and a horizontal menu on desktop; a full-screen colorful menu on mobile |
| Full-bleed **photo hero** with a script tagline, a big headline and 2 pill CTAs | Hero on a sky-blue background with clouds: kids photo, "Where Kids Learn & Grow" in script, a big bubbly headline, and two CTAs: **Apply Now** and **Book a Visit**, plus a "50% OFF" sticker badge |
| **3 colored cards** overlapping the hero (yellow / teal / orange) | **4 class cards** (Pre Play / Play / LKG / UKG), each in a brand color, overlapping the hero edge |
| "Welcome" section: video on the left, intro text on the right | Same layout, using a school video or photo collage |
| **Animated counters** (since 1950, 100% international…) | Counters: years running, happy kids, trained teachers, student-to-teacher ratio |
| "Special Events" cards on a cream background | "Events & Activities" cards (study tours, art day, sports day) |
| **Testimonials carousel** with round photos and script names | Parent testimonials carousel with round photos and colored rings |
| Orange **CTA band** + orange footer | Purple/pink gradient "Admission Open — 50% OFF" band + navy footer with a map |
| Script font (Pacifico) for section titles + clean sans for body | Same idea, with a more playful, kid-friendly font set (see 4.2) |

**What we do better than the reference:** faster load (no heavy WordPress/Elementor), no cookie-modal clutter, a sticky mobile Call/WhatsApp bar, wavy SVG section dividers, floating doodles (stars, clouds, pencils, ABC blocks), and micro-animations.

---

## 4. Design system

### 4.1 Color palette (from the logo + banner)

| Token | Hex | Source | Use |
|---|---|---|---|
| `navy` | `#1E2A78` | Logo ring | Primary brand: header, footer, headings, links |
| `purple` | `#8B2C8F` | "PRE-SCHOOL & DAY CARE" text | Secondary headings, gradients |
| `red` | `#E32D2D` | "ENGLISH MEDIUM" brush, letter **E** | Highlights, badges |
| `orange` | `#F7941D` | Letter **S**, arrow | Primary CTA buttons |
| `yellow` | `#FFC20E` | Stars, "OPEN" | Stars, accents, hover |
| `green` | `#1B8F3A` | Letter **O**, "Where kids learn & grow" | Success states, script tagline |
| `pink` | `#E6197E` | Letters **K**, **I** | Fun accents, gradient with purple |
| `teal` | `#0E8FA6` | "PRE PLAY, PLAY…" bar | Info strips, class card |
| `sky` | `#CFEAF8` | Banner sky background | Section backgrounds |
| `cream` | `#FFF8EC` | — | Alternate section background |
| `ink` | `#1F2340` | — | Body text |

**Class color mapping:** Pre Play → pink, Play → orange, LKG → green, UKG → teal. Day Care → purple.

**Accessibility:** white text is only used on navy, purple, red, green or teal (these pass WCAG AA). Orange and yellow buttons use navy text.

### 4.2 Typography — "this is a kids' school" at a glance

| Role | Font (Google Fonts, free) | Why |
|---|---|---|
| **Display / headings** | **Fredoka** (600–700) | Round, bubbly and friendly. It echoes the balloon letters of "HELLO KIDS" and is still very readable |
| **Script accent** | **Gochi Hand** (or **Caveat Brush**) | Handwritten, like the green "Where kids learn & grow." Use it only for small taglines and eyebrow text |
| **Body / UI** | **Nunito** (400–800) | Rounded sans with excellent readability on mobile |

Special treatment: the hero word "HELLO KIDS" can show each letter in a different brand color, matching the banner. Load the fonts with `next/font` (self-hosted, no layout shift).

Type scale (mobile → desktop): H1 40→72px, H2 32→48px, H3 22→28px, body 16→18px, line-height 1.6.

### 4.3 UI language

- **Shapes:** large radius (24–32px cards, fully rounded pill buttons), blob-shaped image masks, wavy SVG dividers between sections.
- **Decorations:** floating clouds, stars, pencils, paper planes and ABC blocks (light SVG, slow float animation, `prefers-reduced-motion` respected).
- **Buttons:** pill-shaped with a 3D "pressable" bottom shadow (`box-shadow: 0 6px 0 <darker>`) that presses down on click.
- **Cards:** white with a colored top border or a colored background and a playful icon.
- **Icons:** Lucide + custom duotone kid icons for the 8 facilities.
- **Motion:** Framer Motion fade/slide-up on scroll, counters, a gentle wiggle on hover. Keep it subtle: parents, not kids, are the users.

---

## 5. Sitemap & pages

```
/                       Home
/about                  About Us (story, mission, why choose us, our teachers)
/programs               Programs overview
  /programs/pre-play    Pre Play (≈2–3 yrs)*
  /programs/play        Play (≈3–4 yrs)*
  /programs/lkg         LKG (≈4–5 yrs)*
  /programs/ukg         UKG (≈5–6 yrs)*
  /programs/day-care    Day Care
/facilities             All 8 facilities with photos
/admissions             Process, eligibility, documents, fees, 50% offer, Apply form
/gallery                Photo/video gallery (filter: classroom, events, tours, play zone)
/events                 Events & news list (+ /events/[slug])
/contact                Contact info, Google Map, contact form, Book a Visit
/faq                    Parents' FAQ
/privacy                Privacy policy
404                     Friendly "Oops! This page went out to play" page
```
\*Age ranges must be confirmed by the school.

### 5.1 Home page sections (in order)

1. **Top bar** (desktop): phone · address · Facebook · WhatsApp
2. **Header:** logo, menu, and an orange "Apply Now" button. Sticky; shrinks on scroll
3. **Hero:** sky background with clouds. Script line "Where Kids Learn & Grow", H1 "A Happy Place to **Play, Learn & Grow**", a sub-line "English Medium & English Version Pre-School & Day Care in Mirpur", CTAs [Apply Now] [Book a Visit], a rotating "50% OFF — Admission Open" sticker, and the kids photo in a blob frame
4. **Class cards ×4:** Pre Play, Play, LKG and UKG, each with a color, age, icon and "Learn more" link (overlapping the hero edge, like the reference)
5. **Welcome / About:** photo or video on the left; on the right, a short intro, 3 bullet promises and a "Read our story" link
6. **Why Choose Us: 8 facilities grid** (icon cards from the banner list)
7. **Stats counters:** e.g. 200+ happy kids, 15+ teachers, 1:10 ratio, 8 facilities *(real numbers needed)*
8. **Day Care highlight:** split section with hours, meals and safety (CCTV, AC)
9. **Daily routine timeline:** a playful horizontal timeline (arrival → circle time → learning → play → lunch → nap → pickup)
10. **Gallery preview:** masonry of 6–8 photos + "View gallery"
11. **Events & Study Tours:** 3 cards
12. **Parent testimonials** carousel
13. **Admission CTA band:** purple→pink gradient, "Admission Open — 50% OFF", [Apply Now] [Call 01901 641 644]
14. **FAQ preview:** 4–5 accordions
15. **Footer:** logo, tagline, quick links, programs, contact, Google Map embed, Facebook, © year
16. **Floating:** WhatsApp button (desktop); sticky bottom bar on mobile with [Call] [WhatsApp] [Apply]

---

## 6. Functional requirements

| ID | Feature | Details |
|---|---|---|
| F1 | **Admission inquiry form** | Fields: parent name, phone (BD format validation), email (optional), child name, child DOB/age, class (select), preferred start, message. Includes a honeypot and rate limiting. On submit: email to the school + auto-reply to the parent (if email given) + store the record |
| F2 | **Book a Visit form** | Name, phone, preferred date (date picker, Fri closed*), time slot, number of children |
| F3 | **Contact form** | Name, phone, email, message |
| F4 | **Lead storage** | Every submission is saved in the database and shown in the **Admin Panel → Admissions / Visits / Messages**, plus an email via Resend. Export to CSV/Excel |
| F5 | **Click-to-call / WhatsApp** | `tel:` and `wa.me` links with a prefilled message "Hi, I want to know about admission at Hello Kids." |
| F6 | **Google Map** | Embedded map + "Get Directions" button (lazy-loaded) |
| F7 | **Gallery** | Category filter, lightbox, lazy-loaded optimized images |
| F8 | **Events / News** | Managed in the Admin Panel (title, date, cover, photos, text) |
| F9 | **Offer banner** | Dismissible announcement bar "Admission Open — 50% OFF". On/off, text and end date are set in the Admin Panel |
| F10 | **SEO** | Per-page metadata, Open Graph images, `sitemap.xml`, `robots.txt`, JSON-LD (`Preschool` / `EducationalOrganization` + `LocalBusiness` with address, geo, phone, hours) |
| F11 | **Analytics** | Google Analytics 4 + events: `apply_submit`, `visit_submit`, `call_click`, `whatsapp_click`. Facebook Pixel (optional, for FB ads) |
| F12 | **Accessibility** | WCAG 2.1 AA, keyboard navigable, alt text, reduced-motion support |

\*Confirm weekly holidays and office hours.

---

## 6A. Admin Panel — the whole site is controlled from here

**URL:** `hellokidsschool.com/admin` (secure login). **Built with:** Payload CMS 3, which runs *inside* the same Next.js app. It needs no separate server and works on both Vercel and the VPS.

### Users & roles
| Role | Can do |
|---|---|
| **Super Admin** (developer/owner) | Everything, including users and site settings |
| **Admin** (principal/office) | All content, offers, leads, media |
| **Editor** (teacher) | Events, gallery, notices only |

Login uses email + password, with password reset by email, login rate-limit and an audit log ("who changed what").

### What can be controlled
| Area (Admin menu) | Fields the school can edit |
|---|---|
| **Site Settings** (global) | School name, logo, favicon, phone, WhatsApp, email, address, map pin, Facebook/YouTube links, office hours, footer text, default SEO title/description/OG image, GA4 / Pixel IDs |
| **Offer / Announcement** (global) | On/off, text ("Admission Open — 50% OFF"), button link, start/end date (auto-hides after the end date), color |
| **Home Page** (global) | Every Home section: hero title, tagline, hero photo(s), CTA labels; class cards; welcome text and photo; stats numbers; day-care block; daily routine steps; which events/testimonials/gallery photos to feature. Each section can be **shown/hidden and reordered** |
| **Pages** (About, Admissions, Facilities, Privacy…) | Block-based page builder (Hero, Text + Image, Feature Grid, Gallery, FAQ, CTA band) plus SEO fields per page |
| **Programs / Classes** | Name (Pre Play, Play, LKG, UKG, Day Care), age range, timing, color, icon, cover photo, description, subjects/activities, fees, order, active/inactive |
| **Facilities** | Title, icon, photo, short text, order |
| **Teachers & Leadership** | Name, designation, photo, qualification, message (Principal / Director message on About) |
| **Events & News** | Title, date, cover, photo album, rich text, featured flag, publish/draft/schedule |
| **Gallery** | Albums + categories (Classroom, Events, Art, Study Tours, Play Zone), drag-and-drop bulk upload, captions, order |
| **Testimonials** | Parent name, child/class, photo, quote, rating, show/hide |
| **FAQ** | Question, answer, category, order |
| **Fees** | Class-wise admission fee, monthly fee and discount; option to hide fees and show "Contact us" |
| **Notices** | Short notices (holiday, exam, meeting) with an optional PDF |
| **Media Library** | All images/PDFs, alt text, focal-point cropping, automatic resize to WebP/AVIF |
| **Leads** — Admissions, Visit Bookings, Contact Messages | List, search, filter by class/date/status (New → Contacted → Visited → Admitted / Closed), internal notes, CSV/Excel export, email alert to the office on each new lead |
| **Users** | Add/remove admins and set roles |

### Behaviour
- **Draft & preview:** see changes on the real site design before publishing. Version history allows rollback.
- **Instant update:** publishing triggers on-demand revalidation, so the live site updates within seconds while pages stay static and fast.
- **Mobile-friendly admin**, so the office can upload event photos straight from a phone.
- **Images:** uploaded once; the system makes all sizes automatically. They are stored on S3-compatible storage (Cloudflare R2), so the same storage works on Vercel and the VPS.

---

## 7. Non-functional requirements

- **Performance:** Lighthouse mobile ≥ 90 on all four categories; LCP < 2.5s on 4G; images in AVIF/WebP; hero image preloaded.
- **Responsive:** 360px → 1440px+; mobile-first.
- **Browser support:** latest Chrome, Safari, Edge and Firefox; Android Chrome on low-end devices.
- **Security:** server-side validation (Zod), rate limit on form APIs, secrets only in env vars, HTTPS, security headers.
- **Portability (Vercel → VPS):** no Vercel-only features. Avoid Vercel KV/Blob/Edge Config and Vercel-only Image Optimization limits. Everything must run with `next start` / Docker.

---

## 8. Tech stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 16 (App Router) + React 19 + TypeScript** | SSG/ISR for speed and SEO; first-class on Vercel; runs on a VPS with `output: "standalone"` |
| Styling | **Tailwind CSS v4** with design tokens as CSS variables | Fast, consistent; tokens from Section 4 |
| UI primitives | **shadcn/ui** (Radix) — Accordion, Dialog, Select, Sheet | Accessible, owned in the repo, easy to restyle in kids' theme |
| Animation | **Motion (Framer Motion)** + CSS keyframes for floating doodles | Scroll reveals, counters, carousels |
| Carousel / Lightbox | **Embla Carousel**, **yet-another-react-lightbox** | Lightweight |
| Icons | **Lucide React** + custom SVGs | |
| Fonts | `next/font/google`: Fredoka, Nunito, Gochi Hand | Self-hosted, no CLS |
| Forms | **React Hook Form + Zod** + Next.js Server Actions | Typed validation on both client and server |
| Email | **Resend** (+ React Email templates) | Simple API, works on Vercel and VPS. Fallback: Nodemailer SMTP |
| **Admin Panel / CMS** | **Payload CMS 3** (inside Next.js, at `/admin`) | Open source, self-hosted, no monthly fee; the same code runs on Vercel and the VPS; roles, drafts, versions, uploads and live preview built in |
| Database | **PostgreSQL**: Neon (free tier) while on Vercel → Postgres on the VPS later (`pg_dump`/restore to move) | Stores all content + leads |
| Media storage | **Cloudflare R2** (S3-compatible) via `@payloadcms/storage-s3` | Vercel has no persistent disk; R2 keeps working unchanged after the VPS move, with no egress fees |
| Images | `next/image` + `sharp` | Works the same on Vercel and VPS |
| SEO | Next Metadata API, `next-sitemap` or app `sitemap.ts`, JSON-LD | |
| Analytics | GA4 (`@next/third-parties`), optional Meta Pixel | |
| Quality | ESLint, Prettier, TypeScript strict, Husky + lint-staged | |
| Testing | Playwright (smoke tests for forms and nav), Lighthouse CI | |
| Package manager | **pnpm** (or npm) | |
| Repo / CI | GitHub → Vercel auto-deploy (preview per PR) | |
| **Phase 2 VPS** | Ubuntu 24.04, **Docker** (Next standalone image), **Nginx** reverse proxy, **Let's Encrypt** (Certbot), GitHub Actions deploy, PM2 alternative, daily DB backups | |

### 8.1 Project structure

```
hello-kids-school/
├─ src/
│  ├─ app/
│  │  ├─ (site)/page.tsx, about/, programs/[slug]/, facilities/, admissions/,
│  │  │   gallery/, events/[slug]/, contact/, faq/, privacy/
│  │  ├─ api/  (only if needed beyond Server Actions)
│  │  ├─ layout.tsx, sitemap.ts, robots.ts, not-found.tsx, opengraph-image.tsx
│  ├─ components/
│  │  ├─ layout/   (TopBar, Header, MobileMenu, Footer, MobileActionBar, OfferBar)
│  │  ├─ sections/ (Hero, ClassCards, Welcome, Facilities, Stats, Routine, …)
│  │  ├─ ui/       (Button, Card, SectionTitle, WaveDivider, Doodles, …)
│  │  └─ forms/    (AdmissionForm, VisitForm, ContactForm)
│  ├─ content/     (site.ts, programs.ts, facilities.ts, faq.ts, testimonials.ts, events/*.mdx)
│  ├─ lib/         (validators.ts, email.ts, seo.ts, analytics.ts)
│  ├─ payload/     (collections/, globals/, access.ts) — Admin Panel (done)
│  └─ styles/globals.css (tokens)
├─ public/ (images, logo.svg, favicon, og)
├─ assets/brand/ (original logo & banner)
├─ docs/PRD.md
├─ Dockerfile, docker-compose.yml (Phase 2)
└─ .env.example
```

---

## 9. Work flow — what we build, in order

### Phase 0 — Setup & assets (Day 1)
1. Collect the content and photos listed in Section 11.
2. **Recreate the logo as SVG/transparent PNG** (the current one is a JPG with a white background). Make the favicon and OG image.
3. Init the Next.js + TS + Tailwind + shadcn project, ESLint/Prettier, and the Git repo. Push to GitHub and connect Vercel (preview URL).

### Phase 1 — Design system (Day 2)
4. Add color and font tokens and the type scale in `globals.css`.
5. Build the base components: Button (3D pill), SectionTitle (script eyebrow + bubbly H2), Card, WaveDivider, Doodles, Container, Badge/Sticker.
6. Make a **style-guide page** (`/styleguide`, dev only) to review the look before building pages. **Review checkpoint ✅**

### Phase 2 — Layout shell (Day 3)
7. TopBar, sticky Header, mobile full-screen menu, Footer with map, floating WhatsApp, mobile action bar, OfferBar.

### Phase 3 — Home page (Days 4–6)
8. Build the Home sections 3 → 14 one by one, mobile first, with animations.
9. Do a responsive pass (360 / 768 / 1024 / 1440) and a performance pass. **Review checkpoint ✅** — client approves Home design before inner pages.

### Phase 4 — Inner pages (Days 7–9)
10. Programs overview + 5 program detail pages (one shared template, data-driven).
11. About, Facilities, Admissions, Gallery, Events, FAQ, Contact, Privacy, 404.

### Phase 4.5 — Admin Panel ✅ (done 17 Nov 2026)
- **Payload CMS 3.92** runs inside Next.js **16.4.6** at `/admin`.
- **Database:** SQLite file locally; Postgres when `DATABASE_URI` starts with `postgres` (Neon on Vercel, Postgres on the VPS).
- **Media:** stored in `media/` locally; Cloudflare R2 when `S3_BUCKET` is set.
- **Collections:** Programs, Facilities, Teachers & Leadership, Events, Testimonials, FAQs, Media & Gallery, Admission Inquiries, Visit Bookings, Contact Messages, Users (roles: Super Admin / Admin / Editor).
- **Globals:** Home Page (sections can be reordered and hidden), About Page, Admissions Page, Site Settings, Offer.
- **Version history:** last 20 versions kept for content and pages.
- **Lead export:** CSV export on the lead lists.
- **Instant updates:** saving calls on-demand `revalidatePath`, so static pages rebuild. Tested in a production build.
- **Seed:** `npm run seed` loads the starter content from `src/content/*.ts` plus the photos, and creates the first Super Admin. Office guide: `docs/ADMIN-GUIDE.md`.
- **Not done yet:** draft/live preview; Notices collection. Rich text was left out on purpose: plain textareas are simpler for the office, and leaving out the Lexical editor also removed its vulnerable happy-dom dependency.
- **Known advisories** (inside Payload, no fix available yet): csv-parse in the import/export plugin (only logged-in admins can use import) and esbuild inside drizzle-kit (dev tooling only).

### Phase 5 — Forms & integrations (Day 13)
12. Admission, Visit and Contact forms: Zod, Server Actions, save to Payload "Leads", Resend email, rate limit, honeypot, success screens.
13. WhatsApp/Call links, Google Map, GA4 + conversion events, optional Meta Pixel.

### Phase 6 — SEO & QA (Day 11)
14. Metadata, OG images, sitemap, robots, JSON-LD LocalBusiness/Preschool. Google Search Console + Google Business Profile link.
15. QA: Lighthouse ≥ 90, accessibility check, cross-browser testing on real Android phones, Playwright smoke tests, spelling/content review.

### Phase 7 — Launch on Vercel (Day 12)
16. Connect **hellokidsschool.com** in Vercel (DNS A/CNAME), HTTPS, `www` → apex redirect, env vars (Resend key, Google creds, GA ID).
17. Submit the sitemap to Search Console. Hand over a content-update guide.

### Phase 8 — Move to VPS (later)
18. Set `output: "standalone"`, add a Dockerfile and docker-compose (app + Postgres), and move the database from Neon with `pg_dump` → `pg_restore`. Media stays on R2.
19. Set up the VPS: Nginx, Certbot SSL, firewall, GitHub Actions deploy, uptime monitoring and daily database backups. Lower the DNS TTL, switch, and verify.

---

## 10. Out of scope (v1)
Online fee payment, parent login/portal, student management system, Bangla language version, blog with comments. These can be planned for v2.

## 10A. Photo placement map (received 17 Nov 2026)

Originals are in `assets/raw/`; optimized copies are in `public/images/`. In the CMS, every slot below becomes an editable image field.

| Section | Photo(s) | Why |
|---|---|---|
| **Home Hero** | `orientation-2026.jpg` (p25) | Brightest photo: a butterfly mural, "Orientation 2026" and the whole class in uniform. It says "happy school" instantly |
| Hero floating mini-photo | `butterfly-boy.jpg` (p23) | Single smiling child, playful |
| **Class card — Pre Play** | `preplay.jpg` (p16) | Youngest kids at small colorful desks |
| **Class card — Play** | `play.jpg` (p05) | Kids on the carpet holding paper-flower crafts |
| **Class card — LKG** | `lkg.jpg` (p18) | Red desks with a mural wall |
| **Class card — UKG** | `ukg-graduate.jpg` (p01) | Graduation gown: "ready for big school" |
| **Welcome / About** | `classroom-mural.jpg` (p08) + `circle-time.jpg` (p13) + `art-sunflower.jpg` (p04) | Photo collage: colorful rooms, development wall, a child's craft |
| **Facilities: Day Care** | `daycare.jpg` (p19) | Relaxed group on the carpet |
| **Facilities: Early Education** | `early-education.jpg` (p13) | Development-areas wall |
| **Facilities: Extracurricular** | `art-class.jpg` (p28) | Painting class |
| **Facilities: Kids Play Zone** | `play-zone.jpg` (p21) | Child on the turf |
| **Facilities: Well Trained Teachers** | `teachers-class.jpg` (p07) | Teacher supervising a class |
| **Facilities: Smart Pre-School** | `smart-class.jpg` (p26) | Modern room with a tree mural |
| **Facilities: AC Class Room** | `ac-classroom.jpg` (p06) | AC unit visible, tidy room |
| **Facilities: Study Tours** | `study-tour.jpg` (p20) | Outdoor trip with teachers |
| **Day Care highlight** | `birthday-1.jpg` (p11) | Celebration, warmth |
| **Events cards** | `orientation-2.jpg` (p27) · `fruit-festival.jpg` (p09) · `birthday-2.jpg` (p14) | Orientation 2026, Fruit Festival 2026, Birthday Celebration |
| **Gallery** | All class/event photos (p04–p29) | Filterable masonry |
| **Admission CTA band** | `art-fish.jpg` (p29) | Proud child showing artwork |
| **Principal's message** (About + Home) | `principal.jpg` (principal-1) | Name and title to be confirmed |
| **Director/Chairman message** (About) | `director.jpg` (principal-2) | Name and title to be confirmed |
| Not used | p02 (clip-art with a fake transparent background), p03 (stock photo) | Low quality / not real school photos |

## 11. Content needed from the school
- [x] Real photos (33 received 17 Nov 2026)
- [ ] Names and designations for the two leadership photos, plus their messages (3–5 lines each)
- [ ] Short school story: founding year
- [ ] Teacher list (name, role, photo) — optional
- [ ] Age range per class, class timings, day-care hours, weekly holidays
- [ ] Fee structure (or "contact for fees"), exact terms and end date of the 50% offer
- [ ] Admission process and required documents
- [ ] 3–6 parent testimonials (with permission)
- [ ] Real numbers for the counters
- [ ] Facebook page URL, email address, Google Maps pin
- [ ] Logo source file (AI/PSD/SVG) if available
- [ ] Photo consent from parents for any child photos used online
