import type { Metadata } from "next";
import Image from "next/image";
import { FileText, Phone, Tag } from "lucide-react";
import { getAdmissionsPage, getOffer, getPrograms, getSite } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Star } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Admissions 2026 — 50% OFF",
  description: "Admission open at Hello Kids Pre-School & Day Care, Mirpur. Pre Play, Play, LKG, UKG and Day Care. Apply online or call 01901 641 644.",
};

const stepColors = ["pink", "orange", "green", "teal"] as const;

export default async function AdmissionsPage() {
  const [admissions, allPrograms, offer, site] = await Promise.all([getAdmissionsPage(), getPrograms(), getOffer(), getSite()]);
  return (
    <>
      <PageHero eyebrow="Admission Open 2026" title="Admissions" crumbs={[{ label: "Admissions" }]}
        text="Joining Hello Kids is easy! Follow four simple steps — we're happy to help at every one." />

      {offer.enabled && (
        <section className="pt-12">
          <div className="container-x">
            <Reveal>
              <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple via-pink to-red px-6 py-8 text-center text-white sm:flex-row sm:text-left">
                <Star className="absolute right-8 top-4 size-8 text-yellow animate-float" />
                <span className="grid size-20 shrink-0 place-items-center rounded-full bg-yellow text-navy shadow-lg"><Tag className="size-9" /></span>
                <div className="flex-1">
                  <p className="font-display text-3xl font-bold sm:text-4xl">{offer.text}</p>
                  <p className="mt-1 text-lg text-white/90">Limited seats in every class. Contact us today to reserve your child&apos;s place.</p>
                </div>
                <a href="#apply" className="btn btn-yellow shrink-0">Apply Now</a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle eyebrow="Simple & friendly" title="How to Apply" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissions.steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.08} className="relative h-full rounded-[2rem] bg-white p-6 pt-10 text-center shadow-[0_10px_30px_-16px_rgba(30,42,120,.45)] ring-1 ring-navy/5">
                  <span className={`absolute -top-7 left-1/2 grid size-14 -translate-x-1/2 place-items-center rounded-full border-4 border-white font-display text-2xl font-bold shadow-lg ${bg[stepColors[i % 4]]} ${onBg[stepColors[i % 4]]}`}>{i + 1}</span>
                  <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-ink/75">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-3xl font-bold text-navy">Classes &amp; Age</h2>
            <ul className="mt-6 space-y-3">
              {allPrograms.map((p) => (
                <li key={p.slug} className="flex items-center justify-between gap-4 rounded-2xl bg-sky-light px-4 py-3">
                  <span className="flex items-center gap-3 font-display text-lg font-semibold text-navy">
                    <span className={`size-4 rounded-full ${bg[p.color]}`} />{p.name}
                  </span>
                  <span className="font-semibold text-ink/75">{p.age}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-3xl font-bold text-navy">Documents Needed</h2>
            <ul className="mt-6 space-y-3">
              {admissions.documents.map((d) => (
                <li key={d} className="flex items-center gap-3 text-lg"><FileText className="size-5 shrink-0 text-pink" />{d}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-yellow/25 p-5">
              <h3 className="text-xl font-bold text-navy">Fees</h3>
              <p className="mt-1 text-ink/80">{admissions.feeNote}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={site.tel} className="btn btn-navy !py-3"><Phone className="size-5" />{site.phoneDisplay}</a>
                <a href={site.wa} target="_blank" rel="noopener" className="btn btn-green !py-3"><WhatsAppIcon className="size-5" />WhatsApp</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28">
            <SectionTitle align="left" eyebrow="Apply online" title="Admission Inquiry Form" text="Fill in the form and our team will call you within one working day." />
            <Reveal delay={0.1} className="relative mt-8 hidden lg:block">
              <div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-teal" aria-hidden />
              {admissions.formImage && <Image src={admissions.formImage.src} alt={admissions.formImage.alt} width={admissions.formImage.w} height={admissions.formImage.h}
                className="relative aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover" />}
            </Reveal>
          </div>
          <Reveal className="rounded-[2rem] bg-white p-6 shadow-[0_16px_40px_-20px_rgba(30,42,120,.5)] ring-1 ring-navy/5 sm:p-10">
            <AdmissionForm classes={allPrograms.map((p) => p.name)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
