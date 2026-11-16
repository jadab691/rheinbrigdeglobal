import type {
  ArticleIdea,
  HomeService,
  JourneyStep,
  UniversityExample,
} from "@/types/homepage";

export const homeServices = [
  {
    number: "01",
    icon: "compass",
    title: "University Selection",
    description:
      "Explore universities and programmes that fit your academic background, interests and goals.",
  },
  {
    number: "02",
    icon: "document",
    title: "Admission Application Assistance",
    description:
      "Get structured support preparing, organising and submitting your application materials.",
  },
  {
    number: "03",
    icon: "shield",
    title: "Visa Application Guidance",
    description:
      "Understand the process and prepare using current guidance from the relevant authorities.",
  },
  {
    number: "04",
    icon: "home",
    title: "Accommodation Assistance",
    description:
      "Get support researching places to live and planning practical details for your arrival.",
  },
  {
    number: "05",
    icon: "suitcase",
    title: "Pre-departure Support",
    description:
      "Prepare for the transition with clear information on what to organise before you leave.",
  },
] satisfies readonly HomeService[];

export const journeySteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Share your goals, questions and starting point.",
  },
  {
    number: "02",
    title: "University Research",
    description: "Research suitable universities and programmes together.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description: "Organise documents and plan your application timeline.",
  },
  {
    number: "04",
    title: "Admission Process",
    description: "Navigate submissions and university communications.",
  },
  {
    number: "05",
    title: "Visa Preparation",
    description: "Review official guidance and prepare your application.",
  },
  {
    number: "06",
    title: "Accommodation Planning",
    description: "Research accommodation and arrival essentials.",
  },
  {
    number: "07",
    title: "Pre-departure Preparation",
    description: "Bring the final details together before departure.",
  },
] satisfies readonly JourneyStep[];

export const universityExamples = [
  {
    name: "Technical University of Munich",
    city: "Munich",
    href: "https://www.tum.de/en/",
  },
  {
    name: "Freie Universität Berlin",
    city: "Berlin",
    href: "https://www.fu-berlin.de/en/",
  },
  {
    name: "Heidelberg University",
    city: "Heidelberg",
    href: "https://www.uni-heidelberg.de/en",
  },
] satisfies readonly UniversityExample[];

export const articleIdeas = [
  {
    category: "Getting started",
    title: "How to Study in Germany from Bangladesh",
    description:
      "A practical overview of the early decisions and research that can help shape your plan.",
    readTime: "Draft topic",
  },
  {
    category: "Applications",
    title: "German University Applications: Public vs Private",
    description:
      "A draft introduction to institutional differences, programme research and preparing application materials.",
    readTime: "Draft topic",
  },
  {
    category: "Visa preparation",
    title: "Preparing for German Student Visa Applications",
    description:
      "A draft overview of where to find current requirements and how to prepare questions for your next steps.",
    readTime: "Draft topic",
  },
] satisfies readonly ArticleIdea[];
