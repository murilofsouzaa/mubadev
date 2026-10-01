export interface BookItem {
  id: string;
  title: string;
  author: string;
  subtitle?: {
    pt: string;
    en: string;
  };
  cover: string;
  status: 'read' | 'reading';
  amazonUrl: string;
}

export const BOOKS_DATA: BookItem[] = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    subtitle: {
      pt: 'Habilidades Práticas do Agile Software',
      en: 'A Handbook of Agile Software Craftsmanship',
    },
    cover: '/books/cleancode.jpeg',
    status: 'read',
    amazonUrl: 'https://www.amazon.com.br/dp/8576082675',
  },
  {
    id: 'desenvolvimento-real-software',
    title: 'Desenvolvimento Real de Software',
    author: 'Raoul-Gabriel Urma & Richard Warburton',
    subtitle: {
      pt: 'Um Guia de Projetos para Fundamentos em Java',
      en: 'A Project-Based Introduction to Java Software Development',
    },
    cover: '/books/desrealsoft.jpeg',
    status: 'read',
    amazonUrl: 'https://www.amazon.com.br/dp/6555202017',
  },
  {
    id: 'fundamentos-arquitetura-software',
    title: 'Fundamentos da Arquitetura de Software',
    author: 'Mark Richards & Neal Ford',
    subtitle: {
      pt: 'Uma abordagem de engenharia',
      en: 'An Engineering Approach',
    },
    cover: '/books/arqsoftnealford.jpeg',
    status: 'reading',
    amazonUrl: 'https://www.amazon.com.br/dp/8550819859',
  },
  {
    id: 'entendendo-algoritmos',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    subtitle: {
      pt: 'Um guia ilustrado para programadores e outros curiosos',
      en: 'An Illustrated Guide for Programmers and Other Curious People',
    },
    cover: '/books/entendendoalgoritmos.jpg',
    status: 'reading',
    amazonUrl: 'https://www.amazon.com.br/dp/8575225634',
  },
  {
    id: 'aprenda-programacao-funcional',
    title: 'Aprenda Programação Funcional',
    author: 'Jack Widman',
    subtitle: {
      pt: 'Como Pensar Funcionalmente para Trabalhar com Códigos Complexos',
      en: 'How to Think Functionally for Complex Code',
    },
    cover: '/books/progfuncional.jpg',
    status: 'reading',
    amazonUrl: 'https://www.amazon.com.br/dp/855081962X',
  },
];
