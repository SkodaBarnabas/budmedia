'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function ProductCards() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.products}>
      <div className="container">
        <h2 className={styles.productsTitle}>{content.products.title}</h2>
        <div className={styles.productsGrid}>
          {content.products.items.map((item, index) => (
            <div
              key={item.key}
              className={`${styles.productItem}${index === 0 ? ` ${styles.productItemFeatured}` : ''}`}
            >
              <h3 className={styles.productName}>{item.name}</h3>
              <p className={styles.productDescription}>{item.description}</p>
              <p className={styles.productPrice}>{item.priceFrom}</p>
            </div>
          ))}
        </div>
        <div className={styles.productsCta}>
          <Link href="/produkter" className={styles.productsCtaLink}>
            {content.products.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
