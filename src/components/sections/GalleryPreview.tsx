import Image from "next/image";
import { homeHeadings, type Heading } from "@/content/labels";
import Link from "next/link";
import type { GalleryData } from "@/lib/cms";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const borders = ["border-pink", "border-yellow", "border-teal", "border-orange", "border-green", "border-purple"];

export function GalleryPreview({ items, heading = homeHeadings.gallery }: { items: GalleryData[]; heading?: Heading }) {
  if (!items.length) return null;
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow={heading.eyebrow} title={heading.title} text={heading.text || undefined} />
        <Reveal className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {items.map(({ img }, i) => (
            <div key={img.src} className={`group break-inside-avoid overflow-hidden rounded-[1.5rem] border-4 shadow-md ${borders[i % borders.length]}`}>
              <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes="(min-width:768px) 32vw, 46vw"
                className="w-full transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </Reveal>
        <div className="mt-6 text-center"><Link href="/gallery" className="btn btn-pink">View Full Gallery</Link></div>
      </div>
    </section>
  );
}
