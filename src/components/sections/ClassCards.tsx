import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProgramData } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";
import { Reveal } from "@/components/ui/Reveal";

export function ClassCards({ programs }: { programs: ProgramData[] }) {
  return (
    <section className="relative z-10 -mt-28 pb-8 sm:-mt-32" aria-label="Our classes">
      <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link href={`/programs/${p.slug}`}
              className={`group flex h-full flex-col rounded-[2rem] p-3 shadow-[0_14px_30px_-14px_rgba(30,42,120,.5)] transition-transform hover:-translate-y-2 hover:rotate-[-1deg] ${bg[p.color]} ${onBg[p.color]}`}>
              <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
                <Image src={p.image.src} alt={p.image.alt || `${p.name} class at Hello Kids`} width={p.image.w} height={p.image.h}
                  sizes="(min-width:1024px) 300px, (min-width:640px) 45vw, 92vw"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 font-display text-sm font-semibold text-navy shadow">{p.age}</span>
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
                <h3 className="text-3xl font-bold">{p.name}</h3>
                <p className="mt-1.5 flex-1 opacity-90">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-display font-semibold">
                  Learn more <ArrowRight className="size-5 transition-transform group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
