import type { Metadata } from "next";
import { getPage, getPrivacySections, pageMetadata } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";

export const generateMetadata = (): Promise<Metadata> => pageMetadata("privacy");

export default async function PrivacyPage() {
  const [page, sections] = await Promise.all([getPage("privacy"), getPrivacySections()]);
  return (
    <>
      <PageHero eyebrow={page.banner.eyebrow} title={page.banner.title} text={page.banner.text || undefined} crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-bold text-navy">{s.heading}</h2>
              <p className="mt-2 whitespace-pre-line text-lg text-ink/80">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
