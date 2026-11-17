/** Inner-page content. Mirrors future Payload collections/globals (PRD §6A). */
import { programs, type BrandColor } from "./site";

// ---- Programs collection (full fields) ----
export type Program = {
  slug: string; name: string; age: string; color: BrandColor; image: string; blurb: string;
};
export type ProgramDetail = { intro: string; learn: string[]; highlights: string[]; photos: string[] };

export const dayCare: Program = {
  slug: "day-care", name: "Day Care", age: "Age 2½ – 6", color: "purple",
  image: "/images/daycare.webp",
  blurb: "Safe, loving full-day care for working parents.",
};

export const allPrograms: Program[] = [...programs, dayCare];

export const programDetails: Record<string, ProgramDetail> = {
  "pre-play": {
    intro: "Pre Play is your child's very first school experience. In a warm, colorful classroom, little ones learn to separate happily from parents, make friends and explore the world through songs, colors and touch.",
    learn: ["Rhymes, songs & action games", "Colors, shapes & sizes", "Fine-motor play: clay, blocks, crayons", "Listening & speaking in English", "Sharing, turn-taking & good habits"],
    highlights: ["Gentle settling-in", "Small class size", "Lots of play time"],
    photos: ["/images/preplay.webp", "/images/art-sunflower.webp", "/images/birthday-4.webp"],
  },
  play: {
    intro: "In Play class, children learn by doing. Crafts, stories, music and hands-on activities build curiosity, confidence and the early skills they need for LKG.",
    learn: ["Letter sounds & first phonics", "Counting & number fun 1–20", "Arts & crafts every week", "Stories, puppets & role play", "Music, dance & movement"],
    highlights: ["Learning through play", "Creative arts", "Confidence building"],
    photos: ["/images/play.webp", "/images/daycare.webp", "/images/art-watermelon.webp"],
  },
  lkg: {
    intro: "LKG builds a strong foundation in reading, writing and numbers — while keeping learning joyful with art, games and activities.",
    learn: ["Phonics & reading simple words", "Writing letters & numbers neatly", "Numbers, counting & simple sums", "General knowledge about our world", "Drawing, coloring & music"],
    highlights: ["Strong basics", "Neat handwriting", "Activity-based lessons"],
    photos: ["/images/lkg.webp", "/images/teachers-class.webp", "/images/art-class.webp"],
  },
  ukg: {
    intro: "UKG prepares children to step confidently into primary school — reading, writing, maths and manners, with lots of encouragement along the way.",
    learn: ["Reading short sentences & stories", "Writing words & simple sentences", "Addition, subtraction & shapes", "Science & social awareness", "Speaking with confidence"],
    highlights: ["School readiness", "Graduation ceremony", "Study tours"],
    photos: ["/images/ukg-graduate.webp", "/images/classroom-2.webp", "/images/study-tour.webp"],
  },
  "day-care": {
    intro: "Our Day Care gives working parents peace of mind. After class, children rest, eat, play and learn in a safe, air-conditioned space with caring staff.",
    learn: ["Rest & quiet time", "Healthy snack & lunch time", "Homework help & reading corner", "Indoor games & activities", "Arts, crafts & free play"],
    highlights: ["Trained caregivers", "Safe & secure", "Flexible hours"],
    photos: ["/images/daycare.webp", "/images/birthday-1.webp", "/images/play-zone.webp"],
  },
};

// ---- Page: About ----
export const about = {
  story: [
    "Hello Kids Pre-School & Day Care was started with one simple dream — to give the children of Mirpur a pre-school that feels like a second home: safe, colorful, modern and full of love.",
    "We follow a play-based approach where children learn through stories, songs, art, games and real experiences. Our teachers know every child by name and help each one grow at their own pace.",
  ],
  mission: "To give every child a happy, safe and inspiring start to learning — building curiosity, confidence and good character.",
  vision: "To be the most loved and trusted pre-school in Mirpur, where children play, learn and grow into kind and confident learners.",
  values: [
    { title: "Love & Care", text: "Every child feels safe, seen and loved.", icon: "Smile", color: "pink" as BrandColor },
    { title: "Play to Learn", text: "Joyful, hands-on learning every day.", icon: "Blocks", color: "orange" as BrandColor },
    { title: "Good Manners", text: "Kindness, sharing and respect.", icon: "Users", color: "green" as BrandColor },
    { title: "Bright Minds", text: "Curiosity, creativity and confidence.", icon: "Sun", color: "teal" as BrandColor },
  ],
};

