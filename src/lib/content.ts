import type { IconCardItem } from "@/components/ui/blocks";

export type ProgramDetail = {
  slug: string;
  title: string;
  lead: string;
  heroImage: string;
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    image: string;
  };
  services?: {
    eyebrow: string;
    title: string;
    description?: string;
    items: IconCardItem[];
  };
  extra?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
  };
};

export const programDetails: Record<string, ProgramDetail> = {
  employment: {
    slug: "employment",
    title: "Empowering new beginnings through work",
    lead: "From your first résumé to long-term career growth, our employment team helps newcomers overcome barriers and find stable, meaningful work.",
    heroImage: "/images/employment.jpg",
    overview: {
      eyebrow: "Employment services",
      title: "Two pathways into the workforce",
      paragraphs: [
        "Our employment specialists meet each person where they are, assessing skills, goals, and barriers, then building a personalized plan toward stable employment and economic independence.",
        "Whether you're referred by the Department of Transitional Assistance or eligible for refugee resettlement services, we walk with you from job readiness through placement and retention.",
      ],
      bullets: [
        "Employment Support Services Program (ESSP): for families referred by DTA, with childcare vouchers and an $80/month transportation stipend",
        "Comprehensive Refugee Employment Services (CRES): up to 5 years of support for ORR-eligible refugees, asylees, and visa holders",
      ],
      image: "/images/casework.jpg",
    },
    services: {
      eyebrow: "What we offer",
      title: "Support at every step",
      items: [
        { icon: "compass", title: "Case management", text: "Personalized needs assessments and one-on-one navigation toward your employment goals." },
        { icon: "languages", title: "Workplace ESOL", text: "English classes focused on the communication skills you'll use on the job." },
        { icon: "briefcase", title: "Résumé & interview prep", text: "Hands-on help building a résumé and practicing for interviews with confidence." },
        { icon: "graduation-cap", title: "Vocational training", text: "Pathways to HHA, CNA, ServSafe, IT certifications, and driver's licenses." },
        { icon: "heart-handshake", title: "Cultural coaching", text: "Guidance on workplace norms and expectations in a new professional culture." },
        { icon: "hand-heart", title: "Job retention", text: "Ongoing check-ins and support so a first job becomes a lasting career." },
      ],
    },
    extra: {
      eyebrow: "Employer partners",
      title: "Building bridges with local employers",
      paragraphs: [
        "We partner with employers across the North Shore, including Wash Cycle Laundry and Stop & Shop, who value the dedication and talent of new Americans.",
        "Employees consistently describe being treated with respect and given real opportunities to grow. If your business is interested in hiring through NAAM, we'd love to talk.",
      ],
    },
  },

  english: {
    slug: "english",
    title: "Empower your future with language skills",
    lead: "English classes built around real life, from work to school to community, for immigrants and refugees at every level.",
    heroImage: "/images/english-class.jpg",
    overview: {
      eyebrow: "English language training",
      title: "Language that opens doors",
      paragraphs: [
        "Our classes address the immediate language and cultural adjustment needs of immigrants and refugees recently settled in Lynn and the North Shore, offered both in person and virtually.",
        "Across seven proficiency levels, from Survival Literacy to Advanced, learners practice through role-plays, interactive games, group work, and mock workplace scenarios.",
      ],
      bullets: [
        "Seven proficiency levels, from Survival Literacy through Advanced",
        "Evening classes and tutoring for working participants",
        "Mock workplace scenarios and professional-behavior practice",
      ],
      image: "/images/youth.jpg",
    },
    services: {
      eyebrow: "Three programs",
      title: "A track for every learner",
      items: [
        { icon: "briefcase", title: "English for Employment & Integration", text: "Core classes building the workplace communication and cultural skills newcomers need to thrive." },
        { icon: "heart-pulse", title: "English Language Training for Integration (ELT-I)", text: "Project-based learning through art, music, wellness, and life skills, for learners not solely focused on employment, including Ukrainian and Afghan participants." },
        { icon: "graduation-cap", title: "Lynn Public Schools Parent Program", text: "Classes that help parents communicate with educators and support their children's success in school." },
      ],
    },
    extra: {
      eyebrow: "Register",
      title: "Join a class",
      paragraphs: [
        "New cohorts start throughout the year, with daytime, evening, and virtual options. Contact our team to find the right level and schedule for you.",
      ],
    },
  },

  "case-management": {
    slug: "case-management",
    title: "Empowering pathways to independence",
    lead: "Personalized navigation of the systems newcomers encounter, from healthcare and benefits to housing and daily life, building independence, not dependency.",
    heroImage: "/images/casework.jpg",
    overview: {
      eyebrow: "Case management",
      title: "One trusted guide for a complex new system",
      paragraphs: [
        "Arriving in a new country means navigating unfamiliar systems all at once. Our case managers help individuals and families understand their options and connect to the right resources at the right time.",
        "Every plan centers on reducing barriers and building the skills and confidence for long-term self-sufficiency.",
      ],
      bullets: [
        "Social services coordination and family support",
        "Translation and interpretation services",
        "Healthcare referrals: medical, dental, and mental health",
        "Daily-living skills like budgeting and home management",
        "Homelessness prevention and benefits navigation",
      ],
      image: "/images/community.jpg",
    },
    services: {
      eyebrow: "Areas of support",
      title: "Help across daily life",
      items: [
        { icon: "heart-pulse", title: "Healthcare access", text: "Connecting families to medical, dental, and behavioral health providers." },
        { icon: "piggy-bank", title: "Benefits & utilities", text: "Help applying for social benefits and utility assistance programs." },
        { icon: "compass", title: "Service navigation", text: "A knowledgeable guide through the systems that affect daily life." },
        { icon: "languages", title: "Interpretation", text: "Translation and interpretation so language is never a barrier." },
      ],
    },
  },

  wellness: {
    slug: "wellness",
    title: "Healing, belonging, and well-being",
    lead: "Culturally responsive mental health and wellness support for newcomers navigating acculturative stress and trauma.",
    heroImage: "/images/wellness.jpg",
    overview: {
      eyebrow: "Health & wellness",
      title: "Care that understands the journey",
      paragraphs: [
        "Launched in 2022 and led by a licensed psychotherapist, our Wellness Program facilitates support groups for immigrants from Latino, Ukrainian, Afghan, and Cameroonian communities, offering spaces to connect, share experiences, and build community.",
        "We welcome referrals for anyone experiencing adjustment difficulties or isolation.",
      ],
      bullets: [
        "Community support groups across cultural communities",
        "Individual and family wellness plans",
        "Trauma-specific support and telehealth options",
        "A dedicated wellness room for mindfulness activities",
      ],
      image: "/images/community.jpg",
    },
    extra: {
      eyebrow: "Opening 2025",
      title: "The STAR Wellness Clinic",
      paragraphs: [
        "Our culturally responsive STAR Wellness Clinic addresses acculturative stress and trauma through individual and family wellness plans, wraparound services, and telehealth.",
        "Clinical operations and eligibility are overseen by Dr. Scune Carrington, with a community advisory group shaping the program's design.",
      ],
    },
  },

  youth: {
    slug: "youth",
    title: "Empowering the next generation",
    lead: "From playgroups to teen job-readiness, we help young new Americans become confident, capable, and compassionate leaders.",
    heroImage: "/images/youth.jpg",
    overview: {
      eyebrow: "Children & youth",
      title: "Support for every age and stage",
      paragraphs: [
        "Our children and youth services meet families across age groups and locations, pairing academic support with mentoring, recreation, and family connection.",
        "The goal is simple: help every child feel they belong, and give every family the tools to support their children's success.",
      ],
      image: "/images/english-class.jpg",
    },
    services: {
      eyebrow: "Programs",
      title: "What we offer young people",
      items: [
        { icon: "heart-pulse", title: "Early childhood", text: "Developmental support for parents, babysitting, and playgroups that encourage social and cognitive growth." },
        { icon: "graduation-cap", title: "School-aged", text: "After-school tutoring, homework help, and summer programming that blends learning with fun." },
        { icon: "heart-handshake", title: "Family liaisons", text: "Connecting families with schools and running workshops to navigate the education system." },
        { icon: "briefcase", title: "Teens & young adults", text: "Mentoring with job-readiness training, résumé workshops, and internship placements." },
      ],
    },
    extra: {
      eyebrow: "Across our offices",
      title: "Location-specific programs",
      paragraphs: [
        "Lynn offers general youth services. Lowell specializes in family services, case management, and tutoring, including \"In The Driver's Seat,\" an eight-week program covering life skills, financial literacy, and driver's education.",
        "Newburyport provides childcare, school liaison services, case management, field trips, and mentoring.",
      ],
    },
  },

  citizenship: {
    slug: "citizenship",
    title: "Your path to U.S. citizenship",
    lead: "Trusted, accredited help navigating naturalization, from the N-400 application to the day you take the oath.",
    heroImage: "/images/casework.jpg",
    overview: {
      eyebrow: "Immigration legal services",
      title: "Guidance you can rely on",
      paragraphs: [
        "Through our Citizenship for New Americans Program, NAAM serves 100+ applicants each year, with a federal grant supporting 200+ individuals over two years.",
        "We help eligible refugees and immigrants understand the naturalization process and prepare with confidence.",
      ],
      bullets: [
        "Application for Naturalization (N-400)",
        "Medical Disability Waiver (N-648)",
        "Naturalization Fee Waiver (I-912)",
        "Civics study materials, English tutoring, and mock interviews",
      ],
      image: "/images/english-class.jpg",
    },
    services: {
      eyebrow: "How we help",
      title: "From application to interview",
      items: [
        { icon: "scale", title: "Application assistance", text: "Help completing the N-400 and related waivers accurately and on time." },
        { icon: "graduation-cap", title: "Citizenship classes", text: "Roughly 15 weeks of classes covering U.S. history, government, and English skills." },
        { icon: "compass", title: "Interview prep", text: "Know what to expect, including civics practice and mock interviews." },
        { icon: "languages", title: "Online resources", text: "Independent prep and self-assessment with all 120 civics test questions." },
      ],
    },
  },

  "food-pantry": {
    slug: "food-pantry",
    title: "Fighting food insecurity with dignity",
    lead: "A weekly, culturally appropriate food pantry that meets newcomers' needs while honoring their traditions.",
    heroImage: "/images/foodpantry.jpg",
    overview: {
      eyebrow: "Food pantry",
      title: "Nutritious, culturally appropriate food for all",
      paragraphs: [
        "Launched in 2024 at our Lynn office in partnership with Phoenix Food Hub, our pantry provides culturally sensitive nutrition to immigrant and refugee communities.",
        "Staff organize each weekly distribution around clients' cultural preferences, so families receive food they recognize, prepare with confidence, and share with pride.",
      ],
      bullets: [
        "Rice, beans, and fresh vegetables",
        "Halal meat",
        "Hygiene products and paper goods",
        "Other essential household supplies",
      ],
      image: "/images/community.jpg",
    },
    extra: {
      eyebrow: "Weekly operations",
      title: "How it works",
      paragraphs: [
        "The pantry operates weekly at our Lynn office. To learn about distribution times or to refer a family, contact our team. Everyone is welcomed with dignity and respect.",
      ],
    },
  },

  "financial-literacy": {
    slug: "financial-literacy",
    title: "Building lasting financial stability",
    lead: "Practical training in budgeting, banking, and credit that helps newly arrived families put down strong financial roots.",
    heroImage: "/images/community.jpg",
    overview: {
      eyebrow: "Financial literacy",
      title: "Confidence with money in a new system",
      paragraphs: [
        "Banking, credit, and budgeting often work very differently in the United States. Our financial literacy training demystifies the essentials so families can make confident decisions.",
        "Offered alongside our employment services, these hands-on sessions turn a first paycheck into long-term economic stability.",
      ],
      bullets: [
        "Building and managing a household budget",
        "Opening and using a bank account",
        "Understanding credit and building a credit history",
        "Avoiding predatory lending and common scams",
      ],
      image: "/images/employment.jpg",
    },
  },
};

