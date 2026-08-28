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
    talkBtn: string;
    role: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    role: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
    downloadAria: string;
    cvFileName: string;
    cvFilePath: string;
    contactMe: string;
    location: string;
    status: string;
  };
  tech: {
    title: string;
    subtitle: string;
    countLabel: string;
    allTab: string;
    categories: Record<string, string>;
  };
  homeCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    onlineBadge: string;
    viewDemoBtn: string;
    visitSiteBtn: string;
    gitRepoBtn: string;
    figmaBtn: string;
    modalClose: string;
    noVideo: string;
    techStack: string;
    videoLabel: string;
    aboutTitle: string;
    aboutText: string;
    aboutMotto: string;
    conceptsLabel: string;
    conceptsList: string;
    architectureDetails: string;
    prototypeLabel: string;
    productionFlowTitle: string;
    productionFlowSubtitle: string;
    productionFlowItems: string[];
  };
  about: {
    badge: string;
    title: string;
    name: string;
    age: string;
    location: string;
    objectiveTitle: string;
    objectiveText1: string;
    objectiveText2: string;
    educationTitle: string;
    languagesTitle: string;
    englishLabel: string;
    englishLevel: string;
    portugueseLabel: string;
    portugueseLevel: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendButton: string;
      sendingButton: string;
      successMessage: string;
      successSubtitle: string;
      sendAnother: string;
      errorMessage: string;
      fillRequired: string;
      invalidEmail: string;
    };
    info: {
      directTitle: string;
      emailLabel: string;
      phoneLabel: string;
      locationLabel: string;
      locationValue: string;
      socialTitle: string;
      copyEmail: string;
      copiedEmail: string;
    };
  };
  footer: {
    name: string;
    tagline: string;
    downloadCv: string;
    navTitle: string;
    contactTitle: string;
    email: string;
    phone: string;
    location: string;
    rights: string;
  };
  scrollToTop: {
    ariaLabel: string;
  };
}

