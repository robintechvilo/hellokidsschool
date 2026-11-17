import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { getEvents, getGallery } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryPreview } from "@/components/sections/GalleryPreview";

export const metadata: Metadata = {
  title: "Events & Activities",
  description: "Orientation, Fruit Festival, birthday celebrations and more fun events at Hello Kids Pre-School, Mirpur.",
};

export default async function EventsPage() {
  const [events, gallery] = await Promise.all([getEvents(), getGallery(true)]);
  return (
    <>
      <PageHero eyebrow="Fun at school" title="Events & Activities" crumbs={[{ label: "Events" }]}
        text="Celebrations, festivals and special days that make school life magical." />
      <section className="py-16 sm:py-20">
        <div className="container-x space-y-10">
          {events.map((e, i) => (
            <Reveal key={e.title}>
              <article className="grid items-center gap-6 overflow-hidden rounded-[2.5rem] bg-white shadow-[0_16px_40px_-22px_rgba(30,42,120,.55)] ring-1 ring-navy/5 md:grid-cols-2">
                <Image src={e.image.src} alt={e.image.alt || e.title} width={e.image.w} height={e.image.h} sizes="(min-width:768px) 50vw, 92vw"
                  className={`aspect-[4/3] h-full w-full object-cover ${i % 2 ? "md:order-2" : ""}`} />
                <div className="p-6 sm:p-10">
                  <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display font-semibold ${bg[e.color]} ${onBg[e.color]}`}>
                    <CalendarDays className="size-4" />{e.dateLabel}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{e.title}</h2>
                  <p className="mt-3 text-lg text-ink/80">{e.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <GalleryPreview items={gallery} />
    </>
  );
}
