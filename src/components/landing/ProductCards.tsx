'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './products.module.css';

export function ProductCards() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="produkt" className={styles.products}>
      <div className="container">
        <h2 className={styles.title}>{content.products.title}</h2>
        <div className={styles.productsGrid}>
          {content.products.items.map((item, index) => (
            <div
              key={item.key}
              className={`${styles.productCard}${index === 0 ? ` ${styles.productCardFeatured}` : ''}`}
            >
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productDescription}>{item.description}</p>
                <p className={styles.productPrice}>{item.priceFrom}</p>
              </div>
              {index === 0 && (
                <div className={styles.productPlaceholder}>
                  <div className="imagePlaceholder">
                    <span>📦</span>
                    <p>Foto: Stak af brandede pizzabakker på restaurantdisk</p>
                  </div>
                </div>
              )}
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