/* ---------- About ---------- */
export const aboutContent = {
  mission:
    "To assist newly arriving refugees and immigrants with integration into American society, to promote economic stability, to build bridges with the larger community, and to foster the maintenance of refugees' and immigrants' cultural identities.",
  timeline: [
    { year: "1990", title: "RCAM is founded", text: "The Russian Community Association of Massachusetts opens its doors to support new arrivals." },
    { year: "2005", title: "Serving more communities", text: "Services expand to welcome diverse ethnic populations from around the world." },
    { year: "2017", title: "Lowell office opens", text: "A satellite office extends our reach to families in the Merrimack Valley." },
    { year: "2018", title: "NAAM is born", text: "We rebrand as the New American Association of Massachusetts to reflect who we serve." },
  ],
  values: [
    { icon: "heart-handshake", title: "Dignity", text: "Every person is welcomed with respect for who they are and where they've come from." },
    { icon: "compass", title: "Empowerment", text: "We build independence and self-sufficiency, never dependency." },
    { icon: "languages", title: "Cultural identity", text: "We help newcomers integrate while honoring the cultures they carry with them." },
    { icon: "hand-heart", title: "Community", text: "We build bridges between new Americans and the neighbors who welcome them." },
  ],
};

/* ---------- Team ---------- */
// Team roster and headshots taken from naamass.org (fetched Sep 8 2026).
// Grouping follows the structure the client asked for; the Leadership/Program split
// is ours, made on job title, and needs NAAM's confirmation.
export const team = [
  {
    department: "Board of Directors",
    members: [
      { name: "Harena Gebreyesus", role: "President of the Board", image: "/images/team/harena-gebreyesus.jpg" },
      { name: "Dany Chhan", role: "Vice President", image: "/images/team/dany-chhan.jpg" },
      { name: "Romell Kidd", role: "Treasurer", image: "/images/team/romell-kidd.jpg" },
      { name: "Rasha Mikhael", role: "", image: "/images/team/rasha-mikhael.jpg" },
      { name: "Analesa Baraka", role: "", image: "/images/team/analesa-baraka.jpg" },
      { name: "Doug Pardo", role: "", image: "/images/team/doug-pardo.jpg" },
    ],
  },
  {
    department: "Leadership Team",
    members: [
      { name: "Natasha Soolkin", role: "Executive Director", image: "/images/team/natasha-soolkin.jpg" },
      { name: "Valeria Fasolo", role: "Director of Employment Services", image: "/images/team/valeria-fasolo.jpg" },
      { name: "Ally Croteau", role: "Lowell Regional Director", image: "/images/team/ally-croteau.jpg" },
      { name: "Mia Mountain", role: "Director of Curriculum for ESOL Programming", image: "/images/team/mia-mountain.jpg" },
      { name: "Erica Peterson", role: "Director of Operations for ESOL Programming", image: "/images/team/erica-peterson.jpg" },
      { name: "Nicole Wilmarth", role: "Director of Youth Services", image: "/images/team/nicole-wilmarth.jpg" },
      { name: "Michael P. Martel", role: "Legal Director, Immigration Program", image: "/images/team/michael-p-martel.jpg" },
      { name: "Dr. Scune Carrington", role: "Chief Clinical Officer and Wellness Clinic Director", image: "/images/team/dr-scune-carrington.jpg" },
      { name: "Lesley Hansard", role: "Program Director, NAAM Artisans", image: "/images/team/lesley-hansard.jpg" },
      { name: "Igor Sokolik", role: "Career Development Program Instructor/ NAAM Board of Directors", image: "/images/team/igor-sokolik.jpg" },
    ],
  },
  {
    department: "Program Staff",
    members: [
      { name: "Sabine Metellus", role: "Employment Specialist, Lowell Office", image: "/images/team/sabine-metellus.jpg" },
      { name: "Diana M. Staco-Millery", role: "Employment Specialist - Lynn", image: "/images/team/diana-m-staco-millery.jpg" },
      { name: "Zabihullah Moshfiq", role: "Employment Specialist, Lowell Office", image: "/images/team/zabihullah-moshfiq.jpg" },
      { name: "Kelsey Maira", role: "Lowell Youth Program Coordinator / Employment Specialist", image: "/images/team/kelsey-maira.jpg" },
      { name: "Venette Jean", role: "Citizenship/ Social Services Case Manager", image: "/images/team/venette-jean.jpg" },
      { name: "Paola Colunga", role: "Case Manager & Program Coordinator", image: "/images/team/paola-colunga.jpg" },
      { name: "Jules Andre Mettellus", role: "Case Manager / Employment Specialist - Lynn", image: "/images/team/jules-andre-mettellus.jpg" },
      { name: "Bahara Amiri", role: "Case Manager", image: "/images/team/bahara-amiri.jpg" },
      { name: "Julie Nkwetta", role: "Cameroonian Case Manager", image: "/images/team/julie-nkwetta.jpg" },
      { name: "Lynne Havusha", role: "RCS Coordinator / Employment Specialist - Lynn", image: "/images/team/lynne-havusha.jpg" },
      { name: "Shira Moss", role: "ELT-I Instructor/Project-based learning: Art, Music, Wellness, Life Skills", image: "/images/team/shira-moss.jpg" },
      { name: "Virginia Bolat", role: "English for Employment English Instructor", image: "/images/team/virginia-bolat.jpg" },
      { name: "Chris Carroll", role: "ESL Instructor", image: "/images/team/chris-carroll.jpg" },
      { name: "Nadia Elmouhsine", role: "English for Employment English Instructor", image: "/images/team/nadia-elmouhsine.jpg" },
      { name: "Sanna Shaheen Saddy", role: "English for Employment English Instructor", image: "/images/team/sanna-shaheen-saddy.jpg" },
      { name: "Geraldine Gabon", role: "ESOL Student Liaison", image: "/images/team/geraldine-gabon.jpg" },
      { name: "Reem Ahmad", role: "Teen & Young Adult Coordinator", image: "/images/team/reem-ahmad.jpg" },
      { name: "Silvie Prinston", role: "School Age Program Coordinator", image: "/images/team/silvie-prinston.jpg" },
      { name: "Madina Arsh Burhani", role: "Early Childhood Coordinator", image: "/images/team/madina-arsh-burhani.jpg" },
      { name: "Winfred Anyangu", role: "Immigration Specialist", image: "/images/team/winfred-anyangu.jpg" },
      { name: "Judi Goldman, LICSW", role: "Wellness Program Coordinator, NAAM", image: "/images/team/judi-goldman-licsw.jpg" },
      { name: "Carlinne Barros", role: "Wellness Clinic Enrollment and Case Management Specialist", image: "/images/team/carlinne-barros.jpg" },
      { name: "Emilie Wilk", role: "Craft Show Manager", image: "/images/team/emilie-wilk.jpg" },
      { name: "Taiba Amiri", role: "NAAM Artisans Craft Show Manager", image: "/images/team/taiba-amiri.jpg" },
      { name: "Forrest Elliott", role: "Creative Consultant", image: "/images/team/forrest-elliott.jpg" },
      { name: "Khujasta Bahara Amiri", role: "Interpreter, Afghan Cultural Ambassador", image: "/images/team/khujasta-bahara-amiri.jpg" },
      { name: "Nicole Rodriguez", role: "English Teacher", image: "/images/team/nicole-rodriguez.jpg" },
      { name: "Jud-Ann Geneus", role: "Operations Manager", image: "/images/team/jud-ann-geneus.jpg" },
      { name: "Ramy Mahdi", role: "IT Specialist", image: "/images/team/ramy-mahdi.jpg" },
      { name: "Judith Charles", role: "Employment Specialist", image: "/images/team/judith-charles.jpg" },
      { name: "Dulany Alexander", role: "Citizenship Instructor/Computer Training Instructor", image: "/images/team/dulany-alexander.jpg" },
      { name: "Roberta Rogers", role: "Computer Training Volunteer", image: "/images/team/roberta-rogers.jpg" },
      { name: "Nancy Sullivan", role: "ESL/Citizenship Programs", image: "/images/team/nancy-sullivan.jpg" },
    ],
  },
];

