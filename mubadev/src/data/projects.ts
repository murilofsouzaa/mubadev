// src/data/projects.ts
import type { ProjectItem } from '../types/portfolio';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '1',
    title: 'EDEN',
    description: 'O projeto Eden é uma loja online focada em roupas de academia. O objetivo é oferecer aos usuários uma maneira rápida e simples de navegar pelos itens e verificar detalhes. A interface permanece clara, a lista de produtos permanece organizada e o sistema conecta o frontend e o backend para manter tudo estável e seguro..',
    fullDescription: 'O projeto Eden é uma loja online focada em roupas de academia. O objetivo é oferecer aos usuários uma maneira rápida e simples de navegar pelos itens e verificar detalhes. A interface permanece clara, a lista de produtos permanece organizada e o sistema conecta o frontend e o backend para manter tudo estável e seguro. Funciona como um bom plano de treino: estável, claro e desenvolvido para ajudar você a seguir em frente. Estou desenvolvendo este projeto para aprender conceitos como: Design Orientado a Domínio, Padrões de Design, SOLID, Mobile First e UI/UX.',
    image: '../../public/projects/eden/edenapresentation.png', 
    youtubeId: 'ohn5Kagjs8s', // ID do vídeo no YouTube (ex: youtube.com/watch?v=dQw4w9WgXcQ)
    tags: ['React', 'Typescript','Java','Spring Boot', 'PostgreSQL', 'Tailwind', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/murilofsouzaa/eden',
    deployUrl: 'https://eden.mubadev.com.br/',
  },
]