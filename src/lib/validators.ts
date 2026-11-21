import { z } from "zod";



/** Bangladeshi mobile: 01XXXXXXXXX, optionally with +88 / 88; spaces and dashes allowed. */
const bdPhone = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, ""))
  .refine((v) => /^(?:\+?88)?01[3-9]\d{8}$/.test(v), "Please enter a valid mobile number (e.g. 01XXXXXXXXX)");

const optionalEmail = z
  .string()
  .trim()
  .max(120)
  .refine((v) => v === "" || z.email().safeParse(v).success, "Please enter a valid email")
  .optional()
  .default("");

const name = (label: string) => z.string().trim().min(2, `${label} is required`).max(80);

/** Hidden honeypot field: humans leave it empty. */
const honeypot = z.string().max(200).optional().default("");

export const admissionSchema = z.object({
  parentName: name("Parent name"),
  phone: bdPhone,
  email: optionalEmail,
  childName: name("Child name"),
  childDob: z.string().trim().min(1, "Date of birth is required"),
  className: z.string().trim().min(1, "Please choose a class").max(60),
  message: z.string().trim().max(1000).optional().default(""),
  website: honeypot,
});

export const visitSchema = z.object({
  name: name("Name"),
  phone: bdPhone,
  date: z.string().trim().min(1, "Please choose a date"),
  time: z.string().trim().min(1, "Please choose a time").max(80),
  children: z.coerce.number().int().min(1).max(5),
  website: honeypot,
});

export const contactSchema = z.object({
  name: name("Name"),
  phone: bdPhone,
  email: optionalEmail,
  message: z.string().trim().min(5, "Please write a short message").max(1500),
  website: honeypot,
});

export type AdmissionInput = z.input<typeof admissionSchema>;
export type VisitInput = z.input<typeof visitSchema>;
export type ContactInput = z.input<typeof contactSchema>;

export type FormResult = { ok: true } | { ok: false; error: string };