/* ---------- Get Involved ---------- */
export const volunteerRoles: IconCardItem[] = [
  { icon: "heart-handshake", title: "Mentoring", text: "Walk alongside a newcomer as a trusted friend and guide." },
  { icon: "graduation-cap", title: "Youth support", text: "Tutor, coach, or help run after-school and summer programming." },
  { icon: "compass", title: "Tech support", text: "Help clients build the digital skills modern life requires." },
  { icon: "briefcase", title: "Employment support", text: "Coach résumés, run mock interviews, and share career advice." },
  { icon: "languages", title: "ESOL support", text: "Assist in English classes or provide one-on-one tutoring." },
  { icon: "hand-heart", title: "Translation & interpreting", text: "Bridge language gaps in many languages across our programs." },
];

export const donateGoods = {
  accepted: [
    "Baby items: diapers, strollers, formula",
    "Technology: Chromebooks and laptops",
    "School supplies and backpacks",
    "Gift cards: Target, Walmart, grocery stores",
    "Charlie Cards for public transit",
    "Unopened paper products",
    "Unopened cleaning supplies",
  ],
};

/* ---------- Resources ---------- */
export type ResourceGroup = {
  icon: string;
  title: string;
  blurb: string;
  items: { name: string; detail: string }[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    icon: "heart-pulse",
    title: "Health Care & Medical",
    blurb: "Clinics and health centers across Lynn and Salem, plus insurance guidance.",
    items: [
      { name: "Lynn Community Health Center", detail: "Comprehensive primary and behavioral care; multilingual staff." },
      { name: "Market Square Family Health", detail: "Two locations serving families on the North Shore." },
      { name: "North Shore Medical Centers", detail: "Hospital and specialty services in the region." },
      { name: "Sexual Health Hotline", detail: "Confidential support at 877-686-5772." },
    ],
  },
  {
    icon: "apple",
    title: "Meals & Food Pantries",
    blurb: "Food assistance, pantries, and pre-screening for benefits.",
    items: [
      { name: "My Brother's Table", detail: "Free, welcoming meals at the largest soup kitchen on the North Shore." },
      { name: "Salvation Army Food Pantry", detail: "Groceries and emergency food assistance." },
      { name: "Catholic Charities North", detail: "Pantry and family support services." },
      { name: "Project Bread Hotline", detail: "Food-stamp pre-screening at 1-800-645-8333." },
    ],
  },
  {
    icon: "graduation-cap",
    title: "Child Care & Early Learning",
    blurb: "Subsidized care, Head Start, and preschool for eligible families.",
    items: [
      { name: "Lynn Economic Opportunity (LEO)", detail: "Subsidized child care and family services." },
      { name: "Early Head Start & Head Start", detail: "Free preschool for ages 3–5 plus health and nutrition services." },
      { name: "North Shore Community College", detail: "Child care programs and pathways." },
    ],
  },
  {
    icon: "heart-handshake",
    title: "Safety & Crisis Support",
    blurb: "24-hour, multilingual hotlines for domestic violence and sexual assault.",
    items: [
      { name: "National Domestic Violence Hotline", detail: "1-800-799-3224. Confidential, 24/7." },
      { name: "RAINN", detail: "1-800-656-4673. Sexual assault support." },
      { name: "SafeLink / Casa Myrna", detail: "877-785-2020. Statewide DV hotline." },
      { name: "HAWC", detail: "1-800-547-1649. Healing Abuse Working for Change." },
    ],
  },
  {
    icon: "heart-pulse",
    title: "Behavioral Health & Support",
    blurb: "Counseling, support groups, and family engagement services.",
    items: [
      { name: "Lynn Community Health (Behavioral)", detail: "Counseling and behavioral health services." },
      { name: "Bridgewell Counseling", detail: "Individual and family counseling services." },
      { name: "Baby Cafe", detail: "Support for expectant and breastfeeding mothers." },
    ],
  },
  {
    icon: "compass",
    title: "Housing Help",
    blurb: "Affordable housing, eviction prevention, and foreclosure assistance.",
    items: [
      { name: "Lynn Housing Authority", detail: "Affordable and subsidized housing programs." },
      { name: "Lynn United for Change", detail: "Eviction prevention and tenant organizing." },
      { name: "Lynn Economic Opportunity", detail: "Housing support for families at risk of homelessness." },
    ],
  },
];
