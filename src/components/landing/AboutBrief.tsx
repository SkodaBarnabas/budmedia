'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function AboutBrief() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.aboutBrief}>
      <div className="container">
        <div className={styles.aboutBriefInner}>
          <h2>{content.aboutBrief.title}</h2>
          <p className={styles.aboutBriefText}>{content.aboutBrief.text}</p>
          <Link href="/om-os" className={styles.aboutBriefCta}>
            {content.aboutBrief.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
