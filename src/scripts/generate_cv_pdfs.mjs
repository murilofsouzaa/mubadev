import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const h = React.createElement;

const styles = StyleSheet.create({
  page: {
    paddingTop: 45,
    paddingBottom: 45,
    paddingHorizontal: 54,
    fontFamily: 'Times-Roman',
    fontSize: 10,
    lineHeight: 1.35,
    color: '#111111',
  },
  headerName: {
    fontFamily: 'Times-Bold',
    fontSize: 12.5,
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  headerSub: {
    fontSize: 10,
    marginBottom: 2,
  },
  linksRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  link: {
    color: '#111111',
    textDecoration: 'underline',
    fontSize: 10,
  },
  sectionTitle: {
    fontFamily: 'Times-Bold',
    fontSize: 11,
    marginTop: 12,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 9.8,
    lineHeight: 1.4,
    marginBottom: 6,
  },
  techRow: {
    fontSize: 9.8,
    lineHeight: 1.4,
    marginBottom: 2,
  },
  techLabel: {
    fontFamily: 'Times-Bold',
  },
  itemTitle: {
    fontSize: 9.8,
    lineHeight: 1.35,
  },
  itemSub: {
    fontSize: 9.8,
    fontStyle: 'italic',
    color: '#333333',
    marginBottom: 6,
  },
  expCompany: {
    fontFamily: 'Times-Bold',
    fontSize: 9.8,
    textTransform: 'uppercase',
    marginTop: 3,
    marginBottom: 2,
  },
  expDate: {
    fontSize: 9.8,
    marginBottom: 6,
  },
  bulletList: {
    marginTop: 3,
    gap: 4,
  },
  bulletItem: {
    fontSize: 9.5,
    lineHeight: 1.35,
  },
});

const CvDocumentPt = () =>
  h(
    Document,
    { title: 'Murilo Freitas de Souza - Currículo', author: 'Murilo Freitas de Souza' },
    h(
      Page,
      { size: 'A4', style: styles.page },
      h(Text, { style: styles.headerName }, 'MURILO FREITAS DE SOUZA'),
      h(Text, { style: styles.headerSub }, '20 Anos'),
      h(Text, { style: styles.headerSub }, 'Belo Horizonte - MG'),
      h(
        View,
        { style: styles.linksRow },
        h(Link, { style: styles.link, src: 'https://mubadev.com.br' }, 'Portfólio'),
        h(Link, { style: styles.link, src: 'https://linkedin.com/in/murilofsouzaa' }, 'Linkedin'),
        h(Link, { style: styles.link, src: 'https://github.com/murilofsouzaa' }, 'Github'),
        h(Link, { style: styles.link, src: 'mailto:onemurilo@gmail.com' }, 'onemurilo@gmail.com')
      ),
      h(Text, { style: styles.sectionTitle }, 'Objetivo Profissional'),
      h(
        Text,
        { style: styles.paragraph },
        'Busco uma oportunidade para aprender com pessoas mais experientes, colocar em prática os conhecimentos que venho adquirindo nos meus estudos e projetos, além de contribuir com a equipe. Almejo estar em um ambiente onde possa continuar aprendendo, compartilhar ideias, trazer novas perspectivas e crescer junto com a empresa. Além disso, possuo interesse genuíno em aprender qualquer coisa.'
      ),
      h(Text, { style: styles.sectionTitle }, 'Tecnologias'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Frontend: '), 'TypeScript, React, TailwindCSS'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Backend: '), 'Java, Spring Boot, Node.js, Express.js'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Banco de dados: '), 'PostgreSQL, MySQL, MongoDB'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'DevOps: '), 'Docker, Nginx, GitHub Actions'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Testes: '), 'JUnit'),
      h(Text, { style: styles.sectionTitle }, 'Formação Acadêmica'),
      h(Text, { style: styles.itemTitle }, 'Ensino Médio Integrado ao Técnico em Informática (IFNMG - Campus Almenara)'),
      h(Text, { style: styles.itemSub }, '2022 - 2024 (Concluído)'),
      h(Text, { style: styles.itemTitle }, 'Engenharia de Software (PUC Minas - Belo Horizonte)'),
      h(Text, { style: styles.itemSub }, '2025 - Previsão de conclusão em dezembro de 2028'),
      h(Text, { style: styles.sectionTitle }, 'Idiomas'),
      h(Text, { style: styles.paragraph }, 'Inglês: Intermediário/Avançado'),
      h(Text, { style: styles.sectionTitle }, 'Experiência'),
      h(Text, { style: styles.itemTitle }, h(Text, { style: styles.techLabel }, 'Estágio de TI')),
      h(Text, { style: styles.expCompany }, 'ASSOCIAÇÃO DOS FUNCIONÁRIOS FISCAIS DO ESTADO DE MINAS GERAIS'),
      h(Text, { style: styles.expDate }, 'Data: Novembro/2025 - Atual'),
      h(
        View,
        { style: styles.bulletList },
        h(Text, { style: styles.bulletItem }, '1. Suporte N1, N2 prestando suporte a hardware, software e redes;'),
        h(
          Text,
          { style: styles.bulletItem },
          '2. Desenvolvimento da plataforma de chamados utilizada internamente, utilizando React, TailwindCSS e Supabase, com deploy automatizado através de Docker, Nginx e GitHub Actions;'
        ),
        h(
          Text,
          { style: styles.bulletItem },
          '3. Desenvolvimento de uma rede social (bem-estar) para incentivar os funcionários a começarem uma vida saudável (em produção) feito com React, TailwindCSS, Node.js, Express.js, Docker, Nginx, Github Actions;'
        ),
        h(Text, { style: styles.bulletItem }, '4. Documentação de sistemas internos em formato de playbooks;')
      )
    )
  );

