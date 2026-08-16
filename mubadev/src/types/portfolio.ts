export type Theme = 'dark' | 'light';

export interface SkillItem {
  id: string;
  category: string;
  items: string[];
  icon: 'code' | 'server' | 'database' | 'terminal' | 'file-text' | 'git';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  youtubeId?: string; // Exemplo: "dQw4w9WgXcQ"
}