'use client';

import { useLanguage } from '@/hooks/useLanguage';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.option} ${locale === 'da' ? styles.active : ''}`}
        onClick={() => setLocale('da')}
        aria-label="Skift til dansk"
      >
        DA
      </button>
      <span className={styles.separator}>/</span>
      <button
        className={`${styles.option} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
