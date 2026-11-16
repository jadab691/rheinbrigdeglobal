export interface StudyPoint {
  title: string;
  description: string;
}

export interface StudyStep {
  number: string;
  title: string;
  description: string;
}

export interface StudyQuestion {
  question: string;
  answer: string;
}

export interface OfficialResource {
  name: string;
  description: string;
  href: string;
  linkLabel: string;
}

export const germanyReasons = [
  {
    title: "A broad academic landscape",
    description:
      "Explore programs across many subjects and disciplines, then compare the course content and academic focus that fit your goals.",
  },
  {
    title: "Different learning environments",
    description:
      "Research-oriented universities and more practice-focused institutions offer distinct approaches to higher education.",
  },
  {
    title: "Research and innovation",
    description:
      "Depending on the institution and field, students may encounter research projects, specialist facilities, and applied learning.",
  },
  {
    title: "Public and private institutions",
    description:
      "Both types form part of Germany's higher education landscape, with different programs, structures, and cost arrangements.",
  },
  {
    title: "International student communities",
    description:
      "Many campuses bring together students with varied backgrounds and perspectives, creating opportunities to learn across cultures.",
  },
  {
    title: "A new cultural experience",
    description:
      "Studying in Germany can also mean discovering new places, languages, and everyday ways of life.",
  },
] satisfies readonly StudyPoint[];

export const studyLevels = [
  {
    number: "01",
    title: "Bachelor's degrees",
    description:
      "Undergraduate programs can be a route into a new subject or a continuation of earlier study. Whether a qualification meets the entry requirements depends on the student's academic background and the specific program.",
    note:
      "Check the program's subject, language, qualification, and application requirements before applying.",
  },
  {
    number: "02",
    title: "Master's degrees",
    description:
      "Postgraduate study usually builds on prior university-level education. Programs may expect a relevant bachelor's qualification and can set their own subject, grade, language, or other criteria.",
    note:
      "Compare your previous studies with the published prerequisites for each master's program.",
  },
] satisfies readonly (StudyPoint & { number: string; note: string })[];

export const languageOptions = [
  {
    title: "German-taught programs",
    description:
      "These programs require evidence of German proficiency at the level specified by the institution. The accepted certificates and minimum results differ by program.",
  },
  {
    title: "English-taught programs",
    description:
      "Some programs are taught in English and may ask for proof of English proficiency. The university decides which certificates or alternative evidence it accepts.",
  },
] satisfies readonly StudyPoint[];

export const admissionFactors = [
  "Previous academic qualifications and their eligibility for the chosen level",
  "Subject-specific prerequisites or prior coursework",
  "Language proficiency for the language of instruction",
  "Academic records and other supporting documents",
  "Program-specific deadlines and application periods",
  "Institutional rules, selection criteria, and application channels",
] as const;

export const applicationSteps = [
  {
    number: "01",
    title: "Identify your academic goals",
    description:
      "Consider your subject interests, preferred study level, and the kind of learning environment you are looking for.",
  },
  {
    number: "02",
    title: "Research programs and institutions",
    description:
      "Compare program content, location, teaching language, and the institution's profile.",
  },
  {
    number: "03",
    title: "Check eligibility and requirements",
    description:
      "Read the current entry criteria, language requirements, deadlines, and application guidance for each program.",
  },
  {
    number: "04",
    title: "Prepare your documents",
    description:
      "Organize academic records and any supporting materials in the format requested by the institution.",
  },
  {
    number: "05",
    title: "Submit through the stated channel",
    description:
      "Follow the university's instructions. Some institutions use uni-assist; others accept applications directly or use a different channel.",
  },
  {
    number: "06",
    title: "Review the admission decision",
    description:
      "The university communicates the outcome and any next steps. Read the decision and instructions carefully.",
  },
  {
    number: "07",
    title: "Plan what comes next",
    description:
      "If you proceed, check current official visa guidance and begin planning finances, accommodation, and arrival arrangements.",
  },
] satisfies readonly StudyStep[];

export const financialCategories = [
  {
    title: "Tuition and study fees",
    description:
      "Charges depend on the institution, program, location, and individual circumstances. Do not assume a public institution has no tuition fees.",
  },
  {
    title: "Semester contributions",
    description:
      "Some institutions charge a semester contribution. Check the amount and what it covers directly with the university.",
  },
  {
    title: "Accommodation",
    description:
      "Housing costs differ by city, location, and type of accommodation. Include deposits and initial setup in your planning.",
  },
  {
    title: "Food and daily expenses",
    description:
      "Plan for groceries, personal needs, study materials, and other recurring costs based on your own routine.",
  },
  {
    title: "Health insurance",
    description:
      "Check which insurance arrangements apply to your age, study status, and circumstances before travel.",
  },
  {
    title: "Transport and personal costs",
    description:
      "Local transport, travel, communication, and other personal expenses will vary with your location and lifestyle.",
  },
] satisfies readonly StudyPoint[];

