import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { HomeData } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Decor";

export function DayCare({ d }: { d: HomeData["daycare"] }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple to-pink p-6 text-white sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:p-14">
          <Star className="absolute right-10 top-8 size-8 text-yellow animate-float" />
          <Star className="absolute bottom-10 left-[45%] size-5 text-white/60 animate-float-slow" />
          <div>
            <SectionTitle light align="left" eyebrow={d.eyebrow} title={d.title} text={d.text} />
            <Reveal delay={0.1}>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {d.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 font-display text-lg font-medium backdrop-blur">
                    <Heart className="size-5 shrink-0 fill-yellow text-yellow" />{p}
                  </li>
                ))}
              </ul>
              <Link href="/programs/day-care" className="btn btn-yellow mt-8">Explore Day Care</Link>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 blob-2 bg-yellow" aria-hidden />
            <Image src={d.image.src} alt={d.image.alt} width={d.image.w} height={d.image.h}
              sizes="(min-width:1024px) 380px, 80vw" className="relative aspect-[4/5] w-full blob border-8 border-white object-cover shadow-2xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
