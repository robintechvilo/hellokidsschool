import Image from "next/image";
import Link from "next/link";
import { CalendarHeart, Sparkles } from "lucide-react";
import type { HomeData, OfferData } from "@/lib/cms";
import { Cloud, Pencil, Plane, Star, Blocks, Wave } from "@/components/ui/Decor";

const letters: [string, string][] = [
  ["H", "text-red"], ["E", "text-navy"], ["L", "text-red"], ["L", "text-navy"], ["O", "text-green"],
  [" ", ""], ["K", "text-pink"], ["I", "text-purple"], ["D", "text-yellow"], ["S", "text-orange"],
];

export function Hero({ h, offer }: { h: HomeData["hero"]; offer: Pick<OfferData, "enabled" | "stickerTop" | "stickerBottom" | "href"> }) {
  const showOffer = offer.enabled;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky to-sky-light">
      {/* drifting clouds */}
      <Cloud className="absolute left-0 top-10 w-40 opacity-90 animate-drift [animation-duration:60s]" />
      <Cloud className="absolute left-0 top-48 w-24 opacity-70 animate-drift [animation-delay:-25s] [animation-duration:75s]" />
      <Cloud className="absolute -right-6 top-6 w-56 opacity-90" />
      <Star className="absolute left-[46%] top-14 size-7 text-yellow animate-float" />
      <Star className="absolute left-[6%] bottom-40 size-5 text-pink animate-float-slow" />
      <Plane className="absolute right-[40%] top-24 hidden w-14 -rotate-12 animate-float-slow lg:block" />

      <div className="container-x relative grid items-center gap-10 pb-36 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-44 lg:pt-14">
        <div className="relative z-10 text-center lg:text-left">
          <div className="rise">
            <p className="font-script text-3xl text-green sm:text-4xl">{h.eyebrow} ✨</p>
            <h1 className="mt-2">
              <span className="sr-only">Hello Kids {h.titleLine2}</span>
              <span aria-hidden className="block font-display text-[3.4rem] font-bold leading-[0.95] tracking-tight [text-shadow:0_4px_0_#fff,0_6px_14px_rgba(30,42,120,.15)] sm:text-7xl lg:text-[5.6rem]">
                {letters.map(([c, cls], i) => (
                  <span key={i} className={`inline-block ${cls} ${c !== " " ? "transition-transform hover:-translate-y-2 hover:rotate-6" : "w-4 sm:w-6"}`}>{c}</span>
                ))}
              </span>
              <span aria-hidden className="mt-2 block font-display text-3xl font-bold text-purple sm:text-5xl">{h.titleLine2}</span>
            </h1>
          </div>

          <div style={{ animationDelay: "0.1s" }} className="rise mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
            {h.badges.map((b, i) => (
              <span key={b} className={`-skew-x-6 rounded-md px-4 py-1.5 font-display text-lg font-semibold uppercase tracking-wide text-white shadow-md ${i ? "bg-purple" : "bg-red"}`}>{b}</span>
            ))}
          </div>

          <div className="rise" style={{ animationDelay: "0.2s" }}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80 sm:text-xl lg:mx-0">{h.text}</p>
          </div>

          <div style={{ animationDelay: "0.3s" }} className="rise mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link href="/admissions" className="btn btn-orange !px-7 !py-4 text-lg"><Sparkles className="size-5" />{h.primaryCta}</Link>
            <Link href="/contact#visit" className="btn btn-navy !px-7 !py-4 text-lg"><CalendarHeart className="size-5" />{h.secondaryCta}</Link>
          </div>

          <div style={{ animationDelay: "0.4s" }} className="rise mt-6 flex items-center justify-center gap-2 font-display text-navy lg:justify-start">
            <span className="text-lg font-semibold">{h.classesLine}</span>
          </div>
        </div>

        <div style={{ animationDelay: "0.15s" }} className="rise relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 blob bg-yellow/70 rotate-6" aria-hidden />
          <div className="absolute -inset-1 blob-2 bg-pink/80 -rotate-3" aria-hidden />
          <div className="relative overflow-hidden blob border-8 border-white shadow-2xl">
            <Image src={h.image.src} alt={h.image.alt} width={h.image.w} height={h.image.h} priority
              sizes="(min-width:1024px) 560px, 92vw" className="aspect-[4/3.4] w-full object-cover" />
          </div>

          {/* 50% OFF sticker */}
          {showOffer && (
          <Link href={offer.href || "/admissions"} aria-label={`${offer.stickerTop} ${offer.stickerBottom}`}
            className="absolute -left-3 -top-4 grid size-28 place-items-center sm:-left-8 sm:size-36">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow drop-shadow-lg" aria-hidden>
              <path fill="#e32d2d" d="M50 0l7 12 13-6 2 14 14-1-4 14 13 5-9 11 9 11-13 5 4 14-14-1-2 14-13-6-7 12-7-12-13 6-2-14-14 1 4-14-13-5 9-11-9-11 13-5-4-14 14 1 2-14 13 6z" />
            </svg>
            <span className="relative text-center font-display leading-none text-white">
              <span className="block text-3xl font-bold sm:text-4xl">{offer.stickerTop}</span>
              <span className="block text-lg font-bold text-yellow sm:text-xl">{offer.stickerBottom}</span>
            </span>
          </Link>
          )}

          {/* floating mini photo */}
          <div className="absolute -bottom-8 -right-2 w-32 rotate-6 animate-float rounded-3xl bg-white p-2 shadow-xl sm:-right-6 sm:w-44">
            <Image src={h.mini.src} alt={h.mini.alt} width={h.mini.w} height={h.mini.h} sizes="180px" className="aspect-square rounded-2xl object-cover" />
            <p className="mt-1 text-center font-script text-lg text-pink">{h.miniCaption}</p>
          </div>
          <Blocks className="absolute -bottom-12 left-2 hidden w-20 sm:block" />
          <Pencil className="absolute -right-10 top-8 hidden w-14 animate-float-slow lg:block" />
        </div>
      </div>

      {/* grass + wave */}
      <Wave className="absolute inset-x-0 bottom-0 h-16 text-white sm:h-24" />
    </section>
  );
}
