'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

export function ProductCards() {
  const content = useContent(daLanding, enLanding);
  const items = content.products.items;

  return (
    <section id="produkt" className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          {content.products.title}
        </h2>

        {/* Asymmetric grid: featured left 2/3, stacked right 1/3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured product — spans 8 cols */}
          {items[0] && (
            <div className="md:col-span-8 bg-surface border border-border-subtle rounded-xl p-8 md:p-10 flex flex-col justify-between gap-6 min-h-[280px]">
              <div>
                <p className="eyebrow mb-3">Mest populær</p>
                <h3 className="text-2xl font-semibold tracking-tight mb-3">
                  {items[0].name}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed max-w-[50ch]">
                  {items[0].description}
                </p>
              </div>
              <p className="text-accent font-medium text-lg">
                {items[0].priceFrom}
              </p>
            </div>
          )}

          {/* Secondary products — stacked in 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {items.slice(1).map((item) => (
              <div
                key={item.key}
                className="bg-surface border border-border-subtle rounded-xl p-6 md:p-8 flex flex-col gap-3 flex-1"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
                <p className="text-accent font-medium text-sm mt-auto">
                  {item.priceFrom}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-start">
          <Link
            href="/produkter"
            className="text-sm text-accent font-medium border-b border-accent/30 pb-0.5 hover:border-accent transition-colors duration-150"
          >
            {content.products.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
