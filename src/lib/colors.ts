import type { BrandColor } from "@/content/site";

/** Literal class maps so Tailwind can see every class. */
export const bg: Record<BrandColor, string> = {
  pink: "bg-pink", orange: "bg-orange", green: "bg-green", teal: "bg-teal",
  purple: "bg-purple", red: "bg-red", navy: "bg-navy", yellow: "bg-yellow",
};
export const text: Record<BrandColor, string> = {
  pink: "text-pink", orange: "text-orange", green: "text-green", teal: "text-teal",
  purple: "text-purple", red: "text-red", navy: "text-navy", yellow: "text-yellow",
};
export const softBg: Record<BrandColor, string> = {
  pink: "bg-pink/10", orange: "bg-orange/15", green: "bg-green/10", teal: "bg-teal/10",
  purple: "bg-purple/10", red: "bg-red/10", navy: "bg-navy/10", yellow: "bg-yellow/20",
};
export const ring: Record<BrandColor, string> = {
  pink: "ring-pink", orange: "ring-orange", green: "ring-green", teal: "ring-teal",
  purple: "ring-purple", red: "ring-red", navy: "ring-navy", yellow: "ring-yellow",
};
/** Text color that stays readable on the solid brand background. */
export const onBg: Record<BrandColor, string> = {
  pink: "text-white", orange: "text-navy", green: "text-white", teal: "text-white",
  purple: "text-white", red: "text-white", navy: "text-white", yellow: "text-navy",
};
