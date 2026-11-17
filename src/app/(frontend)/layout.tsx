import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito, Gochi_Hand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { getOffer, getPrograms, getSite } from "@/lib/cms";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["400", "500", "600", "700"] });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const gochi = Gochi_Hand({ subsets: ["latin"], variable: "--font-gochi", weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "https://hellokidsschool.com"),
    title: { default: site.seoTitle || `${site.name} | English Medium Pre-School in Mirpur, Dhaka`, template: `%s | ${site.shortName}` },
    description: site.seoDescription,
    openGraph: { type: "website", siteName: site.name, images: site.ogImage ? [site.ogImage.src] : ["/images/orientation-2026.webp"] },
  };
}

export const viewport: Viewport = { themeColor: "#1e2a78" };

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const [site, offer, programs] = await Promise.all([getSite(), getOffer(), getPrograms()]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Preschool", "LocalBusiness"],
    name: site.name,
    url: "https://hellokidsschool.com",
    logo: "https://hellokidsschool.com/logo.png",
    telephone: site.tel.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: [site.address.line1, site.address.line2].filter(Boolean).join(", "),
      addressLocality: site.address.city,
      addressCountry: "BD",
    },
  };

  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${gochi.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2">Skip to content</a>
        <Header site={site} offer={offer} />
        <main id="main" className="overflow-x-clip">{children}</main>
        <Footer site={site} programs={programs} />
        <FloatingActions site={site} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {site.ga4Id && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',${JSON.stringify(site.ga4Id)});` }} />
          </>
        )}
      </body>
    </html>
  );
}
