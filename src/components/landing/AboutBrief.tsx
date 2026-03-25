'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

export function AboutBrief() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className="section">
      <div className="container">
        <div className="border-t border-border pt-16 md:pt-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight mb-5">
              {content.aboutBrief.title}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              {content.aboutBrief.text}
            </p>
            <Link
              href="/om-os"
              className="text-sm text-accent font-medium border-b border-accent/30 pb-0.5 hover:border-accent transition-colors duration-150"
            >
              {content.aboutBrief.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
