'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './about.module.css';

export function AboutBrief() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2>{content.aboutBrief.title}</h2>
          <p className={styles.text}>{content.aboutBrief.text}</p>
          <Link href="/om-os" className={`btn-secondary ${styles.cta}`}>
            {content.aboutBrief.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
