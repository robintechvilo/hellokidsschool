"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import type { StatData } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats({ stats }: { stats: StatData[] }) {
  return (
    <section className="py-14" aria-label="Hello Kids in numbers">
      <div className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {stats.map((s, i) => (
          <div key={s.label}
            className={`flex flex-col items-center justify-center rounded-[2rem] px-4 py-8 text-center shadow-[0_8px_0_rgba(0,0,0,.12)] ${bg[s.color]} ${onBg[s.color]} ${i % 2 ? "lg:rotate-2" : "lg:-rotate-2"}`}>
            <span className="font-display text-5xl font-bold sm:text-6xl"><Counter to={s.value} suffix={s.suffix} /></span>
            <span className="mt-1 font-display text-lg font-semibold sm:text-xl">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