export const livingConsiderations = [
  {
    title: "Accommodation",
    description:
      "Research student housing and private rentals early. Availability, application processes, and rental terms differ by area and provider.",
  },
  {
    title: "Getting around",
    description:
      "Learn about local public transport, cycling, and the routes between your accommodation and campus.",
  },
  {
    title: "Everyday routines",
    description:
      "Plan for practical tasks such as banking, shopping, communication, and managing your study schedule.",
  },
  {
    title: "Cultural adjustment",
    description:
      "Give yourself time to adapt to a new language, climate, social customs, and independent living.",
  },
  {
    title: "Student communities",
    description:
      "Campus groups and student services may help you meet others and find information about university life.",
  },
  {
    title: "Preparing to arrive",
    description:
      "Keep essential documents organized and follow the current instructions from your institution and relevant authorities.",
  },
] satisfies readonly StudyPoint[];

export const visaPreparationSteps = [
  {
    number: "01",
    title: "Identify the relevant visa information",
    description:
      "Use the German Embassy in Dhaka and other official sources to confirm the appropriate category and current process for your circumstances.",
  },
  {
    number: "02",
    title: "Review the latest requirements",
    description:
      "Requirements, document lists, and procedures can change. Check the official instructions before preparing an application.",
  },
  {
    number: "03",
    title: "Prepare supporting documents",
    description:
      "Use the current checklist to organize the documents relevant to your application and confirm any format or translation rules.",
  },
  {
    number: "04",
    title: "Understand financial proof and appointments",
    description:
      "Check the current financial evidence rules, appointment process, and any preparation guidance published by the relevant authority.",
  },
  {
    number: "05",
    title: "Wait for the official decision",
    description:
      "The relevant German authorities assess applications and make visa decisions. RheinBridge Global cannot guarantee or influence the outcome.",
  },
] satisfies readonly StudyStep[];

export const studyQuestions = [
  {
    question: "Is Germany suitable for international students?",
    answer:
      "It may be a good fit for students whose academic interests, preferred learning environment, language plans, and finances align with a particular program. Compare your options carefully and consider the practical move as well as the course.",
  },
  {
    question: "Can students from Bangladesh study in Germany?",
    answer:
      "Students from Bangladesh can apply to German higher education programs if they meet the relevant academic and program requirements. Visa procedures and requirements should be checked through the German Embassy in Dhaka.",
  },
  {
    question: "Can I study in English?",
    answer:
      "Some programs are taught in English. Availability and accepted proof of language proficiency vary, so confirm the details with the university and program.",
  },
  {
    question: "Do all German public universities charge no tuition?",
    answer:
      "No. Tuition and other study-related charges vary by institution, program, location, and student circumstances. Check the current fee information published by each university.",
  },
  {
    question: "What are the general admission requirements?",
    answer:
      "Requirements can include prior qualifications, subject preparation, language proficiency, supporting documents, and deadlines. Each university and program sets its own criteria.",
  },
  {
    question: "How much money should I plan for?",
    answer:
      "There is no single budget that fits every student. Consider tuition or other study fees, accommodation, food, insurance, transport, and personal expenses. For any required financial proof, follow the latest official visa instructions.",
  },
  {
    question: "Do I need to know German?",
    answer:
      "Not necessarily for every program: some are taught in English. German may be required for German-taught courses and can also help with daily life. Check the requirements of your chosen program.",
  },
  {
    question: "What is the general student visa process?",
    answer:
      "The process depends on your circumstances and current rules. Start with the German Embassy in Dhaka's official visa guidance for the relevant category, document checklist, financial evidence, and appointment instructions. The authorities make the decision.",
  },
] satisfies readonly StudyQuestion[];

export const officialResources = [
  {
    name: "DAAD",
    description:
      "Explore study information and guidance from the German Academic Exchange Service.",
    href: "https://www.daad.de/",
    linkLabel: "Visit DAAD",
  },
  {
    name: "Study in Germany",
    description:
      "Find official information about study options, applications, and preparing for life in Germany.",
    href: "https://www.study-in-germany.de/",
    linkLabel: "Visit Study in Germany",
  },
  {
    name: "German Embassy in Dhaka",
    description:
      "Check official information for applicants in Bangladesh, including current visa guidance.",
    href: "https://dhaka.diplo.de/",
    linkLabel: "Visit the Embassy website",
  },
] satisfies readonly OfficialResource[];
