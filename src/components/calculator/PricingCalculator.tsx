'use client';

import Link from 'next/link';
import { usePricingCalculator } from '@/hooks/usePricingCalculator';
import { formatOreAsDkk, formatNumber } from '@/lib/utils';

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
    <div className="rounded-xl border border-border-subtle overflow-hidden">
      <h2 className="text-xl font-semibold tracking-tight p-6 md:p-8 border-b border-border-subtle">
        {labels.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Controls */}
        <div className="p-6 md:p-8 space-y-5 border-b md:border-b-0 md:border-r border-border-subtle">
          {/* Product select */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium tracking-wide uppercase" htmlFor="calc-product">
              {labels.productLabel}
            </label>
            <select
              id="calc-product"
              value={calc.productIndex}
              onChange={(e) => calc.setProductIndex(Number(e.target.value))}
            >
              {products.map((p, i) => (
                <option key={p.key} value={i}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Placement select */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium tracking-wide uppercase" htmlFor="calc-placement">
              {labels.placementLabel}
            </label>
            <select
              id="calc-placement"
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
          <div className="flex flex-col gap-2">
            <span className="text-xs text-text-muted font-medium tracking-wide uppercase">
              {labels.quantityLabel}
            </span>
            <div className="flex gap-2">
              {QUANTITY_PRESETS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    calc.quantity === q
                      ? 'bg-accent text-accent-text'
                      : 'bg-surface-raised text-text-secondary border border-border-subtle hover:border-border'
                  }`}
                  onClick={() => calc.setQuantity(q)}
                >
                  {formatNumber(q)}
                </button>
              ))}
            </div>
          </div>

          {/* Restaurants */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium tracking-wide uppercase" htmlFor="calc-restaurants">
              {labels.restaurantsLabel}
            </label>
            <select
              id="calc-restaurants"
              value={calc.restaurants}
              onChange={(e) => calc.setRestaurants(Number(e.target.value))}
            >
              {Array.from({ length: RESTAURANT_MAX }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 md:p-8 bg-surface flex flex-col gap-5">
          <span className="eyebrow">{labels.resultTitle}</span>

          {calc.result && (
            <>
              <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
                <span className="text-sm text-text-secondary">{labels.monthlyTotal}</span>
                <span className="text-2xl font-semibold tracking-tight text-text">
                  {formatNumber(calc.result.monthlyCostDkk)} kr.
                </span>
              </div>

              <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
                <span className="text-sm text-text-secondary">{labels.estimatedImpressions}</span>
                <span className="text-xl font-semibold tracking-tight text-text">
                  {formatNumber(calc.result.estimatedImpressions)}
                </span>
              </div>

              <p className="text-xs text-text-muted leading-relaxed">{comparisonText}</p>
              <p className="text-xs text-text-muted/60 italic">{labels.impressionsNote}</p>

              <Link href="/kontakt" className="btn-primary mt-2 justify-center text-center">
                {labels.getQuote}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
