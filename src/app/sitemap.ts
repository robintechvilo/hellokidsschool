import type { MetadataRoute } from "next";
import { getPrograms } from "@/lib/cms";

const BASE = "https://hellokidsschool.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const pages = ["", "/about", "/programs", "/facilities", "/admissions", "/gallery", "/events", "/contact", "/faq", "/privacy"];
  const programs = await getPrograms();
  return [
    ...pages.map((p) => ({ url: `${BASE}${p}`, lastModified: now, priority: p === "" ? 1 : p === "/admissions" ? 0.9 : 0.7 })),
    ...programs.map((p) => ({ url: `${BASE}/programs/${p.slug}`, lastModified: now, priority: 0.8 })),
  ];
}
