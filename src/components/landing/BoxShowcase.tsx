'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

export function BoxShowcase() {
  const content = useContent(daLanding, enLanding);
  const showcase = content.boxShowcase;

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image — left side */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-2xl -z-10" />
              <img
                src="/images/products/multipleadds.png"
                alt="Pizzabakker med annoncepladser på sidepaneler"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* Content — right side */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <p className="eyebrow">{showcase.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              {showcase.headline}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-[55ch]">
              {showcase.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {showcase.specs.map((spec: string) => (
                <span
                  key={spec}
                  className="text-xs text-text-muted bg-surface-raised border border-border-subtle px-3 py-1.5 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
            <p className="text-sm text-accent font-medium mt-2">
              {showcase.priceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
