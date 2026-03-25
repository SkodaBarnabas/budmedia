'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

export function RestaurantBrief() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="restauranter" className="relative py-20 md:py-28">
      {/* Accent top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-accent/40" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Visual placeholder — left */}
          <div className="md:col-span-5 order-last md:order-first">
            <div className="aspect-[4/3] rounded-xl bg-surface border border-border-subtle flex items-center justify-center overflow-hidden">
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#D4A76A" opacity="0.6"/>
                  </svg>
                </div>
                <p className="text-xs text-text-muted italic max-w-[28ch] mx-auto leading-relaxed">
                  Foto: Restaurantejer med branded bakke
                </p>
              </div>
            </div>
          </div>

          {/* Content — right */}
          <div className="md:col-span-7 flex flex-col gap-5">
            <p className="eyebrow">For Restauranter</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              {content.restaurantBrief.title}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-[55ch]">
              {content.restaurantBrief.description}
            </p>
            <div className="mt-2">
              <Link href="/restauranter" className="btn-secondary">
                {content.restaurantBrief.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
