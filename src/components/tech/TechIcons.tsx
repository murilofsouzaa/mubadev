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
    case 'nodejs':
    case 'node':
      return '/icons/node-svgrepo-com.svg';
    case 'express':
    case 'expressjs':
      return '/icons/express-svgrepo-com.svg';
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
    case 'github':
      return '/icons/github.svg';
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
  const normalized = name.toLowerCase().replace(/[\s._-]+/g, '');

  // GitHub / GitHub Actions: White in Dark Mode, Dark in Light Mode
  if (normalized === 'githubactions' || normalized === 'actions' || normalized === 'github') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-stone-900 dark:text-white transition-colors`}
        style={style}
        aria-label={name}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    );
  }

  // Express.js with invert in dark mode
  if (normalized === 'express' || normalized === 'expressjs') {
    return (
      <img
        src="/icons/express-svgrepo-com.svg"
        alt={name}
        className={`${className} object-contain dark:invert transition-all`}
        style={style}
        loading="lazy"
      />
    );
  }

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

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
