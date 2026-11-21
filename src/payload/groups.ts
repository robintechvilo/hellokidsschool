/** Admin menu groups (order = order of first appearance in the config). */
export const GROUPS = {
  leads: "📥 Parent Leads",
  pages: "🏫 Website Pages",
  content: "🧩 Page Content",
  media: "🖼️ Photos & Files",
  settings: "⚙️ Settings",
} as const;

/** Where each page global lives on the website (for "View page" + live preview). */
export const PAGE_PATHS: Record<string, string> = {
  "home-page": "/",
  "about-page": "/about",
  "programs-page": "/programs",
  "facilities-page": "/facilities",
  "gallery-page": "/gallery",
  "events-page": "/events",
  "admissions-page": "/admissions",
  "contact-page": "/contact",
  "faq-page": "/faq",
  "privacy-page": "/privacy",
  "site-settings": "/",
  offer: "/",
};

/** Website path for a collection document, used for "View page" + live preview. */
export function collectionPath(slug: string, data: Record<string, unknown> | undefined): string {
  switch (slug) {
    case "programs":
      return data?.slug ? `/programs/${data.slug}` : "/programs";
    case "facilities":
      return "/facilities";
    case "events":
      return "/events";
    case "team":
      return "/about";
    case "faqs":
      return "/faq";
    case "testimonials":
      return "/";
    default:
      return "/";
  }
}
