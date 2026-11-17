import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from "payload";

/**
 * Rebuild the static website pages after any content change, so the live site
 * updates within seconds. Skipped outside a Next.js request (e.g. the seed script).
 */
async function revalidateSite(context: Record<string, unknown>) {
  if (context?.disableRevalidate) return;
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/", "layout");
  } catch {
    // not running inside Next.js (CLI / seed) — nothing to revalidate
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = async ({ doc, context }) => {
  await revalidateSite(context);
  return doc;
};

export const revalidateAfterDelete: CollectionAfterDeleteHook = async ({ doc, context }) => {
  await revalidateSite(context);
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = async ({ doc, context }) => {
  await revalidateSite(context);
  return doc;
};

export const contentHooks = {
  afterChange: [revalidateAfterChange],
  afterDelete: [revalidateAfterDelete],
};
