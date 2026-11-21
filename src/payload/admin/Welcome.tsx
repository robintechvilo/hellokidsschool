import Link from "next/link";
import type { Payload } from "payload";

type Props = { payload: Payload; user?: { name?: string; role?: string } | null };

const leadCollections = [
  { slug: "admissions", label: "New admission inquiries", emoji: "🎒" },
  { slug: "visit-bookings", label: "New visit bookings", emoji: "🏫" },
  { slug: "messages", label: "New messages", emoji: "💬" },
] as const;

const actions = [
  { href: "/admin/globals/home-page", emoji: "🏠", title: "Edit Home page", text: "Hero text, photos, sections, numbers" },
  { href: "/admin/globals/offer", emoji: "🎉", title: "Change the offer", text: "Top bar, 50% sticker, admission banner" },
  { href: "/admin/collections/media/create", emoji: "📷", title: "Upload photos", text: "Add to gallery or use on any page" },
  { href: "/admin/collections/events/create", emoji: "📅", title: "Add an event", text: "Programs, festivals, news" },
  { href: "/admin/collections/programs", emoji: "🧸", title: "Classes & fees", text: "Pre Play, Play, LKG, UKG, Day Care" },
  { href: "/admin/globals/site-settings", emoji: "📞", title: "Phone & address", text: "Contact info, logo, social links" },
];

/** Friendly panel at the top of the admin dashboard. */
export async function Welcome({ payload, user }: Props) {
  const isAdmin = user?.role === "admin" || user?.role === "super-admin";
  const counts = isAdmin
    ? await Promise.all(
        leadCollections.map(async (c) => {
          try {
            const r = await payload.count({ collection: c.slug, where: { status: { equals: "new" } }, overrideAccess: true });
            return r.totalDocs;
          } catch {
            return 0;
          }
        }),
      )
    : [];

  return (
    <div className="hk-welcome">
      <div className="hk-welcome__head">
        <div>
          <h2>Hello{user?.name ? `, ${user.name}` : ""} 👋</h2>
          <p>Welcome to the Hello Kids admin. Every change you save appears on the website within a few seconds.</p>
        </div>
        <a className="hk-btn" href="/" target="_blank" rel="noopener">🌐 View website</a>
      </div>

      {isAdmin && (
        <div className="hk-leads">
          {leadCollections.map((c, i) => (
            <Link key={c.slug} href={`/admin/collections/${c.slug}?where[status][equals]=new`} className={`hk-lead ${counts[i] ? "hk-lead--new" : ""}`}>
              <span className="hk-lead__emoji">{c.emoji}</span>
              <span className="hk-lead__count">{counts[i]}</span>
              <span className="hk-lead__label">{c.label}</span>
            </Link>
          ))}
        </div>
      )}

      <h3 className="hk-subtitle">Quick actions</h3>
      <div className="hk-actions">
        {actions.map((a) => (
          <Link key={a.href} href={a.href} className="hk-action">
            <span className="hk-action__emoji">{a.emoji}</span>
            <span>
              <strong>{a.title}</strong>
              <small>{a.text}</small>
            </span>
          </Link>
        ))}
      </div>

      <p className="hk-tip">
        💡 Tip: open any page under <b>🏫 Website Pages</b> and click <b>Live Preview</b> (top right) to see your changes before saving.
        Every page keeps a <b>Versions</b> history so you can undo mistakes.
      </p>
    </div>
  );
}
