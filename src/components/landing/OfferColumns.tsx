'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import { Reveal } from '@/components/shared/Reveal';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './OfferColumns.module.css';

export function OfferColumns() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.column}>
          <span className={styles.eyebrow}>
            {content.offers.restaurants.eyebrow}
          </span>
          <h2 className={styles.headline}>
            {content.offers.restaurants.headline}
          </h2>
          <p className={styles.body}>{content.offers.restaurants.body}</p>
          <Link href={content.offers.restaurants.href} className={styles.link}>
            {content.offers.restaurants.cta}
          </Link>
        </Reveal>

        <div className={styles.divider} aria-hidden="true" />

        <Reveal delay={150} className={styles.column}>
          <span className={styles.eyebrow}>
            {content.offers.advertisers.eyebrow}
          </span>
          <h2 className={styles.headline}>
            {content.offers.advertisers.headline}
          </h2>
          <p className={styles.body}>{content.offers.advertisers.body}</p>
          <Link href={content.offers.advertisers.href} className={styles.link}>
            {content.offers.advertisers.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
