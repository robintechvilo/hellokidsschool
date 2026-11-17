import Link from "next/link";
import { Phone, PencilLine } from "lucide-react";
import type { SiteData } from "@/lib/cms";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Desktop: floating WhatsApp bubble. Mobile: sticky bottom action bar. */
export function FloatingActions({ site }: { site: SiteData }) {
  return (
    <>
      <a href={site.wa} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-16 place-items-center rounded-full bg-[#25d366] text-white shadow-xl ring-4 ring-white transition hover:scale-110 lg:grid">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40" />
        <WhatsAppIcon className="relative size-8" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-navy/10 bg-white/95 p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgba(30,42,120,.35)] backdrop-blur lg:hidden">
        <a href={site.tel} className="flex flex-col items-center gap-0.5 rounded-2xl bg-navy py-2 font-display text-sm text-white">
          <Phone className="size-5" />Call
        </a>
        <a href={site.wa} target="_blank" rel="noopener" className="flex flex-col items-center gap-0.5 rounded-2xl bg-[#25d366] py-2 font-display text-sm text-[#073b1c]">
          <WhatsAppIcon className="size-5" />WhatsApp
        </a>
        <Link href="/admissions" className="flex flex-col items-center gap-0.5 rounded-2xl bg-orange py-2 font-display text-sm text-navy">
          <PencilLine className="size-5" />Apply
        </Link>
      </div>
    </>
  );
}
