'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './restaurant.module.css';

export function RestaurantBrief() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="restauranter" className={styles.section}>
      <div className={styles.accentLine} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.photoPlaceholder}>
            <span className={styles.photoIcon}>👨‍🍳</span>
            <p className={styles.photoText}>Foto: Restaurantejer holder branded bakke — smilende, autentisk setting</p>
          </div>
          <p className={styles.eyebrow}>For Restauranter</p>
          <h2>{content.restaurantBrief.title}</h2>
          <p className={styles.description}>{content.restaurantBrief.description}</p>
          <Link href="/restauranter" className="btn-secondary">
            {content.restaurantBrief.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
