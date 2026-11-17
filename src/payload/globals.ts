import type { GlobalConfig } from "payload";
import { admins, anyone } from "./access";
import { revalidateGlobal } from "./hooks";
import { colorField, iconField, textList } from "./fields";

const base = {
  access: { read: anyone, update: admins },
  hooks: { afterChange: [revalidateGlobal] },
  versions: { max: 20 },
};

export const SiteSettings: GlobalConfig = {
  ...base,
  slug: "site-settings",
  label: "Site Settings",
  admin: { group: "Settings" },
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
  admin: { group: "Settings", description: "The colored bar at the very top of the website." },
  fields: [
    { name: "enabled", label: "Show announcement", type: "checkbox", defaultValue: true },
    { name: "text", type: "text", required: true },
    { type: "row", fields: [
      { name: "cta", label: "Button label", type: "text" },
      { name: "href", label: "Button link", type: "text", defaultValue: "/admissions" },
    ] },
    { name: "endDate", label: "Hide automatically after", type: "date", admin: { date: { pickerAppearance: "dayOnly" } } },
  ],
};

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
  admin: { group: "Pages" },
  fields: [
    { type: "tabs", tabs: [
      { label: "Hero", fields: [
        { name: "hero", type: "group", fields: [
          { name: "eyebrow", label: "Small handwritten line", type: "text", required: true },
          { name: "titleLine2", label: "Line under HELLO KIDS", type: "text", required: true },
          { name: "text", type: "textarea", required: true },
          textList("badges", "Badges", { maxRows: 3 }),
          { name: "image", label: "Main photo", type: "upload", relationTo: "media", required: true },
          { name: "mini", label: "Small floating photo", type: "upload", relationTo: "media", required: true },
          { name: "miniCaption", label: "Small photo caption", type: "text", defaultValue: "Admission Open!" },
        ] },
      ] },
      { label: "Sections", description: "Drag to reorder. Untick to hide a section.", fields: [
        { name: "sections", type: "array", labels: { singular: "Section", plural: "Sections" },
          admin: { initCollapsed: false },
          fields: [
            { type: "row", fields: [
              { name: "section", type: "select", required: true, options: homeSectionOptions },
              { name: "enabled", label: "Show", type: "checkbox", defaultValue: true },
            ] },
          ] },
      ] },
      { label: "Welcome", fields: [
        { name: "welcome", type: "group", fields: [
          { name: "eyebrow", type: "text", required: true },
          { name: "title", type: "text", required: true },
          textList("paragraphs", "Paragraphs"),
          textList("points", "Key points", { maxRows: 3 }),
          { name: "images", label: "Photos (3)", type: "upload", relationTo: "media", hasMany: true, maxRows: 3 },
          { name: "badgeNumber", label: "Yellow badge number", type: "text", defaultValue: "4" },
          { name: "badgeText", label: "Yellow badge text", type: "text", defaultValue: "Happy classes for little learners" },
        ] },
      ] },
      { label: "Numbers", fields: [
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
          { name: "eyebrow", type: "text", required: true },
          { name: "title", type: "text", required: true },
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
    ] },
  ],
};

export const AboutPage: GlobalConfig = {
  ...base,
  slug: "about-page",
  label: "About Page",
  admin: { group: "Pages" },
  fields: [
    textList("story", "Our story (paragraphs)"),
    { name: "storyImage", label: "Story photo", type: "upload", relationTo: "media" },
    { name: "mission", type: "textarea", required: true },
    { name: "vision", type: "textarea", required: true },
    { name: "values", type: "array", maxRows: 8, fields: [
      { type: "row", fields: [
        { name: "title", type: "text", required: true },
        { name: "text", type: "text", required: true },
      ] },
      { type: "row", fields: [iconField(), colorField()] },
    ] },
  ],
};

export const AdmissionsPage: GlobalConfig = {
  ...base,
  slug: "admissions-page",
  label: "Admissions Page",
  admin: { group: "Pages" },
  fields: [
    { name: "steps", label: "How to apply (steps)", type: "array", maxRows: 6, fields: [
      { name: "title", type: "text", required: true },
      { name: "text", type: "text", required: true },
    ] },
    textList("documents", "Documents needed"),
    { name: "feeNote", label: "Fees text", type: "textarea",
      defaultValue: "Please call or visit us for the latest fee details and the 50% admission offer." },
    { name: "formImage", label: "Photo beside the form", type: "upload", relationTo: "media" },
  ],
};
