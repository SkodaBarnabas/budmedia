'use client';

import { useContent } from '@/hooks/useLanguage';
import { formatOreAsDkk } from '@/lib/utils';
import daProducts from '@/content/da/products.json';
import enProducts from '@/content/en/products.json';

export function ProdukterContent() {
  const content = useContent(daProducts, enProducts);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <h1 className="text-display font-semibold tracking-tighter">{content.title}</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-[50ch] leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container space-y-8">
          {content.products.map((product) => (
            <article key={product.key} className="border border-border-subtle rounded-xl overflow-hidden">
              <div className="p-6 md:p-8 border-b border-border-subtle">
                <h2 className="text-2xl font-semibold tracking-tight mb-2">{product.name}</h2>
                <p className="text-base text-text-secondary leading-relaxed max-w-[55ch]">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="text-xs text-text-muted bg-surface-raised border border-border-subtle px-3 py-1.5 rounded-full">
                    {product.dimensions}
                  </span>
                  <span className="text-xs text-text-muted bg-surface-raised border border-border-subtle px-3 py-1.5 rounded-full">
                    {product.material}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-border-subtle">
                {product.placements.map((placement) => (
                  <div key={placement.zone} className="p-6 md:px-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="text-sm font-medium text-text w-40 flex-shrink-0">
                      {placement.zone}
                    </span>
                    <span className="text-sm text-accent font-medium w-36 flex-shrink-0">
                      fra {formatOreAsDkk(placement.priceFrom)} kr./stk.
                    </span>
                    <span className="text-sm text-text-secondary leading-relaxed">
                      {placement.description}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-6">
            {content.compliance.title}
          </h2>
          <ul className="space-y-3">
            {content.compliance.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0" aria-hidden="true">&#x2713;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
