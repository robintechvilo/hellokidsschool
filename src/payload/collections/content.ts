import type { CollectionConfig } from "payload";
import { admins, anyone, staff } from "../access";
import { contentHooks } from "../hooks";
import { colorField, iconField, orderField, textList } from "../fields";
import { collectionPath, GROUPS } from "../groups";

const preview = (slug: string) => (doc: Record<string, unknown>) => collectionPath(slug, doc);

const versions = { maxPerDoc: 20 };

export const Programs: CollectionConfig = {
  slug: "programs",
  labels: { singular: "Program / Class", plural: "Programs & Classes" },
  admin: { group: GROUPS.pages, useAsTitle: "name", defaultColumns: ["name", "age", "active", "order"], preview: preview("programs"),
    description: "One entry per class (Pre Play, Play, LKG, UKG, Day Care). Each has its own page at /programs/<url>." },
  access: { read: anyone, create: admins, update: admins, delete: admins },
  defaultSort: "order",
  versions,
  hooks: contentHooks,
  fields: [
    { type: "row", fields: [
      { name: "name", type: "text", required: true },
      { name: "slug", type: "text", required: true, unique: true, index: true,
        admin: { description: "URL part, e.g. 'pre-play' → /programs/pre-play" } },
    ] },
    { type: "row", fields: [
      { name: "age", label: "Age range", type: "text", required: true, admin: { description: "e.g. Age 3 – 4" } },
      colorField(),
    ] },
    { name: "image", label: "Cover photo", type: "upload", relationTo: "media", required: true },
    { name: "blurb", label: "Short description (cards)", type: "textarea", required: true, maxLength: 160 },
    { name: "intro", label: "Introduction (class page)", type: "textarea", required: true },
    textList("learn", "What children learn"),
    textList("highlights", "Highlights (badges)", { maxRows: 4 }),
    { name: "photos", label: "Class photos", type: "upload", relationTo: "media", hasMany: true, maxRows: 6 },
    { name: "fee", label: "Fee note", type: "text", admin: { description: "Optional, e.g. 'Admission ৳5,000 · Monthly ৳3,000'. Leave empty to show 'Contact us'." } },
    { name: "showOnHome", label: "Show as a card on Home page", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    { name: "active", type: "checkbox", defaultValue: true, admin: { position: "sidebar", description: "Untick to hide this program everywhere." } },
    orderField,
  ],
};

export const Facilities: CollectionConfig = {
  slug: "facilities",
  labels: { singular: "Facility", plural: "Facilities" },
  admin: { group: GROUPS.content, useAsTitle: "title", defaultColumns: ["title", "order"], preview: preview("facilities"),
    description: "The 8 facility cards on the Home and Facilities pages." },
  access: { read: anyone, create: admins, update: admins, delete: admins },
  defaultSort: "order",
  versions,
  hooks: contentHooks,
  fields: [
    { name: "title", type: "text", required: true },
    { name: "text", type: "textarea", required: true },
    { type: "row", fields: [iconField(), colorField()] },
    { name: "image", type: "upload", relationTo: "media", required: true },
    orderField,
  ],
};

export const Team: CollectionConfig = {
  slug: "team",
  labels: { singular: "Team member", plural: "Teachers & Leadership" },
  admin: { group: GROUPS.content, useAsTitle: "name", defaultColumns: ["name", "role", "showMessage", "order"], preview: preview("team"),
    description: "Chairman, Managing Director, Principal, teachers. Tick “Show message” to show them in “Our Leadership”." },
  access: { read: anyone, create: admins, update: admins, delete: admins },
  defaultSort: "order",
  versions,
  hooks: contentHooks,
  fields: [
    { type: "row", fields: [
      { name: "name", type: "text", required: true },
      { name: "role", label: "Designation", type: "text", required: true },
    ] },
    { name: "photo", type: "upload", relationTo: "media", required: true },
    { name: "qualification", type: "text" },
    { name: "message", type: "textarea", admin: { description: "Shown in 'Our Leadership' when 'Show message' is ticked." } },
    { name: "showMessage", label: "Show message (Leadership section)", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
    orderField,
  ],
};

export const Events: CollectionConfig = {
  slug: "events",
  labels: { singular: "Event", plural: "Events & News" },
  admin: { group: GROUPS.content, useAsTitle: "title", defaultColumns: ["title", "dateLabel", "featured", "order"], preview: preview("events"),
    description: "Events and news. Tick “Show on Home page” to feature (up to 3)." },
  access: { read: anyone, create: staff, update: staff, delete: staff },
  defaultSort: "order",
  versions,
  hooks: contentHooks,
  fields: [
    { name: "title", type: "text", required: true },
    { type: "row", fields: [
      { name: "dateLabel", label: "Date (as shown)", type: "text", required: true, admin: { description: "e.g. 15 Jan 2026, or 'Every month'" } },
      colorField(),
    ] },
    { name: "image", label: "Cover photo", type: "upload", relationTo: "media", required: true },
    { name: "text", label: "Short description", type: "textarea", required: true },
    { name: "featured", label: "Show on Home page", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    orderField,
  ],
};

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonial", plural: "Parent Testimonials" },
  admin: { group: GROUPS.content, useAsTitle: "name", defaultColumns: ["name", "child", "show"], preview: preview("testimonials"),
    description: "Only add real reviews, with the parent's permission." },
  access: { read: anyone, create: admins, update: admins, delete: admins },
  hooks: contentHooks,
  fields: [
    { type: "row", fields: [
      { name: "name", label: "Parent name", type: "text", required: true },
      { name: "child", label: "Child / class", type: "text", admin: { description: "e.g. Mother of Ayaan, Play class" } },
    ] },
    { name: "quote", type: "textarea", required: true },
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "show", label: "Show on website", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    orderField,
  ],
};

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: { group: GROUPS.content, useAsTitle: "question", defaultColumns: ["question", "showOnHome", "order"], preview: preview("faqs"),
    description: "Questions and answers for the FAQ page. Tick “Show on Home page” to also show on Home." },
  access: { read: anyone, create: admins, update: admins, delete: admins },
  defaultSort: "order",
  hooks: contentHooks,
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    { name: "showOnHome", label: "Show on Home page", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    orderField,
  ],
};
