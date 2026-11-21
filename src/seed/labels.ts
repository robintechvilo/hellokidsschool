/**
 * Fill page banners, section headings, SEO and other labels in the CMS.
 * Only EMPTY fields are filled — anything already edited in the admin is kept.
 */
import type { Payload } from "payload";
import { heroExtras, homeHeadings, offerExtras, pageDefaults, privacySections, siteExtras, type PageKey } from "../content/labels";

type Obj = Record<string, unknown>;
const isEmpty = (v: unknown) => v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
const isObj = (v: unknown): v is Obj => !!v && typeof v === "object" && !Array.isArray(v);

/** Copy values from `src` into `target` wherever target is empty (recursive for groups). */
function fillEmpty(target: Obj, src: Obj): Obj {
  const out: Obj = { ...target };
  for (const [k, v] of Object.entries(src)) {
    if (isEmpty(out[k])) out[k] = v;
    else if (isObj(out[k]) && isObj(v)) out[k] = fillEmpty(out[k] as Obj, v);
  }
  return out;
}

/** Strip read-only keys before writing a global back. */
function writable(doc: Obj): Obj {
  const { id: _id, createdAt: _c, updatedAt: _u, globalType: _g, ...rest } = doc; // eslint-disable-line @typescript-eslint/no-unused-vars
  return rest;
}

const t = (arr: string[]) => arr.map((text) => ({ text }));

const headingFieldName: Record<string, string> = {
  story: "storyHeading", values: "valuesHeading", about: "aboutHeading", learn: "learnHeading", apply: "applyHeading",
  steps: "stepsHeading", form: "formHeading", message: "messageHeading", location: "locationHeading", visit: "visitHeading",
};

export async function fillLabels(payload: Payload, log: (m: string) => void = console.log) {
  const ctx = () => ({ disableRevalidate: true });
  const fill = async (slug: string, defaults: Obj) => {
    const cur = (await payload.findGlobal({ slug: slug as never, depth: 0 })) as unknown as Obj;
    const next = fillEmpty(writable(cur), defaults);
    if (JSON.stringify(next) === JSON.stringify(writable(cur))) return log(`  ${slug}: already filled`);
    await payload.updateGlobal({ slug: slug as never, data: next as never, depth: 0, context: ctx() });
    log(`  ${slug}: filled empty fields`);
  };

  // Offer banner photo = the art-fish picture, if it exists in Media
  const fish = await payload.find({ collection: "media", where: { filename: { like: "art-fish" } }, limit: 1, depth: 0 });

  await fill("home-page", { hero: heroExtras, headings: homeHeadings });
  await fill("offer", {
    stickerTop: offerExtras.stickerTop, stickerBottom: offerExtras.stickerBottom, bannerEyebrow: offerExtras.bannerEyebrow,
    ...(fish.docs[0] ? { bannerImage: fish.docs[0].id } : {}),
  });
  await fill("site-settings", { footerAbout: siteExtras.footerAbout, visitTimes: t(siteExtras.visitTimes) });

  for (const key of Object.keys(pageDefaults) as PageKey[]) {
    const d = pageDefaults[key];
    const headings: Obj = {};
    for (const [k, h] of Object.entries(d.headings)) headings[headingFieldName[k] ?? k] = h;
    await fill(`${key}-page`, {
      banner: d.banner,
      seo: d.seo,
      ...headings,
      ...(key === "privacy" ? { sections: privacySections } : {}),
    });
  }
}
