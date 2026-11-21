import Image from "next/image";
import { homeHeadings, type Heading } from "@/content/labels";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { EventData } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Events({ items, heading = homeHeadings.events }: { items: EventData[]; heading?: Heading }) {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow={heading.eyebrow} title={heading.title} text={heading.text || undefined} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <article className={`group flex h-full flex-col overflow-hidden rounded-[2rem] shadow-[0_12px_30px_-16px_rgba(30,42,120,.5)] ${bg[e.color]} ${onBg[e.color]}`}>
                <div className="overflow-hidden">
                  <Image src={e.image.src} alt={e.image.alt || e.title} width={e.image.w} height={e.image.h} sizes="(min-width:768px) 32vw, 92vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold opacity-90"><CalendarDays className="size-4" />{e.dateLabel}</span>
                  <h3 className="mt-2 text-2xl font-bold">{e.title}</h3>
                  <p className="mt-2 opacity-90">{e.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center"><Link href="/events" className="btn btn-navy">See All Events</Link></div>
      </div>
    </section>
  );
}
