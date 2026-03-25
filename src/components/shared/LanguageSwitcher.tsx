'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs tracking-wide">
      <button
        className={`px-1.5 py-0.5 rounded transition-colors duration-150 ${
          locale === 'da' ? 'text-text font-medium' : 'text-text-muted hover:text-text-secondary'
        }`}
        onClick={() => setLocale('da')}
        aria-label="Skift til dansk"
      >
        DA
      </button>
      <span className="text-text-muted/40 select-none">/</span>
      <button
        className={`px-1.5 py-0.5 rounded transition-colors duration-150 ${
          locale === 'en' ? 'text-text font-medium' : 'text-text-muted hover:text-text-secondary'
        }`}
        onClick={() => setLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
