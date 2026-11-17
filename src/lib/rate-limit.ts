import "server-only";

/**
 * Simple in-memory sliding-window limiter (per server instance).
 * Good enough with the honeypot for a school site; swap for a DB/Redis limiter on the VPS if needed.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60_000) {
  const now = Date.now();
  const list = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (list.length >= limit) return false;
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return true;
}
