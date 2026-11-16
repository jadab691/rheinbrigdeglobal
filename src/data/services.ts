import type { ServiceIconName } from "@/types/homepage";

export interface ServiceOffer {
  number: string;
  slug: string;
  title: string;
  icon: ServiceIconName;
  summary: string;
  topics: readonly string[];
  note?: string;
  tone: "white" | "paper" | "navy";
  reverse?: boolean;
}

export const serviceOffers = [
  {
    number: "01",
    slug: "university-selection",
    title: "University Selection",
    icon: "compass",
    summary:
      "Explore universities and study programs in Germany with your academic background, interests, and goals in mind. We help make the research more structured so you can compare options and decide what to investigate further.",
    topics: [
      "Exploring German universities and their profiles",
      "Identifying study programs related to your interests",
      "Considering your academic background and qualifications",
      "Comparing public and private institutions",
      "Understanding program-specific entry requirements",
    ],
    tone: "white",
  },
  {
    number: "02",
    slug: "application-assistance",
    title: "Admission Application Assistance",
    icon: "document",
    summary:
      "Application requirements, documents, platforms, and deadlines differ between institutions and programs. We help you understand the steps involved and organize your preparation with care.",
    topics: [
      "Understanding university and program application requirements",
      "Organizing academic records and supporting documents",
      "Preparing application materials for review",
      "Understanding application platforms and published deadlines",
      "Checking application readiness before submission",
    ],
    note:
      "Universities make their own admission decisions. Application assistance cannot guarantee an offer.",
    tone: "paper",
    reverse: true,
  },
  {
    number: "03",
    slug: "visa-guidance",
    title: "Visa Application Guidance",
    icon: "shield",
    summary:
      "We help students understand the visa application process and organize questions and documents to review before applying. Guidance is based on information from relevant official sources, which should always be checked for current requirements.",
    topics: [
      "Understanding the student visa procedure",
      "Reviewing relevant document checklists",
      "Preparing for the application process",
      "Planning for appointment and interview preparation",
      "Finding current information from official sources",
    ],
    note:
      "Visa decisions are made exclusively by the relevant German authorities. RheinBridge Global cannot guarantee visa approval.",
    tone: "navy",
  },
  {
    number: "04",
    slug: "accommodation-assistance",
    title: "Accommodation Assistance",
    icon: "home",
    summary:
      "Finding a place to live is an important part of planning a move. We can help you research housing routes and understand the preparation involved, while you make choices that suit your circumstances.",
    topics: [
      "Researching student accommodation options",
      "Understanding student housing and its application process",
      "Exploring private rental options",
      "Preparing information commonly requested for applications",
      "Planning practical arrangements for arrival",
    ],
    note:
      "Housing availability varies by location and provider. We cannot guarantee accommodation or a rental offer.",
    tone: "white",
    reverse: true,
  },
  {
    number: "05",
    slug: "pre-departure-support",
    title: "Pre-departure Support",
    icon: "suitcase",
    summary:
      "Once your plans are progressing, we help you bring the practical details together. A clear checklist can help you prepare for travel and the transition to student life in Germany.",
    topics: [
      "Organizing travel and essential documents",
      "Understanding arrival procedures and next steps",
      "Basic cultural preparation for daily life",
      "Planning what to arrange before departure",
      "Preparing for the student experience in Germany",
    ],
    tone: "paper",
  },
] satisfies readonly ServiceOffer[];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const serviceProcess = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Share your goals, questions, and starting point.",
  },
  {
    number: "02",
    title: "Academic Profile Assessment",
    description: "Review your background, interests, and priorities.",
  },
  {
    number: "03",
    title: "University and Program Research",
    description: "Explore options and compare relevant requirements.",
  },
  {
    number: "04",
    title: "Application Preparation",
    description: "Organize documents and plan application steps.",
  },
  {
    number: "05",
    title: "Admission and Visa Preparation",
    description: "Track university processes and review official visa guidance.",
  },
  {
    number: "06",
    title: "Accommodation and Pre-departure Planning",
    description: "Prepare for housing research, travel, and arrival.",
  },
] satisfies readonly ProcessStep[];

export interface ServicePrinciple {
  number: string;
  title: string;
  description: string;
}

export const servicePrinciples = [
  {
    number: "01",
    title: "Personalized guidance",
    description:
      "Start with your academic background, priorities, and questions.",
  },
  {
    number: "02",
    title: "Transparent communication",
    description:
      "Understand what support includes and where official decisions belong.",
  },
  {
    number: "03",
    title: "Structured support",
    description:
      "Turn a complex process into clear topics and manageable next steps.",
  },
  {
    number: "04",
    title: "Student-focused approach",
    description:
      "Keep your interests and informed choices at the center of the work.",
  },
  {
    number: "05",
    title: "Clear explanations",
    description:
      "Discuss requirements and processes in practical, understandable language.",
  },
] satisfies readonly ServicePrinciple[];

export interface ServiceQuestion {
  question: string;
  answer: string;
}

export const serviceQuestions = [
  {
    question: "Can you help me find a suitable German university?",
    answer:
      "We can help you explore institutions and programs in light of your academic background and goals. Requirements vary, so you should confirm current details with each university before deciding.",
  },
  {
    question: "Do you guarantee admission?",
    answer:
      "No. Universities assess applications and make admission decisions independently. We can help you understand and prepare application materials, but cannot promise an offer.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No. Visa decisions are made exclusively by the relevant German authorities. We can help you understand the process and find official information, but cannot influence or guarantee an outcome.",
  },
  {
    question: "Can you help with bachelor's and master's applications?",
    answer:
      "We can help you research opportunities at both study levels. Program availability, language, and entry requirements differ by institution and course.",
  },
  {
    question: "Do you assist with accommodation?",
    answer:
      "We can help you research student housing and private rental options and prepare for the application process. Availability and rental decisions are set by providers, so accommodation cannot be guaranteed.",
  },
  {
    question: "When should I start preparing?",
    answer:
      "Starting early gives you time to compare programs and understand their timelines. Application dates and requirements vary, so check the current information published by the universities you are considering.",
  },
  {
    question: "Can parents or guardians join a consultation?",
    answer:
      "Yes. Parents or guardians are welcome to participate when the student would like them involved. We keep the student's goals and questions central to the conversation.",
  },
] satisfies readonly ServiceQuestion[];
