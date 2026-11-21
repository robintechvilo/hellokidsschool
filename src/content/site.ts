/**
 * Site content.
 * Every object here mirrors a future Payload CMS collection/global (PRD §6A),
 * so switching to the Admin Panel later is only a data-source swap.
 * Items marked TODO need confirmation from the school.
 */

export type BrandColor = "pink" | "orange" | "green" | "teal" | "purple" | "red" | "navy" | "yellow";

// ---- Global: Site Settings ----
export const site = {
  name: "Hello Kids Pre-School & Day Care",
  shortName: "Hello Kids",
  tagline: "Where Kids Learn & Grow",
  motto: "Play – Learn – Grow",
  phoneDisplay: "01901 641 644",
  phone: "+8801901641644",
  whatsapp: "8801901641644",
  whatsappText: "Hi, I want to know about admission at Hello Kids.",
  email: "", // TODO: school email
  address: {
    line1: "778, West Shewrapara",
    line2: "Beside Metro Station Pillar No: 307",
    city: "Mirpur, Dhaka-1216",
  },
  mapQuery: "778 West Shewrapara, Mirpur, Dhaka 1216",
  facebook: "https://www.facebook.com/search/top?q=Hello%20Kids%20Pre%20School%20%26%20Day%20Care", // TODO: real page URL
  hours: "Sat – Thu · 8:00 AM – 5:00 PM", // TODO: confirm
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;
export const telLink = `tel:${site.phone}`;

// ---- Global: Offer / Announcement ----
export const offer = {
  enabled: true,
  text: "Admission Open 2026 — Get 50% OFF!", // TODO: confirm what the 50% applies to
  cta: "Apply Now",
  href: "/admissions",
};

// ---- Navigation ----
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

// ---- Collection: Programs ----
export const programs: {
  slug: string; name: string; age: string; color: BrandColor; image: string; blurb: string;
}[] = [
  { slug: "pre-play", name: "Pre Play", age: "Age 2½ – 3", color: "pink", image: "/images/preplay.webp",
    blurb: "A gentle first step: songs, colors, shapes and making new friends." },
  { slug: "play", name: "Play", age: "Age 3 – 4", color: "orange", image: "/images/play.webp",
    blurb: "Learning through play, crafts and stories that spark curiosity." },
  { slug: "lkg", name: "LKG", age: "Age 4 – 5", color: "green", image: "/images/lkg.webp",
    blurb: "Phonics, numbers and early writing in a fun, friendly classroom." },
  { slug: "ukg", name: "UKG", age: "Age 5 – 6", color: "teal", image: "/images/ukg-graduate.webp",
    blurb: "Confident reading, maths and manners — ready for big school!" },
]; // TODO: confirm age ranges

// ---- Collection: Facilities ----
export const facilities: {
  title: string; text: string; icon: string; color: BrandColor; image: string;
}[] = [
  { title: "Day Care", icon: "Baby", color: "purple", image: "/images/daycare.webp",
    text: "Safe, loving care for little ones while parents are at work." },
  { title: "Early Education", icon: "BookOpen", color: "teal", image: "/images/circle-time.webp",
    text: "Social, emotional, motor and language skills — step by step." },
  { title: "Art, Music & Dance", icon: "Palette", color: "pink", image: "/images/art-class.webp",
    text: "Painting, rhymes, music and dance to grow every talent." },
  { title: "Kids Play Zone", icon: "Blocks", color: "green", image: "/images/play-zone.webp",
    text: "Space to run, jump, play and build strong little bodies." },
  { title: "Well Trained Teachers", icon: "GraduationCap", color: "navy", image: "/images/teachers-class.webp",
    text: "Caring teachers trained in early-childhood education." },
  { title: "Smart Pre-School Technology", icon: "MonitorPlay", color: "orange", image: "/images/smart-class.webp",
    text: "Modern, colorful classrooms with smart learning tools." },
  { title: "AC Class Rooms", icon: "Snowflake", color: "teal", image: "/images/ac-classroom.webp",
    text: "Cool, clean and comfortable rooms all year round." },
  { title: "Educational Study Tours", icon: "Bus", color: "red", image: "/images/study-tour.webp",
    text: "Fun trips that turn the world into a classroom." },
];

// ---- Global: Home page ----
export const home = {
  hero: {
    eyebrow: "Where Kids Learn & Grow",
    titleLine2: "Pre-School & Day Care",
    text: "A happy, safe and colorful English Medium & English Version pre-school in Mirpur, Dhaka — where every child plays, learns and grows with love.",
    badges: ["English Medium", "English Version"],
    image: "/images/orientation-2026.webp",
    mini: "/images/butterfly-boy.webp",
  },
  welcome: {
    eyebrow: "Welcome to Hello Kids",
    title: "A second home for your little one",
    text: [
      "At Hello Kids Pre-School & Day Care, we believe the early years are the most important years. Our bright classrooms, caring teachers and playful lessons help children build confidence, curiosity and a lifelong love of learning.",
      "From the first day in Pre Play to graduation from UKG, we guide every child gently — through stories, art, music, games and real-world experiences.",
    ],
    points: ["Small, caring classes", "Learning through play", "Safe & clean AC campus"],
    images: ["/images/classroom-mural.webp", "/images/circle-time.webp", "/images/art-sunflower.webp"],
  },
  stats: [
    { value: 4, suffix: "", label: "Classes", color: "pink" as BrandColor },
    { value: 8, suffix: "+", label: "Facilities", color: "orange" as BrandColor },
    { value: 100, suffix: "%", label: "AC Classrooms", color: "teal" as BrandColor },
    { value: 50, suffix: "%", label: "Admission Offer", color: "purple" as BrandColor },
  ],
  daycare: {
    eyebrow: "Day Care",
    title: "Full-day care, full of fun",
    text: "Working parents can relax — our Day Care keeps children safe, busy and happy after class, with rest time, healthy snacks, games and loving supervision.",
    points: ["Trained caregivers", "Rest & snack time", "Indoor play & activities", "Safe, secure campus"],
    image: "/images/birthday-1.webp",
  },
  routine: [
    { title: "Hello Time", text: "Warm welcome & morning rhymes", icon: "Sun", color: "yellow" as BrandColor },
    { title: "Circle Time", text: "Talk, share and learn together", icon: "Users", color: "teal" as BrandColor },
    { title: "Learning", text: "Phonics, numbers & writing", icon: "BookOpen", color: "navy" as BrandColor },
    { title: "Art & Play", text: "Crafts, music, dance & games", icon: "Palette", color: "pink" as BrandColor },
    { title: "Snack Time", text: "Healthy food & good manners", icon: "Apple", color: "green" as BrandColor },
    { title: "Bye-Bye", text: "Story time & happy goodbyes", icon: "Smile", color: "orange" as BrandColor },
  ],
};

// ---- Collection: Leadership ----
export const leadership = [
  { name: "Md Shah Alam Riyadh", role: "Chairman", image: "/images/director.webp", // TODO: own message
    message: "Our goal is simple — a safe, modern and happy pre-school in Mirpur that parents trust and children love to come to every day." },
  { name: "Dilsat Jahan", role: "Managing Director", image: "/images/principal.webp", // TODO: own message
    message: "Every child is unique. At Hello Kids, we give each little learner the love, attention and joyful learning they need to grow into confident, kind and curious people." },
];

// ---- Collection: Events ----
export const events = [
  { title: "Orientation 2026", date: "2026", image: "/images/orientation-2.webp", color: "purple" as BrandColor,
    text: "We welcomed our new little stars with balloons, butterflies and big smiles." },
  { title: "Fruit Festival 2026", date: "2026", image: "/images/fruit-festival.webp", color: "orange" as BrandColor,
    text: "Kids learned about healthy eating with a colorful fruit fair." },
  { title: "Birthday Celebrations", date: "Every month", image: "/images/birthday-2.webp", color: "pink" as BrandColor,
    text: "Every birthday is special — we celebrate together as one family." },
];

// ---- Collection: Gallery ----
export const gallery = [
  { src: "/images/orientation-2026.webp", alt: "Orientation 2026 group photo", w: 1280, h: 960 },
  { src: "/images/art-sunflower.webp", alt: "Child showing a sunflower craft", w: 960, h: 1280 },
  { src: "/images/play.webp", alt: "Kids with paper flower crafts", w: 1280, h: 960 },
  { src: "/images/birthday-4.webp", alt: "Birthday celebration with balloons", w: 960, h: 1280 },
  { src: "/images/art-class.webp", alt: "Painting class", w: 1280, h: 960 },
  { src: "/images/play-zone.webp", alt: "Boy in uniform at the play zone", w: 714, h: 1218 },
  { src: "/images/classroom-mural.webp", alt: "Colorful classroom", w: 1280, h: 960 },
  { src: "/images/art-watermelon.webp", alt: "Girl drawing a watermelon", w: 720, h: 1280 },
  { src: "/images/birthday-3.webp", alt: "Kids at a birthday party", w: 1280, h: 960 },
];

// ---- Collection: Testimonials ----
// Disabled until real parent reviews are collected (no invented reviews on a live site).
export const testimonials = {
  enabled: false,
  items: [] as { name: string; child: string; quote: string }[],
};

// ---- Collection: FAQ ----
export const faq = [
  { q: "Which classes do you offer?", a: "We offer Pre Play, Play, LKG and UKG, plus a Day Care service." },
  { q: "Is Hello Kids English Medium or English Version?", a: "We offer both English Medium and English Version, so you can choose what suits your child best." },
  { q: "Do you have a Day Care facility?", a: "Yes. Our Day Care keeps children safe, happy and busy with rest time, snacks and supervised play." },
  { q: "Are the classrooms air-conditioned?", a: "Yes, all our classrooms are fully air-conditioned, clean and child-friendly." },
  { q: "Where is the school located?", a: "778, West Shewrapara, beside Metro Station Pillar No: 307, Mirpur, Dhaka-1216." },
  { q: "How can I apply for admission?", a: "Call or WhatsApp us at 01901 641 644, or fill in the admission form on this website. You are always welcome to visit the campus." },
];