// ---- Page: Admissions ----
export const admissions = {
  steps: [
    { title: "Contact Us", text: "Call, WhatsApp or fill in the online form." },
    { title: "Visit the Campus", text: "Meet our teachers and see the classrooms." },
    { title: "Submit Documents", text: "Complete the admission form with documents." },
    { title: "Welcome Aboard!", text: "Confirm the seat and join the fun." },
  ],
  documents: [ // TODO: confirm document list with the school
    "Child's birth certificate (copy)",
    "4 passport-size photos of the child",
    "2 passport-size photos of each parent",
    "Parents' NID (copy)",
    "Vaccination card (copy)",
  ],
};

// ---- Gallery collection ----
export const galleryCategories = ["Classroom", "Events", "Art & Craft", "Play & Tours"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryItem = { src: string; alt: string; w: number; h: number; cat: GalleryCategory };

const L = { w: 1280, h: 960 }; // landscape
const P = { w: 960, h: 1280 }; // portrait
export const fullGallery: GalleryItem[] = [
  { src: "/images/orientation-2026.webp", alt: "Orientation 2026 group photo", ...L, cat: "Events" },
  { src: "/images/art-sunflower.webp", alt: "Child showing a sunflower craft", ...P, cat: "Art & Craft" },
  { src: "/images/play.webp", alt: "Kids with paper flower crafts", ...L, cat: "Art & Craft" },
  { src: "/images/birthday-4.webp", alt: "Birthday celebration with balloons", ...P, cat: "Events" },
  { src: "/images/art-class.webp", alt: "Painting class", ...L, cat: "Art & Craft" },
  { src: "/images/play-zone.webp", alt: "Boy in uniform at the play zone", w: 714, h: 1218, cat: "Play & Tours" },
  { src: "/images/classroom-mural.webp", alt: "Colorful classroom", ...L, cat: "Classroom" },
  { src: "/images/art-watermelon.webp", alt: "Girl drawing a watermelon", w: 720, h: 1280, cat: "Art & Craft" },
  { src: "/images/birthday-3.webp", alt: "Kids at a birthday party", ...L, cat: "Events" },
  { src: "/images/fruit-festival.webp", alt: "Fruit Festival 2026", ...L, cat: "Events" },
  { src: "/images/study-tour.webp", alt: "Study tour with teachers", ...L, cat: "Play & Tours" },
  { src: "/images/preplay.webp", alt: "Pre Play classroom", ...L, cat: "Classroom" },
  { src: "/images/butterfly-boy.webp", alt: "Boy with butterfly wall art", ...L, cat: "Play & Tours" },
  { src: "/images/lkg.webp", alt: "LKG classroom", ...L, cat: "Classroom" },
  { src: "/images/birthday-1.webp", alt: "Birthday celebration", ...P, cat: "Events" },
  { src: "/images/circle-time.webp", alt: "Kids at circle time", ...L, cat: "Classroom" },
  { src: "/images/art-fish.webp", alt: "Girl with her fish painting", ...L, cat: "Art & Craft" },
  { src: "/images/orientation-2.webp", alt: "Orientation 2026 students", ...L, cat: "Events" },
  { src: "/images/smart-class.webp", alt: "Smart classroom", ...L, cat: "Classroom" },
  { src: "/images/birthday-2.webp", alt: "Birthday cake time", ...L, cat: "Events" },
  { src: "/images/art-watermelon-2.webp", alt: "Drawing class", w: 720, h: 1280, cat: "Art & Craft" },
  { src: "/images/ac-classroom.webp", alt: "AC classroom", ...L, cat: "Classroom" },
  { src: "/images/teachers-class.webp", alt: "Teacher with students", ...L, cat: "Classroom" },
  { src: "/images/daycare.webp", alt: "Kids playing on the carpet", ...L, cat: "Play & Tours" },
  { src: "/images/classroom-2.webp", alt: "Class at work", ...L, cat: "Classroom" },
  { src: "/images/classroom-3.webp", alt: "Writing practice", ...L, cat: "Classroom" },
];