const CvDocumentEn = () =>
  h(
    Document,
    { title: 'Murilo Freitas de Souza - Resume', author: 'Murilo Freitas de Souza' },
    h(
      Page,
      { size: 'A4', style: styles.page },
      h(Text, { style: styles.headerName }, 'MURILO FREITAS DE SOUZA'),
      h(Text, { style: styles.headerSub }, '20 Years Old'),
      h(Text, { style: styles.headerSub }, 'Belo Horizonte - Brazil'),
      h(
        View,
        { style: styles.linksRow },
        h(Link, { style: styles.link, src: 'https://mubadev.com.br' }, 'Portfolio'),
        h(Link, { style: styles.link, src: 'https://linkedin.com/in/murilofsouzaa' }, 'Linkedin'),
        h(Link, { style: styles.link, src: 'https://github.com/murilofsouzaa' }, 'Github'),
        h(Link, { style: styles.link, src: 'mailto:onemurilo@gmail.com' }, 'onemurilo@gmail.com')
      ),
      h(Text, { style: styles.sectionTitle }, 'Professional Objective'),
      h(
        Text,
        { style: styles.paragraph },
        'Seeking an opportunity to learn from more experienced professionals, apply the knowledge gained through my studies and projects, and contribute to the team. I aim to work in an environment where I can continuously learn, share ideas, bring new perspectives, and grow alongside the company. Additionally, I have a genuine interest in learning anything'
      ),
      h(Text, { style: styles.sectionTitle }, 'Technologies'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Frontend: '), 'TypeScript, React, TailwindCSS'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Backend: '), 'Java, Spring Boot, Node.js, Express.js'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Databases: '), 'PostgreSQL, MySQL, MongoDB'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'DevOps: '), 'Docker, Nginx, GitHub Actions'),
      h(Text, { style: styles.techRow }, h(Text, { style: styles.techLabel }, 'Testing: '), 'JUnit'),
      h(Text, { style: styles.sectionTitle }, 'Academic Background'),
      h(Text, { style: styles.itemTitle }, 'High School Integrated with Technical Degree in Information Technology (IFNMG - Almenara Campus)'),
      h(Text, { style: styles.itemSub }, '2022 - 2024 (Completed)'),
      h(Text, { style: styles.itemTitle }, 'Software Engineering (PUC Minas - Belo Horizonte)'),
      h(Text, { style: styles.itemSub }, '2025 - Expected graduation: December 2028'),
      h(Text, { style: styles.sectionTitle }, 'Languages'),
      h(Text, { style: styles.paragraph }, 'English: Intermediate/Advanced'),
      h(Text, { style: styles.paragraph }, 'Portuguese: Fluent'),
      h(Text, { style: styles.sectionTitle }, 'Experience'),
      h(Text, { style: styles.itemTitle }, h(Text, { style: styles.techLabel }, 'IT Intern')),
      h(Text, { style: styles.expCompany }, 'ASSOCIAÇÃO DOS FUNCIONÁRIOS FISCAIS DO ESTADO DE MINAS GERAIS'),
      h(Text, { style: styles.expDate }, 'November/2025 – Present'),
      h(
        View,
        { style: styles.bulletList },
        h(Text, { style: styles.bulletItem }, '1. Tier 1 and Tier 2 support, providing hardware, software, and network troubleshooting;'),
        h(
          Text,
          { style: styles.bulletItem },
          '2. Development of the internally used ticketing platform using React, TailwindCSS, and Supabase, featuring automated deployment via Docker, Nginx, and GitHub Actions;'
        ),
        h(
          Text,
          { style: styles.bulletItem },
          '3. Development of a wellness social network to encourage employees to adopt a healthy lifestyle (currently in production), built with React, TailwindCSS, Node.js, Express.js, Docker, Nginx, and GitHub Action;'
        ),
        h(Text, { style: styles.bulletItem }, '4. Documentation of internal systems in a playbook format;')
      )
    )
  );

async function generate() {
  await ReactPDF.renderToFile(CvDocumentPt(), 'public/curriculo_pt.pdf');
  await ReactPDF.renderToFile(CvDocumentEn(), 'public/curriculo_en.pdf');
  console.log('PDFs generated successfully!');
}

generate().catch(console.error);
