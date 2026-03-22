'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './howItWorks.module.css';

function BoxDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pizza box — flat top-down wireframe */}
      {/* Outer box */}
      <rect x="40" y="20" width="240" height="200" rx="4" stroke="#A8A29E" strokeWidth="1" fill="none" />
      {/* Inner lid fold line */}
      <rect x="60" y="40" width="200" height="160" rx="2" stroke="#A8A29E" strokeWidth="0.5" strokeDasharray="4 3" fill="none" />
      {/* Restaurant logo area (center of lid) */}
      <rect x="100" y="70" width="120" height="50" rx="2" stroke="#D4A76A" strokeWidth="1" fill="rgba(212,167,106,0.08)" />
      <text x="160" y="100" textAnchor="middle" fill="#D4A76A" fontSize="10" fontFamily="sans-serif">RESTAURANT</text>
      {/* Ad panel — left */}
      <rect x="44" y="140" width="70" height="36" rx="2" stroke="#D4A76A" strokeWidth="0.75" fill="rgba(212,167,106,0.05)" />
      <text x="79" y="162" textAnchor="middle" fill="#78716C" fontSize="7" fontFamily="sans-serif">ANNONCE</text>
      {/* Ad panel — right */}
      <rect x="206" y="140" width="70" height="36" rx="2" stroke="#D4A76A" strokeWidth="0.75" fill="rgba(212,167,106,0.05)" />
      <text x="241" y="162" textAnchor="middle" fill="#78716C" fontSize="7" fontFamily="sans-serif">ANNONCE</text>
      {/* Ad panel — bottom */}
      <rect x="125" y="185" width="70" height="28" rx="2" stroke="#D4A76A" strokeWidth="0.75" fill="rgba(212,167,106,0.05)" />
      <text x="160" y="203" textAnchor="middle" fill="#78716C" fontSize="7" fontFamily="sans-serif">ANNONCE</text>
    </svg>
  );
}

export function HowItWorks() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="hvordan" className={styles.howItWorks}>
      <div className="container">
        <h2 className={styles.title}>{content.howItWorks.title}</h2>
        <div className={styles.stepsGrid}>
          {content.howItWorks.steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.contextPhoto}>
          <div className="imagePlaceholder">
            <span>📷</span>
            <p>Foto: Familie ved køkkenbord med åben pizzabakke — annonce synlig på indersiden af låget</p>
          </div>
        </div>
        <div className={styles.boxDiagram}>
          <BoxDiagram />
        </div>
      </div>
    </section>
  );
}