export type TranslationType = TranslationSchema;

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre Mim',
      projects: 'Projetos',
      contact: 'Contato',
    },
    header: {
      themeAria: 'Alternar tema claro/escuro',
      langAria: 'Alternar idioma',
      langCode: 'PT',
      talkBtn: 'Iniciar Projeto',
      role: 'Engenheiro de Software',
    },
    hero: {
      badge: 'Disponível para novos projetos e oportunidades',
      greeting: 'Olá, eu sou',
      name: 'Murilo Freitas',
      role: 'Engenheiro de Software & Desenvolvedor Full-Stack',
      description: 'Desenvolvimento de sistemas web completos, plataformas escaláveis e produtos digitais sob medida. Do design de interfaces reativas e intuitivas até arquiteturas de backend robustas em produção.',
      viewProjects: 'Ver Projetos',
      downloadCv: 'Baixar Currículo',
      downloadAria: 'Baixar currículo em PDF',
      cvFileName: 'Murilo_Freitas_CV_PT.pdf',
      cvFilePath: '/agosto2026.pdf',
      contactMe: 'Entrar em Contato',
      location: 'Belo Horizonte — MG, Brasil',
      status: 'Aberto a Projetos & Oportunidades',
    },
    tech: {
      title: 'Tecnologias & Ferramentas',
      subtitle: 'Tecnologias e ferramentas que utilizo no dia a dia para construir produtos modernos, rápidos e escaláveis.',
      countLabel: 'tecnologias',
      allTab: 'Todas',
      categories: {
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Banco de Dados': 'Bancos de Dados',
        'DevOps & Testes': 'DevOps & Testes',
      },
    },
    homeCta: {
      title: 'Precisa de um sistema web sob medida ou quer tirar seu produto do papel?',
      subtitle: 'Desenvolvo plataformas completas, do frontend de alta performance ao backend escalável, entregando soluções digitais prontas para produção e focadas em resultados reais.',
      button: 'Solicitar Orçamento / Iniciar Projeto',
    },
    projects: {
      badge: 'Projetos em Produção',
      title: 'Meus projetos',
      subtitle: 'Sistemas web e aplicações em produção com código limpo, arquitetura em camadas e deploy automatizado.',
      featuredBadge: 'Aplicação em Produção',
      onlineBadge: 'ONLINE & ATIVO',
      viewDemoBtn: 'ASSISTIR DEMONSTRAÇÃO COMPLETA',
      visitSiteBtn: 'Ver Site',
      gitRepoBtn: 'GitHub',
      figmaBtn: 'Protótipo Figma',
      modalClose: 'Fechar',
      noVideo: 'Demonstração em vídeo disponível em breve.',
      techStack: 'Stack Tecnológica',
      videoLabel: 'Demonstração em Vídeo',
      aboutTitle: 'Sobre o Projeto',
      aboutText: 'O projeto Eden é uma loja online completa focada em vestuário esportivo e fitness. O objetivo é proporcionar uma experiência de compra ágil, segura e intuitiva. A interface é 100% responsiva (Mobile First), com catálogo dinâmico de produtos com filtros, carrinho reativo e integração segura entre frontend e backend.',
      aboutMotto: 'Funciona como um bom plano de treino: constante, claro e construído para impulsionar resultados.',
      conceptsLabel: 'Conceitos aplicados:',
      conceptsList: 'Domain-Driven Design (DDD), Design Patterns, SOLID, Mobile First e UI/UX.',
      architectureDetails: 'Arquitetura e Detalhes de Engenharia',
      prototypeLabel: 'Design & Prototipagem',
      productionFlowTitle: 'Fluxo de Execução em Produção (Docker + NGINX)',
      productionFlowSubtitle: 'Arquitetura robusta para ambientes reais com separação de serviços e Reverse Proxy NGINX:',
      productionFlowItems: [
        'Backend acessível internamente na porta 8080.',
        'Frontend compilado em build estático e servido via NGINX em container na porta 8080.',
        'O NGINX do host (VPS) recebe tráfego seguro nas portas 80 e 443 (HTTPS) e encaminha para 127.0.0.1:3000.',
        'O frontend consome a API backend através das rotas /api com roteamento centralizado.',
      ],
    },
    about: {
      badge: 'Perfil Profissional',
      title: 'Sobre Mim',
      name: 'Murilo Freitas de Souza',
      age: '20 Anos',
      location: 'Belo Horizonte — MG, Brasil',
      objectiveTitle: 'Trajetória & Atuação',
      objectiveText1: 'Desenvolvedor de Software e estudante de Engenharia de Software na PUC Minas, com sólida formação técnica pelo IFNMG e experiência prática no desenvolvimento e deploy de aplicações web em produção.',
      objectiveText2: 'Atualmente atuo no desenvolvimento de sistemas na AFFEMG — incluindo plataforma interna de chamados e aplicação web de bem-estar com React, Tailwind CSS, Node.js e Supabase —, além de projetar arquiteturas escaláveis com Java/Spring Boot, PostgreSQL, Docker e NGINX.',
      educationTitle: 'Formação Acadêmica',
      languagesTitle: 'Idiomas',
      englishLabel: 'Inglês',
      englishLevel: 'Intermediário / Avançado',
      portugueseLabel: 'Português',
      portugueseLevel: 'Nativo / Fluente',
    },
    contact: {
      badge: 'Entre em Contato',
      title: 'Vamos Conversar?',
      subtitle: 'Envie uma mensagem para falar sobre novos projetos, desenvolvimento de sistemas ou oportunidades profissionais.',
      form: {
        nameLabel: 'Seu Nome',
        namePlaceholder: 'Como posso te chamar?',
        emailLabel: 'Seu E-mail',
        emailPlaceholder: 'seu.email@exemplo.com',
        subjectLabel: 'Assunto',
        subjectPlaceholder: 'Ex: Desenvolvimento de sistema / Proposta de projeto',
        messageLabel: 'Mensagem',
        messagePlaceholder: 'Conte mais sobre o projeto, ideia ou sistema que você precisa...',
        sendButton: 'Enviar Mensagem',
        sendingButton: 'Enviando mensagem...',
        successMessage: 'Mensagem enviada com sucesso!',
        successSubtitle: 'Obrigado pelo contato! Responderei através do seu e-mail o mais breve possível.',
        sendAnother: 'Enviar outra mensagem',
        errorMessage: 'Ocorreu um erro ao enviar. Por favor, tente novamente ou envie um email direto.',
        fillRequired: 'Por favor, preencha todos os campos obrigatórios.',
        invalidEmail: 'Por favor, insira um endereço de e-mail válido.',
      },
      info: {
        directTitle: 'Informações de Contato',
        emailLabel: 'E-mail Direto',
        phoneLabel: 'WhatsApp / Telefone',
        locationLabel: 'Localização',
        locationValue: 'Belo Horizonte, Minas Gerais — Brasil',
        socialTitle: 'Redes Profissionais',
        copyEmail: 'Copiar e-mail',
        copiedEmail: 'E-mail copiado!',
      },
    },
    footer: {
      name: 'Murilo Freitas',
      tagline: 'Engenheiro de Software especializado em criar soluções digitais performáticas, escaláveis e acessíveis.',
      downloadCv: 'Baixar Curriculo',
      navTitle: 'Navegação',
      contactTitle: 'Contato',
      email: 'onemurilo@gmail.com',
      phone: '(33) 99902-6628',
      location: 'Minas Gerais, Brasil',
      rights: '© 2026 Murilo Freitas de Souza. Todos os direitos reservados.',
    },
    scrollToTop: {
      ariaLabel: 'Voltar ao topo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      themeAria: 'Toggle light/dark theme',
      langAria: 'Switch language',
      langCode: 'EN',
      talkBtn: 'Start a Project',
      role: 'Software Engineer',
    },
    hero: {
      badge: 'Available for new projects & opportunities',
      greeting: "Hello, I'm",
      name: 'Murilo Freitas',
      role: 'Software Engineer & Full-Stack Developer',
      description: 'End-to-end web system development, scalable platforms, and custom digital products. From reactive, accessible UI design to resilient backend architectures in production.',
      viewProjects: 'View Projects',
      downloadCv: 'Download Resume',
      downloadAria: 'Download resume in PDF',
      cvFileName: 'Murilo_Freitas_Resume_EN.pdf',
      cvFilePath: '/agosto2026.pdf',
      contactMe: 'Get in Touch',
      location: 'Belo Horizonte — MG, Brazil',
      status: 'Open to Projects & Work',
    },
    tech: {
      title: 'Technologies & Tools',
      subtitle: 'Core technologies and tools I leverage daily to engineer fast, modern, and scalable software products.',
      countLabel: 'technologies',
      allTab: 'All',
      categories: {
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Banco de Dados': 'Databases',
        'DevOps & Testes': 'DevOps & Testing',
      },
    },
    homeCta: {
      title: 'Looking to build a custom web system or launch your digital product?',
      subtitle: 'I engineer end-to-end platforms from high-performance frontends to scalable backends, delivering production-ready software focused on real business impact.',
      button: 'Request a Quote / Start Project',
    },
    projects: {
      badge: 'Production Projects',
      title: 'My Projects',
      subtitle: 'Production web systems and applications built with clean code, layered architecture, and automated deployment.',
      featuredBadge: 'Production Application',
      onlineBadge: 'ONLINE & ACTIVE',
      viewDemoBtn: 'WATCH FULL DEMONSTRATION',
      visitSiteBtn: 'Visit Website',
      gitRepoBtn: 'GitHub',
      figmaBtn: 'Figma Prototype',
      modalClose: 'Close',
      noVideo: 'Video demonstration coming soon.',
      techStack: 'Technology Stack',
      videoLabel: 'Video Demonstration',
      aboutTitle: 'About the Project',
      aboutText: 'The Eden project is an online shop focused on gym clothing. The goal is to give users a fast and simple way to browse items and check details. The interface stays clear, the product list stays organized, and the system connects the frontend and backend to keep everything stable and safe.',
      aboutMotto: 'It works like a good workout plan: steady, clear, and built to help you move forward.',
      conceptsLabel: 'Applied concepts:',
      conceptsList: 'Domain-Driven Design (DDD), Design Patterns, SOLID, Mobile First, and UI/UX.',
      architectureDetails: 'Engineering & Architecture Details',
      prototypeLabel: 'Design & Prototyping',
      productionFlowTitle: 'Production Execution Flow (Docker + NGINX)',
      productionFlowSubtitle: 'Robust real-world architecture with service isolation and NGINX Reverse Proxy:',
      productionFlowItems: [
        'Backend accessible internally on port 8080.',
        'Frontend compiled into static build and served by NGINX in container on port 8080.',
        'Host NGINX (VPS) receives secure traffic on ports 80 and 443 (HTTPS) and forwards to 127.0.0.1:3000.',
        'Frontend consumes backend API through /api routes with centralized reverse proxy routing.',
      ],
    },
    about: {
      badge: 'Professional Profile',
      title: 'About Me',
      name: 'Murilo Freitas de Souza',
      age: '20 Years Old',
      location: 'Belo Horizonte — MG, Brazil',
      objectiveTitle: 'Background & Experience',
      objectiveText1: 'Software Engineer and Software Engineering student at PUC Minas, with a solid technical background from IFNMG and practical experience developing and deploying production web applications.',
      objectiveText2: 'Currently developing internal systems at AFFEMG — including an internal ticketing platform and a wellness web application with React, Tailwind CSS, Node.js, and Supabase —, alongside designing scalable architectures with Java/Spring Boot, PostgreSQL, Docker, and NGINX.',
      educationTitle: 'Academic Background',
      languagesTitle: 'Languages',
      englishLabel: 'English',
      englishLevel: 'Intermediate / Advanced',
      portugueseLabel: 'Portuguese',
      portugueseLevel: 'Native / Fluent',
    },
    contact: {
      badge: 'Get in Touch',
      title: "Let's Connect",
      subtitle: 'Reach out to discuss new projects, custom web systems, or professional collaborations.',
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'What is your name?',
        emailLabel: 'Your Email',
        emailPlaceholder: 'your.email@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'E.g., Custom System / Project Proposal',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me more about your project, idea, or system requirements...',
        sendButton: 'Send Message',
        sendingButton: 'Sending message...',
        successMessage: 'Message sent successfully!',
        successSubtitle: 'Thank you for reaching out! I will reply to your email as soon as possible.',
        sendAnother: 'Send another message',
        errorMessage: 'An error occurred while sending. Please try again or reach out directly via email.',
        fillRequired: 'Please fill in all required fields.',
        invalidEmail: 'Please enter a valid email address.',
      },
      info: {
        directTitle: 'Direct Contact Info',
        emailLabel: 'Direct Email',
        phoneLabel: 'WhatsApp / Phone',
        locationLabel: 'Location',
        locationValue: 'Belo Horizonte, Minas Gerais — Brazil',
        socialTitle: 'Professional Networks',
        copyEmail: 'Copy email address',
        copiedEmail: 'Email copied to clipboard!',
      },
    },
    footer: {
      name: 'Murilo Freitas',
      tagline: 'Software Engineer specialized in building performant, scalable, and accessible digital solutions.',
      downloadCv: 'Download Resume',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      email: 'onemurilo@gmail.com',
      phone: '+55 (33) 99902-6628',
      location: 'Minas Gerais, Brazil',
      rights: '© 2026 Murilo Freitas de Souza. All rights reserved.',
    },
    scrollToTop: {
      ariaLabel: 'Scroll to top',
    },
  },
};
