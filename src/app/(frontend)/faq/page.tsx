import type { Metadata } from "next";
import { getFaqs, getHome, getOffer, getPage, getSite, pageMetadata } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";
import { Faq } from "@/components/sections/Faq";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const generateMetadata = (): Promise<Metadata> => pageMetadata("faq");

export default async function FaqPage() {
  const page = await getPage("faq");
  const [faq, site, offer, home] = await Promise.all([getFaqs(), getSite(), getOffer(), getHome()]);
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};


  return (
    <>
      <PageHero eyebrow={page.banner.eyebrow} title={page.banner.title} text={page.banner.text || undefined} crumbs={[{ label: "FAQ" }]} />
      <Faq items={faq} heading={home.headings.faq} />
      <AdmissionCTA site={site} offer={offer} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
