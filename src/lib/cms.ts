import "server-only";
import { cache } from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";
import type { BrandColor } from "@/content/site";
import { heroExtras, homeHeadings, offerExtras, pageDefaults, privacySections, siteExtras, type Heading, type PageKey } from "@/content/labels";

/** ---------- View types used by the UI ---------- */
export type Img = { src: string; alt: string; w: number; h: number };
export type { Heading } from "@/content/labels";
export type SiteData = {
  name: string; shortName: string; tagline: string; motto: string; hours: string;
  phoneDisplay: string; tel: string; wa: string; email: string;
  address: { line1: string; line2: string; city: string }; mapQuery: string;
  facebook: string; youtube: string; seoTitle: string; seoDescription: string; ogImage: Img | null; ga4Id: string;
  logo: Img | null; footerAbout: string; visitTimes: string[];
};
export type OfferData = {
  enabled: boolean; text: string; cta: string; href: string;
  stickerTop: string; stickerBottom: string; bannerEyebrow: string; bannerImage: Img;
};
export type ProgramData = {
  slug: string; name: string; age: string; color: BrandColor; image: Img; blurb: string; intro: string;
  learn: string[]; highlights: string[]; photos: Img[]; fee: string; showOnHome: boolean;
};
export type FacilityData = { title: string; text: string; icon: string; color: BrandColor; image: Img };
export type TeamData = { name: string; role: string; photo: Img; message: string; qualification: string };
export type EventData = { title: string; dateLabel: string; image: Img; text: string; color: BrandColor };
export type GalleryData = { img: Img; cat: string };
export type FaqData = { q: string; a: string };
export type TestimonialData = { name: string; child: string; quote: string; photo: Img | null };
export type RoutineData = { title: string; text: string; icon: string; color: BrandColor };
export type StatData = { value: number; suffix: string; label: string; color: BrandColor };
export type HomeHeadings = typeof homeHeadings;
export type HomeData = {
  hero: {
    eyebrow: string; titleLine2: string; text: string; badges: string[]; image: Img; mini: Img; miniCaption: string;
    classesLine: string; primaryCta: string; secondaryCta: string;
  };
  sections: string[];
  welcome: { eyebrow: string; title: string; paragraphs: string[]; points: string[]; images: Img[]; badgeNumber: string; badgeText: string };
  stats: StatData[];
  daycare: { eyebrow: string; title: string; text: string; points: string[]; image: Img };
  routine: RoutineData[];
  headings: HomeHeadings;
  seo: { title: string; description: string; image: Img | null };
};
export type PageData = {
  banner: Heading;
  seo: { title: string; description: string; image: Img | null };
  headings: Record<string, Heading>;
};

/** ---------- Helpers ---------- */
const PLACEHOLDER: Img = { src: "/logo.png", alt: "", w: 512, h: 512 };

export function toImg(m: unknown): Img {
  if (!m || typeof m !== "object") return PLACEHOLDER;
  const d = m as Media;
  if (!d.url) return PLACEHOLDER;
  // Local uploads come back as absolute URLs (serverURL); make them relative so next/image treats them as local.
  const src = d.url.replace(/^https?:\/\/[^/]+(?=\/api\/media\/)/, "");
  return { src, alt: d.alt ?? "", w: d.width ?? 1200, h: d.height ?? 900 };
}
const imgOrNull = (m: unknown) => (m && typeof m === "object" ? toImg(m) : null);
const texts = (arr?: { text?: string | null }[] | null) => (arr ?? []).map((x) => x.text ?? "").filter(Boolean);
const color = (c?: string | null) => (c ?? "pink") as BrandColor;
const or = (v: string | null | undefined, fallback: string) => (v && v.trim() ? v : fallback);

type RawHeading = { eyebrow?: string | null; title?: string | null; text?: string | null } | null | undefined;
/** CMS heading with per-field fallback to the defaults in content/labels.ts. */
export function toHeading(h: RawHeading, fb: Heading): Heading {
  return { eyebrow: or(h?.eyebrow, fb.eyebrow), title: or(h?.title, fb.title), text: or(h?.text, fb.text ?? "") };
}
type RawSeo = { title?: string | null; description?: string | null; image?: unknown } | null | undefined;
const toSeo = (s: RawSeo, fb: { title: string; description: string }) => ({
  title: or(s?.title, fb.title), description: or(s?.description, fb.description), image: imgOrNull(s?.image),
});

const payload = cache(() => getPayload({ config }));

