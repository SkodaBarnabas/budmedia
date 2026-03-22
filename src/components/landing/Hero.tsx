'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './hero.module.css';

export function Hero() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="hero" className={styles.hero}>
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
            <div className={styles.heroPlaceholder}>
              <span>📦</span>
              <p>Billede: Trykt pizzabakke med rigtige annoncer — 3D-render eller fotografi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
