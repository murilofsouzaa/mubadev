import type { ProjectItem, LocalizedString } from '../types/portfolio';

export interface ProjectItemExtended extends ProjectItem {
  figmaUrl?: string;
  architectureDetails?: {
    backend: string[];
    frontend: string[];
    database?: string;
    infra: string[];
    productionFlow: (LocalizedString | string)[];
    commandSnippet?: string;
    commandComment?: string;
  };
  concepts?: LocalizedString | string;
  motto?: LocalizedString | string;
}

export const PROJECTS_DATA: ProjectItemExtended[] = [
  {
    id: 'strucx',
    title: 'STRUCX',
    subtitle: {
      pt: 'Plataforma editorial de engenharia estrutural de alta performance com motor 3D interativo via canvas e microsserviço transacional.',
      en: 'Editorial web platform for high-complexity structural systems with GPU-accelerated interactive 3D canvas sequence and transactional microservice.',
    },
    description: {
      pt: 'A StrucX é uma aplicação web completa voltada para construtoras, incorporadoras e escritórios de engenharia que demandam cálculos estruturais de alta complexidade. O projeto une uma estética editorial minimalista a um motor de sequência 3D de 1.155 quadros acelerado por hardware e backend resiliente de mensageria com telemetria e envio de e-mails em tempo real.',
      en: 'StrucX is an end-to-end web platform designed for construction firms, developers, and engineering studios requiring high-complexity structural calculations. It fuses international editorial architecture aesthetics with a 1,155-frame GPU-accelerated 3D canvas sequence and a resilient telemetry and messaging backend.',
    },
    fullDescription: {
      pt: `A StrucX é uma aplicação web completa (Frontend e Backend) voltada para construtoras, incorporadoras e escritórios de engenharia que demandam cálculos estruturais de alta complexidade.

O projeto combina uma estética editorial inspirada em estúdios internacionais de arquitetura com um sistema avançado de animação 3D acelerado por hardware (Canvas com 1.155 frames WebP em LERP contínuo) e uma API de mensageria com envio automatizado de e-mails, persistência auditada e rate limiting.`,
      en: `StrucX is an end-to-end web platform (Frontend & Backend) designed for construction firms, developers, and engineering studios requiring high-complexity structural calculations.

The project fuses an editorial aesthetic inspired by international architecture studios with an advanced GPU-accelerated 3D sequence engine (Canvas with 1,155 WebP frames in continuous LERP) and a messaging API with automated emails, audited persistence, and rate limiting.`,
    },
    motto: {
      pt: 'Engenharia de precisão para megaestruturas, infraestrutura pesada e geometrias complexas.',
      en: 'Precision engineering for megastructures, heavy infrastructure, and complex geometries.',
    },
    concepts: {
      pt: 'Canvas Image Sequence (LERP & GPU), GSAP ScrollTrigger Pinned Carousels, Multi-Stage Docker, Nginx Reverse Proxy, Microserviço Node.js & Express, TypeScript.',
      en: 'Canvas Image Sequence (LERP & GPU), GSAP ScrollTrigger Pinned Carousels, Multi-Stage Docker, Nginx Reverse Proxy, Node.js & Express Microservice, TypeScript.',
    },
    architectureDetails: {
      backend: [
        'Node.js & Express com TypeScript',
        'Nodemailer com fallback e templates responsivos',
        'Persistência auditada de leads em JSON',
        'Rate limiting e proteção contra abuso de endpoints',
      ],
      frontend: [
        'React, TypeScript & Tailwind CSS',
        'GSAP & ScrollTrigger (Animações e Pinned Sections)',
        'Motor Canvas 2D acelerado por hardware (1.155 frames WebP)',
        'Design System editorial com glassmorphism responsivo',
      ],
      database: 'Volume persistente auditado (/app/leads)',
      infra: [
        'Multi-Stage Docker (Nginx Alpine + Node.js Alpine)',
        'Nginx Reverse Proxy (/api routing, Gzip, Cache Control)',
        'GitHub Actions CI/CD (TypeScript Checks, Vite Build, Docker Build)',
      ],
      commandSnippet: 'docker compose up -d --build',
      commandComment: '# Nginx + Node.js Microservice',
      productionFlow: [
        {
          pt: 'Frontend containerizado com Nginx Alpine servindo a SPA compilada com compressão Gzip e cache agressivo para os frames WebP da animação 3D.',
          en: 'Frontend containerized with Nginx Alpine serving the static SPA with Gzip compression and long-term cache headers for 3D WebP frames.',
        },
        {
          pt: 'Proxy reverso Nginx roteia requisições /api/ diretamente para o microserviço backend Node.js em rede Docker isolada.',
          en: 'Nginx reverse proxy automatically routes /api/ requests to the Node.js backend container on an isolated Docker network.',
        },
        {
          pt: 'Backend Node.js Alpine executado com usuário sem privilégios root (strucxuser) e volume persistente para auditoria de leads.',
          en: 'Backend running on Node.js Alpine with non-root user (strucxuser) and persistent volume mapping for lead capture auditing.',
        },
        {
          pt: 'Pipeline de CI/CD automatizado no GitHub Actions com checagem de tipos TypeScript, compilação Vite e validação de containers Docker.',
          en: 'Automated CI/CD pipeline via GitHub Actions with TypeScript typechecks, Vite production builds, and Docker image validation.',
        },
      ],
    },
    image: '/projects/strucx-thumbnail.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Node.js', 'Express', 'Docker', 'Nginx', 'GitHub Actions'],
    githubUrl: 'https://github.com/murilofsouzaa/strucx',
    deployUrl: 'https://strucx.mubadev.com.br/',
    featured: true,
    size: 'large',
  },
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
    motto: {
      pt: 'Funciona como um bom plano de treino: constante, claro e construído para impulsionar resultados.',
      en: 'It works like a good workout plan: steady, clear, and built to help you move forward.',
    },
    concepts: {
      pt: 'Domain-Driven Design (DDD), Design Patterns, SOLID, Mobile First e UI/UX.',
      en: 'Domain-Driven Design (DDD), Design Patterns, SOLID, Mobile First, and UI/UX.',
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
      commandSnippet: 'docker compose up -d',
      commandComment: '# NGINX + Spring Boot',
      productionFlow: [
        {
          pt: 'Backend acessível internamente na porta 8080.',
          en: 'Backend accessible internally on port 8080.',
        },
        {
          pt: 'Frontend compilado em build estático e servido via NGINX em container na porta 8080.',
          en: 'Frontend compiled into static build and served by NGINX in container on port 8080.',
        },
        {
          pt: 'O NGINX do host (VPS) recebe tráfego seguro nas portas 80 e 443 (HTTPS) e encaminha para 127.0.0.1:3000.',
          en: 'Host NGINX (VPS) receives secure traffic on ports 80 and 443 (HTTPS) and forwards to 127.0.0.1:3000.',
        },
        {
          pt: 'O frontend consome a API backend através das rotas /api com roteamento centralizado.',
          en: 'Frontend consumes backend API through /api routes with centralized reverse proxy routing.',
        },
      ],
    },
    image: '/projects/eden/edenapresentation.png',
    youtubeId: 'ohn5Kagjs8s',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'NGINX', 'GitHub Actions'],
    githubUrl: 'https://github.com/murilofsouzaa/Eden',
    deployUrl: 'https://eden.mubadev.com.br/',
    featured: false,
    size: 'medium',
  },
];