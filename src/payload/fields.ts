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
