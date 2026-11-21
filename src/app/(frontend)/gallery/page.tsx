import type { Metadata } from "next";
import { getGallery, getPage, pageMetadata } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const generateMetadata = (): Promise<Metadata> => pageMetadata("gallery");

export default async function GalleryPage() {
  const page = await getPage("gallery");
  const items = await getGallery();
  return (
    <>
      <PageHero eyebrow={page.banner.eyebrow} title={page.banner.title} text={page.banner.text || undefined} crumbs={[{ label: "Gallery" }]} />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <GalleryGrid items={items} />
        </div>
      </section>
    </>
  );
}
