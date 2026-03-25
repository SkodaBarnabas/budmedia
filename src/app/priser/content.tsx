'use client';

import { useContent } from '@/hooks/useLanguage';
import { PricingCalculator } from '@/components/calculator/PricingCalculator';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import daProducts from '@/content/da/products.json';
import enProducts from '@/content/en/products.json';

export function PriserContent() {
  const content = useContent(daPages, enPages);
  const products = useContent(daProducts, enProducts);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <h1 className="text-display font-semibold tracking-tighter">{content.pricing.title}</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-[50ch] leading-relaxed">
            {content.pricing.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <PricingCalculator
            products={products.products}
            labels={content.pricing.calculator}
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="bg-surface border border-border-subtle rounded-xl p-8 md:p-10 max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight mb-3">
              {content.pricing.guarantee.title}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              {content.pricing.guarantee.text}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <p className="text-sm text-text-muted italic max-w-[55ch]">
            {content.pricing.scarcity.text}
          </p>
        </div>
      </section>
    </>
  );
}
