import Image from "next/image";
import { Quote } from "lucide-react";
import type { TeamData } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const accents = [
  { ring: "bg-orange", text: "text-orange" },
  { ring: "bg-teal", text: "text-teal" },
];

export function Leadership({ items }: { items: TeamData[] }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow="A message from" title="Our Leadership" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {items.map((l, i) => (
            <Reveal key={l.name + l.role} delay={i * 0.1}>
              <figure className="relative flex h-full flex-col items-center gap-6 rounded-[2rem] bg-white p-6 text-center shadow-[0_12px_36px_-18px_rgba(30,42,120,.5)] ring-1 ring-navy/5 sm:flex-row sm:p-8 sm:text-left">
                <div className="relative shrink-0">
                  <span className={`absolute -inset-2 rounded-full ${accents[i % accents.length].ring}`} aria-hidden />
                  <Image src={l.photo.src} alt={l.photo.alt || `${l.role} of Hello Kids`} width={l.photo.w} height={l.photo.h}
                    className="relative size-36 rounded-full border-4 border-white object-cover object-top" />
                </div>
                <div>
                  <Quote className={`mx-auto size-8 sm:mx-0 ${accents[i % accents.length].text}`} />
                  <blockquote className="mt-2 text-lg text-ink/80">“{l.message}”</blockquote>
                  <figcaption className="mt-4">
                    <span className="block font-display text-xl font-bold text-navy">{l.name}</span>
                    <span className={`font-script text-xl ${accents[i % accents.length].text}`}>{l.role}, Hello Kids</span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
