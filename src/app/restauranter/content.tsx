'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';

export function RestauranterContent() {
  const content = useContent(daPages, enPages);
  const r = content.restaurants;

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <h1 className="text-display font-semibold tracking-tighter">{r.title}</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-[50ch] leading-relaxed">
            {r.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">{r.offer.title}</h2>
          <ul className="space-y-4">
            {r.offer.items.map((item) => (
              <li key={item} className="flex items-start gap-4 text-base text-text-secondary">
                <span className="text-accent flex-shrink-0 mt-1" aria-hidden="true">&#x2014;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">{r.cost.title}</h2>
          <p className="text-base text-text-secondary leading-relaxed max-w-[55ch]">{r.cost.text}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="bg-surface border border-border-subtle rounded-xl p-8 md:p-10 max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight mb-3">{r.guarantee.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{r.guarantee.text}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="container text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">{r.cta.title}</h2>
          <p className="text-base text-text-secondary leading-relaxed mb-8">{r.cta.text}</p>
          <Link href="/kontakt" className="btn-primary">
            {r.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
