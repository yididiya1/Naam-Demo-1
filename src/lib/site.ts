// Central content for the NAAM site — sourced from naamass.org and reorganized.

export const org = {
  name: "New American Association of Massachusetts",
  short: "NAAM",
  tagline: "Empowering every refugee & immigrant to thrive and enrich our communities.",
  phone: "(781) 593-0100",
  phoneHref: "tel:+17815930100",
  email: "info@naamass.org",
  fax: "(855) 978-1233",
  donateUrl:
    "https://www.zeffy.com/en-US/donation-form/support-the-new-american-association-of-ma",
};

export const socials = [
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
] as const;

export const locations = [
  {
    name: "Lynn Office",
    label: "Main Office",
    address: "330 Lynnway, Suite 302",
    city: "Lynn, MA 01901",
    phone: "(781) 593-0100",
    phoneHref: "tel:+17815930100",
  },
  {
    name: "Lowell Office",
    label: "Satellite Office",
    address: "99R Church St.",
    city: "Lowell, MA 01852",
    phone: "(781) 593-0100 ext. 701",
    phoneHref: "tel:+17815930100,701",
  },
];

export const hours = [
  { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
  { days: "Saturday – Sunday", time: "By invitation" },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Who We Serve", href: "/about/who-we-serve" },
      { label: "News & Events", href: "/news" },
      { label: "Locations", href: "/contact" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Employment Services", href: "/programs/employment" },
      { label: "English Language Classes", href: "/programs/english" },
      { label: "Case Management", href: "/programs/case-management" },
      { label: "Health and Wellness", href: "/programs/wellness" },
      { label: "Children and Youth", href: "/programs/youth" },
      { label: "Immigration Legal Services", href: "/programs/citizenship" },
      { label: "Food Pantry", href: "/programs/food-pantry" },
      { label: "Financial Literacy", href: "/programs/financial-literacy" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Internships & Service Learning", href: "/get-involved/internships" },
      { label: "Donate Goods", href: "/get-involved/donate-goods" },
      { label: "Careers", href: "/get-involved/careers" },
    ],
  },
  { label: "Resources", href: "/resources" },
];

export const stats = [
  { value: 3000, suffix: "+", label: "People served every year" },
  { value: 90, suffix: "%", label: "Refugees among those we serve" },
  { value: 35, suffix: "+", label: "Years of service since 1990" },
  { value: 3, suffix: "", label: "Offices across Massachusetts" },
];

export type Program = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "employment",
    title: "Employment Services",
    icon: "briefcase",
    blurb:
      "NAAM guides and trains newly arrived immigrants and refugees on their journey to stable, rewarding careers and economic self-sufficiency.",
    image: "/images/employment.jpg",
  },
  {
    slug: "english",
    title: "English Language Classes",
    icon: "languages",
    blurb:
      "Our multi-level English language classes are designed to equip immigrants and refugees with the skills needed for the workplace and community integration.",
    image: "/images/english-class.jpg",
  },
  {
    slug: "case-management",
    title: "Case Management",
    icon: "compass",
    blurb:
      "Our case management program helps immigrants access housing, social benefits, healthcare, and employment. We provide the skills needed to navigate these systems and achieve long-term independence.",
    image: "/images/case-management.jpg",
  },
  {
    slug: "wellness",
    title: "Health and Wellness",
    icon: "heart-pulse",
    blurb:
      "NAAM offers a comprehensive approach to supporting the psychological and emotional well-being of immigrants and refugees through innovative wellness programming.",
    image: "/images/wellness.jpg",
  },
  {
    slug: "youth",
    title: "Children and Youth",
    icon: "graduation-cap",
    blurb:
      "NAAM provides the next generation with essential resources, education, mentorship, and community collaboration to build life skills and become confident, compassionate leaders.",
    image: "/images/youth.jpg",
  },
  {
    slug: "citizenship",
    title: "Immigration Legal Services",
    icon: "scale",
    blurb:
      "Naturalization (N-400) help, fee and disability waivers, civics classes, and mock interviews on the path to U.S. citizenship.",
    image: "/images/casework.jpg",
  },
  {
    slug: "food-pantry",
    title: "Food Pantry",
    icon: "apple",
    blurb:
      "A weekly, culturally appropriate pantry — rice, beans, halal meat, produce, and hygiene goods — launched in 2024 with Phoenix Food Hub.",
    image: "/images/foodpantry.jpg",
  },
  {
    slug: "financial-literacy",
    title: "Financial Literacy",
    icon: "piggy-bank",
    blurb:
      "Hands-on training in budgeting, banking, and credit that helps newly arrived families build lasting economic stability.",
    image: "/images/community.jpg",
  },
];

export const populations = [
  "Refugees",
  "Asylees & asylum seekers",
  "Special Immigrant Visa holders",
  "Afghan parolees",
  "Ukrainian parolees",
  "Haitian parolees",
  "Victims of trafficking",
  "Survivors of torture",
  "Unaccompanied minors",
  "Cuban & Haitian entrants",
  "Immigrants & their families",
];

