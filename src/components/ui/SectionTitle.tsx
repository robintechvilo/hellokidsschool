import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow, title, text, align = "center", light = false,
}: { eyebrow: string; title: React.ReactNode; text?: string; align?: "center" | "left"; light?: boolean }) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className={`font-script text-2xl sm:text-3xl ${light ? "text-yellow" : "text-pink"}`}>{eyebrow}</p>
      <h2 className={`mt-1 text-3xl font-bold sm:text-5xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      <Squiggle className={`mt-3 h-3 w-28 ${center ? "mx-auto" : ""} ${light ? "text-yellow" : "text-orange"}`} />
      {text && <p className={`mt-4 text-lg ${light ? "text-white/85" : "text-ink/75"}`}>{text}</p>}
    </Reveal>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" fill="none" className={className} aria-hidden>
      <path d="M2 6c8-6 12 6 20 0s12 6 20 0 12 6 20 0 12 6 20 0 12 6 20 0 12 6 16 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
