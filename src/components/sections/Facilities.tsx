import Image from "next/image";
import type { FacilityData } from "@/lib/cms";
import { bg, onBg, text } from "@/lib/colors";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Wave, Cloud } from "@/components/ui/Decor";

export function Facilities({ items }: { items: FacilityData[] }) {
  return (
    <section className="relative bg-cream">
      <Wave className="-mt-px h-12 text-white sm:h-16" flip />
      <Cloud className="absolute right-6 top-20 w-32 opacity-80" />
      <div className="container-x py-16 sm:py-20">
        <SectionTitle eyebrow="Why parents choose us" title="Our Facilities"
          text="Everything your child needs to feel safe, happy and excited to learn — all under one roof." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.07}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_30px_-16px_rgba(30,42,120,.45)] transition-transform hover:-translate-y-1.5">
                <div className="relative">
                  <Image src={f.image.src} alt={f.image.alt || f.title} width={f.image.w} height={f.image.h} sizes="(min-width:1024px) 300px, (min-width:640px) 45vw, 92vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className={`absolute -bottom-7 left-5 grid size-14 place-items-center rounded-2xl border-4 border-white shadow-lg transition-transform group-hover:rotate-12 ${bg[f.color]} ${onBg[f.color]}`}>
                    <Icon name={f.icon} className="size-6" />
                  </span>
                </div>
                <div className="px-5 pb-6 pt-10">
                  <h3 className={`text-xl font-bold ${text[f.color]}`}>{f.title}</h3>
                  <p className="mt-2 text-ink/75">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <Wave className="h-12 text-white sm:h-16" />
    </section>
  );
}
