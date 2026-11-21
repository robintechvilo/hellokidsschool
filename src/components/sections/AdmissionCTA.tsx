import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { OfferData, SiteData } from "@/lib/cms";
import { Reveal } from "@/components/ui/Reveal";
import { Star, Plane } from "@/components/ui/Decor";

export function AdmissionCTA({ site, offer }: { site: SiteData; offer: OfferData }) {
  return (
    <section className="py-10">
      <div className="container-x">
        <Reveal>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-pink/30" aria-hidden />
            <div className="absolute -bottom-28 left-1/3 size-72 rounded-full bg-teal/30" aria-hidden />
            <Star className="absolute left-8 top-8 size-6 text-yellow animate-float" />
            <Plane className="absolute right-[38%] top-8 hidden w-12 animate-float-slow lg:block" />
            <div className="relative">
              <p className="font-script text-3xl text-yellow">{offer.enabled ? offer.bannerEyebrow : "We'd love to meet you"}</p>
              <h2 className="mt-2 text-4xl font-bold sm:text-5xl">{offer.enabled ? offer.text : "Admissions are open"}</h2>
              <p className="mt-4 max-w-lg text-lg text-white/85">
                Visit our campus at {site.address.line1}{site.address.line2 ? ` (${site.address.line2})` : ""} and meet our teachers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/admissions" className="btn btn-orange !px-8 !py-4 text-lg">Apply Now</Link>
                <a href={site.tel} className="btn btn-white !px-8 !py-4 text-lg"><Phone className="size-5" />{site.phoneDisplay}</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute -inset-3 rotate-6 rounded-[2rem] bg-yellow" aria-hidden />
              <Image src={offer.bannerImage.src} alt={offer.bannerImage.alt} width={offer.bannerImage.w} height={offer.bannerImage.h} sizes="320px"
                className="relative aspect-square w-full rounded-[2rem] border-4 border-white object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
