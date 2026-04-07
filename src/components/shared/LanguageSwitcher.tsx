'use client';

import { useLanguage } from '@/hooks/useLanguage';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${locale === 'da' ? styles.btnActive : styles.btnInactive}`}
        onClick={() => setLocale('da')}
        aria-label="Skift til dansk"
      >
        DA
      </button>
      <span className={styles.divider}>/</span>
      <button
        className={`${styles.btn} ${locale === 'en' ? styles.btnActive : styles.btnInactive}`}
        onClick={() => setLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
