import React from 'react';

export interface TechMeta {
  brandColor: string;
  bgGlow: string;
  level: string;
  expPercent: number;
  highlight: string;
}

export const getTechMeta = (name: string): TechMeta => {
  const normalized = name.toLowerCase().replace(/[\s._-]+/g, '');

  switch (normalized) {
    case 'react':
      return {
        brandColor: '#53C1DE',
        bgGlow: 'rgba(83, 193, 222, 0.18)',
        level: 'MASTER / ARCHITECT',
        expPercent: 95,
        highlight: 'SPAs, Hooks, Context, Next.js, Virtual DOM',
      };
    case 'typescript':
      return {
        brandColor: '#3178C6',
        bgGlow: 'rgba(49, 120, 198, 0.18)',
        level: 'STRONG CORE',
        expPercent: 92,
        highlight: 'Strict Typing, Generics, Interfaces, AST',
      };
    case 'tailwindcss':
    case 'tailwind':
      return {
        brandColor: '#06B6D4',
        bgGlow: 'rgba(6, 182, 212, 0.18)',
        level: 'MASTER',
        expPercent: 96,
        highlight: 'Utility-First, Responsive Design, Animations',
      };
    case 'java':
      return {
        brandColor: '#EA2D2E',
        bgGlow: 'rgba(234, 45, 46, 0.18)',
        level: 'CORE DISCIPLINE',
        expPercent: 90,
        highlight: 'OOP, Multithreading, JVM, Enterprise APIs',
      };
    case 'springboot':
    case 'spring':
      return {
        brandColor: '#6DB33F',
        bgGlow: 'rgba(109, 179, 63, 0.18)',
        level: 'ADVANCED',
        expPercent: 88,
        highlight: 'RESTful Microservices, Spring Data, Security',
      };
    case 'nodejs':
    case 'node':
      return {
        brandColor: '#5FA04E',
        bgGlow: 'rgba(95, 160, 78, 0.18)',
        level: 'ADVANCED',
        expPercent: 86,
        highlight: 'Express, Event Loop, REST APIs, NPM',
      };
    case 'c++':
    case 'cpp':
      return {
        brandColor: '#00599C',
        bgGlow: 'rgba(0, 89, 156, 0.18)',
        level: 'ACADEMIC & SYSTEMS',
        expPercent: 82,
        highlight: 'Memory Management, Pointers, Algorithms',
      };
    case 'postgresql':
    case 'postgres':
      return {
        brandColor: '#4169E1',
        bgGlow: 'rgba(65, 105, 225, 0.18)',
        level: 'PRODUCTION PRO',
        expPercent: 90,
        highlight: 'Complex Queries, Indexing, Transactions, ACID',
      };
    case 'mysql':
      return {
        brandColor: '#4479A1',
        bgGlow: 'rgba(68, 121, 161, 0.18)',
        level: 'ADVANCED',
        expPercent: 88,
        highlight: 'Relational Schema, Foreign Keys, SQL Tuning',
      };
    case 'mongodb':
    case 'mongo':
      return {
        brandColor: '#47A248',
        bgGlow: 'rgba(71, 162, 72, 0.18)',
        level: 'ADVANCED',
        expPercent: 85,
        highlight: 'NoSQL, Aggregations, Document Stores',
      };
    case 'docker':
      return {
        brandColor: '#2496ED',
        bgGlow: 'rgba(36, 150, 237, 0.18)',
        level: 'INFRA & CLOUD',
        expPercent: 88,
        highlight: 'Containers, Compose, Multi-Stage Builds',
      };
    case 'githubactions':
    case 'actions':
      return {
        brandColor: '#2088FF',
        bgGlow: 'rgba(32, 136, 255, 0.18)',
        level: 'CI / CD',
        expPercent: 86,
        highlight: 'Automated Testing, Build Workflows, Deploy Pipelines',
      };
    case 'nginx':
      return {
        brandColor: '#009639',
        bgGlow: 'rgba(0, 150, 57, 0.18)',
        level: 'REVERSE PROXY',
        expPercent: 84,
        highlight: 'Load Balancing, SSL Termination, Caching',
      };
    case 'linux':
      return {
        brandColor: '#FCC624',
        bgGlow: 'rgba(252, 198, 36, 0.18)',
        level: 'DAILY DRIVER',
        expPercent: 94,
        highlight: 'Fedora, Bash Scripting, CLI, Kernel Tools',
      };
    case 'git':
      return {
        brandColor: '#F05032',
        bgGlow: 'rgba(240, 80, 50, 0.18)',
        level: 'VERSION CONTROL',
        expPercent: 96,
        highlight: 'Branching, Rebase, Merging, GitHub Teams',
      };
    default:
      return {
        brandColor: '#ff6b00',
        bgGlow: 'rgba(255, 107, 0, 0.18)',
        level: 'CORE',
        expPercent: 85,
        highlight: 'Software Engineering Discipline',
      };
  }
};

