import type { ProjectItem } from '../types/portfolio';

export interface ProjectItemExtended extends ProjectItem {
  figmaUrl?: string;
  architectureDetails?: {
    backend: string[];
    frontend: string[];
    database: string;
    infra: string[];
    productionFlow: string[];
  };
}

export const PROJECTS_DATA: ProjectItemExtended[] = [
  {
    id: 'eden',
    title: 'Eden',
    subtitle: {
      pt: 'Loja online focada em roupas de academia e alta performance com arquitetura em camadas e microsserviços.',
      en: 'Online shop focused on gym clothing with layered architecture and production deployment.',
    },
    description: {
      pt: 'The Eden project is an online shop focused on gym clothing. The goal is to give users a fast and simple way to browse items and check details. The interface stays clear, the product list stays organized, and the system connects the frontend and backend to keep everything stable and safe.',
      en: 'The Eden project is an online shop focused on gym clothing. The goal is to give users a fast and simple way to browse items and check details. The interface stays clear, the product list stays organized, and the system connects the frontend and backend to keep everything stable and safe.',
    },
    fullDescription: {
      pt: `The Eden project is an online shop focused on gym clothing. The goal is to give users a fast and simple way to browse items and check details. The interface stays clear, the product list stays organized, and the system connects the frontend and backend to keep everything stable and safe.

It works like a good workout plan: steady, clear, and built to help you move forward.
I'm developing this project to learn concepts such as: Domain-Driven Design, Design Patterns, SOLID, Mobile First, and UI/UX.`,
      en: `The Eden project is an online shop focused on gym clothing. The goal is to give users a fast and simple way to browse items and check details. The interface stays clear, the product list stays organized, and the system connects the frontend and backend to keep everything stable and safe.

It works like a good workout plan: steady, clear, and built to help you move forward.
I'm developing this project to learn concepts such as: Domain-Driven Design, Design Patterns, SOLID, Mobile First, and UI/UX.`,
    },
    figmaUrl: 'https://www.figma.com/proto/bh5TuhdBSesmUsegzCpEdg/EDEN?node-id=0-1&t=08d9XmtUwl2qmwZK-1',
    architectureDetails: {
      backend: [
        'Java & Spring Boot (Layered Architecture)',
        'Spring Data JPA, Validation, Web',
        'Maven Build & Dependency Management',
        'JUnit & Mockito (Unit & Integration Testing)',
      ],
      frontend: [
        'React, TypeScript & Tailwind CSS',
        'Vite + TypeScript Build Tooling',
        'Axios, Lucide React, React Router',
        'Mobile First & Responsive UI/UX',
      ],
      database: 'PostgreSQL (Produção) & H2 (Testes)',
      infra: [
        'Docker & Docker Compose',
        'NGINX Reverse Proxy (SSL/TLS, Caching, Compression)',
        'GitHub Actions (CI/CD Automation)',
      ],
      productionFlow: [
        'Backend accessible internally on port 8080.',
        'Frontend compiled into a static build and served by NGINX inside container on port 8080.',
        "Host NGINX (VPS) receives secure traffic on ports 80 and 443 (HTTPS) and forwards to frontend on 127.0.0.1:3000.",
        'Frontend consumes backend API through /api routes with centralized reverse proxy routing.',
      ],
    },
    image: '/projects/eden/edenapresentation.png',
    youtubeId: 'ohn5Kagjs8s',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'NGINX', 'GitHub Actions'],
    githubUrl: 'https://github.com/murilofsouzaa/Eden',
    deployUrl: 'https://eden.mubadev.com.br/',
    featured: true,
    size: 'large',
  },
];