/**
 * Seed the CMS with the starter content + photos.
 *   npm run seed            → only fills an empty database
 *   SEED_FRESH=1 npm run seed → wipes content collections first (keeps users & leads)
 *
 * Creates the first Super Admin from SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD (.env.local).
 * If they're missing, a random password is generated and saved to .env.local.
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { getPayload } from "payload";
import config from "@payload-config";
import { events, facilities, faq, home, leadership, offer, programs, site } from "../content/site";
import { about, admissions, dayCare, fullGallery, programDetails } from "../content/pages";
import { fillLabels } from "./labels";

// A fresh object per call — Payload plugins write flags into req.context.
const ctx = () => ({ disableRevalidate: true });
const root = process.cwd();
const fresh = process.env.SEED_FRESH === "1";

const altFor: Record<string, string> = Object.fromEntries(fullGallery.map((g) => [g.src, g.alt]));
const extraAlt: Record<string, string> = {
  "/images/ukg-graduate.webp": "UKG student in graduation gown",
  "/images/principal.webp": "Principal of Hello Kids",
  "/images/director.webp": "Director of Hello Kids",
};
const homeGallery = new Set([
  "/images/orientation-2026.webp", "/images/art-sunflower.webp", "/images/play.webp", "/images/birthday-4.webp", "/images/art-class.webp",
  "/images/play-zone.webp", "/images/classroom-mural.webp", "/images/art-watermelon.webp", "/images/birthday-3.webp",
]);

const t = (arr: string[]) => arr.map((text) => ({ text }));

async function run() {
  console.log("[seed] starting…");
  const payload = await getPayload({ config });
  const log = (m: string) => console.log(`[seed] ${m}`);
  log("Connected to database.");

  // ---------- Admin user ----------
  const users = await payload.count({ collection: "users" });
  if (users.totalDocs === 0) {
    let email = process.env.SEED_ADMIN_EMAIL;
    let password = process.env.SEED_ADMIN_PASSWORD;
    if (!email || !password) {
      email = "admin@hellokidsschool.com";
      password = crypto.randomBytes(12).toString("base64url");
      fs.appendFileSync(path.join(root, ".env.local"), `\nSEED_ADMIN_EMAIL=${email}\nSEED_ADMIN_PASSWORD=${password}\n`);
      log("Generated Super Admin login and saved it to .env.local (SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD).");
    }
    await payload.create({ collection: "users", data: { name: "Super Admin", email, password, role: "super-admin" }, context: ctx() });
    log(`Created Super Admin: ${email}`);
  }

  // ---------- Fresh mode ----------
  const contentCollections = ["programs", "facilities", "team", "events", "faqs", "testimonials", "media"] as const;
  if (fresh) {
    for (const c of contentCollections) await payload.delete({ collection: c, where: { id: { exists: true } }, context: ctx() });
    log("Cleared content collections.");
  } else if ((await payload.count({ collection: "programs" })).totalDocs > 0) {
    log("Content already exists — skipping. Set SEED_FRESH=1 to reseed.");
    process.exit(0);
  }

  // ---------- Media ----------
  const media = new Map<string, number | string>();
  const files = fs.readdirSync(path.join(root, "public/images")).filter((f) => f.endsWith(".webp"));
  const galleryOrder = new Map(fullGallery.map((g, i) => [g.src, i]));
  for (const f of files) {
    const src = `/images/${f}`;
    const g = fullGallery.find((x) => x.src === src);
    const doc = await payload.create({
      collection: "media",
      filePath: path.join(root, "public/images", f),
      data: {
        alt: altFor[src] ?? extraAlt[src] ?? f.replace(/[-_]/g, " ").replace(".webp", ""),
        showInGallery: !!g,
        galleryCategory: g?.cat,
        featuredOnHome: homeGallery.has(src),
        galleryOrder: galleryOrder.get(src) ?? 0,
      },
      context: ctx(),
    });
    media.set(src, doc.id);
  }
  log(`Uploaded ${media.size} images.`);
  const m = (src: string) => {
    const id = media.get(src);
    if (!id) throw new Error(`Missing image ${src}`);
    return id as number;
  };

  // ---------- Programs ----------
  const allPrograms = [...programs, dayCare];
  for (const [i, p] of allPrograms.entries()) {
    const d = programDetails[p.slug];
    await payload.create({
      collection: "programs",
      context: ctx(),
      data: {
        name: p.name, slug: p.slug, age: p.age, color: p.color, image: m(p.image), blurb: p.blurb, intro: d.intro,
        learn: t(d.learn), highlights: t(d.highlights), photos: d.photos.map(m),
        showOnHome: p.slug !== "day-care", active: true, order: i,
      },
    });
  }

  for (const [i, f] of facilities.entries()) {
    await payload.create({ collection: "facilities", context: ctx(),
      data: { title: f.title, text: f.text, icon: f.icon as never, color: f.color, image: m(f.image), order: i } });
  }

  for (const [i, l] of leadership.entries()) {
    await payload.create({ collection: "team", context: ctx(),
      data: { name: l.name, role: l.role, photo: m(l.image), message: l.message, showMessage: true, order: i } });
  }

  for (const [i, e] of events.entries()) {
    await payload.create({ collection: "events", context: ctx(),
      data: { title: e.title, dateLabel: e.date, color: e.color, image: m(e.image), text: e.text, featured: true, order: i } });
  }

  for (const [i, f] of faq.entries()) {
    await payload.create({ collection: "faqs", context: ctx(), data: { question: f.q, answer: f.a, showOnHome: true, order: i } });
  }
  log("Created programs, facilities, team, events and FAQs.");

  // ---------- Globals ----------
  await payload.updateGlobal({ slug: "site-settings", context: ctx(), data: {
    name: site.name, shortName: site.shortName, tagline: site.tagline, motto: site.motto, hours: site.hours,
    phoneDisplay: site.phoneDisplay, phone: site.phone, whatsapp: site.whatsapp, whatsappText: site.whatsappText, email: site.email || undefined,
    address: site.address, mapQuery: site.mapQuery, facebook: site.facebook,
    seoTitle: `${site.name} | English Medium Pre-School in Mirpur, Dhaka`,
    seoDescription: "Hello Kids Pre-School & Day Care — English Medium & English Version pre-school in West Shewrapara, Mirpur, Dhaka. Pre Play, Play, LKG, UKG and Day Care. Admission open with 50% off.",
    ogImage: m("/images/orientation-2026.webp"),
  } });

  await payload.updateGlobal({ slug: "offer", context: ctx(), data: { enabled: offer.enabled, text: offer.text, cta: offer.cta, href: offer.href } });

  await payload.updateGlobal({ slug: "home-page", context: ctx(), data: {
    hero: {
      eyebrow: home.hero.eyebrow, titleLine2: home.hero.titleLine2, text: home.hero.text, badges: t(home.hero.badges),
      image: m(home.hero.image), mini: m(home.hero.mini), miniCaption: "Admission Open!",
    },
    sections: ["classes", "welcome", "facilities", "stats", "daycare", "routine", "leadership", "gallery", "events", "testimonials", "admissionCta", "faq"]
      .map((section) => ({ section: section as never, enabled: true })),
    welcome: {
      eyebrow: home.welcome.eyebrow, title: home.welcome.title, paragraphs: t(home.welcome.text), points: t(home.welcome.points),
      images: home.welcome.images.map(m), badgeNumber: "4", badgeText: "Happy classes for little learners",
    },
    stats: home.stats.map((s) => ({ value: s.value, suffix: s.suffix, label: s.label, color: s.color })),
    daycare: { eyebrow: home.daycare.eyebrow, title: home.daycare.title, text: home.daycare.text, points: t(home.daycare.points), image: m(home.daycare.image) },
    routine: home.routine.map((r) => ({ title: r.title, text: r.text, icon: r.icon as never, color: r.color })),
  } });

  await payload.updateGlobal({ slug: "about-page", context: ctx(), data: {
    story: t(about.story), storyImage: m("/images/orientation-2.webp"), mission: about.mission, vision: about.vision,
    values: about.values.map((v) => ({ title: v.title, text: v.text, icon: v.icon as never, color: v.color })),
  } });

  await payload.updateGlobal({ slug: "admissions-page", context: ctx(), data: {
    steps: admissions.steps, documents: t(admissions.documents),
    feeNote: "Please call or visit us for the latest fee details and the 50% admission offer.",
    formImage: m("/images/butterfly-boy.webp"),
  } });
  log("Filled Site Settings, Offer, Home, About and Admissions pages.");
  await fillLabels(payload, (m) => log(m.trim()));
  log("Filled page banners, headings and SEO.");
  log("Done ✔");
  process.exit(0);
}

try {
  await run();
} catch (e) {
  console.error(e);
  process.exit(1);
}