export const regions = [
  "Africa",
  "Middle East & South Asia",
  "Asia",
  "Latin America",
  "Caribbean",
  "Eastern Europe",
];

export type Story = {
  name: string;
  origin: string;
  image: string;
  quote: string;
};

export const stories: Story[] = [
  {
    name: "Alberte",
    origin: "Haiti",
    image: "/images/story-3.jpg",
    quote:
      "I improved my English with NAAM and earned my CNA certification. Today I have a job I'm proud of and a future for my family.",
  },
  {
    name: "Ahmad",
    origin: "Afghanistan",
    image: "/images/story-2.jpg",
    quote:
      "NAAM helped me find warehouse work within months of arriving, and my family joined the ESL classes. We finally feel at home.",
  },
  {
    name: "Fawziya",
    origin: "Somalia",
    image: "/images/story-1.jpg",
    quote:
      "I completed phlebotomy training and bought my first car. NAAM believed in me before I believed in myself.",
  },
];

export type NewsItem = {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    title: "Natasha Soolkin Wins Community Advocacy Award",
    category: "Recognition",
    date: "May 2026",
    excerpt:
      "Our Executive Director is honored for two decades of tireless advocacy for refugees and immigrants across the North Shore.",
    image: "/images/community.jpg",
  },
  {
    title: "The Afghan Women Project in the News",
    category: "In the Media",
    date: "Apr 2026",
    excerpt:
      "Local coverage spotlights NAAM's work supporting recently arrived Afghan women as they rebuild their lives in Massachusetts.",
    image: "/images/english-class.jpg",
  },
  {
    title: "Refugee Wellness Day Brings the Community Together",
    category: "Events",
    date: "Mar 2026",
    excerpt:
      "Families gathered for a day of health screenings, cultural celebration, and connection at our annual Refugee Wellness Day.",
    image: "/images/wellness.jpg",
  },
];

export const partners = [
  "City of Lynn",
  "MA Office for Refugees & Immigrants",
  "Eastern Bank Foundation",
  "United Way",
  "Stop & Shop",
  "Wash Cycle Laundry",
  "Phoenix Food Hub",
  "North Shore Community College",
  "Catholic Charities North",
  "Lynn Community Health Center",
  "Cummings Foundation",
  "Office of Refugee Resettlement",
];

export const involveCards = [
  {
    title: "Volunteer",
    icon: "hand-heart",
    blurb:
      "Mentor, tutor ESOL, drive, or share a professional skill. Volunteers power much of what we do.",
    href: "/get-involved/volunteer",
    cta: "Become a volunteer",
  },
  {
    title: "Donate Goods",
    icon: "gift",
    blurb:
      "Diapers, laptops, gift cards, and Charlie Cards help us give every new family a warm welcome.",
    href: "/get-involved/donate-goods",
    cta: "See what's needed",
  },
  {
    title: "Give",
    icon: "heart-handshake",
    blurb:
      "Your gift funds language classes, legal help, and the food pantry. Every dollar stays close to home.",
    href: org.donateUrl,
    cta: "Make a donation",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   v2 CLIENT COPY — diffed against the client's original PDF (Sep 2 2026).

   VERIFIED verbatim against the original doc:
     - heroV2.headline and heroV2.subheadline
     - the program blurbs for employment, english, youth, wellness, case-management

   NOT in the original doc — do not treat as client copy:
     - everything in `haitianStatement` below. The client wrote only "add a
       section with this statement"; the statement text itself was never supplied.
     - Immigration Legal Services copy. The client wrote "add or update copy as
       needed" and supplied none, so the prior demo copy still stands.
   ────────────────────────────────────────────────────────────────────────── */

export const heroV2 = {
  headline:
    "NAAM believes in empowering every refugee and immigrant to thrive and enrich our communities.",
  subheadline:
    "The New American Association of Massachusetts empowers refugees and immigrants by providing essential employment services, language classes, youth programming, case management, trauma-informed care, and legal aid with compassion, dignity, and respect.",
};

/** PLACEHOLDER — none of this text came from the client. Replace wholesale with
 *  NAAM's real Haitian community statement before this goes in front of them. */
export const haitianStatement = {
  title: "Standing with Our Haitian Community",
  body:
    "For more than 35 years, NAAM has stood alongside refugees and immigrants. Today, we stand with our Haitian community as many individuals and families face uncertainty following recent decisions affecting Temporary Protected Status (TPS) for Haiti. We remain committed to responding thoughtfully, compassionately, and responsibly to the needs of our community.",
  ctaLabel: "Read the Full Statement",
  // TODO(client asset): link to the full statement PDF / page. Placeholder until supplied.
  ctaHref: "",
};

/** The 3x2 homepage grid — six programs, in the order the client specified. */
export const homepageProgramSlugs = [
  "employment",
  "english",
  "youth",
  "wellness",
  "case-management",
  "citizenship",
] as const;
