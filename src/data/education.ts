import type { EducationItem } from '../types/portfolio';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'puc-minas',
    institution: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
    degree: {
      pt: 'Bacharelado',
      en: "Bachelor's Degree",
    },
    field: {
      pt: 'Engenharia de Software',
      en: 'Software Engineering',
    },
    period: '2025 — 2028',
    location: 'Belo Horizonte — MG, Brasil',
    status: {
      pt: 'Em andamento (Conclusão prevista: Dez/2028)',
      en: 'In progress (Expected graduation: Dec/2028)',
    },
    description: {
      pt: 'Formação superior com foco em engenharia de software, modelagem de sistemas, arquiteturas escaláveis, estruturas de dados, algoritmos, bancos de dados, testes de software e desenvolvimento ágil.',
      en: 'Higher education focused on software engineering, system modeling, scalable architectures, data structures, algorithms, relational databases, software testing, and agile methodologies.',
    },
    skills: [
      { pt: 'Engenharia de Software', en: 'Software Engineering' },
      { pt: 'Java & Spring Boot', en: 'Java & Spring Boot' },
      { pt: 'Estruturas de Dados & Algoritmos', en: 'Data Structures & Algorithms' },
      { pt: 'Arquitetura de Sistemas', en: 'System Architecture' },
      { pt: 'Modelagem de Banco de Dados', en: 'Database Modeling' },
      { pt: 'Testes com JUnit', en: 'JUnit Testing' },
      { pt: 'POO & SOLID', en: 'OOP & SOLID' },
    ],
  },
  {
    id: 'ifnmg-almenara',
    institution: 'Instituto Federal do Norte de Minas Gerais (IFNMG - Campus Almenara)',
    degree: {
      pt: 'Ensino Médio Integrado',
      en: 'High School Integrated with Technical Degree',
    },
    field: {
      pt: 'Técnico em Informática',
      en: 'Information Technology Technician',
    },
    period: '2022 — 2024',
    location: 'Almenara — MG, Brasil',
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
    description: {
      pt: 'Formação técnica abrangendo lógica de programação, desenvolvimento web, manutenção de computadores, redes locais, sistemas operacionais e bancos de dados.',
      en: 'Technical education covering programming logic, web development, computer maintenance, local area networks, operating systems, and databases.',
    },
    skills: [
      { pt: 'Lógica de Programação', en: 'Programming Logic' },
      { pt: 'Desenvolvimento Web', en: 'Web Development' },
      { pt: 'Redes de Computadores', en: 'Computer Networks' },
      { pt: 'Manutenção de Hardware & Software', en: 'Hardware & Software Maintenance' },
      { pt: 'Linux & Windows', en: 'Linux & Windows' },
      { pt: 'Bancos de Dados Relacionais', en: 'Relational Databases' },
    ],
  },
];
