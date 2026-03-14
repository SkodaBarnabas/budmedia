'use client';

import { useContent } from '@/hooks/useLanguage';
import { PricingCalculator } from '@/components/calculator/PricingCalculator';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import daProducts from '@/content/da/products.json';
import enProducts from '@/content/en/products.json';
import styles from './priser.module.css';

export function PriserContent() {
  const content = useContent(daPages, enPages);
  const products = useContent(daProducts, enProducts);

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <h1>{content.pricing.title}</h1>
          <p className={styles.subtitle}>{content.pricing.subtitle}</p>
        </div>
      </section>

      <section className={styles.calculatorSection}>
        <div className="container">
          <PricingCalculator
            products={products.products}
            labels={content.pricing.calculator}
          />
        </div>
      </section>

      <section className={styles.guarantee}>
        <div className="container">
          <div className={styles.guaranteeInner}>
            <h2 className={styles.guaranteeTitle}>
              {content.pricing.guarantee.title}
            </h2>
            <p className={styles.guaranteeText}>
              {content.pricing.guarantee.text}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.scarcity}>
        <div className="container">
          <p className={styles.scarcityText}>
            {content.pricing.scarcity.text}
          </p>
        </div>
      </section>
    </>
  );
}
