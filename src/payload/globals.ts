import type { Field, GlobalConfig } from "payload";
import { admins, anyone } from "./access";
import { revalidateGlobal } from "./hooks";
import { bannerGroup, colorField, headingGroup, iconField, seoGroup, textList } from "./fields";
import { GROUPS } from "./groups";

const base = {
  access: { read: anyone, update: admins },
  hooks: { afterChange: [revalidateGlobal] },
  versions: { max: 20 },
};

/** Standard inner page: Banner tab + optional extra tabs + SEO tab. */
function pageGlobal(
  slug: string,
  label: string,
  description: string,
  extraTabs: { label: string; description?: string; fields: Field[] }[] = [],
): GlobalConfig {
  return {
    ...base,
    slug,
    label,
    admin: { group: GROUPS.pages, description },
    fields: [
      { type: "tabs", tabs: [
        { label: "Top banner", fields: [bannerGroup()] },
        ...extraTabs,
        { label: "Google & sharing", fields: [seoGroup()] },
      ] },
    ],
  };
}

// ───────────────────────────── Pages ─────────────────────────────

export const homeSectionOptions = [
  { label: "Class cards", value: "classes" },
  { label: "Welcome", value: "welcome" },
  { label: "Facilities", value: "facilities" },
  { label: "Numbers (stats)", value: "stats" },
  { label: "Day Care", value: "daycare" },
  { label: "Daily routine", value: "routine" },
  { label: "Leadership messages", value: "leadership" },
  { label: "Gallery preview", value: "gallery" },
  { label: "Events", value: "events" },
  { label: "Parent testimonials", value: "testimonials" },
  { label: "Admission banner", value: "admissionCta" },
  { label: "FAQ", value: "faq" },
];

export const HomePage: GlobalConfig = {
  ...base,
  slug: "home-page",
  label: "Home Page",
  admin: { group: GROUPS.pages, description: "Everything on the Home page. Use the tabs below; click “Live Preview” (top right) to see changes as you type." },
  fields: [
    { type: "tabs", tabs: [
      { label: "Hero (top)", fields: [
        { name: "hero", type: "group", fields: [
          { name: "eyebrow", label: "Small handwritten line", type: "text", required: true },
          { name: "titleLine2", label: "Line under HELLO KIDS", type: "text", required: true },
          { name: "text", label: "Intro text", type: "textarea", required: true },
          textList("badges", "Badges (red/purple labels)", { maxRows: 3 }),
          { type: "row", fields: [
            { name: "primaryCta", label: "Orange button", type: "text", admin: { width: "33%" } },
            { name: "secondaryCta", label: "Blue button", type: "text", admin: { width: "33%" } },
            { name: "classesLine", label: "Classes line", type: "text", admin: { width: "34%" } },
          ] },
          { type: "row", fields: [
            { name: "image", label: "Main photo", type: "upload", relationTo: "media", required: true, admin: { width: "50%" } },
            { name: "mini", label: "Small floating photo", type: "upload", relationTo: "media", required: true, admin: { width: "50%" } },
          ] },
          { name: "miniCaption", label: "Small photo caption", type: "text" },
        ] },
      ] },
      { label: "Show / order sections", description: "Drag ⠿ to reorder sections on the Home page. Untick “Show” to hide one.", fields: [
        { name: "sections", type: "array", labels: { singular: "Section", plural: "Sections" },
          fields: [
            { type: "row", fields: [
              { name: "section", type: "select", required: true, options: homeSectionOptions, admin: { width: "70%" } },
              { name: "enabled", label: "Show", type: "checkbox", defaultValue: true, admin: { width: "30%" } },
            ] },
          ] },
      ] },
      { label: "Welcome", fields: [
        { name: "welcome", type: "group", fields: [
          { type: "row", fields: [
            { name: "eyebrow", label: "Small handwritten line", type: "text", required: true, admin: { width: "40%" } },
            { name: "title", type: "text", required: true, admin: { width: "60%" } },
          ] },
          textList("paragraphs", "Paragraphs"),
          textList("points", "Key points", { maxRows: 3 }),
          { name: "images", label: "Photos (3)", type: "upload", relationTo: "media", hasMany: true, maxRows: 3 },
          { type: "row", fields: [
            { name: "badgeNumber", label: "Yellow badge number", type: "text", defaultValue: "4", admin: { width: "30%" } },
            { name: "badgeText", label: "Yellow badge text", type: "text", defaultValue: "Happy classes for little learners", admin: { width: "70%" } },
          ] },
        ] },
      ] },
      { label: "Numbers", description: "The 4 colorful counters.", fields: [
        { name: "stats", type: "array", maxRows: 4, fields: [
          { type: "row", fields: [
            { name: "value", type: "number", required: true },
            { name: "suffix", type: "text", admin: { description: "e.g. + or %" } },
            { name: "label", type: "text", required: true },
            colorField(),
          ] },
        ] },
      ] },
      { label: "Day Care", fields: [
        { name: "daycare", type: "group", fields: [
          { type: "row", fields: [
            { name: "eyebrow", label: "Small handwritten line", type: "text", required: true, admin: { width: "40%" } },
            { name: "title", type: "text", required: true, admin: { width: "60%" } },
          ] },
          { name: "text", type: "textarea", required: true },
          textList("points", "Points", { maxRows: 6 }),
          { name: "image", type: "upload", relationTo: "media", required: true },
        ] },
      ] },
      { label: "Daily Routine", fields: [
        { name: "routine", type: "array", maxRows: 8, fields: [
          { type: "row", fields: [
            { name: "title", type: "text", required: true },
            { name: "text", type: "text", required: true },
          ] },
          { type: "row", fields: [iconField(), colorField()] },
        ] },
      ] },
      { label: "Section headings", description: "Titles shown above each Home section (also used on inner pages).", fields: [
        { name: "headings", type: "group", label: false, fields: [
          headingGroup("facilities", "Facilities", { text: true }),
          headingGroup("routine", "Daily routine"),
          headingGroup("leadership", "Leadership"),
          headingGroup("gallery", "Gallery preview", { text: true }),
          headingGroup("events", "Events"),
          headingGroup("testimonials", "Parent testimonials"),
          headingGroup("faq", "FAQ"),
        ] },
      ] },
      { label: "Google & sharing", fields: [seoGroup()] },
    ] },
  ],
};

