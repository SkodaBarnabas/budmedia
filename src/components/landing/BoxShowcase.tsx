'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function BoxShowcase() {
  const content = useContent(daLanding, enLanding);
  const showcase = content.boxShowcase;

  return (
    <section className={styles.boxShowcase}>
      <div className="container">
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseVisual}>
            <img
              src="/images/products/multipleadds.png"
              alt="Pizzabakker med annoncepladser på sidepaneler"
              className={styles.showcaseImg}
            />
          </div>
          <div className={styles.showcaseContent}>
            <p className="eyebrow">{showcase.eyebrow}</p>
            <h2>{showcase.headline}</h2>
            <p className={styles.showcaseDescription}>{showcase.description}</p>
            <ul className={styles.showcaseSpecs}>
              {showcase.specs.map((spec: string) => (
                <li key={spec} className={styles.showcaseSpec}>{spec}</li>
              ))}
            </ul>
            <p className={styles.showcasePrice}>{showcase.priceNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
