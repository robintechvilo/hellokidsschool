import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { getAbout, getHome, getLeadership, getOffer, getPage, getSite, pageMetadata } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Star } from "@/components/ui/Decor";
import { Leadership } from "@/components/sections/Leadership";
import { Stats } from "@/components/sections/Stats";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const generateMetadata = (): Promise<Metadata> => pageMetadata("about");

export default async function AboutPage() {
  const page = await getPage("about");
  const [about, home, team, site, offer] = await Promise.all([getAbout(), getHome(), getLeadership(), getSite(), getOffer()]);
  return (
    <>
      <PageHero eyebrow={page.banner.eyebrow} title={page.banner.title} text={page.banner.text || undefined} crumbs={[{ label: "About" }]} />

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow={page.headings.story.eyebrow} title={page.headings.story.title} text={page.headings.story.text || undefined} />
            <Reveal delay={0.1}>
              {about.story.map((p) => <p key={p} className="mt-4 text-lg text-ink/80">{p}</p>)}
            </Reveal>
          </div>
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 blob bg-yellow -rotate-3" aria-hidden />
            {about.storyImage && <Image src={about.storyImage.src} alt={about.storyImage.alt} width={about.storyImage.w} height={about.storyImage.h}
              sizes="(min-width:1024px) 500px, 92vw" className="relative aspect-[4/3.3] w-full blob-2 border-8 border-white object-cover shadow-2xl" />}
            <Star className="absolute -right-3 -top-4 size-10 text-pink animate-float" />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { t: "Our Mission", d: about.mission, I: Target, c: "bg-orange text-navy" },
            { t: "Our Vision", d: about.vision, I: Eye, c: "bg-teal text-white" },
          ].map(({ t, d, I, c }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className={`h-full rounded-[2rem] p-8 shadow-lg ${c}`}>
                <I className="size-10" />
                <h2 className="mt-4 text-3xl font-bold">{t}</h2>
                <p className="mt-3 text-lg opacity-90">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionTitle eyebrow={page.headings.values.eyebrow} title={page.headings.values.title} text={page.headings.values.text || undefined} />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="flex h-full flex-col items-center rounded-[2rem] bg-white p-6 text-center shadow-[0_10px_30px_-16px_rgba(30,42,120,.45)] ring-1 ring-navy/5">
                  <span className={`grid size-16 place-items-center rounded-2xl ${bg[v.color]} ${onBg[v.color]}`}><Icon name={v.icon} className="size-8" /></span>
                  <h3 className="mt-4 text-xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-1 text-ink/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats stats={home.stats} />
      {team.length > 0 && <Leadership items={team} heading={home.headings.leadership} />}
      <AdmissionCTA site={site} offer={offer} />
    </>
  );
}
