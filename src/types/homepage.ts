export type ServiceIconName =
  | "compass"
  | "document"
  | "shield"
  | "home"
  | "suitcase";

export interface HomeService {
  number: string;
  icon: ServiceIconName;
  title: string;
  description: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export interface UniversityExample {
  name: string;
  city: string;
  href: string;
}

export interface ArticleIdea {
  category: string;
  title: string;
  description: string;
  readTime: string;
}
