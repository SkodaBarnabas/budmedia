'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type Locale = 'da' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'da',
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('da');

  useEffect(() => {
    const stored = localStorage.getItem('boxspot-lang');
    if (stored === 'da' || stored === 'en') {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('boxspot-lang', newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useContent<T>(da: T, en: T): T {
  const { locale } = useLanguage();
  return locale === 'da' ? da : en;
}
