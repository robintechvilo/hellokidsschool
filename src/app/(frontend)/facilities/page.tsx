import type { Metadata } from "next";
import Image from "next/image";
import { getFacilities, getOffer, getPage, getSite, pageMetadata } from "@/lib/cms";
import { bg, onBg, text } from "@/lib/colors";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const generateMetadata = (): Promise<Metadata> => pageMetadata("facilities");

export default async function FacilitiesPage() {
  const page = await getPage("facilities");
  const [facilities, site, offer] = await Promise.all([getFacilities(), getSite(), getOffer()]);
  return (
    <>
      <PageHero eyebrow={page.banner.eyebrow} title={page.banner.title} text={page.banner.text || undefined} crumbs={[{ label: "Facilities" }]} />
      <section className="py-16 sm:py-20">
        <div className="container-x space-y-16 sm:space-y-24">
          {facilities.map((f, i) => (
            <div key={f.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                <div className={`absolute -inset-3 rounded-[2.5rem] ${bg[f.color]} ${i % 2 ? "-rotate-2" : "rotate-2"}`} aria-hidden />
                <Image src={f.image.src} alt={f.image.alt || f.title} width={f.image.w} height={f.image.h} sizes="(min-width:1024px) 560px, 92vw"
                  className={`relative aspect-[4/3] w-full rounded-[2.2rem] border-8 border-white shadow-xl ${f.image.h > f.image.w ? "object-cover object-[50%_30%]" : "object-cover"}`} />
              </Reveal>
              <Reveal delay={0.1}>
                <span className={`grid size-16 place-items-center rounded-2xl shadow-lg ${bg[f.color]} ${onBg[f.color]}`}><Icon name={f.icon} className="size-8" /></span>
                <p className="mt-4 font-script text-2xl text-pink">Facility {String(i + 1).padStart(2, "0")}</p>
                <h2 className={`text-4xl font-bold ${text[f.color]}`}>{f.title}</h2>
                <p className="mt-3 text-xl text-ink/80">{f.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <AdmissionCTA site={site} offer={offer} />
    </>
  );
}
