# Hello Kids — Admin Panel Guide

**Login:** `https://hellokidsschool.com/admin` (locally: `http://localhost:3000/admin`)

Every change you **Save** appears on the live website within a few seconds.
Every page and setting keeps its **version history** (the "Versions" tab), so you can restore an older version anytime.

---

## Who can do what

| Role | Can do |
|---|---|
| **Super Admin** | Everything, including adding/removing users |
| **Admin** | All content, pages, offers, settings and leads |
| **Editor** | Events, gallery photos and media only |

Add staff in **Settings → Users → Create New**, then pick a role. Only a Super Admin can do this.

---

## Daily tasks

### 1. Check new admissions, visits and messages
**Leads → Admission Inquiries / Visit Bookings / Contact Messages**
- New items have the status **New**. After calling the parent, change the status: *Contacted → Visited → Admitted* (or *Closed*).
- Use **Notes** (right side) for internal notes, e.g. "Called 12 Nov, visiting Saturday".
- **Export to Excel/CSV:** in the list, click **Export**.

### 2. Change the offer bar at the top of the site
**Settings → Offer / Announcement**
- Untick **Show announcement** to hide it.
- Set **Hide automatically after** to make it disappear after a date.

### 3. Add event photos to the gallery
**Content → Media & Gallery → Create New** (you can drag in many photos at once)
1. Write a short **Description** (e.g. "Kids at Victory Day program").
2. Tick **Show in gallery** and choose a **Gallery category**.
3. Tick **Feature on Home page** to show it in the Home page gallery too.

### 4. Add an event / news item
**Content → Events & News → Create New**: title, date text, cover photo, short description.
Tick **Show on Home page** to feature it (the Home page shows up to 3).

---

## Website content

| What you want to change | Where |
|---|---|
| Phone, WhatsApp, address, hours, Facebook link, Google Analytics | **Settings → Site Settings** |
| Home page: hero text and photos, welcome text, numbers, Day Care block, daily routine | **Pages → Home Page** (tabs at the top) |
| **Show/hide or reorder Home page sections** | **Pages → Home Page → Sections**: drag to reorder, untick **Show** to hide |
| About page: story, mission, vision, values | **Pages → About Page** |
| Admission steps, document list, fee text | **Pages → Admissions Page** |
| Classes (Pre Play, Play, LKG, UKG, Day Care): age, photos, what they learn, fees | **Content → Programs & Classes** |
| Facilities | **Content → Facilities** |
| Principal / Director messages, teachers | **Content → Teachers & Leadership** (tick **Show message** to show it in "Our Leadership") |
| Parent reviews | **Content → Parent Testimonials** (the section appears automatically once at least one is added; only real reviews, with permission) |
| FAQ | **Content → FAQs** |

**Ordering:** most lists have an **Order** number on the right. Lower numbers show first.

**Photos:** upload any JPG/PNG/WebP. The system resizes and compresses it automatically. Set the **focal point** so faces stay in view when the photo is cropped.

---

## For the developer

```bash
npm run dev               # start locally → http://localhost:3000 (admin at /admin)
npm run seed              # fill an empty database with starter content + photos
SEED_FRESH=1 npm run seed # wipe content (keeps users & leads) and reseed
npm run generate:types    # after changing collections/globals
npm run generate:importmap
```

- Local database: `data/hello-kids.db` (SQLite). Uploads: `media/`. Both are git-ignored.
- Production: set `DATABASE_URI` to Postgres (Neon), and `S3_*` for Cloudflare R2. See `.env.example`.
- Payload config: `src/payload.config.ts`. Collections are in `src/payload/collections/`, page settings in `src/payload/globals.ts`.
- The site reads content through `src/lib/cms.ts`. Saving in the admin calls `revalidatePath` (`src/payload/hooks.ts`), so static pages rebuild on demand.
