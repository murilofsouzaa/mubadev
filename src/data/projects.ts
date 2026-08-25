// src/data/projects.ts
import type { ProjectItem } from '../types/portfolio';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '1',
    title: 'EDEN',
    description: {
      pt: 'O projeto Eden é uma loja online focada em roupas de academia. O objetivo é oferecer aos usuários uma maneira rápida e simples de navegar pelos itens e verificar detalhes. A interface permanece clara, a lista de produtos organizada e o sistema conecta frontend e backend de forma estável e segura.',
      en: 'The Eden project is an e-commerce platform focused on fitness apparel. The goal is to provide users a fast and intuitive browsing experience with clear item details, structured catalog, and robust frontend-backend integration.',
    },
    fullDescription: {
      pt: 'O projeto Eden é uma loja online focada em roupas de academia. O objetivo é oferecer aos usuários uma maneira rápida e simples de navegar pelos itens e verificar detalhes. A interface permanece clara, a lista de produtos permanece organizada e o sistema conecta o frontend e o backend para manter tudo estável e seguro. Funciona como um bom plano de treino: estável, claro e desenvolvido para ajudar você a seguir em frente. Estou desenvolvendo este projeto para aprender conceitos como: Design Orientado a Domínio (DDD), Padrões de Projeto, SOLID, Mobile First e UI/UX.',
      en: 'The Eden project is an e-commerce platform focused on gym and workout apparel. It offers users a fast, smooth browsing and checkout experience with detailed item inspection. The interface remains clean and responsive, keeping products organized with rock-solid frontend and backend synchronization. Developed to apply architectural principles such as Domain-Driven Design (DDD), Design Patterns, SOLID principles, Mobile First, and UI/UX best practices.',
    },
    image: '../../projects/eden/edenapresentation.png', 
    youtubeId: 'ohn5Kagjs8s', // ID do vídeo no YouTube (ex: youtube.com/watch?v=dQw4w9WgXcQ)
    tags: ['React', 'Typescript','Java','Spring Boot', 'PostgreSQL', 'Tailwind', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/murilofsouzaa/eden',
    deployUrl: 'https://eden.mubadev.com.br/',
  },
];