import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Sparkles, Wallet } from "lucide-react";
import { getPage, getProgram, getPrograms } from "@/lib/cms";
import { bg, onBg, softBg, text } from "@/lib/colors";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { AdmissionForm } from "@/components/forms/AdmissionForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPrograms()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await getProgram((await params).slug);
  if (!p) return {};
  return { title: `${p.name} Class`, description: `${p.name} (${p.age}) at Hello Kids Pre-School, Mirpur. ${p.blurb}`, openGraph: { images: [p.image.src] } };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const [p, all, page] = await Promise.all([getProgram(slug), getPrograms(), getPage("programs")]);
  if (!p) notFound();
  const others = all.filter((x) => x.slug !== p.slug);
  const classNames = all.map((x) => x.name);
  const fill = (t: string) => t.replaceAll("{class}", p.name);

  return (
    <>
      <PageHero eyebrow={p.age} title={p.name} text={p.blurb} crumbs={[{ label: "Programs", href: "/programs" }, { label: p.name }]} />

      <section className="py-16 sm:py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="relative">
            <div className={`absolute -inset-3 rotate-2 rounded-[2.5rem] ${bg[p.color]}`} aria-hidden />
            <Image src={p.image.src} alt={p.image.alt || `${p.name} at Hello Kids`} width={p.image.w} height={p.image.h} priority sizes="(min-width:1024px) 600px, 92vw"
              className="relative aspect-[4/3] w-full rounded-[2.2rem] border-8 border-white object-cover object-top shadow-xl" />
          </Reveal>
          <div>
            <SectionTitle align="left" eyebrow={fill(page.headings.about.eyebrow)} title={fill(page.headings.about.title)} />
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-ink/80">{p.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.highlights.map((h) => (
                  <span key={h} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-display font-semibold ${bg[p.color]} ${onBg[p.color]}`}>
                    <Sparkles className="size-4" />{h}
                  </span>
                ))}
              </div>
              {p.fee && (
                <p className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-yellow/25 px-5 py-3 font-display text-lg font-semibold text-navy">
                  <Wallet className="size-5" />{p.fee}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 ${softBg[p.color]}`}>
        <div className="container-x">
          <SectionTitle eyebrow={fill(page.headings.learn.eyebrow)} title={fill(page.headings.learn.title)} />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {p.learn.map((l, i) => (
              <li key={l}>
                <Reveal delay={i * 0.05} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-display text-lg font-medium text-navy shadow-sm">
                  <CheckCircle2 className={`size-6 shrink-0 ${text[p.color]}`} />{l}
                </Reveal>
              </li>
            ))}
          </ul>
          {p.photos.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {p.photos.map((img, i) => (
                <Reveal key={img.src + i} delay={i * 0.08}>
                  <Image src={img.src} alt={img.alt || `${p.name} activity ${i + 1}`} width={img.w} height={img.h} sizes="(min-width:640px) 32vw, 92vw"
                    className={`aspect-[4/3] w-full rounded-[1.75rem] border-4 border-white object-cover shadow-lg ${i === 1 ? "sm:-rotate-2" : "sm:rotate-1"}`} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <SectionTitle eyebrow={fill(page.headings.apply.eyebrow)} title={fill(page.headings.apply.title)} text={fill(page.headings.apply.text ?? "") || undefined} />
          <Reveal className="mt-10 rounded-[2rem] bg-white p-6 shadow-[0_16px_40px_-20px_rgba(30,42,120,.5)] ring-1 ring-navy/5 sm:p-10">
            <AdmissionForm classes={classNames} defaultClass={p.name} />
          </Reveal>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-cream py-16">
          <div className="container-x">
            <h2 className="text-center text-3xl font-bold text-navy">Explore other programs</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link key={o.slug} href={`/programs/${o.slug}`}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 font-display text-xl font-semibold shadow-md transition-transform hover:-translate-y-1 ${bg[o.color]} ${onBg[o.color]}`}>
                  {o.name}<ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
