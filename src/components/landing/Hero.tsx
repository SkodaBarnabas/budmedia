'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

export function Hero() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Content — left-aligned, takes 7 cols */}
          <div className="md:col-span-7 flex flex-col gap-5">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="text-display font-semibold tracking-tighter leading-none">
              {content.hero.headline}
            </h1>
            <p className="text-lg text-text-secondary max-w-[38ch] leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/kontakt" className="btn-primary">
                {content.hero.ctaPrimary}
              </Link>
              <a href="#hvordan" className="btn-secondary">
                {content.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Visual — right side, 5 cols */}
          <div className="md:col-span-5 flex justify-center items-center order-first md:order-last">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-3xl" />
              <img
                src="/images/products/multipleadds.png"
                alt="Pizzabakker med annoncepladser på sidepaneler"
                className="relative w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