export const AboutPage: GlobalConfig = pageGlobal("about-page", "About Page", "Story, mission, vision and values. Leadership messages are edited in 🧩 Page Content → Teachers & Leadership.", [
  { label: "Story", fields: [
    headingGroup("storyHeading", "Story heading"),
    textList("story", "Our story (paragraphs)"),
    { name: "storyImage", label: "Story photo", type: "upload", relationTo: "media" },
  ] },
  { label: "Mission & values", fields: [
    { name: "mission", type: "textarea", required: true },
    { name: "vision", type: "textarea", required: true },
    headingGroup("valuesHeading", "Values heading"),
    { name: "values", type: "array", maxRows: 8, fields: [
      { type: "row", fields: [
        { name: "title", type: "text", required: true },
        { name: "text", type: "text", required: true },
      ] },
      { type: "row", fields: [iconField(), colorField()] },
    ] },
  ] },
]);

export const ProgramsPage: GlobalConfig = pageGlobal("programs-page", "Programs Page", "The /programs page and the headings used on every class page. The classes themselves are in “Programs & Classes”.", [
  { label: "Class page headings", description: "Use {class} where the class name should appear, e.g. “Apply for {class}”.", fields: [
    headingGroup("aboutHeading", "About the class"),
    headingGroup("learnHeading", "What children learn"),
    headingGroup("applyHeading", "Apply form", { text: true }),
  ] },
]);

export const FacilitiesPage = pageGlobal("facilities-page", "Facilities Page", "Banner and SEO for /facilities. Facilities themselves are in 🧩 Page Content → Facilities.");
export const GalleryPage = pageGlobal("gallery-page", "Gallery Page", "Banner and SEO for /gallery. Photos are added in 🖼️ Photos & Files (tick “Show in gallery”).");
export const EventsPage = pageGlobal("events-page", "Events Page", "Banner and SEO for /events. Events are in 🧩 Page Content → Events & News.");

export const AdmissionsPage: GlobalConfig = pageGlobal("admissions-page", "Admissions Page", "Steps, documents and fees text on /admissions.", [
  { label: "Content", fields: [
    headingGroup("stepsHeading", "Steps heading"),
    { name: "steps", label: "How to apply (steps)", type: "array", maxRows: 6, fields: [
      { name: "title", type: "text", required: true },
      { name: "text", type: "text", required: true },
    ] },
    textList("documents", "Documents needed"),
    { name: "feeNote", label: "Fees text", type: "textarea",
      defaultValue: "Please call or visit us for the latest fee details and the 50% admission offer." },
    headingGroup("formHeading", "Form heading", { text: true }),
    { name: "formImage", label: "Photo beside the form", type: "upload", relationTo: "media" },
  ] },
]);

export const ContactPage: GlobalConfig = pageGlobal("contact-page", "Contact Page", "Headings on /contact. Phone, address and hours are in ⚙️ Settings → Site Settings.", [
  { label: "Headings", fields: [
    headingGroup("messageHeading", "Message form"),
    headingGroup("locationHeading", "Location"),
    headingGroup("visitHeading", "Book a visit", { text: true }),
  ] },
]);

