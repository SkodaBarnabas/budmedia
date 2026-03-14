'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

function BoxDiagram() {
  return (
    <svg
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer box outline */}
      <rect
        x="20"
        y="20"
        width="240"
        height="240"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {/* Center zone — restaurant branding area */}
      <rect
        x="80"
        y="80"
        width="120"
        height="120"
        stroke="var(--color-border)"
        strokeWidth="1"
        fill="none"
      />
      <text
        x="140"
        y="146"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="13"
        fill="var(--color-text-muted)"
      >
        Restaurant
      </text>

      {/* Top ad zone */}
      <rect
        x="80"
        y="20"
        width="120"
        height="60"
        fill="var(--color-accent)"
        fillOpacity="0.08"
      />
      <text
        x="140"
        y="55"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="10"
        fill="var(--color-accent)"
        opacity="0.7"
      >
        Annonce
      </text>

      {/* Bottom ad zone */}
      <rect
        x="80"
        y="200"
        width="120"
        height="60"
        fill="var(--color-accent)"
        fillOpacity="0.08"
      />
      <text
        x="140"
        y="235"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="10"
        fill="var(--color-accent)"
        opacity="0.7"
      >
        Annonce
      </text>

      {/* Left ad zone */}
      <rect
        x="20"
        y="80"
        width="60"
        height="120"
        fill="var(--color-accent)"
        fillOpacity="0.08"
      />
      <text
        x="50"
        y="145"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="10"
        fill="var(--color-accent)"
        opacity="0.7"
      >
        Annonce
      </text>

      {/* Right ad zone */}
      <rect
        x="200"
        y="80"
        width="60"
        height="120"
        fill="var(--color-accent)"
        fillOpacity="0.08"
      />
      <text
        x="230"
        y="145"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="10"
        fill="var(--color-accent)"
        opacity="0.7"
      >
        Annonce
      </text>

      {/* Corner fold lines — top-left */}
      <line x1="20" y1="20" x2="80" y2="80" stroke="var(--color-border)" strokeWidth="0.5" />
      {/* Corner fold lines — top-right */}
      <line x1="260" y1="20" x2="200" y2="80" stroke="var(--color-border)" strokeWidth="0.5" />
      {/* Corner fold lines — bottom-left */}
      <line x1="20" y1="260" x2="80" y2="200" stroke="var(--color-border)" strokeWidth="0.5" />
      {/* Corner fold lines — bottom-right */}
      <line x1="260" y1="260" x2="200" y2="200" stroke="var(--color-border)" strokeWidth="0.5" />
    </svg>
  );
}

export function Hero() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.headline}</h1>
            <p className={styles.heroSubheadline}>{content.hero.subheadline}</p>
            <div className={styles.heroCtas}>
              <Link href="/kontakt" className="btn-primary">
                {content.hero.ctaPrimary}
              </Link>
              <a href="#hvordan" className="btn-secondary">
                {content.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <BoxDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
