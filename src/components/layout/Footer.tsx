import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { nav } from "@/content/site";
import type { ProgramData, SiteData } from "@/lib/cms";
import { Wave, Star } from "@/components/ui/Decor";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Footer({ site, programs }: { site: SiteData; programs: ProgramData[] }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <footer className="relative mt-0 bg-navy text-white/85">
      <Wave className="-mt-px text-white" flip />
      <Star className="absolute left-[8%] top-24 size-6 text-yellow/60 animate-float" />
      <Star className="absolute right-[12%] top-36 size-4 text-pink/70 animate-float-slow" />
      <div className="container-x grid gap-10 pb-10 pt-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.4fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={site.logo?.src ?? "/logo-256.png"} alt="" width={72} height={72} className="size-18 rounded-full bg-white" />
            <div>
              <p className="font-display text-2xl font-bold text-white">Hello Kids</p>
              <p className="font-display text-sm text-yellow">Pre-School &amp; Day Care</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs">{site.footerAbout}</p>
          <p className="mt-3 font-script text-2xl text-yellow">{site.motto}</p>
          <div className="mt-4 flex gap-3">
            <a href={site.facebook || "#"} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-[#1877f2]"><FacebookIcon className="size-5" /></a>
            <a href={site.wa} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-[#25d366]"><WhatsAppIcon className="size-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-yellow">{n.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Programs</h3>
          <ul className="mt-4 space-y-2">
            {programs.map((p) => <li key={p.slug}><Link href={`/programs/${p.slug}`} className="hover:text-yellow">{p.name}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Visit Us</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-yellow" />
              <span>{site.address.line1}<br />({site.address.line2})<br />{site.address.city}</span></li>
            <li><a href={site.tel} className="flex gap-3 font-display text-xl font-semibold text-white hover:text-yellow"><Phone className="size-5 shrink-0 text-yellow" />{site.phoneDisplay}</a></li>
            <li className="flex gap-3"><Clock className="size-5 shrink-0 text-yellow" />{site.hours}</li>
          </ul>
          <iframe title="Hello Kids location map" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="mt-4 h-40 w-full rounded-2xl border-4 border-white/10" />
        </div>
      </div>
      <div className="border-t border-white/10 pb-24 lg:pb-0">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-yellow">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
