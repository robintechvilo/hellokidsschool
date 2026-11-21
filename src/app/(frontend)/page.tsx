import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClassCards } from "@/components/sections/ClassCards";
import { Welcome } from "@/components/sections/Welcome";
import { Facilities } from "@/components/sections/Facilities";
import { Stats } from "@/components/sections/Stats";
import { DayCare } from "@/components/sections/DayCare";
import { Routine } from "@/components/sections/Routine";
import { Leadership } from "@/components/sections/Leadership";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";
import { Faq } from "@/components/sections/Faq";
import {
  getEvents, getFacilities, getFaqs, getGallery, getHome, getLeadership, getOffer, getPrograms, getSite, getTestimonials,
} from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHome();
  return {
    ...(seo.title ? { title: { absolute: seo.title } } : {}),
    ...(seo.description ? { description: seo.description } : {}),
    ...(seo.image ? { openGraph: { images: [seo.image.src] } } : {}),
  };
}

export default async function Home() {
  const [home, site, offer, programs, facilities, team, gallery, events, testimonials, faqs] = await Promise.all([
    getHome(), getSite(), getOffer(), getPrograms(), getFacilities(), getLeadership(),
    getGallery(true), getEvents(true), getTestimonials(), getFaqs(true),
  ]);
  const h = home.headings;

  // Order & visibility are controlled in Admin → 🏫 Website Pages → Home Page → "Show / order sections".
  const render: Record<string, () => React.ReactNode> = {
    classes: () => <ClassCards programs={programs.filter((p) => p.showOnHome)} />,
    welcome: () => <Welcome w={home.welcome} />,
    facilities: () => <Facilities items={facilities} heading={h.facilities} />,
    stats: () => <Stats stats={home.stats} />,
    daycare: () => <DayCare d={home.daycare} />,
    routine: () => <Routine items={home.routine} heading={h.routine} />,
    leadership: () => (team.length ? <Leadership items={team} heading={h.leadership} /> : null),
    gallery: () => <GalleryPreview items={gallery} heading={h.gallery} />,
    events: () => (events.length ? <Events items={events} heading={h.events} /> : null),
    testimonials: () => <Testimonials items={testimonials} heading={h.testimonials} />,
    admissionCta: () => <AdmissionCTA site={site} offer={offer} />,
    faq: () => (faqs.length ? <Faq items={faqs} heading={h.faq} /> : null),
  };

  return (
    <>
      <Hero h={home.hero} offer={offer} />
      {home.sections.map((s, i) => <div key={`${s}-${i}`} className="contents">{render[s]?.()}</div>)}
    </>
  );
}
