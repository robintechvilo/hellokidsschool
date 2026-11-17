import type { RoutineData } from "@/lib/cms";
import { bg, onBg } from "@/lib/colors";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Routine({ items }: { items: RoutineData[] }) {
  return (
    <section className="bg-sky-light py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow="A day at Hello Kids" title="Our Happy Daily Routine" />
        <div className="relative mt-14">
          {/* dashed path */}
          <svg className="absolute left-0 right-0 top-10 hidden h-6 w-full lg:block" preserveAspectRatio="none" viewBox="0 0 1000 20" aria-hidden>
            <path d="M0 10 Q 83 0 166 10 T 333 10 T 500 10 T 666 10 T 833 10 T 1000 10" stroke="#1e2a78" strokeOpacity=".25" strokeWidth="3" strokeDasharray="10 10" fill="none" />
          </svg>
          <ol className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={i * 0.08} className="flex flex-col items-center text-center">
                  <span className={`relative grid size-20 place-items-center rounded-full border-[6px] border-white shadow-lg ${bg[r.color]} ${onBg[r.color]}`}>
                    <Icon name={r.icon} className="size-8" />
                    <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white">{i + 1}</span>
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-navy">{r.title}</h3>
                  <p className="mt-1 text-ink/70">{r.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
