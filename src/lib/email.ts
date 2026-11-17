import "server-only";
import { Resend } from "resend";
import { site } from "@/content/site";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.MAIL_FROM || "Hello Kids Website <onboarding@resend.dev>";
const TO = process.env.SCHOOL_EMAIL || "";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function table(title: string, rows: Record<string, string | number>) {
  const trs = Object.entries(rows)
    .map(([k, v]) => `<tr><td style="padding:8px 12px;background:#eaf6fd;font-weight:700;color:#1e2a78">${esc(k)}</td><td style="padding:8px 12px">${esc(String(v || "—"))}</td></tr>`)
    .join("");
  return `<div style="font-family:Arial,sans-serif;max-width:560px"><h2 style="color:#8b2c8f">${esc(title)}</h2><table style="border-collapse:collapse;width:100%;border:1px solid #cfeaf8">${trs}</table><p style="color:#888;font-size:12px">Sent from hellokidsschool.com</p></div>`;
}

/** Notify the school. Without RESEND_API_KEY (local dev) the lead is logged instead. */
export async function notifySchool(subject: string, rows: Record<string, string | number>, replyTo?: string) {
  if (!resend || !TO) {
    console.info(`[lead] ${subject}`, rows);
    return;
  }
  const { error } = await resend.emails.send({
    from: FROM, to: TO, subject, html: table(subject, rows), replyTo: replyTo || undefined,
  });
  if (error) throw new Error(error.message);
}

/** Friendly auto-reply to the parent (only when they gave an email). */
export async function autoReply(to: string, parentName: string) {
  if (!resend || !to) return;
  await resend.emails.send({
    from: FROM,
    to,
    subject: "Thank you for contacting Hello Kids!",
    html: `<div style="font-family:Arial,sans-serif;max-width:560px;color:#1f2340">
      <h2 style="color:#1e2a78">Hello ${esc(parentName)}! 👋</h2>
      <p>Thank you for your interest in <b>${esc(site.name)}</b>. Our team will call you soon.</p>
      <p>For a quicker reply, call or WhatsApp us at <b>${site.phoneDisplay}</b>.</p>
      <p style="color:#1b8f3a;font-size:18px">${site.motto}</p></div>`,
  }).catch(() => {});
}
