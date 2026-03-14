'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import styles from './restauranter.module.css';

export function RestauranterContent() {
  const content = useContent(daPages, enPages);
  const r = content.restaurants;

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <h1>{r.title}</h1>
          <p className={styles.subtitle}>{r.subtitle}</p>
        </div>
      </section>

      <section className={styles.offer}>
        <div className="container">
          <h2 className={styles.offerTitle}>{r.offer.title}</h2>
          <ul className={styles.offerList}>
            {r.offer.items.map((item) => (
              <li key={item} className={styles.offerItem}>
                <span className={styles.offerDash} aria-hidden="true">
                  &#x2014;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cost}>
        <div className="container">
          <h2 className={styles.costTitle}>{r.cost.title}</h2>
          <p className={styles.costText}>{r.cost.text}</p>
        </div>
      </section>

      <section className={styles.guarantee}>
        <div className="container">
          <div className={styles.guaranteeInner}>
            <h3 className={styles.guaranteeTitle}>{r.guarantee.title}</h3>
            <p className={styles.guaranteeText}>{r.guarantee.text}</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>{r.cta.title}</h2>
          <p className={styles.ctaText}>{r.cta.text}</p>
          <Link href="/kontakt" className={`btn-primary ${styles.ctaButton}`}>
            {r.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
