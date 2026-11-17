import type { Metadata } from "next";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { getSite } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { VisitForm } from "@/components/forms/VisitForm";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Contact Us & Book a Visit",
  description: "Visit Hello Kids Pre-School at 778 West Shewrapara, beside Metro Pillar 307, Mirpur, Dhaka-1216. Call or WhatsApp 01901 641 644.",
};

export default async function ContactPage() {
  const site = await getSite();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;
  const cards = [
    { I: Phone, t: "Call Us", d: site.phoneDisplay, href: site.tel, c: "bg-navy text-white" },
    { I: WhatsAppIcon, t: "WhatsApp", d: "Chat with us", href: site.wa, c: "bg-[#25d366] text-[#073b1c]", ext: true },
    { I: MapPin, t: "Visit Us", d: `${site.address.line1}, ${site.address.city}`, href: directions, c: "bg-orange text-navy", ext: true },
    { I: FacebookIcon, t: "Facebook", d: "Hello Kids Pre School & Day Care", href: site.facebook || "#", c: "bg-[#1877f2] text-white", ext: true },
  ];

  return (
    <>
      <PageHero eyebrow="We'd love to hear from you" title="Contact Us" crumbs={[{ label: "Contact" }]}
        text="Call, WhatsApp, send a message or book a campus visit — we're always happy to help." />

      <section className="py-14">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ I, t, d, href, c, ext }, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <a href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})}
                className={`flex h-full flex-col items-start gap-3 rounded-[2rem] p-6 shadow-lg transition-transform hover:-translate-y-1.5 ${c}`}>
                <I className="size-8" />
                <span className="font-display text-2xl font-bold">{t}</span>
                <span className="opacity-90">{d}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Send a message" title="Write to Us" />
            <Reveal className="mt-8 rounded-[2rem] bg-white p-6 shadow-[0_16px_40px_-20px_rgba(30,42,120,.5)] ring-1 ring-navy/5 sm:p-8">
              <ContactForm />
            </Reveal>
          </div>
          <div>
            <SectionTitle align="left" eyebrow="Find us" title="Our Location" />
            <Reveal className="mt-8 overflow-hidden rounded-[2rem] border-4 border-sky shadow-lg">
              <iframe title="Hello Kids on Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full" />
            </Reveal>
            <Reveal delay={0.1} className="mt-6 space-y-3 rounded-[2rem] bg-sky-light p-6">
              <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-pink" />
                <span>{site.address.line1}<br />({site.address.line2})<br />{site.address.city}</span></p>
              <p className="flex gap-3"><Clock className="size-5 shrink-0 text-pink" />{site.hours}</p>
              <a href={directions} target="_blank" rel="noopener" className="btn btn-orange mt-2 !py-3"><Navigation className="size-5" />Get Directions</a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-24 bg-cream py-16 sm:py-24">
        <div className="container-x max-w-4xl">
          <SectionTitle eyebrow="Come and see us" title="Book a Campus Visit"
            text="See our classrooms, meet our teachers and ask anything. Pick a day and time that suits you." />
          <Reveal className="mt-10 rounded-[2rem] bg-white p-6 shadow-[0_16px_40px_-20px_rgba(30,42,120,.5)] sm:p-10">
            <VisitForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
