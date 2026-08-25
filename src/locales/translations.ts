import type { Language } from '../types/portfolio';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  header: {
    themeAria: string;
    langAria: string;
    langCode: string;
  };
  hero: {
    words: readonly string[];
    downloadCv: string;
    downloadAria: string;
    cvFileName: string;
    status: string;
  };
  terminalCard: {
    title: string;
    file: string;
    studyingLabel: string;
    studyingValue: string;
    locationLabel: string;
    locationValue: string;
    constantlyLabel: string;
    constantlyValue: string;
  };
  tech: {
    title: string;
    countLabel: string;
    categories: Record<string, string>;
  };
  projects: {
    title: string;
    appsLoaded: string;
    subtitle: string;
    detailsBtn: string;
    visitSiteBtn: string;
    offlineBtn: string;
    modalClose: string;
    noVideo: string;
    techStack: string;
    gitRepo: string;
    videoLabel: string;
  };
  footer: {
    madeBy: string;
    rights: string;
    location: string;
  };
  scrollToTop: {
    ariaLabel: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      home: '~/inicio',
      about: '~/sobre',
      projects: '~/projetos',
      contact: '~/contato',
    },
    header: {
      themeAria: 'Alternar tema',
      langAria: 'Alternar idioma',
      langCode: 'PT',
    },
    hero: {
      words: ['MURILO FREITAS', 'ENGENHEIRO DE SOFTWARE', 'DESENVOLVEDOR FULL STACK'],
      downloadCv: './baixar_curriculo.sh',
      downloadAria: 'Baixar currículo em PDF',
      cvFileName: 'Murilo_Freitas_CV.pdf',
      status: '[TTY1] - DEV_SESSION_ACTIVE',
    },
    terminalCard: {
      title: 'whoami.sh',
      file: 'murilo_f_de_souza.md',
      studyingLabel: 'cursando',
      studyingValue: 'engenharia_de_software',
      locationLabel: 'local',
      locationValue: 'belo_horizonte',
      constantlyLabel: 'constantemente',
      constantlyValue: 'estudando',
    },
    tech: {
      title: 'Tecnologias',
      countLabel: 'tecnologias',
      categories: {
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Banco de Dados': 'Banco de Dados',
        'DevOps & Ferramentas': 'DevOps & Ferramentas',
      },
    },
    projects: {
      title: 'Meus projetos',
      appsLoaded: 'APPS_CARREGADOS',
      subtitle: 'Coleção de aplicações full-stack, sistemas web em produção. Clique em qualquer card para ver a demonstração em vídeo e detalhes de arquitetura.',
      detailsBtn: '$ detalhes',
      visitSiteBtn: './ver_site',
      offlineBtn: '[OFFLINE]',
      modalClose: '[ESC / X]',
      noVideo: '[ NENHUM VÍDEO CADASTRADO ]',
      techStack: '// STACK_TECNOLÓGICA:',
      gitRepo: 'git show /repo',
      videoLabel: 'PREVIEW_DEMO.mp4',
    },
    footer: {
      madeBy: 'feito por',
      rights: '© 2026 Murilo. Todos os direitos reservados.',
      location: 'Belo Horizonte, BR',
    },
    scrollToTop: {
      ariaLabel: 'Voltar ao topo',
    },
  },
  en: {
    nav: {
      home: '~/home',
      about: '~/about',
      projects: '~/projects',
      contact: '~/contact',
    },
    header: {
      themeAria: 'Toggle theme',
      langAria: 'Switch language',
      langCode: 'EN',
    },
    hero: {
      words: ['MURILO FREITAS', 'SOFTWARE ENGINEER', 'FULL STACK DEVELOPER'],
      downloadCv: './download_resume.sh',
      downloadAria: 'Download resume in PDF',
      cvFileName: 'Murilo_Freitas_Resume.pdf',
      status: '[TTY1] - DEV_SESSION_ACTIVE',
    },
    terminalCard: {
      title: 'whoami.sh',
      file: 'murilo_f_de_souza.md',
      studyingLabel: 'studying',
      studyingValue: 'software_engineering',
      locationLabel: 'location',
      locationValue: 'belo_horizonte_brazil',
      constantlyLabel: 'constantly',
      constantlyValue: 'learning',
    },
    tech: {
      title: 'Technologies',
      countLabel: 'technologies',
      categories: {
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Banco de Dados': 'Databases',
        'DevOps & Ferramentas': 'DevOps & Tools',
      },
    },
    projects: {
      title: 'My projects',
      appsLoaded: 'APPS_LOADED',
      subtitle: 'Collection of full-stack applications and production web systems. Click on any card to see video demos and architecture details.',
      detailsBtn: '$ details',
      visitSiteBtn: './visit_site',
      offlineBtn: '[OFFLINE]',
      modalClose: '[ESC / X]',
      noVideo: '[ NO VIDEO AVAILABLE ]',
      techStack: '// TECH_STACK:',
      gitRepo: 'git show /repo',
      videoLabel: 'PREVIEW_DEMO.mp4',
    },
    footer: {
      madeBy: 'made by',
      rights: '© 2026 Murilo. All rights reserved.',
      location: 'Belo Horizonte, BR',
    },
    scrollToTop: {
      ariaLabel: 'Scroll to top',
    },
  },
};

export type TranslationType = TranslationSchema;

export function getTranslation(lang: Language): TranslationType {
  return translations[lang] || translations.pt;
}

