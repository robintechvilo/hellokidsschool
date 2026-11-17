"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { nav } from "@/content/site";
import type { OfferData, SiteData } from "@/lib/cms";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

const navColors = ["text-red", "text-navy", "text-green", "text-pink", "text-purple", "text-orange", "text-teal"];

export function Header({ site, offer }: { site: SiteData; offer: OfferData }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(offer.enabled);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      {offerOpen && (
        <div className="relative bg-gradient-to-r from-purple via-pink to-red text-white">
          <div className="container-x flex items-center justify-center gap-3 py-2 pr-10 text-center text-sm font-semibold sm:text-base">
            <span aria-hidden>🎉</span>
            <span>{offer.text}</span>
            <Link href={offer.href} className="hidden rounded-full bg-yellow px-3 py-0.5 font-display text-navy hover:bg-white sm:inline-block">
              {offer.cta}
            </Link>
          </div>
          <button onClick={() => setOfferOpen(false)} aria-label="Close announcement"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 hover:bg-white/20">
            <X className="size-4" />
          </button>
        </div>
      )}

      {/* Top bar (desktop) */}
      <div className="hidden bg-navy text-sm text-white/90 lg:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={site.tel} className="flex items-center gap-2 hover:text-yellow"><Phone className="size-4 text-yellow" />{site.phoneDisplay}</a>
            <span className="flex items-center gap-2"><MapPin className="size-4 text-yellow" />{site.address.line1}, {site.address.city}</span>
            {site.email && <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-yellow"><Mail className="size-4 text-yellow" />{site.email}</a>}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-script text-lg text-yellow">{site.motto}</span>
            <a href={site.facebook || "#"} target="_blank" rel="noopener" aria-label="Facebook" className="rounded-full bg-white/10 p-1.5 hover:bg-[#1877f2]"><FacebookIcon className="size-4" /></a>
            <a href={site.wa} target="_blank" rel="noopener" aria-label="WhatsApp" className="rounded-full bg-white/10 p-1.5 hover:bg-[#25d366]"><WhatsAppIcon className="size-4" /></a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-[0_6px_24px_-12px_rgba(30,42,120,.35)] backdrop-blur" : "bg-white"}`}>
        <div className={`container-x flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-20 lg:h-24"}`}>
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
            <Image src="/logo-256.png" alt="" width={256} height={256} priority
              className={`transition-all ${scrolled ? "size-12" : "size-14 lg:size-18"}`} />
            <span className="leading-none">
              <span className="block font-display text-2xl font-bold tracking-wide lg:text-[1.7rem]">
                {"HELLO".split("").map((c, i) => <span key={i} className={navColors[i]}>{c}</span>)}{" "}
                {"KIDS".split("").map((c, i) => <span key={i} className={navColors[(i + 3) % 7]}>{c}</span>)}
              </span>
              <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-purple lg:text-xs">Pre-School &amp; Day Care</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link key={n.href} href={n.href}
                  className={`rounded-full px-3.5 py-2 font-display text-[1.05rem] font-medium transition-colors ${active ? "bg-sky text-navy" : "text-navy/80 hover:bg-sky-light hover:text-navy"}`}>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/admissions" className="btn btn-orange hidden !py-3 sm:inline-flex">Apply Now</Link>
            <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}
              className="grid size-12 place-items-center rounded-2xl bg-navy text-white lg:hidden">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy text-white lg:hidden"
            initial={{ clipPath: "circle(0% at 92% 4%)" }} animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }} transition={{ duration: 0.45, ease: "easeInOut" }}
            role="dialog" aria-modal="true" aria-label="Menu">
            <div className="container-x flex h-20 items-center justify-between">
              <Image src="/logo-256.png" alt={site.name} width={56} height={56} className="size-14" />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid size-12 place-items-center rounded-2xl bg-white/10"><X /></button>
            </div>
            <nav className="container-x flex flex-1 flex-col gap-1 py-4" aria-label="Mobile">
              {nav.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <Link href={n.href} className="flex items-center gap-3 rounded-2xl px-3 py-3 font-display text-3xl font-semibold hover:bg-white/10">
                    <span className={`size-3 rounded-full ${["bg-red","bg-yellow","bg-green","bg-pink","bg-orange","bg-teal","bg-sky"][i % 7]}`} />
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-x grid gap-3 pb-8">
              <Link href="/admissions" className="btn btn-orange w-full">Apply Now — 50% OFF</Link>
              <a href={site.tel} className="btn btn-white w-full"><Phone className="size-5" />{site.phoneDisplay}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
