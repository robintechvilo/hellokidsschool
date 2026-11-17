import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getOffer, getPrograms, getSite } from "@/lib/cms";
import { bg, onBg, softBg, text } from "@/lib/colors";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const metadata: Metadata = {
  title: "Programs — Pre Play, Play, LKG, UKG & Day Care",
  description: "English Medium & English Version programs at Hello Kids: Pre Play, Play, LKG, UKG and Day Care in Mirpur, Dhaka.",
};

export default async function ProgramsPage() {
  const [programs, site, offer] = await Promise.all([getPrograms(), getSite(), getOffer()]);
  return (
    <>
      <PageHero eyebrow="Learning through play" title="Our Programs" crumbs={[{ label: "Programs" }]}
        text="From the very first day of Pre Play to UKG graduation — plus a caring Day Care for working parents." />
      <section className="py-16 sm:py-20">
        <div className="container-x space-y-10">
          {programs.map((p, i) => (
            <Reveal key={p.slug}>
              <article className={`grid items-center gap-8 overflow-hidden rounded-[2.5rem] p-5 sm:p-8 lg:grid-cols-2 ${softBg[p.color]}`}>
                <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={p.image.src} alt={p.image.alt || `${p.name} at Hello Kids`} width={p.image.w} height={p.image.h} sizes="(min-width:1024px) 560px, 92vw"
                    className="aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover object-top shadow-xl" />
                  <span className={`absolute left-4 top-4 rounded-full px-4 py-1.5 font-display font-semibold shadow ${bg[p.color]} ${onBg[p.color]}`}>{p.age}</span>
                </div>
                <div>
                  <h2 className={`text-4xl font-bold sm:text-5xl ${text[p.color]}`}>{p.name}</h2>
                  <p className="mt-3 text-lg text-ink/80">{p.intro}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.learn.slice(0, 4).map((l) => (
                      <li key={l} className="flex items-start gap-2"><Check className={`mt-0.5 size-5 shrink-0 ${text[p.color]}`} />{l}</li>
                    ))}
                  </ul>
                  <Link href={`/programs/${p.slug}`} className="btn btn-navy mt-7">Explore {p.name} <ArrowRight className="size-5" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <AdmissionCTA site={site} offer={offer} />
    </>
  );
}
