export const blogCategories = [
  "Study in Germany",
  "University Admissions",
  "Student Visa",
  "Scholarships & Finance",
  "Student Life",
  "Preparation Guide",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "callout"; title: string; text: string };

export interface BlogSource {
  label: string;
  href: string;
  description: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  introduction: string;
  category: BlogCategory;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  reviewedAt: string;
  reviewedLabel: string;
  image?: {
    src: string;
    alt: string;
  };
  content: readonly BlogContentBlock[];
  sources: readonly BlogSource[];
  relatedSlugs: readonly string[];
}

export interface BlogArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  image?: BlogArticle["image"];
}

export const featuredArticleSlug =
  "why-study-in-germany-guide-for-bangladeshi-students";

export const blogArticles = [
  {
    slug: featuredArticleSlug,
    title: "Why Study in Germany? A Guide for Bangladeshi Students",
    excerpt:
      "A practical starting point for comparing academic options and deciding whether studying in Germany fits your plans.",
    introduction:
      "Germany offers a wide range of higher education institutions and study programs, but choosing a destination is a personal decision. Start by comparing academic fit, teaching language, finances, and the current application process rather than relying on broad promises.",
    category: "Study in Germany",
    publishedAt: "2026-11-17",
    publishedLabel: "17 November 2026",
    readingTime: "5 min read",
    reviewedAt: "2026-11-17",
    reviewedLabel: "17 November 2026",
    image: {
      src: "/images/germany/brandenburg-gate.jpg",
      alt: "The Brandenburg Gate in Berlin, Germany",
    },
    content: [
      {
        type: "heading",
        text: "Start with the course, not the country",
      },
      {
        type: "paragraph",
        text: "German higher education includes different institution types and a broad range of subjects. The structure, teaching language, entry requirements, and learning environment can differ from one program to another. Begin with the subject and study level that make sense for your goals.",
      },
      {
        type: "list",
        items: [
          "Read the curriculum and compare the modules, academic focus, and practical elements.",
          "Check the program's teaching language and the language evidence it accepts.",
          "Compare the published entry requirements with your own academic record.",
          "Consider the city, accommodation options, and day-to-day costs as part of the decision.",
        ],
      },
      {
        type: "heading",
        text: "Look beyond broad claims",
      },
      {
        type: "paragraph",
        text: "There is no single rule that makes every university or program the same. Public or private status alone does not tell you whether a course is the right fit or what it will cost. Check program-specific information and current fee details directly with the institution.",
      },
      {
        type: "heading",
        text: "Plan the practical steps early",
      },
      {
        type: "paragraph",
        text: "Before committing to an application, map the academic requirements, application route, language preparation, financial plan, and current visa guidance. These details may change, and the official institution or authority is the source to rely on for its own rules.",
      },
      {
        type: "callout",
        title: "A useful first question",
        text: "Which specific program matches your academic background and future direction? Use the answer to guide your research, then verify every requirement with its official source.",
      },
    ],
    sources: [
      {
        label: "DAAD: Universities & Programmes",
        href: "https://www.daad.de/en/studying-in-germany/universities/",
        description:
          "Overview of German higher education institution types, subjects, and study options.",
      },
      {
        label: "DAAD: Requirements & Enrolment",
        href: "https://www.daad.de/en/studying-in-germany/requirements/",
        description:
          "General guidance on requirements for studying at a German higher education institution.",
      },
      {
        label: "DAAD: Costs of education and living",
        href: "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        description:
          "Information about study and living costs, with guidance to check current details.",
      },
    ],
    relatedSlugs: [
      "understanding-german-university-admission-requirements",
      "public-universities-in-germany-what-students-should-know",
    ],
  },
  {
    slug: "understanding-german-university-admission-requirements",
    title: "Understanding University Admission Requirements in Germany",
    excerpt:
      "Learn what to check when comparing program eligibility, language expectations, documents, and application instructions.",
    introduction:
      "Admission requirements are set by individual institutions and programs. A careful application begins with checking the exact course information and comparing it with your own qualifications, rather than assuming one checklist applies everywhere.",
    category: "University Admissions",
    publishedAt: "2026-11-17",
    publishedLabel: "17 November 2026",
    readingTime: "6 min read",
    reviewedAt: "2026-11-17",
    reviewedLabel: "17 November 2026",
    content: [
      {
        type: "heading",
        text: "Start with your academic qualification",
      },
      {
        type: "paragraph",
        text: "The first question is whether your previous education is suitable for the level of study you want to enter. The answer depends on the qualification you hold, the subject, and the institution's rules. Check the relevant program page and official guidance before preparing an application.",
      },
      {
        type: "paragraph",
        text: "DAAD's admission database can be used as a non-binding orientation tool for certificates from different countries. DAAD notes that its eligibility check applies to undergraduate programs and that the final admission decision belongs to the higher education institution.",
      },
      {
        type: "heading",
        text: "Compare each program's requirements",
      },
      {
        type: "list",
        items: [
          "Prior qualifications and any subject-specific preparation.",
          "Language of instruction and accepted evidence of proficiency.",
          "Academic records and supporting documents requested by the program.",
          "Application dates, submission channels, and document formats.",
          "Any program-specific selection or eligibility rules.",
        ],
      },
      {
        type: "heading",
        text: "Use official guidance at every stage",
      },
      {
        type: "paragraph",
        text: "Some institutions receive applications directly; others may specify a separate application platform or evaluation process. Follow the instructions published by the institution for your chosen program, and contact its admissions office when a requirement is unclear.",
      },
      {
        type: "callout",
        title: "Keep the final decision in view",
        text: "A general database or adviser can help with orientation, but only the relevant institution can confirm eligibility and decide an application.",
      },
    ],
    sources: [
      {
        label: "DAAD: Requirements & Enrolment",
        href: "https://www.daad.de/en/studying-in-germany/requirements/",
        description:
          "Official overview of important requirements for applying to German higher education.",
      },
      {
        label: "DAAD: Database on admission requirements",
        href: "https://www.daad.de/en/studying-in-germany/requirements/admission-database/",
        description:
          "A non-binding orientation tool; DAAD states that its eligibility check applies to undergraduate programs.",
      },
      {
        label: "DAAD: Universities & Programmes",
        href: "https://www.daad.de/en/studying-in-germany/universities/",
        description:
          "Further background on German institutions and program options.",
      },
    ],
    relatedSlugs: [
      "why-study-in-germany-guide-for-bangladeshi-students",
      "public-universities-in-germany-what-students-should-know",
    ],
  },
  {
    slug: "public-universities-in-germany-what-students-should-know",
    title: "Public Universities in Germany: What Students Should Know",
    excerpt:
      "Understand why institution type is only one part of choosing a university, program, and realistic study budget.",
    introduction:
      "Public universities are an important part of German higher education, but the label alone does not answer whether a program fits your goals, what its current costs are, or how to apply.",
    category: "University Admissions",
    publishedAt: "2026-11-17",
    publishedLabel: "17 November 2026",
    readingTime: "5 min read",
    reviewedAt: "2026-11-17",
    reviewedLabel: "17 November 2026",
    content: [
      {
        type: "heading",
        text: "Understand the institution and its focus",
      },
      {
        type: "paragraph",
        text: "German higher education includes universities, universities of applied sciences, and other institution types. Their academic focus and the programs they offer can differ. Read about the institution and the specific course rather than relying only on its public or private status.",
      },
      {
        type: "heading",
        text: "Check fees for the exact program",
      },
      {
        type: "paragraph",
        text: "Do not assume that every public institution or program has the same fee arrangement. Tuition and semester contributions are different items, and the current details can depend on the institution, program, location, and your circumstances. Check the institution's published fee information before budgeting.",
      },
      {
        type: "list",
        items: [
          "Look for the program's current tuition and other study-related charges.",
          "Check whether a semester contribution applies and what it includes.",
          "Review accommodation and everyday expenses for the city where you would study.",
          "Read the current admissions and language requirements for the course.",
        ],
      },
      {
        type: "heading",
        text: "Choose by fit, not by a label",
      },
      {
        type: "paragraph",
        text: "Compare curriculum, academic environment, teaching language, support services, location, and the total costs you need to plan for. If you are considering funding, review the eligibility rules and application dates of each scholarship provider; availability is not automatic.",
      },
      {
        type: "callout",
        title: "Verify before applying",
        text: "University pages are the authoritative place to confirm current program, admissions, and fee information.",
      },
    ],
    sources: [
      {
        label: "DAAD: Universities & Programmes",
        href: "https://www.daad.de/en/studying-in-germany/universities/",
        description:
          "Overview of institution types and study options in Germany.",
      },
      {
        label: "DAAD: Costs of education and living",
        href: "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        description:
          "Explains study and living cost categories and why students should check details.",
      },
      {
        label: "DAAD: Scholarships & Funding",
        href: "https://www.daad.de/en/studying-in-germany/scholarships/",
        description:
          "Information about scholarship opportunities and the DAAD scholarship database.",
      },
    ],
    relatedSlugs: [
      "understanding-german-university-admission-requirements",
      "cost-of-living-in-germany-for-international-students",
    ],
  },
  {
    slug: "preparing-for-your-german-student-visa-application",
    title: "Preparing for Your Student Visa Application",
    excerpt:
      "A careful preparation checklist for finding current visa guidance and organizing your next steps.",
    introduction:
      "Visa procedures, document lists, and application channels can change. Students applying from Bangladesh should begin with the current instructions published by the German Embassy in Dhaka and the relevant German authorities.",
    category: "Student Visa",
    publishedAt: "2026-11-17",
    publishedLabel: "17 November 2026",
    readingTime: "5 min read",
    reviewedAt: "2026-11-17",
    reviewedLabel: "17 November 2026",
    content: [
      {
        type: "heading",
        text: "Start with the current official instructions",
      },
      {
        type: "paragraph",
        text: "Use the German Embassy in Dhaka's visa pages to identify the relevant visa information and application route for your circumstances. The German Federal Foreign Office's Visa Navigator can also help you identify which visa information to review.",
      },
      {
        type: "heading",
        text: "Organize your preparation",
      },
      {
        type: "list",
        items: [
          "Confirm the relevant visa category and current application process.",
          "Use the latest official checklist rather than an old or unofficial copy.",
          "Prepare the documents and financial evidence specified for your case.",
          "Follow the current appointment, submission, and communication instructions.",
          "Keep copies of submitted materials and note any official follow-up requests.",
        ],
      },
      {
        type: "heading",
        text: "Avoid relying on outdated figures or advice",
      },
      {
        type: "paragraph",
        text: "Financial evidence, fees, appointment procedures, and document requirements may be updated. This guide intentionally does not publish amounts or a fixed checklist. Check the official embassy information close to the time you apply.",
      },
      {
        type: "callout",
        title: "Visa decisions are official decisions",
        text: "The relevant German authorities assess applications and decide whether to issue a visa. RheinBridge Global cannot guarantee or influence the outcome.",
      },
    ],
    sources: [
      {
        label: "German Embassy in Dhaka: National Visa",
        href: "https://dhaka.diplo.de/bd-en/service/2682868-2682868",
        description:
          "Current national visa information and application guidance for applicants in Bangladesh.",
      },
      {
        label: "German Embassy in Dhaka: Visa Services",
        href: "https://dhaka.diplo.de/bd-en/service/visa-einreise",
        description:
          "Official entry point for visa services and national visa information.",
      },
      {
        label: "DAAD: Visas",
        href: "https://www.daad.de/en/studying-in-germany/living-in-germany/visa/",
        description:
          "General visa information and links to official German government resources.",
      },
      {
        label: "Federal Foreign Office: Visa Navigator",
        href: "https://digital.diplo.de/navigator/en/visa",
        description:
          "Official tool to help identify the visa information relevant to your purpose of travel.",
      },
    ],
    relatedSlugs: [
      "cost-of-living-in-germany-for-international-students",
      "understanding-german-university-admission-requirements",
    ],
  },
  {
    slug: "cost-of-living-in-germany-for-international-students",
    title: "Cost of Living in Germany for International Students",
    excerpt:
      "Build a personal study budget by looking beyond tuition and checking current costs for your city and program.",
    introduction:
      "There is no single budget that suits every student. Costs depend on the institution, city, accommodation, and personal circumstances, so use current official information and build a plan around your own situation.",
    category: "Scholarships & Finance",
    publishedAt: "2026-11-17",
    publishedLabel: "17 November 2026",
    readingTime: "6 min read",
    reviewedAt: "2026-11-17",
    reviewedLabel: "17 November 2026",
    content: [
      {
        type: "heading",
        text: "List the costs you will need to plan for",
      },
      {
        type: "paragraph",
        text: "Tuition is only one possible study cost. A realistic budget should include recurring living expenses, initial arrival costs, and any institution-specific charges. The right figures depend on where and how you plan to live.",
      },
      {
        type: "list",
        items: [
          "Tuition or other program-related fees, where applicable.",
          "Semester contributions and study materials.",
          "Accommodation, deposits, and household setup.",
          "Food, local transport, phone, and internet.",
          "Health insurance and personal or leisure expenses.",
          "Travel and other one-time costs connected with arrival.",
        ],
      },
      {
        type: "heading",
        text: "Build a budget for your own circumstances",
      },
      {
        type: "paragraph",
        text: "Compare current housing options and program fees in each location you are considering. Distinguish tuition from semester contributions, and check directly with the university for its latest charges. Review official guidance for any financial evidence required by a visa process separately from your everyday budget.",
      },
      {
        type: "heading",
        text: "Research funding carefully",
      },
      {
        type: "paragraph",
        text: "Scholarships have their own eligibility criteria, application periods, and conditions. Search official scholarship databases and read the provider's instructions; do not assume that funding is available or guaranteed.",
      },
      {
        type: "callout",
        title: "Do not plan from old figures",
        text: "Costs and financial evidence rules can change. This article intentionally avoids fixed amounts; use the linked official sources and your chosen institution's current information.",
      },
    ],
    sources: [
      {
        label: "DAAD: Costs of education and living",
        href: "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        description:
          "Official overview of education and living cost categories, with current guidance.",
      },
      {
        label: "DAAD: Scholarships & Funding",
        href: "https://www.daad.de/en/studying-in-germany/scholarships/",
        description:
          "Information about scholarship opportunities and the DAAD scholarship database.",
      },
      {
        label: "German Embassy in Dhaka: National Visa",
        href: "https://dhaka.diplo.de/bd-en/service/2682868-2682868",
        description:
          "Check the current official visa process and requirements for applicants in Bangladesh.",
      },
    ],
    relatedSlugs: [
      "public-universities-in-germany-what-students-should-know",
      "preparing-for-your-german-student-visa-application",
    ],
  },
] satisfies readonly BlogArticle[];

export const blogArticleSummaries: readonly BlogArticleSummary[] =
  blogArticles.map(
    ({
      slug,
      title,
      excerpt,
      category,
      publishedAt,
      publishedLabel,
      readingTime,
      image,
    }) => ({
      slug,
      title,
      excerpt,
      category,
      publishedAt,
      publishedLabel,
      readingTime,
      image,
    }),
  );

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
