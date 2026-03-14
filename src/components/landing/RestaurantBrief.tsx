'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function RestaurantBrief() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.restaurantBrief}>
      <div className="container">
        <div className={styles.restaurantBriefInner}>
          <h2>{content.restaurantBrief.title}</h2>
          <p className={styles.restaurantBriefDescription}>
            {content.restaurantBrief.description}
          </p>
          <Link href="/restauranter" className={styles.restaurantBriefCta}>
            {content.restaurantBrief.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
