'use client';

import { useContent } from '@/hooks/useLanguage';
import { formatOreAsDkk } from '@/lib/utils';
import daProducts from '@/content/da/products.json';
import enProducts from '@/content/en/products.json';
import styles from './produkter.module.css';

export function ProdukterContent() {
  const content = useContent(daProducts, enProducts);

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <h1>{content.title}</h1>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>
      </section>

      <section className={styles.productList}>
        <div className="container">
          {content.products.map((product) => (
            <article key={product.key} className={styles.product}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDescription}>
                {product.description}
              </p>

              <div className={styles.productMeta}>
                <span className={styles.productMetaItem}>
                  <span className={styles.productMetaLabel}>
                    {product.dimensions}
                  </span>
                </span>
                <span className={styles.productMetaItem}>
                  {product.material}
                </span>
              </div>

              <div className={styles.placements}>
                <ul className={styles.placementList}>
                  {product.placements.map((placement) => (
                    <li
                      key={placement.zone}
                      className={styles.placementItem}
                    >
                      <span className={styles.placementZone}>
                        {placement.zone}
                      </span>
                      <span className={styles.placementPrice}>
                        fra {formatOreAsDkk(placement.priceFrom)} kr./stk.
                      </span>
                      <span className={styles.placementDescription}>
                        {placement.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.compliance}>
        <div className="container container--narrow">
          <h2 className={styles.complianceTitle}>
            {content.compliance.title}
          </h2>
          <ul className={styles.complianceList}>
            {content.compliance.items.map((item) => (
              <li key={item} className={styles.complianceItem}>
                <span className={styles.complianceCheck} aria-hidden="true">
                  &#x2713;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
