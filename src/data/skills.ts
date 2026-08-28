export interface SkillItemEnhanced {
  name: string;
  icon: string;
  level?: string;
  category: string;
  categoryEn?: string;
}

export interface SkillCategory {
  category: string;
  categoryEn?: string;
  items: {
    name: string;
    icon: string;
    level?: string;
  }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend',
    categoryEn: 'Frontend',
    items: [
      { name: 'TypeScript', icon: 'typescript', level: 'Avançado' },
      { name: 'React', icon: 'react', level: 'Avançado' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', level: 'Avançado' },
    ],
  },
  {
    category: 'Backend',
    categoryEn: 'Backend',
    items: [
      { name: 'Java', icon: 'java', level: 'Sólido' },
      { name: 'Spring Boot', icon: 'springboot', level: 'Sólido' },
      { name: 'Node.js', icon: 'nodejs', level: 'Avançado' },
      { name: 'Express.js', icon: 'nodejs', level: 'Avançado' },
    ],
  },
  {
    category: 'Banco de Dados',
    categoryEn: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql', level: 'Produção' },
      { name: 'MySQL', icon: 'mysql', level: 'Sólido' },
      { name: 'MongoDB', icon: 'mongodb', level: 'Sólido' },
    ],
  },
  {
    category: 'DevOps & Testes',
    categoryEn: 'DevOps & Testing',
    items: [
      { name: 'Docker', icon: 'docker', level: 'Produção' },
      { name: 'Nginx', icon: 'nginx', level: 'Produção' },
      { name: 'GitHub Actions', icon: 'githubactions', level: 'CI/CD' },
      { name: 'Linux', icon: 'linux', level: 'Ambiente' },
      { name: 'Git', icon: 'git', level: 'Fluxo' },
    ],
  },
];