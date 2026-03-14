'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function HowItWorks() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="hvordan" className={styles.howItWorks}>
      <div className="container">
        <h2 className={styles.howItWorksTitle}>{content.howItWorks.title}</h2>
        <div className={styles.stepsGrid}>
          {content.howItWorks.steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