export const FaqPage = pageGlobal("faq-page", "FAQ Page", "Banner and SEO for /faq. Questions are in 🧩 Page Content → FAQs.");

export const PrivacyPage: GlobalConfig = pageGlobal("privacy-page", "Privacy Policy", "The /privacy page.", [
  { label: "Content", fields: [
    { name: "sections", type: "array", labels: { singular: "Section", plural: "Sections" }, fields: [
      { name: "heading", type: "text", required: true },
      { name: "text", type: "textarea", required: true },
    ] },
  ] },
]);

// ──────────────────────────── Settings ───────────────────────────

export const SiteSettings: GlobalConfig = {
  ...base,
  slug: "site-settings",
  label: "Site Settings",
  admin: { group: GROUPS.settings, description: "School name, logo, phone, address, social links and analytics — used across the whole website." },
  fields: [
    { type: "tabs", tabs: [
      { label: "School", fields: [
        { type: "row", fields: [
          { name: "name", type: "text", required: true },
          { name: "shortName", type: "text", required: true },
        ] },
        { type: "row", fields: [
          { name: "tagline", type: "text", required: true },
          { name: "motto", type: "text", required: true },
        ] },
        { name: "logo", type: "upload", relationTo: "media", admin: { description: "Round logo with a transparent background (PNG). Leave empty to use the built-in logo." } },
        { name: "footerAbout", label: "Footer text", type: "textarea" },
        { name: "hours", label: "Office hours", type: "text" },
      ] },
      { label: "Contact", fields: [
        { type: "row", fields: [
          { name: "phoneDisplay", label: "Phone (as shown)", type: "text", required: true, admin: { description: "e.g. 01901 641 644" } },
          { name: "phone", label: "Phone (for calls)", type: "text", required: true, admin: { description: "International format, e.g. +8801901641644" } },
        ] },
        { type: "row", fields: [
          { name: "whatsapp", label: "WhatsApp number", type: "text", required: true, admin: { description: "Digits only with country code, e.g. 8801901641644" } },
          { name: "email", type: "email" },
        ] },
        { name: "whatsappText", label: "WhatsApp pre-filled message", type: "text" },
        { name: "address", type: "group", fields: [
          { name: "line1", type: "text", required: true },
          { name: "line2", type: "text" },
          { name: "city", type: "text", required: true },
        ] },
        { name: "mapQuery", label: "Google Maps search text", type: "text", required: true },
        textList("visitTimes", "Campus visit time slots", { maxRows: 6 }),
      ] },
      { label: "Social", fields: [
        { name: "facebook", label: "Facebook page URL", type: "text" },
        { name: "youtube", label: "YouTube URL", type: "text" },
      ] },
      { label: "SEO & Analytics", fields: [
        { name: "seoTitle", label: "Default page title", type: "text" },
        { name: "seoDescription", label: "Default description", type: "textarea", maxLength: 300 },
        { name: "ogImage", label: "Share image (Facebook/WhatsApp preview)", type: "upload", relationTo: "media" },
        { name: "ga4Id", label: "Google Analytics 4 ID", type: "text", admin: { description: "e.g. G-XXXXXXX" } },
      ] },
    ] },
  ],
};

export const Offer: GlobalConfig = {
  ...base,
  slug: "offer",
  label: "Offer / Announcement",
  admin: { group: GROUPS.settings, description: "The admission offer: top color bar, the round sticker on the Home photo, and the big admission banner." },
  fields: [
    { name: "enabled", label: "Show the offer on the website", type: "checkbox", defaultValue: true },
    { name: "text", label: "Offer text", type: "text", required: true, admin: { description: "e.g. Admission Open 2026 — Get 50% OFF!" } },
    { type: "row", fields: [
      { name: "cta", label: "Button label", type: "text" },
      { name: "href", label: "Button link", type: "text", defaultValue: "/admissions" },
      { name: "endDate", label: "Hide automatically after", type: "date", admin: { date: { pickerAppearance: "dayOnly" } } },
    ] },
    { type: "row", fields: [
      { name: "stickerTop", label: "Round sticker — big text", type: "text", admin: { width: "50%", description: "e.g. 50%" } },
      { name: "stickerBottom", label: "Round sticker — small text", type: "text", admin: { width: "50%", description: "e.g. OFF" } },
    ] },
    { name: "bannerEyebrow", label: "Admission banner — small line", type: "text", admin: { description: "e.g. Hurry, seats are limited!" } },
    { name: "bannerImage", label: "Admission banner — photo", type: "upload", relationTo: "media" },
  ],
};

export const allGlobals = [
  HomePage, AboutPage, ProgramsPage, FacilitiesPage, GalleryPage, EventsPage, AdmissionsPage, ContactPage, FaqPage, PrivacyPage,
  SiteSettings, Offer,
];
