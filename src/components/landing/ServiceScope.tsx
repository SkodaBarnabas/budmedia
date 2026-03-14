'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function ServiceScope() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.serviceScope}>
      <div className="container">
        <h2 className={styles.serviceScopeTitle}>{content.serviceScope.title}</h2>
        <ul className={styles.serviceScopeList}>
          {content.serviceScope.items.map((item) => (
            <li key={item.title} className={styles.serviceScopeItem}>
              <h3 className={styles.serviceScopeItemTitle}>{item.title}</h3>
              <p className={styles.serviceScopeItemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
