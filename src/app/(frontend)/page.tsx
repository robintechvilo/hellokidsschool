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

export default async function Home() {
  const [home, site, offer, programs, facilities, team, gallery, events, testimonials, faqs] = await Promise.all([
    getHome(), getSite(), getOffer(), getPrograms(), getFacilities(), getLeadership(),
    getGallery(true), getEvents(true), getTestimonials(), getFaqs(true),
  ]);

  // Order & visibility are controlled in Admin → Home Page → Sections.
  const render: Record<string, () => React.ReactNode> = {
    classes: () => <ClassCards programs={programs.filter((p) => p.showOnHome)} />,
    welcome: () => <Welcome w={home.welcome} />,
    facilities: () => <Facilities items={facilities} />,
    stats: () => <Stats stats={home.stats} />,
    daycare: () => <DayCare d={home.daycare} />,
    routine: () => <Routine items={home.routine} />,
    leadership: () => (team.length ? <Leadership items={team} /> : null),
    gallery: () => <GalleryPreview items={gallery} />,
    events: () => (events.length ? <Events items={events} /> : null),
    testimonials: () => <Testimonials items={testimonials} />,
    admissionCta: () => <AdmissionCTA site={site} offer={offer} />,
    faq: () => (faqs.length ? <Faq items={faqs} /> : null),
  };

  return (
    <>
      <Hero h={home.hero} showOffer={offer.enabled} />
      {home.sections.map((s, i) => <div key={`${s}-${i}`} className="contents">{render[s]?.()}</div>)}
    </>
  );
}
