import type { Field, SelectField } from "payload";

export const brandColors = ["pink", "orange", "green", "teal", "purple", "red", "navy", "yellow"] as const;

export const colorField = (name = "color", label = "Color"): SelectField => ({
  name,
  label,
  type: "select",
  required: true,
  defaultValue: "pink",
  options: brandColors.map((c) => ({ label: c[0].toUpperCase() + c.slice(1), value: c })),
  admin: { description: "Brand color used for this card/badge." },
});

export const iconOptions = [
  "Apple", "Baby", "Blocks", "BookOpen", "Bus", "GraduationCap", "MonitorPlay", "Palette", "Smile", "Snowflake", "Sun", "Users",
] as const;

export const iconField = (name = "icon"): SelectField => ({
  name,
  type: "select",
  required: true,
  defaultValue: "Smile",
  options: iconOptions.map((i) => ({ label: i, value: i })),
});

/** Simple list of strings, stored as [{ text }]. */
export const textList = (name: string, label: string, opts: { required?: boolean; maxRows?: number } = {}): Field => ({
  name,
  label,
  type: "array",
  maxRows: opts.maxRows,
  minRows: opts.required ? 1 : undefined,
  labels: { singular: "Item", plural: "Items" },
  fields: [{ name: "text", type: "text", required: true }],
});

export const orderField: Field = {
  name: "order",
  type: "number",
  defaultValue: 0,
  admin: { position: "sidebar", description: "Lower numbers show first." },
};

const toValue = (o: string) => o.toLowerCase().replace(/\s+/g, "-");

export const leadStatus = (options: string[]): Field => ({
  name: "status",
  type: "select",
  defaultValue: toValue(options[0]),
  required: true,
  options: options.map((o) => ({ label: o, value: toValue(o) })),
  admin: { position: "sidebar" },
});

export const internalNotes: Field = {
  name: "notes",
  type: "textarea",
  admin: { position: "sidebar", description: "Internal notes (not visible to parents)." },
};

/** Small handwritten line + big title (+ optional paragraph) shown above a section. */
export const headingGroup = (name: string, label: string, opts: { text?: boolean; description?: string } = {}): Field => ({
  name,
  label,
  type: "group",
  admin: { description: opts.description },
  fields: [
    { type: "row", fields: [
      { name: "eyebrow", label: "Small handwritten line", type: "text", admin: { width: "40%" } },
      { name: "title", label: "Title", type: "text", admin: { width: "60%" } },
    ] },
    ...(opts.text ? [{ name: "text", label: "Short text", type: "textarea" } as Field] : []),
  ],
});

/** The colorful banner at the top of an inner page. */
export const bannerGroup = (): Field =>
  headingGroup("banner", "Top banner", { text: true, description: "The sky-blue banner at the top of this page." });

/** Google / social sharing texts for one page. */
export const seoGroup = (): Field => ({
  name: "seo",
  label: "Google & sharing (SEO)",
  type: "group",
  admin: { description: "What Google and Facebook/WhatsApp previews show for this page." },
  fields: [
    { name: "title", label: "Page title", type: "text", admin: { description: "Shown in the browser tab and Google results (keep under 60 characters)." } },
    { name: "description", label: "Description", type: "textarea", maxLength: 300, admin: { description: "1–2 sentences for Google results (about 150 characters)." } },
    { name: "image", label: "Share image", type: "upload", relationTo: "media" },
  ],
});
