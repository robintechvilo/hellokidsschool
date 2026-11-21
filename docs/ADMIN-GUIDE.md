# Hello Kids — Admin Panel Guide

**Login:** `https://hellokidsschool.vercel.app/admin` (later: `https://hellokidsschool.com/admin`)

- When you **Save**, the change appears on the live website within a few seconds.
- Every page keeps a **Versions** history (top right), so you can restore an older version anytime.
- Click **👁 Live Preview** (next to Save) to see the real page beside the form. It refreshes every time you save.

---

## The menu

| Menu group | What's inside |
|---|---|
| **📥 Parent Leads** | Admission Inquiries, Visit Bookings, Contact Messages from the website forms |
| **🏫 Website Pages** | **Programs & Classes**, plus one entry for every page: Home, About, Programs, Facilities, Gallery, Events, Admissions, Contact, FAQ, Privacy Policy |
| **🧩 Page Content** | Reusable items shown on pages: Facilities, Teachers & Leadership, Events & News, Parent Testimonials, FAQs |
| **🖼️ Photos & Files** | Every photo and PDF. Tick **Show in gallery** to add a photo to the Gallery |
| **⚙️ Settings** | Users, **Site Settings** (phone, address, logo, social links, footer text, visit times), **Offer / Announcement** |

The **dashboard** (home screen of the admin) shows:
- how many **new** leads are waiting
- quick buttons for the most common jobs
- a "View website" button

---

## Every page has the same tabs

Open any page under **🏫 Website Pages**:

| Tab | What it changes |
|---|---|
| **Top banner** | The sky-blue banner at the top: small handwritten line, big title, short text |
| *(page-specific tabs)* | e.g. About → Story / Mission & values; Admissions → Content; Contact → Headings |
| **Google & sharing** | Page title and description for Google, and the image for Facebook/WhatsApp previews |

**Home Page tabs:**
- **Hero (top):** handwritten line, intro text, badges, button labels, classes line, main and small photos.
- **Show / order sections:** drag ⠿ to reorder the Home sections, untick **Show** to hide one.
- **Welcome, Numbers, Day Care, Daily Routine:** the content of those sections.
- **Section headings:** titles above Facilities, Routine, Leadership, Gallery, Events, Testimonials and FAQ.
- **Google & sharing:** SEO for the Home page.

**Class pages:** in *Programs Page → Class page headings*, write `{class}` where the class name should appear, e.g. "Apply for {class}" shows as "Apply for Play".

---

## Daily tasks

### Check new admissions, visits and messages
**📥 Parent Leads**, or click the counters on the dashboard.
- Change the **Status** as you go: *New → Contacted → Visited → Admitted* (or *Closed*).
- Write internal notes in **Notes** (right side).
- Download the list with **Export** at the top of the list.

### Change the admission offer
**⚙️ Settings → Offer / Announcement** controls:
- the colored top bar (text and button)
- the round **sticker** on the Home photo (e.g. "50%" / "OFF")
- the big **admission banner** (small line and photo)
- **Hide automatically after**: set a date to switch the offer off on its own

### Add event photos to the gallery
1. Go to **🖼️ Photos & Files → Create New**. You can drag in many photos at once.
2. Write a short **Description**, e.g. "Victory Day program".
3. Tick **Show in gallery** and choose a **Gallery category**.
4. Tick **Feature on Home page** to also show the photo on the Home page.

### Add an event / news
**🧩 Page Content → Events & News → Create New**. Tick **Show on Home page** to feature it (up to 3 show there).

### Change a class (age, fees, photos, what children learn)
**🏫 Website Pages → Programs & Classes**. Each class has its own page at `/programs/<url>`.

### Leadership (Chairman, Managing Director, Principal…)
**🧩 Page Content → Teachers & Leadership**
- Tick **Show message** to show the person in "Our Leadership".
- **Order** sets the position (lower number = first).
- Use a passport-size photo (portrait, 7:9).

---

## Who can do what

| Role | Can do |
|---|---|
| **Super Admin** | Everything, including adding/removing users |
| **Admin** | All pages, content, offers, settings and leads |
| **Editor** | Events, photos and media only |

To add staff: **⚙️ Settings → Users → Create New** (Super Admin only).

---

## For the developer

```bash
npm run dev               # local site + admin → http://localhost:3000 (/admin)
npm run seed              # fill an EMPTY database with starter content + photos
npm run backfill          # fill any EMPTY page/label fields with default texts (never overwrites)
npm run migrate:create -- <name>   # after changing collections/globals (Postgres)
npm run generate:types && npm run generate:importmap
```

- **Default texts:**
  - `src/content/labels.ts`: page banners, headings, SEO, privacy text
  - `src/content/site.ts` and `src/content/pages.ts`: starter content
- **CMS schema:**
  - `src/payload/globals.ts`: one global per page
  - `src/payload/collections/*`
  - `src/payload/groups.ts`: menu groups and page URLs used for live preview
- **Admin UI:**
  - `src/payload/admin/*`: logo, dashboard welcome panel, menu links
  - `src/app/(payload)/custom.css`: admin theme
- **Data layer:** `src/lib/cms.ts`. Every getter falls back to the defaults if a field is empty, so the site never shows blank text.
- **Production:** Neon Postgres and Vercel Blob. Deploys run `payload migrate` automatically (`vercel-build`).
