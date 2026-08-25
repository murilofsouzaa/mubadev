export type Theme = 'dark' | 'light';
export type Language = 'pt' | 'en';

export interface SkillItem {
  id: string;
  category: string;
  categoryEn?: string;
  items: string[];
  icon: 'code' | 'server' | 'database' | 'terminal' | 'file-text' | 'git';
}

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: LocalizedString | string;
  fullDescription?: LocalizedString | string;
  image: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  youtubeId?: string; // Exemplo: "dQw4w9WgXcQ"
}