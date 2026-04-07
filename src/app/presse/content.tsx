'use client';

import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';

export function PresseContent() {
  const content = useContent(daPages, enPages);
  const press = content.press;

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <h1 className="text-display font-semibold tracking-tighter">{press.title}</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-[50ch] leading-relaxed">
            {press.subtitle}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-xl font-semibold tracking-tight mb-8">{press.stats.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {press.stats.items.map((item) => (
              <div key={item.label} className="bg-bg p-6 md:p-8 text-center">
                <span className="block text-2xl md:text-3xl font-semibold tracking-tight text-accent mb-1">
                  {item.value}
                </span>
                <span className="text-xs text-text-muted uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Timeline */}
      <section className="py-16">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-8">{press.timeline.title}</h2>
          <ol className="space-y-0 divide-y divide-border-subtle">
            {press.timeline.items.map((item, i) => (
              <li key={i} className="flex items-start gap-6 py-4">
                <span className="text-xs text-text-muted font-medium tracking-wide w-24 flex-shrink-0 pt-0.5">
                  {item.date}
                </span>
                <span className="text-sm text-text-secondary leading-relaxed">
                  {item.event}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <hr className="divider" />

      {/* Founder */}
      <section className="py-16">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-6">{press.founder.title}</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-surface-raised border border-border flex items-center justify-center flex-shrink-0 overflow-hidden relative">
              <img
                src="/images/founder.jpg"
                alt={press.founder.name}
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-sm text-text-muted font-medium" aria-hidden="true">BS</span>
            </div>
            <div>
              <p className="text-base font-semibold mb-1">{press.founder.name}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-2">{press.founder.bio}</p>
              <a
                href={`mailto:${press.founder.contact}`}
                className="text-sm text-accent hover:text-accent-hover transition-colors"
              >
                {press.founder.contact}
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Press assets */}
      <section className="py-16 pb-20 md:pb-28">
        <div className="container max-w-narrow">
          <h2 className="text-xl font-semibold tracking-tight mb-3">{press.assets.title}</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">{press.assets.description}</p>
          <a
            href="/files/boxspot-media-kit.pdf"
            className="btn-secondary"
            download
          >
            {press.assets.downloadButton}
          </a>
        </div>
      </section>
    </>
  );
}