/** ---------- Globals ---------- */
export const getSite = cache(async (): Promise<SiteData> => {
  const s = await (await payload()).findGlobal({ slug: "site-settings", depth: 1 });
  const wa = s.whatsapp ?? "";
  const visitTimes = texts(s.visitTimes);
  return {
    name: s.name ?? "Hello Kids Pre-School & Day Care",
    shortName: s.shortName ?? "Hello Kids",
    tagline: s.tagline ?? "", motto: s.motto ?? "", hours: s.hours ?? "",
    phoneDisplay: s.phoneDisplay ?? "", tel: `tel:${s.phone ?? ""}`,
    wa: `https://wa.me/${wa}${s.whatsappText ? `?text=${encodeURIComponent(s.whatsappText)}` : ""}`,
    email: s.email ?? "",
    address: { line1: s.address?.line1 ?? "", line2: s.address?.line2 ?? "", city: s.address?.city ?? "" },
    mapQuery: s.mapQuery ?? "", facebook: s.facebook ?? "", youtube: s.youtube ?? "",
    seoTitle: s.seoTitle ?? "", seoDescription: s.seoDescription ?? "", ogImage: imgOrNull(s.ogImage), ga4Id: s.ga4Id ?? "",
    logo: imgOrNull(s.logo),
    footerAbout: or(s.footerAbout, siteExtras.footerAbout),
    visitTimes: visitTimes.length ? visitTimes : siteExtras.visitTimes,
  };
});

export const getOffer = cache(async (): Promise<OfferData> => {
  const o = await (await payload()).findGlobal({ slug: "offer", depth: 1 });
  const expired = o.endDate ? new Date(o.endDate).getTime() + 86_400_000 < Date.now() : false;
  const bannerImage = imgOrNull(o.bannerImage);
  return {
    enabled: !!o.enabled && !expired && !!o.text, text: o.text ?? "", cta: o.cta ?? "", href: o.href ?? "/admissions",
    stickerTop: or(o.stickerTop, offerExtras.stickerTop), stickerBottom: or(o.stickerBottom, offerExtras.stickerBottom),
    bannerEyebrow: or(o.bannerEyebrow, offerExtras.bannerEyebrow),
    bannerImage: bannerImage ?? { src: offerExtras.bannerImage, alt: "Proud student showing her painting", w: 1280, h: 960 },
  };
});

export const getHome = cache(async (): Promise<HomeData> => {
  const h = await (await payload()).findGlobal({ slug: "home-page", depth: 1 });
  const hd = h.headings;
  return {
    hero: {
      eyebrow: h.hero?.eyebrow ?? "", titleLine2: h.hero?.titleLine2 ?? "", text: h.hero?.text ?? "",
      badges: texts(h.hero?.badges), image: toImg(h.hero?.image), mini: toImg(h.hero?.mini), miniCaption: h.hero?.miniCaption ?? "",
      classesLine: or(h.hero?.classesLine, heroExtras.classesLine),
      primaryCta: or(h.hero?.primaryCta, heroExtras.primaryCta),
      secondaryCta: or(h.hero?.secondaryCta, heroExtras.secondaryCta),
    },
    sections: (h.sections ?? []).filter((s) => s.enabled).map((s) => s.section),
    welcome: {
      eyebrow: h.welcome?.eyebrow ?? "", title: h.welcome?.title ?? "",
      paragraphs: texts(h.welcome?.paragraphs), points: texts(h.welcome?.points),
      images: (h.welcome?.images ?? []).map(toImg), badgeNumber: h.welcome?.badgeNumber ?? "", badgeText: h.welcome?.badgeText ?? "",
    },
    stats: (h.stats ?? []).map((s) => ({ value: s.value, suffix: s.suffix ?? "", label: s.label, color: color(s.color) })),
    daycare: {
      eyebrow: h.daycare?.eyebrow ?? "", title: h.daycare?.title ?? "", text: h.daycare?.text ?? "",
      points: texts(h.daycare?.points), image: toImg(h.daycare?.image),
    },
    routine: (h.routine ?? []).map((r) => ({ title: r.title, text: r.text, icon: r.icon, color: color(r.color) })),
    headings: {
      facilities: toHeading(hd?.facilities, homeHeadings.facilities),
      routine: toHeading(hd?.routine, homeHeadings.routine),
      leadership: toHeading(hd?.leadership, homeHeadings.leadership),
      gallery: toHeading(hd?.gallery, homeHeadings.gallery),
      events: toHeading(hd?.events, homeHeadings.events),
      testimonials: toHeading(hd?.testimonials, homeHeadings.testimonials),
      faq: toHeading(hd?.faq, homeHeadings.faq),
    },
    seo: { title: h.seo?.title ?? "", description: h.seo?.description ?? "", image: imgOrNull(h.seo?.image) },
  };
});

/** Banner + SEO + section headings for any inner page (Admin → 🏫 Website Pages). */
export const getPage = cache(async (key: PageKey): Promise<PageData> => {
  const g = (await (await payload()).findGlobal({ slug: `${key}-page` as never, depth: 1 })) as Record<string, unknown>;
  const d = pageDefaults[key];
  const headingKeys: Record<string, string> = {
    story: "storyHeading", values: "valuesHeading", about: "aboutHeading", learn: "learnHeading", apply: "applyHeading",
    steps: "stepsHeading", form: "formHeading", message: "messageHeading", location: "locationHeading", visit: "visitHeading",
  };
  const headings: Record<string, Heading> = {};
  for (const [k, fb] of Object.entries(d.headings as Record<string, Heading>)) {
    headings[k] = toHeading(g[headingKeys[k] ?? k] as RawHeading, fb);
  }
  return { banner: toHeading(g.banner as RawHeading, d.banner), seo: toSeo(g.seo as RawSeo, d.seo), headings };
});

