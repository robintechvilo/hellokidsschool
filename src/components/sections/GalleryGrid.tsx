"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryData } from "@/lib/cms";

const galleryCategories = ["Classroom", "Events", "Art & Craft", "Play & Tours"];

const chip = ["bg-navy", "bg-pink", "bg-orange", "bg-green", "bg-teal"];
const borders = ["border-pink", "border-yellow", "border-teal", "border-orange", "border-green", "border-purple"];

export function GalleryGrid({ items: raw }: { items: GalleryData[] }) {
  const items = useMemo(() => raw.map((g) => ({ ...g.img, cat: g.cat })), [raw]);
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = useMemo(() => (cat === "All" ? items : items.filter((i) => i.cat === cat)), [cat, items]);

  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, step]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Gallery categories">
        {["All", ...galleryCategories].map((c, i) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2.5 font-display text-lg font-semibold transition ${cat === c ? `${chip[i]} text-white shadow-[0_4px_0_rgba(0,0,0,.2)]` : "bg-sky-light text-navy hover:bg-sky"}`}>
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {list.map((g, i) => (
            <motion.button layout key={g.src} type="button" onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className={`group block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border-4 shadow-md ${borders[i % borders.length]}`}
              aria-label={`Open photo: ${g.alt}`}>
              <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(min-width:1024px) 24vw, (min-width:768px) 32vw, 46vw"
                className="w-full transition-transform duration-500 group-hover:scale-105" />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && list[open] && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-dark/95 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            role="dialog" aria-modal="true" aria-label={list[open].alt} onClick={() => setOpen(null)}>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"><ChevronRight /></button>
            <motion.figure key={list[open].src} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()} className="max-h-full">
              <Image src={list[open].src} alt={list[open].alt} width={list[open].w} height={list[open].h} sizes="90vw"
                className="max-h-[80vh] w-auto rounded-2xl border-4 border-white object-contain" />
              <figcaption className="mt-3 text-center font-display text-lg text-white">{list[open].alt} <span className="text-white/60">· {open + 1}/{list.length}</span></figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
