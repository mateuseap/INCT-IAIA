export interface IResearcherCard {
  id?: string;
  name: string;
  resume_text?: string;
  profile_pic?: string;
}

export interface IJournalArticle {
  title: string;
  authors: string;
  nature?: string;
  year?: string;
  country?: string;
  language?: string;
  dissemination_medium?: string;
  home_page?: string;
  relevance_flag?: string;
  doi?: string;
  english_title?: string;
  scientific_dissemination_flag?: string;
  journal?: string;
  issn?: string;
  volume?: string;
  issue?: string;
  series?: string;
  start_page?: string;
  end_page?: string;
  publication_location?: string;
}

export interface IInstitutionCard {
  name: string;
  logoUrl: string;
  website: string;
}

export interface IResearcherDetails extends IResearcherCard {
  journal_articles: IJournalArticle[];
}

export type Sizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "10xl";
