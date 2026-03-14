'use client';

import Link from 'next/link';
import { usePricingCalculator } from '@/hooks/usePricingCalculator';
import { formatOreAsDkk, formatNumber } from '@/lib/utils';
import styles from './calculator.module.css';

interface Placement {
  zone: string;
  priceFrom: number;
  description: string;
}

interface Product {
  key: string;
  name: string;
  description?: string;
  dimensions?: string;
  material?: string;
  placements: Placement[];
}

interface CalculatorLabels {
  title: string;
  productLabel: string;
  placementLabel: string;
  quantityLabel: string;
  restaurantsLabel: string;
  resultTitle: string;
  monthlyTotal: string;
  estimatedImpressions: string;
  comparisonNote: string;
  impressionsNote: string;
  getQuote: string;
}

interface PricingCalculatorProps {
  products: Product[];
  labels: CalculatorLabels;
}

const QUANTITY_PRESETS = [250, 500, 1000, 2000];
const RESTAURANT_MAX = 10;

export function PricingCalculator({ products, labels }: PricingCalculatorProps) {
  const calc = usePricingCalculator(products);

  const comparisonText = calc.result
    ? labels.comparisonNote
        .replace('{facebookCost}', formatNumber(calc.result.facebookCostDkk))
        .replace('{googleCost}', formatNumber(calc.result.googleCostDkk))
    : '';

  return (
    <div className={styles.calculator}>
      <h2 className={styles.title}>{labels.title}</h2>

      <div className={styles.grid}>
        <div className={styles.controls}>
          {/* Product select */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="calc-product">
              {labels.productLabel}
            </label>
            <select
              id="calc-product"
              className={styles.select}
              value={calc.productIndex}
              onChange={(e) => calc.setProductIndex(Number(e.target.value))}
            >
              {products.map((p, i) => (
                <option key={p.key} value={i}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Placement select */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="calc-placement">
              {labels.placementLabel}
            </label>
            <select
              id="calc-placement"
              className={styles.select}
              value={calc.placementIndex}
              onChange={(e) => calc.setPlacementIndex(Number(e.target.value))}
            >
              {calc.product?.placements.map((p, i) => (
                <option key={p.zone} value={i}>
                  {p.zone} — fra {formatOreAsDkk(p.priceFrom)} kr./stk.
                </option>
              ))}
            </select>
          </div>

          {/* Quantity presets */}
          <div className={styles.field}>
            <span className={styles.label}>{labels.quantityLabel}</span>
            <div className={styles.presets}>
              {QUANTITY_PRESETS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className={`${styles.presetBtn} ${
                    calc.quantity === q ? styles.presetBtnActive : ''
                  }`}
                  onClick={() => calc.setQuantity(q)}
                >
                  {formatNumber(q)}
                </button>
              ))}
            </div>
          </div>

          {/* Restaurants */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="calc-restaurants">
              {labels.restaurantsLabel}
            </label>
            <select
              id="calc-restaurants"
              className={styles.select}
              value={calc.restaurants}
              onChange={(e) => calc.setRestaurants(Number(e.target.value))}
            >
              {Array.from({ length: RESTAURANT_MAX }, (_, i) => i + 1).map(
                (n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className={styles.results}>
          <span className={styles.resultsEyebrow}>{labels.resultTitle}</span>

          {calc.result && (
            <>
              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>
                  {labels.monthlyTotal}
                </span>
                <span className={styles.resultValue}>
                  {formatNumber(calc.result.monthlyCostDkk)} kr.
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>
                  {labels.estimatedImpressions}
                </span>
                <span className={styles.resultValue}>
                  {formatNumber(calc.result.estimatedImpressions)}
                </span>
              </div>

              <p className={styles.comparison}>{comparisonText}</p>

              <p className={styles.note}>{labels.impressionsNote}</p>

              <Link href="/kontakt" className={`btn-primary ${styles.cta}`}>
                {labels.getQuote}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
