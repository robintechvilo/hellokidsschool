import Link from "next/link";

/** Extra links at the bottom of the admin menu. */
export function NavLinks() {
  return (
    <div className="hk-navlinks">
      <a href="/" target="_blank" rel="noopener">🌐 View website ↗</a>
      <Link href="/admin/globals/offer">🎉 Offer / announcement</Link>
    </div>
  );
}
