/**
 * Fill new CMS fields (banners, headings, SEO, labels) with the default texts.
 * Safe to run any time: only empty fields are filled.
 *   npm run backfill
 */
import { getPayload } from "payload";
import config from "@payload-config";
import { fillLabels } from "./labels";

const payload = await getPayload({ config });
console.log("[backfill] filling empty page/label fields…");
try {
  await fillLabels(payload, (m) => console.log("[backfill]" + m));
  console.log("[backfill] done ✔");
  process.exit(0);
} catch (e) {
  console.error(e);
  process.exit(1);
}
