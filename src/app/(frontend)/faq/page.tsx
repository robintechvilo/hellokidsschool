import type { Metadata } from "next";
import { getFaqs, getOffer, getSite } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";
import { Faq } from "@/components/sections/Faq";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions from parents about classes, Day Care, admission and location at Hello Kids Pre-School, Mirpur.",
};

export default async function FaqPage() {
  const [faq, site, offer] = await Promise.all([getFaqs(), getSite(), getOffer()]);
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};


  return (
    <>
      <PageHero eyebrow="We're here to help" title="Parents' FAQ" crumbs={[{ label: "FAQ" }]} />
      <Faq items={faq} />
      <AdmissionCTA site={site} offer={offer} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
