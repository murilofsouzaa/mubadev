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
    id: 'amordebicho',
    title: 'Amor de Bicho',
    subtitle: {
      pt: 'Landing Page moderna, performática e interativa para o Pet Shop e Centro Veterinário Amor de Bicho.',
      en: 'Modern, high-performance, and interactive Landing Page for Amor de Bicho Pet Shop and Veterinary Center.',
    },
    description: {
      pt: 'Landing Page moderna, performática e interativa para o Pet Shop e Centro Veterinário Amor de Bicho. Desenvolvida com arquitetura de ponta, animações sincronizadas via GSAP ScrollTrigger a 60 FPS, tipografia de alto impacto e deploy automatizado com Docker e GitHub Actions.',
      en: 'Modern, high-performance, and interactive Landing Page for the Amor de Bicho Pet Shop and Veterinary Center. Developed with cutting-edge architecture, synchronized animations via GSAP ScrollTrigger at 60 FPS, high-impact typography, and automated deployment with Docker and GitHub Actions.',
    },
    fullDescription: {
      pt: `Landing Page moderna, performática e interativa para o Pet Shop e Centro Veterinário Amor de Bicho. Desenvolvida com arquitetura de ponta, animações sincronizadas via GSAP ScrollTrigger a 60 FPS, tipografia de alto impacto e deploy automatizado com Docker e GitHub Actions.

A experiência conta com Hero Colossal com vídeo em Canvas a 60 FPS, Narrativa Pinned imersiva com ScrollTrigger, grid de serviços com contraste dinâmico no hover, Bento Grid de diferenciais (câmeras ao vivo, clínica 24h, manejo fear-free), seção de depoimentos e footer institucional completo.`,
      en: `Modern, high-performance, and interactive Landing Page for Amor de Bicho Pet Shop and Veterinary Center. Developed with cutting-edge architecture, synchronized animations via GSAP ScrollTrigger at 60 FPS, high-impact typography, and automated deployment with Docker and GitHub Actions.

The experience features a Colossal Hero with 60 FPS Canvas video, immersive Pinned Narrative with ScrollTrigger, services grid with dynamic hover contrast, Differentials Bento Grid (live cameras, 24h clinic, fear-free handling), testimonials section, and complete institutional footer.`,
    },
    motto: {
      pt: 'Identidade visual em Verde Principal #496F5D, tipografia Viga & Bungee, cantos retos e design system 100% cage-free.',
      en: 'Brand identity in Verde Principal #496F5D, Viga & Bungee typography, sharp corners and 100% cage-free design system.',
    },
    concepts: {
      pt: 'GSAP ScrollTrigger, Lenis Smooth Scroll, Framer Motion, React Router DOM v7, Multi-Stage Docker, Nginx SPA, GitHub Actions CI/CD.',
      en: 'GSAP ScrollTrigger, Lenis Smooth Scroll, Framer Motion, React Router DOM v7, Multi-Stage Docker, Nginx SPA, GitHub Actions CI/CD.',
    },
    architectureDetails: {
      backend: [],
      frontend: [
        'React 19 + TypeScript',
        'Vite 8 (Build tool de altíssima velocidade)',
        'Tailwind CSS v4 (Sistema de estilos moderno)',
        'GSAP 3 + ScrollTrigger (Animações e scrubbing a 60 FPS)',
        'Lenis (Smooth scrolling inercial a 60-120 FPS)',
        'Framer Motion (Microinterações e dropdowns fluidos)',
        'React Router DOM v7 (Roteamento SPA)',
        'Lucide React (Ícones limpos e minimalistas)',
      ],
      infra: [
        'Docker (Multi-stage build com Node 20 e Nginx Alpine)',
        'Nginx (Gzip, cache de assets e suporte a SPA)',
        'Docker Compose',
        'GitHub Actions (CI/CD com lint, build e deploy SSH)',
      ],
      commandSnippet: 'docker compose up --build -d',
      commandComment: '# Nginx Alpine · porta 8086',
      productionFlow: [
        {
          pt: 'Build multi-stage: Node 20 compila o Vite, Nginx Alpine serve a SPA estática com Gzip e cache agressivo.',
          en: 'Multi-stage build: Node 20 compiles Vite, Nginx Alpine serves the static SPA with Gzip and aggressive caching.',
        },
        {
          pt: 'Container exposto em http://localhost:8086; Nginx host da VPS roteia HTTPS (443) para 127.0.0.1:8086.',
          en: 'Container exposed at http://localhost:8086; VPS host Nginx routes HTTPS (443) to 127.0.0.1:8086.',
        },
        {
          pt: 'Pipeline GitHub Actions dispara no push para main: ESLint → Vite build → Docker build → deploy SSH automático na VPS.',
          en: 'GitHub Actions pipeline triggers on push to main: ESLint → Vite build → Docker build → automatic SSH deploy to VPS.',
        },
        {
          pt: 'Secrets configuradas no GitHub: VPS_HOST, VPS_SSH_KEY e VPS_PORT garantem deploy seguro sem exposição de credenciais.',
          en: 'GitHub secrets configured: VPS_HOST, VPS_SSH_KEY and VPS_PORT ensure secure deployment without credential exposure.',
        },
      ],
    },
    image: '/amordebichothumbail.png',
    youtubeId: 'kcPnboHULAg',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'GSAP', 'Lenis', 'Framer Motion', 'Vite', 'Docker', 'Nginx', 'GitHub Actions'],
    githubUrl: 'https://github.com/murilofsouzaa/amordebicho',
    deployUrl: 'https://amordebicho.mubadev.com.br/',
    featured: true,
    size: 'large',
  },
  {
    id: 'strucx',
    title: 'STRUCX',
    subtitle: {
      pt: 'Aplicação web completa (Frontend e Backend) para engenharia estrutural de alta complexidade.',
      en: 'Full-stack web application (Frontend and Backend) for high-complexity structural engineering.',
    },
    description: {
      pt: 'A StrucX é uma aplicação web completa (Frontend e Backend) voltada para construtoras, incorporadoras e escritórios de engenharia que demandam cálculos estruturais de alta complexidade. O projeto combina uma estética editorial inspirada em estúdios internacionais de arquitetura (como Heatherwick Studio e Thornton Tomasetti) com um sistema avançado de animação 3D acelerado por GPU e uma API de mensageria com envio automatizado de e-mails e persistência à prova de falhas.',
      en: 'StrucX is a full-stack web application (Frontend and Backend) designed for construction firms, developers, and engineering studios requiring high-complexity structural calculations. The project fuses an editorial aesthetic inspired by international architecture studios (such as Heatherwick Studio and Thornton Tomasetti) with an advanced GPU-accelerated 3D animation system and a messaging API featuring automated email delivery and fail-safe persistence.',
    },
    fullDescription: {
      pt: `A StrucX é uma aplicação web completa (Frontend e Backend) voltada para construtoras, incorporadoras e escritórios de engenharia que demandam cálculos estruturais de alta complexidade.

O projeto combina uma estética editorial inspirada em estúdios internacionais de arquitetura (como Heatherwick Studio e Thornton Tomasetti) com um sistema avançado de animação 3D acelerado por GPU e uma API de mensageria com envio automatizado de e-mails e persistência à prova de falhas.`,
      en: `StrucX is a full-stack web application (Frontend and Backend) designed for construction firms, developers, and engineering studios requiring high-complexity structural calculations.

The project fuses an editorial aesthetic inspired by international architecture studios (such as Heatherwick Studio and Thornton Tomasetti) with an advanced GPU-accelerated 3D animation system and a messaging API featuring automated email delivery and fail-safe persistence.`,
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
    youtubeId: 'pHSRwB7maDk',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Node.js', 'Express', 'Docker', 'Nginx', 'GitHub Actions'],
    githubUrl: 'https://github.com/murilofsouzaa/strucx',
    deployUrl: 'https://strucx.mubadev.com.br/',
    featured: false,
    size: 'large',
  },
  {
    id: 'eden',
    title: 'Eden',
    subtitle: {
      pt: 'Loja online focada em roupas fitness com arquitetura em camadas, robustez e performance.',
      en: 'Online shop focused on gym clothing with layered architecture, stability, and speed.',
    },
    description: {
      pt: "O projeto Eden é uma loja online focada em roupas fitness. O objetivo é oferecer aos usuários uma maneira rápida e simples de navegar pelos itens e conferir detalhes. A interface permanece limpa, a lista de produtos organizada e o sistema conecta o frontend e o backend para manter tudo estável e seguro. Funciona como um bom plano de treino: constante, claro e construído para ajudar você a evoluir. Estou desenvolvendo este projeto para praticar conceitos como: Domain-Driven Design, Design Patterns, SOLID, Mobile First e UI/UX.",
      en: "The Eden project is an online shop focused on gym clothing. The goal is to give users a fast and simple way to browse items and check details. The interface stays clear, the product list stays organized, and the system connects the frontend and backend to keep everything stable and safe. It works like a good workout plan: steady, clear, and built to help you move forward. I'm developing this project to learn concepts such as: Domain-Driven Design, Design Patterns, SOLID, Mobile First, and UI/UX.",
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