/** Next.js metadata for an inner page, from its CMS SEO fields. */
export async function pageMetadata(key: PageKey) {
  const { seo } = await getPage(key);
  return { title: seo.title, description: seo.description, openGraph: seo.image ? { images: [seo.image.src] } : undefined };
}

export const getAbout = cache(async () => {
  const a = await (await payload()).findGlobal({ slug: "about-page", depth: 1 });
  return {
    story: texts(a.story), storyImage: imgOrNull(a.storyImage), mission: a.mission ?? "", vision: a.vision ?? "",
    values: (a.values ?? []).map((v) => ({ title: v.title, text: v.text, icon: v.icon, color: color(v.color) })),
  };
});

export const getAdmissionsPage = cache(async () => {
  const a = await (await payload()).findGlobal({ slug: "admissions-page", depth: 1 });
  return {
    steps: (a.steps ?? []).map((s) => ({ title: s.title, text: s.text })),
    documents: texts(a.documents), feeNote: a.feeNote ?? "", formImage: imgOrNull(a.formImage),
  };
});

export const getPrivacySections = cache(async () => {
  const p = await (await payload()).findGlobal({ slug: "privacy-page" });
  const sections = (p.sections ?? []).map((s) => ({ heading: s.heading, text: s.text }));
  return sections.length ? sections : privacySections;
});

/** ---------- Collections ---------- */
function mapProgram(p: import("@/payload-types").Program): ProgramData {
  return {
    slug: p.slug, name: p.name, age: p.age, color: color(p.color), image: toImg(p.image), blurb: p.blurb, intro: p.intro,
    learn: texts(p.learn), highlights: texts(p.highlights), photos: (p.photos ?? []).map(toImg), fee: p.fee ?? "", showOnHome: !!p.showOnHome,
  };
}

export const getPrograms = cache(async (): Promise<ProgramData[]> => {
  const r = await (await payload()).find({ collection: "programs", where: { active: { equals: true } }, sort: "order", depth: 1, limit: 50 });
  return r.docs.map(mapProgram);
});

export const getProgram = cache(async (slug: string) => (await getPrograms()).find((p) => p.slug === slug) ?? null);

export const getFacilities = cache(async (): Promise<FacilityData[]> => {
  const r = await (await payload()).find({ collection: "facilities", sort: "order", depth: 1, limit: 50 });
  return r.docs.map((f) => ({ title: f.title, text: f.text, icon: f.icon, color: color(f.color), image: toImg(f.image) }));
});

export const getLeadership = cache(async (): Promise<TeamData[]> => {
  const r = await (await payload()).find({ collection: "team", where: { showMessage: { equals: true } }, sort: "order", depth: 1, limit: 10 });
  return r.docs.map((t) => ({ name: t.name, role: t.role, photo: toImg(t.photo), message: t.message ?? "", qualification: t.qualification ?? "" }));
});

export const getEvents = cache(async (featuredOnly = false): Promise<EventData[]> => {
  const r = await (await payload()).find({
    collection: "events", where: featuredOnly ? { featured: { equals: true } } : {}, sort: "order", depth: 1, limit: featuredOnly ? 3 : 100,
  });
  return r.docs.map((e) => ({ title: e.title, dateLabel: e.dateLabel, image: toImg(e.image), text: e.text, color: color(e.color) }));
});

export const getGallery = cache(async (featuredOnly = false): Promise<GalleryData[]> => {
  const r = await (await payload()).find({
    collection: "media",
    where: { and: [{ showInGallery: { equals: true } }, ...(featuredOnly ? [{ featuredOnHome: { equals: true } }] : [])] },
    sort: "galleryOrder", limit: featuredOnly ? 12 : 300, depth: 0,
  });
  return r.docs.map((m) => ({ img: toImg(m), cat: m.galleryCategory ?? "Classroom" }));
});

export const getFaqs = cache(async (homeOnly = false): Promise<FaqData[]> => {
  const r = await (await payload()).find({
    collection: "faqs", where: homeOnly ? { showOnHome: { equals: true } } : {}, sort: "order", limit: 100,
  });
  return r.docs.map((f) => ({ q: f.question, a: f.answer }));
});

export const getTestimonials = cache(async (): Promise<TestimonialData[]> => {
  const r = await (await payload()).find({ collection: "testimonials", where: { show: { equals: true } }, sort: "order", depth: 1, limit: 30 });
  return r.docs.map((t) => ({ name: t.name, child: t.child ?? "", quote: t.quote, photo: imgOrNull(t.photo) }));
});

/** Used by server actions to store leads. */
export const getPayloadClient = payload;
