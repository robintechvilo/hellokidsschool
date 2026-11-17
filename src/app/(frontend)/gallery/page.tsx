import type { Metadata } from "next";
import { getGallery } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos of classrooms, art & craft, events, birthdays and study tours at Hello Kids Pre-School & Day Care, Mirpur.",
};

export default async function GalleryPage() {
  const items = await getGallery();
  return (
    <>
      <PageHero eyebrow="Smiles everywhere" title="Photo Gallery" crumbs={[{ label: "Gallery" }]}
        text="Moments of learning, laughter and celebration at Hello Kids." />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <GalleryGrid items={items} />
        </div>
      </section>
    </>
  );
}
