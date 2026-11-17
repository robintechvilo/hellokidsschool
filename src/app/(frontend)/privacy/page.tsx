import type { Metadata } from "next";
import { getSite } from "@/lib/cms";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: true } };

function sectionsFor(site: Awaited<ReturnType<typeof getSite>>) { return [
  { h: "Information we collect", p: "When you fill in a form on this website (admission inquiry, campus visit or contact), we collect the details you enter: your name, mobile number, optional email, your child's name, date of birth and preferred class, and your message." },
  { h: "How we use it", p: "We use this information only to reply to you, arrange a campus visit and process admission. We never sell or share your details with third parties for marketing." },
  { h: "Children's photos", p: "Photos of students on this website are published with parents' permission. If you would like a photo removed, please contact us and we will remove it promptly." },
  { h: "Analytics & cookies", p: "We may use privacy-friendly analytics to understand how visitors use the site. These do not identify you personally." },
  { h: "Data storage", p: "Form submissions are stored securely and only school staff can access them. We keep them only as long as needed for admission purposes." },
  { h: "Contact", p: `For any privacy question, call us at ${site.phoneDisplay} or visit us at ${site.address.line1}, ${site.address.city}.` },
]; }

export default async function PrivacyPage() {
  const sections = sectionsFor(await getSite());
  return (
    <>
      <PageHero eyebrow="Your trust matters" title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl font-bold text-navy">{s.h}</h2>
              <p className="mt-2 text-lg text-ink/80">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
