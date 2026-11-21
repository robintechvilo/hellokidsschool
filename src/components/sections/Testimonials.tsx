import Image from "next/image";
import { homeHeadings, type Heading } from "@/content/labels";
import { Quote, Star } from "lucide-react";
import type { TestimonialData } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const rings = ["bg-pink", "bg-orange", "bg-teal", "bg-green", "bg-purple"];

/** Renders only when real testimonials exist in the Admin Panel. */
export function Testimonials({ items, heading = homeHeadings.testimonials }: { items: TestimonialData[]; heading?: Heading }) {
  if (!items.length) return null;
  return (
    <section className="bg-sky-light py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow={heading.eyebrow} title={heading.title} text={heading.text || undefined} />
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin] md:grid md:grid-cols-3 md:overflow-visible">
          {items.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.08} className="w-[85%] shrink-0 snap-center md:w-auto">
              <figure className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-[0_12px_30px_-16px_rgba(30,42,120,.45)]">
                <Quote className="size-9 text-pink" />
                <div className="mt-2 flex gap-0.5 text-yellow" aria-label="5 stars">{Array.from({ length: 5 }, (_, s) => <Star key={s} className="size-5 fill-yellow" />)}</div>
                <blockquote className="mt-3 flex-1 text-lg text-ink/80">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  {t.photo ? (
                    <span className={`rounded-full p-1 ${rings[i % rings.length]}`}>
                      <Image src={t.photo.src} alt={t.name} width={56} height={56} className="size-14 rounded-full border-2 border-white object-cover" />
                    </span>
                  ) : (
                    <span className={`grid size-14 place-items-center rounded-full font-display text-xl font-bold text-white ${rings[i % rings.length]}`}>{t.name[0]}</span>
                  )}
                  <span>
                    <span className="block font-display text-lg font-bold text-navy">{t.name}</span>
                    {t.child && <span className="text-sm text-ink/60">{t.child}</span>}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
