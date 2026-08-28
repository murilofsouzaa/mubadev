export type Theme = 'dark' | 'light';
export type Language = 'pt' | 'en';

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface SkillItem {
  id: string;
  category: string;
  categoryEn?: string;
  items: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: LocalizedString | string;
  field: LocalizedString | string;
  period: string;
  location: string;
  status: LocalizedString | string;
  description: LocalizedString | string;
  skills: string[];
  highlights?: (LocalizedString | string)[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: LocalizedString | string;
  description: LocalizedString | string;
  fullDescription?: LocalizedString | string;
  image: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  youtubeId?: string;
  featured?: boolean;
  size?: 'large' | 'medium' | 'small';
}