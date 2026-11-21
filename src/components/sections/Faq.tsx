import { ChevronDown } from "lucide-react";
import { homeHeadings, type Heading } from "@/content/labels";
import type { FaqData } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const dots = ["bg-pink", "bg-orange", "bg-green", "bg-teal", "bg-purple", "bg-red"];

export function Faq({ items, heading = homeHeadings.faq }: { items: FaqData[]; heading?: Heading }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x max-w-3xl">
        <SectionTitle eyebrow={heading.eyebrow} title={heading.title} text={heading.text || undefined} />
        <Reveal className="mt-10 space-y-4">
          {items.map((f, i) => (
            <details key={f.q} className="group rounded-3xl bg-sky-light px-6 py-5 open:bg-white open:shadow-[0_10px_30px_-16px_rgba(30,42,120,.5)] open:ring-2 open:ring-sky">
              <summary className="flex cursor-pointer list-none items-center gap-4 font-display text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                <span className={`size-3 shrink-0 rounded-full ${dots[i % dots.length]}`} />
                <span className="flex-1">{f.q}</span>
                <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 pl-7 text-ink/80">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
