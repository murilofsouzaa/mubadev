import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import type { Language, LocalizedString } from '../types/portfolio';
import { translations } from '../locales/translations';
import type { TranslationType } from '../locales/translations';


interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  resolveText: (value?: LocalizedString | string) => string;
}

const STORAGE_KEY = 'mubadev_lang';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'pt';
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'pt' || saved === 'en') {
    return saved;
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('pt')) {
    return 'pt';
  }
  if (browserLang.startsWith('en')) {
    return 'en';
  }

  return 'pt';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'pt' ? 'en' : 'pt'));
  }, []);

  const t = useMemo(() => translations[language], [language]);

  const resolveText = useCallback(
    (value?: LocalizedString | string): string => {
      if (!value) return '';
      if (typeof value === 'string') return value;
      return value[language] || value.pt || value.en || '';
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t, resolveText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
