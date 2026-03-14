'use client';

import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import styles from './privatlivspolitik.module.css';

export function PrivatlivspolitikContent() {
  const content = useContent(daPages, enPages);
  const privacy = content.privacy;

  return (
    <section className={styles.page}>
      <div className="container container--narrow">
        <h1>{privacy.title}</h1>
        <p className={styles.lastUpdated}>{privacy.lastUpdated}</p>

        {privacy.sections.map((section, i) => (
          <div key={i} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionText}>{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
