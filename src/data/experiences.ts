import type { LocalizedString } from '../types/portfolio';

export interface ExperienceItem {
  id: string;
  role: LocalizedString | string;
  company: string;
  companyShort?: string;
  period: LocalizedString | string;
  location: string;
  type: LocalizedString | string;
  description: (LocalizedString | string)[];
  skills: string[];
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'affemg-ti',
    role: {
      pt: 'Estágio de TI',
      en: 'IT Intern',
    },
    company: 'Associação dos Funcionários Fiscais do Estado de Minas Gerais (AFFEMG)',
    companyShort: 'AFFEMG',
    period: {
      pt: 'Novembro / 2025 — Presente',
      en: 'November / 2025 — Present',
    },
    location: 'Belo Horizonte, MG — Brasil',
    type: {
      pt: 'Presencial / Híbrido',
      en: 'On-site / Hybrid',
    },
    description: [
      {
        pt: 'Suporte N1 e N2 prestando suporte especializado a hardware, software e infraestrutura de redes corporativas.',
        en: 'Tier 1 & Tier 2 technical support for corporate hardware, software, and networking infrastructure.',
      },
      {
        pt: 'Desenvolvimento e manutenção da plataforma de chamados utilizada internamente, construída com React, TailwindCSS e Supabase, com deploy automatizado via Docker, Nginx e GitHub Actions.',
        en: 'Development and maintenance of the internal ticketing platform using React, TailwindCSS, and Supabase, with automated CI/CD deployment via Docker, Nginx, and GitHub Actions.',
      },
      {
        pt: 'Desenvolvimento de uma rede social de bem-estar para incentivar os funcionários a adotarem hábitos saudáveis (em produção), construída com React, TailwindCSS, Node.js, Express.js, Docker, Nginx e GitHub Actions.',
        en: 'Development of an employee wellness social network in production to encourage healthy lifestyles, built with React, TailwindCSS, Node.js, Express.js, Docker, Nginx, and GitHub Actions.',
      },
      {
        pt: 'Documentação técnica de sistemas internos, fluxos operacionais e processos em formato de playbooks.',
        en: 'Technical documentation of internal systems, operational workflows, and procedures in playbook formats.',
      },
    ],
    skills: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'Supabase',
      'Docker',
      'Nginx',
      'GitHub Actions',
      'Redes & Suporte TI',
    ],
  },
];
