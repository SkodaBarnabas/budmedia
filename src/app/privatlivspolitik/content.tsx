'use client';

import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';

export function PrivatlivspolitikContent() {
  const content = useContent(daPages, enPages);
  const privacy = content.privacy;

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container max-w-narrow">
        <h1 className="text-display font-semibold tracking-tighter mb-4">{privacy.title}</h1>
        <p className="text-sm text-text-muted mb-12">{privacy.lastUpdated}</p>

        <div className="space-y-10">
          {privacy.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold tracking-tight mb-3">{section.title}</h2>
              <p className="text-base text-text-secondary leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
