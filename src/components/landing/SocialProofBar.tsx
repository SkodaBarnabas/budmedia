'use client';

import { useContent } from '@/hooks/useLanguage';
import { Reveal } from '@/components/shared/Reveal';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './SocialProofBar.module.css';

export function SocialProofBar() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {content.socialProof.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 150} className={styles.metric}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.label}>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
