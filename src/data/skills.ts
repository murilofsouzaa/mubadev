export interface SkillItemEnhanced {
  id: string;
  category: string;
  items: {
    name: string;
    icon: string;
    level?: string;
  }[];
}

export const SKILLS_DATA: SkillItemEnhanced[] = [
  {
    id: '1',
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'Code2'},
      { name: 'TypeScript', icon: 'FileType2'},
      { name: 'Tailwind CSS', icon: 'Palette'},
    ],
  },
  {
    id: '2',
    category: 'Backend',
    items: [
      { name: 'Java', icon: 'Coffee'},
      { name: 'Spring Boot', icon: 'Leaf'},
      { name: 'Node.js', icon: 'Server'},
      { name: 'C++', icon: 'Binary'},
    ],
  },
  {
    id: '3',
    category: 'Banco de Dados',
    items: [
      { name: 'MongoDB', icon: 'Database'},
      { name: 'MySQL', icon: 'Database'},
      { name: 'PostgreSQL', icon: 'Database' },
    ],
  },
  {
    id: '4',
    category: 'DevOps & Ferramentas',
    items: [
      { name: 'Docker', icon: 'Box'},
      { name: 'Github Actions', icon: 'RefreshCcwDot'},
      { name: 'Nginx', icon: 'Cpu'},
      { name: 'Linux', icon: 'Terminal'},
      { name: 'Git', icon: 'GitFork'},
    ],
  },
];