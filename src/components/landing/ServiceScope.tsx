'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './serviceCards.module.css';

const ICONS = ['📐', '🎨', '📍', '📊', '🔄'];

export function ServiceScope() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="inkluderet" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{content.serviceScope.title}</h2>
        <div className={styles.grid}>
          {content.serviceScope.items.map((item, i) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.icon}>{ICONS[i]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
