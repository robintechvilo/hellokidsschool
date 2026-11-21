/**
 * Default texts for page banners, section headings and other labels.
 * Used to seed/backfill the CMS and as safe fallbacks if a field is left empty.
 * The live values are edited in Admin → Website Pages.
 */
export type Heading = { eyebrow: string; title: string; text?: string };
export type Banner = Heading;
export type Seo = { title: string; description: string };

export const homeHeadings: Record<
  "facilities" | "routine" | "leadership" | "gallery" | "events" | "testimonials" | "faq",
  Heading
> = {
  facilities: { eyebrow: "Why parents choose us", title: "Our Facilities", text: "Everything your child needs to feel safe, happy and excited to learn — all under one roof." },
  routine: { eyebrow: "A day at Hello Kids", title: "Our Happy Daily Routine" },
  leadership: { eyebrow: "A message from", title: "Our Leadership" },
  gallery: { eyebrow: "Smiles everywhere", title: "Photo Gallery", text: "A peek into our colorful classrooms, art corners and celebrations." },
  events: { eyebrow: "Fun at school", title: "Events & Activities" },
  testimonials: { eyebrow: "Happy parents", title: "What Parents Say" },
  faq: { eyebrow: "Questions from parents", title: "Frequently Asked Questions" },
};

export const heroExtras = {
  classesLine: "Pre Play · Play · LKG · UKG · Day Care",
  primaryCta: "Apply Now",
  secondaryCta: "Book a Visit",
};

export const offerExtras = {
  stickerTop: "50%",
  stickerBottom: "OFF",
  bannerEyebrow: "Hurry, seats are limited!",
  bannerImage: "/images/art-fish.webp",
};

export const siteExtras = {
  footerAbout: "An English Medium & English Version pre-school in Mirpur, Dhaka, where little ones play, learn and grow.",
  visitTimes: ["Morning (9–11 AM)", "Midday (11 AM–1 PM)", "Afternoon (2–4 PM)"],
};

type PageDefaults = { banner: Banner; seo: Seo; headings: Record<string, Heading> };

export const pageDefaults = {
  about: {
    banner: { eyebrow: "Get to know us", title: "About Hello Kids", text: "A happy, safe and colorful pre-school where little ones play, learn and grow." },
    seo: { title: "About Us", description: "Learn about Hello Kids Pre-School & Day Care in West Shewrapara, Mirpur — our story, mission, values and leadership." },
    headings: {
      story: { eyebrow: "Our story", title: "A second home for little learners" },
      values: { eyebrow: "What we believe in", title: "Our Values" },
    },
  },
  programs: {
    banner: { eyebrow: "Learning through play", title: "Our Programs", text: "From the very first day of Pre Play to UKG graduation — plus a caring Day Care for working parents." },
    seo: { title: "Programs — Pre Play, Play, LKG, UKG & Day Care", description: "English Medium & English Version programs at Hello Kids: Pre Play, Play, LKG, UKG and Day Care in Mirpur, Dhaka." },
    headings: {
      about: { eyebrow: "About this class", title: "Welcome to {class}" },
      learn: { eyebrow: "Fun every day", title: "What children learn" },
      apply: { eyebrow: "Admissions open", title: "Apply for {class}", text: "Fill in the form and our team will call you to arrange a visit." },
    },
  },
  facilities: {
    banner: { eyebrow: "Everything under one roof", title: "Our Facilities", text: "Safe, modern and full of fun — designed for how little children learn best." },
    seo: { title: "Facilities", description: "Day Care, AC classrooms, kids play zone, smart pre-school technology, art, music & dance, trained teachers and study tours at Hello Kids, Mirpur." },
    headings: {},
  },
  gallery: {
    banner: { eyebrow: "Smiles everywhere", title: "Photo Gallery", text: "Moments of learning, laughter and celebration at Hello Kids." },
    seo: { title: "Photo Gallery", description: "Photos of classrooms, art & craft, events, birthdays and study tours at Hello Kids Pre-School & Day Care, Mirpur." },
    headings: {},
  },
  events: {
    banner: { eyebrow: "Fun at school", title: "Events & Activities", text: "Celebrations, festivals and special days that make school life magical." },
    seo: { title: "Events & Activities", description: "Orientation, Fruit Festival, birthday celebrations and more fun events at Hello Kids Pre-School, Mirpur." },
    headings: {},
  },
  admissions: {
    banner: { eyebrow: "Admission Open 2026", title: "Admissions", text: "Joining Hello Kids is easy! Follow four simple steps — we're happy to help at every one." },
    seo: { title: "Admissions 2026 — 50% OFF", description: "Admission open at Hello Kids Pre-School & Day Care, Mirpur. Pre Play, Play, LKG, UKG and Day Care. Apply online or call 01901 641 644." },
    headings: {
      steps: { eyebrow: "Simple & friendly", title: "How to Apply" },
      form: { eyebrow: "Apply online", title: "Admission Inquiry Form", text: "Fill in the form and our team will call you within one working day." },
    },
  },
  contact: {
    banner: { eyebrow: "We'd love to hear from you", title: "Contact Us", text: "Call, WhatsApp, send a message or book a campus visit — we're always happy to help." },
    seo: { title: "Contact Us & Book a Visit", description: "Visit Hello Kids Pre-School at 778 West Shewrapara, beside Metro Pillar 307, Mirpur, Dhaka-1216. Call or WhatsApp 01901 641 644." },
    headings: {
      message: { eyebrow: "Send a message", title: "Write to Us" },
      location: { eyebrow: "Find us", title: "Our Location" },
      visit: { eyebrow: "Come and see us", title: "Book a Campus Visit", text: "See our classrooms, meet our teachers and ask anything. Pick a day and time that suits you." },
    },
  },
  faq: {
    banner: { eyebrow: "We're here to help", title: "Parents' FAQ" },
    seo: { title: "FAQ", description: "Answers to common questions from parents about classes, Day Care, admission and location at Hello Kids Pre-School, Mirpur." },
    headings: {},
  },
  privacy: {
    banner: { eyebrow: "Your trust matters", title: "Privacy Policy" },
    seo: { title: "Privacy Policy", description: "How Hello Kids Pre-School & Day Care collects, uses and protects information from parents." },
    headings: {},
  },
} satisfies Record<string, PageDefaults>;

export type PageKey = keyof typeof pageDefaults;

export const privacySections = [
  { heading: "Information we collect", text: "When you fill in a form on this website (admission inquiry, campus visit or contact), we collect the details you enter: your name, mobile number, optional email, your child's name, date of birth and preferred class, and your message." },
  { heading: "How we use it", text: "We use this information only to reply to you, arrange a campus visit and process admission. We never sell or share your details with third parties for marketing." },
  { heading: "Children's photos", text: "Photos of students on this website are published with parents' permission. If you would like a photo removed, please contact us and we will remove it promptly." },
  { heading: "Analytics & cookies", text: "We may use privacy-friendly analytics to understand how visitors use the site. These do not identify you personally." },
  { heading: "Data storage", text: "Form submissions are stored securely and only school staff can access them. We keep them only as long as needed for admission purposes." },
  { heading: "Contact", text: "For any privacy question, call us at 01901 641 644 or visit us at 778, West Shewrapara, Mirpur, Dhaka-1216." },
];
