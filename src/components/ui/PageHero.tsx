import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Cloud, Star, Wave } from "./Decor";

export function PageHero({
  eyebrow, title, text, crumbs = [],
}: { eyebrow: string; title: string; text?: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky to-sky-light">
      <Cloud className="absolute -left-6 top-6 w-40 opacity-90" />
      <Cloud className="absolute right-4 top-16 w-28 opacity-80 animate-float-slow" />
      <Star className="absolute left-[18%] bottom-20 size-6 text-pink animate-float" />
      <Star className="absolute right-[22%] top-10 size-7 text-yellow animate-float-slow" />
      <div className="container-x relative pb-24 pt-12 text-center sm:pb-28 sm:pt-16">
        <nav aria-label="Breadcrumb" className="rise mb-4 flex flex-wrap items-center justify-center gap-1 text-sm font-semibold text-navy/70">
          <Link href="/" className="hover:text-navy">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="size-4" />
              {c.href ? <Link href={c.href} className="hover:text-navy">{c.label}</Link> : <span className="text-pink">{c.label}</span>}
            </span>
          ))}
        </nav>
        <p className="rise font-script text-3xl text-green" style={{ animationDelay: ".05s" }}>{eyebrow}</p>
        <h1 className="rise mt-1 text-4xl font-bold text-navy sm:text-6xl" style={{ animationDelay: ".1s" }}>{title}</h1>
        {text && <p className="rise mx-auto mt-4 max-w-2xl text-lg text-ink/75" style={{ animationDelay: ".15s" }}>{text}</p>}
      </div>
      <Wave className="absolute inset-x-0 bottom-0 h-12 text-white sm:h-16" />
    </section>
  );
}
