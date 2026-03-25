'use client';

import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';

export function OmOsContent() {
  const content = useContent(daPages, enPages);
  const about = content.about;

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container max-w-narrow">
          <h1 className="text-display font-semibold tracking-tighter">{about.title}</h1>
          <p className="text-lg text-text-secondary mt-4 leading-relaxed">{about.intro}</p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-4">{about.mission.title}</h2>
          <p className="text-base text-text-secondary leading-relaxed">{about.mission.text}</p>
        </div>
      </section>

      <hr className="divider" />

      <section className="py-12">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-4">{about.parent.title}</h2>
          <p className="text-base text-text-secondary leading-relaxed">{about.parent.text}</p>
        </div>
      </section>

      <hr className="divider" />

      <section className="py-12">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-6">{about.founder.title}</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-surface-raised border border-border flex items-center justify-center flex-shrink-0 overflow-hidden relative">
              <img
                src="/images/founder.jpg"
                alt={about.founder.name}
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-sm text-text-muted font-medium" aria-hidden="true">BS</span>
            </div>
            <div>
              <p className="text-base font-semibold mb-2">{about.founder.name}</p>
              <p className="text-base text-text-secondary leading-relaxed">{about.founder.text}</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="py-12 pb-20 md:pb-28">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-4">{about.location.title}</h2>
          <p className="text-base text-text-secondary leading-relaxed">{about.location.text}</p>
        </div>
      </section>
    </>
  );
}
