export type Theme = 'dark' | 'light';

export interface SkillItem {
  id: string;
  category: string;
  items: string[];
  icon: 'code' | 'server' | 'database' | 'terminal' | 'file-text' | 'git';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  detailsUrl?: string;
}