const getSvgPath = (name: string): string | null => {
  const normalized = name.toLowerCase().replace(/[\s._-]+/g, '');

  switch (normalized) {
    case 'react':
      return '/icons/react-svgrepo-com.svg';
    case 'typescript':
      return '/icons/typescript-logo-svgrepo-com.svg';
    case 'tailwindcss':
    case 'tailwind':
      return '/icons/tailwindcss-icon-svgrepo-com.svg';
    case 'java':
      return '/icons/java-svgrepo-com.svg';
    case 'springboot':
    case 'spring':
      return '/icons/spring-boot-svgrepo-com.svg';
    case 'cpp':
    case 'c++':
      return '/icons/cpp-svgrepo-com.svg';
    case 'postgresql':
    case 'postgres':
      return '/icons/postgresql-svgrepo-com.svg';
    case 'mysql':
      return '/icons/mysql-svgrepo-com.svg';
    case 'mongodb':
    case 'mongo':
      return '/icons/mongodb-svgrepo-com.svg';
    case 'docker':
      return '/icons/docker-svgrepo-com.svg';
    case 'nginx':
      return '/icons/nginx-logo-svgrepo-com.svg';
    case 'linux':
      return '/icons/linux-svgrepo-com.svg';
    case 'git':
      return '/icons/git-svgrepo-com.svg';
    case 'githubactions':
    case 'actions':
      return '/icons/git-svgrepo-com.svg';
    default:
      return null;
  }
};

interface TechIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5', style }) => {
  const svgPath = getSvgPath(name);

  if (svgPath) {
    return (
      <img
        src={svgPath}
        alt={name}
        className={`${className} object-contain`}
        style={style}
        loading="lazy"
      />
    );
  }

  // Fallback for Node.js or other custom tech
  const normalized = name.toLowerCase().replace(/[\s._-]+/g, '');
  if (normalized === 'nodejs' || normalized === 'node') {
    return (
      <svg viewBox="0 0 24 24" fill="#5FA04E" className={className} style={style}>
        <path d="M12 10.74c-.07 0-1.22.68-1.84 1.04-.12.07-.15.22-.08.34l.43.74c.07.12.22.15.34.08.43-.25 1.06-.61 1.15-.61.35 0 .52.14.52.44 0 .84-2.18.59-2.18 2.27 0 .93.68 1.55 1.67 1.55 1.04 0 1.79-.64 1.84-.68.1-.09.12-.24.03-.34l-.45-.52c-.09-.1-.23-.12-.34-.04-.3.23-.77.49-1.08.49-.44 0-.61-.23-.61-.48 0-.88 2.18-.62 2.18-2.28 0-1.07-.79-1.49-1.62-1.49zm6.91-5.74L12.56.78a1.18 1.18 0 0 0-1.12 0L5.09 5c-.35.2-.56.57-.56.97v8.44c0 .4.21.77.56.97l6.35 4.22c.35.2.78.2 1.12 0l6.35-4.22c.35-.2.56-.57.56-.97V5.97c0-.4-.21-.77-.56-.97zm-6.91 16.32l-6.35-4.22V8.66l6.35 4.22v8.44zm1.05-9.61L6.7 7.49l5.3-3.53 5.3 3.53-4.25 2.83zm5.3 4.22l-5.3 3.53v-8.44l5.3-3.53v8.44z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
