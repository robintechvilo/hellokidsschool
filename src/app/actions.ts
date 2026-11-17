"use server";
import { headers } from "next/headers";
import type { z } from "zod";
import {
  admissionSchema, contactSchema, visitSchema,
  type AdmissionInput, type ContactInput, type FormResult, type VisitInput,
} from "@/lib/validators";
import { autoReply, notifySchool } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { getPayloadClient } from "@/lib/cms";

/** Save a lead to the Admin Panel. Failure to email must not lose the lead, so we save first. */
async function saveLead(collection: "admissions" | "visit-bookings" | "messages", data: Record<string, unknown>) {
  const payload = await getPayloadClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await payload.create({ collection, data: data as any, overrideAccess: true, context: { disableRevalidate: true } });
}

async function notifySafely(...args: Parameters<typeof notifySchool>) {
  try { await notifySchool(...args); } catch (e) { console.error("[email]", e); }
}

const GENERIC = "Sorry, something went wrong. Please call us at 01901 641 644.";

async function guard<S extends z.ZodType>(schema: S, input: unknown, bucket: string) {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "local";
  if (!rateLimit(`${bucket}:${ip}`)) return { ok: false as const, error: "Too many requests. Please try again in a few minutes." };
  const parsed = schema.safeParse(input);
  if (!parsed.success) return { ok: false as const, error: parsed.error.issues[0]?.message ?? "Please check the form." };
  return { ok: true as const, data: parsed.data as z.output<S> };
}

export async function submitAdmission(input: AdmissionInput): Promise<FormResult> {
  const g = await guard(admissionSchema, input, "admission");
  if (!g.ok) return { ok: false, error: g.error };
  const d = g.data;
  if (d.website) return { ok: true }; // bot: pretend success
  try {
    const { website: _w, ...lead } = d; // eslint-disable-line @typescript-eslint/no-unused-vars
    await saveLead("admissions", lead);
    await notifySafely(`New admission inquiry — ${d.className}`, {
      "Parent": d.parentName, "Phone": d.phone, "Email": d.email, "Child": d.childName,
      "Date of birth": d.childDob, "Class": d.className, "Message": d.message,
    }, d.email);
    await autoReply(d.email, d.parentName);
    return { ok: true };
  } catch (e) {
    console.error("[admission]", e);
    return { ok: false, error: GENERIC };
  }
}

export async function submitVisit(input: VisitInput): Promise<FormResult> {
  const g = await guard(visitSchema, input, "visit");
  if (!g.ok) return { ok: false, error: g.error };
  const d = g.data;
  if (d.website) return { ok: true };
  try {
    const { website: _w, ...lead } = d; // eslint-disable-line @typescript-eslint/no-unused-vars
    await saveLead("visit-bookings", lead);
    await notifySafely(`New campus visit booking — ${d.date}`, {
      "Name": d.name, "Phone": d.phone, "Date": d.date, "Time": d.time, "Children": d.children,
    });
    return { ok: true };
  } catch (e) {
    console.error("[visit]", e);
    return { ok: false, error: GENERIC };
  }
}

export async function submitContact(input: ContactInput): Promise<FormResult> {
  const g = await guard(contactSchema, input, "contact");
  if (!g.ok) return { ok: false, error: g.error };
  const d = g.data;
  if (d.website) return { ok: true };
  try {
    const { website: _w, ...lead } = d; // eslint-disable-line @typescript-eslint/no-unused-vars
    await saveLead("messages", lead);
    await notifySafely(`New message from ${d.name}`, {
      "Name": d.name, "Phone": d.phone, "Email": d.email, "Message": d.message,
    }, d.email);
    await autoReply(d.email, d.name);
    return { ok: true };
  } catch (e) {
    console.error("[contact]", e);
    return { ok: false, error: GENERIC };
  }
}
