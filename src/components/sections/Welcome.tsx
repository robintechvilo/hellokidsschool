import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { HomeData, Img } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Decor";

function Photo({ img, sizes, className = "" }: { img?: Img; sizes: string; className?: string }) {
  if (!img) return <div className={`rounded-[2rem] bg-sky ${className}`} />;
  return (
    <div className={`overflow-hidden rounded-[2rem] border-4 border-white shadow-xl ${className}`}>
      <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

export function Welcome({ w }: { w: HomeData["welcome"] }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative mx-auto grid w-full max-w-xl grid-cols-5 grid-rows-6 gap-4">
          <Photo img={w.images[0]} sizes="(min-width:1024px) 340px, 55vw" className="col-span-3 row-span-4" />
          <Photo img={w.images[2]} sizes="(min-width:1024px) 220px, 36vw" className="col-span-2 row-span-3 rotate-2" />
          <div className="col-span-2 row-span-3 flex flex-col items-center justify-center rounded-[2rem] bg-yellow p-4 text-center text-navy shadow-xl -rotate-2">
            <span className="font-display text-4xl font-bold sm:text-5xl">{w.badgeNumber}</span>
            <span className="font-display text-lg font-semibold leading-tight">{w.badgeText}</span>
          </div>
          <Photo img={w.images[1]} sizes="(min-width:1024px) 340px, 55vw" className="col-span-3 row-span-2" />
          <Star className="absolute -left-4 -top-5 size-10 text-pink animate-float" />
        </Reveal>

        <div>
          <SectionTitle align="left" eyebrow={w.eyebrow} title={w.title} />
          <Reveal delay={0.1}>
            {w.paragraphs.map((t) => <p key={t} className="mt-4 text-lg text-ink/80">{t}</p>)}
            {w.points.length > 0 && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {w.points.map((p, i) => (
                  <li key={p} className="flex items-center gap-2 rounded-2xl bg-sky-light px-3 py-3 font-display font-semibold text-navy">
                    <CheckCircle2 className={`size-5 shrink-0 ${["text-green", "text-pink", "text-orange"][i % 3]}`} />{p}
                  </li>
                ))}
              </ul>
            )}
            <Link href="/about" className="btn btn-navy mt-8">Read Our Story</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
