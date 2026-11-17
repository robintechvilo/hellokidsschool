import type { CollectionConfig } from "payload";
import { anyone, staff } from "../access";
import { contentHooks } from "../hooks";
import { mediaStaticDir } from "../env";

export const galleryCategoryOptions = ["Classroom", "Events", "Art & Craft", "Play & Tours"];

/**
 * All images & PDFs. Also powers the website Gallery:
 * tick "Show in gallery" and pick a category (bulk upload supported).
 */
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Media", plural: "Media & Gallery" },
  admin: {
    group: "Content",
    defaultColumns: ["filename", "alt", "showInGallery", "galleryCategory", "updatedAt"],
    description: "Upload photos once — every size is created automatically. Tick 'Show in gallery' to add a photo to the website gallery.",
  },
  access: { read: anyone, create: staff, update: staff, delete: staff },
  hooks: contentHooks,
  upload: {
    staticDir: mediaStaticDir,
    mimeTypes: ["image/*", "application/pdf"],
    focalPoint: true,
    resizeOptions: { width: 1600, height: 1600, fit: "inside", withoutEnlargement: true },
    formatOptions: { format: "webp", options: { quality: 80 } },
    imageSizes: [
      { name: "thumb", width: 400, height: 300, position: "centre" },
      { name: "card", width: 800 },
    ],
    adminThumbnail: "thumb",
  },
  fields: [
    { name: "alt", label: "Description (alt text)", type: "text", required: true,
      admin: { description: "Describe the photo, e.g. 'Kids painting in art class'. Helps Google and screen readers." } },
    { name: "showInGallery", label: "Show in gallery", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
    { name: "galleryCategory", label: "Gallery category", type: "select", options: galleryCategoryOptions,
      admin: { position: "sidebar", condition: (d) => !!d?.showInGallery } },
    { name: "featuredOnHome", label: "Feature on Home page", type: "checkbox", defaultValue: false,
      admin: { position: "sidebar", condition: (d) => !!d?.showInGallery } },
    { name: "galleryOrder", label: "Gallery order", type: "number", defaultValue: 0,
      admin: { position: "sidebar", condition: (d) => !!d?.showInGallery } },
  ],
};
