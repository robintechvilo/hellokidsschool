import Image from "next/image";
import { Quote } from "lucide-react";
import type { TeamData } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Decor";

const accents = [
  { frame: "bg-teal", text: "text-teal", badge: "bg-teal text-white", soft: "from-teal/10" },
  { frame: "bg-orange", text: "text-orange", badge: "bg-orange text-navy", soft: "from-orange/15" },
  { frame: "bg-pink", text: "text-pink", badge: "bg-pink text-white", soft: "from-pink/10" },
];

export function Leadership({ items }: { items: TeamData[] }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow="A message from" title="Our Leadership" />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {items.map((l, i) => {
            const a = accents[i % accents.length];
            return (
              <Reveal key={l.name + l.role} delay={i * 0.1}>
                <figure
                  className={`relative flex h-full flex-col items-center gap-7 overflow-hidden rounded-[2rem] bg-gradient-to-br ${a.soft} to-white p-6 text-center shadow-[0_18px_44px_-22px_rgba(30,42,120,.55)] ring-1 ring-navy/5 sm:flex-row sm:items-start sm:p-8 sm:text-left`}
                >
                  <Star className={`absolute right-6 top-6 size-6 ${a.text} opacity-40`} />

                  {/* Passport-size photo (35×45 mm ratio) */}
                  <div className="relative shrink-0">
                    <span className={`absolute inset-0 translate-x-3 translate-y-3 rounded-2xl ${a.frame}`} aria-hidden />
                    <div className="relative w-48 overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-xl sm:w-52 lg:w-56">
                      <Image
                        src={l.photo.src}
                        alt={l.photo.alt || `${l.name}, ${l.role} of Hello Kids`}
                        width={l.photo.w}
                        height={l.photo.h}
                        sizes="(min-width:1024px) 224px, 208px"
                        className="aspect-[7/9] w-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col sm:pt-2">
                    <figcaption>
                      <span className="block font-display text-2xl font-bold leading-tight text-navy sm:text-3xl">{l.name}</span>
                      <span className={`mt-2 inline-block rounded-full px-4 py-1 font-display text-sm font-semibold uppercase tracking-wide ${a.badge}`}>
                        {l.role}
                      </span>
                    </figcaption>
                    {l.message && (
                      <blockquote className="relative mt-5 text-lg leading-relaxed text-ink/80">
                        <Quote className={`mb-2 size-8 ${a.text} mx-auto sm:mx-0`} aria-hidden />
                        {l.message}
                      </blockquote>
                    )}
                  </div>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
