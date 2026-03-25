'use client';

import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

export function ContactCTA() {
  const content = useContent(daLanding, enLanding);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const form = e.currentTarget;
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight mb-10 md:mb-14 max-w-lg">
          {content.contactCta.title}
        </h2>

        {status === 'success' ? (
          <div className="max-w-xl bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
            <p className="text-emerald-400 text-base">
              {content.contactCta.success}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {content.contactCta.namePlaceholder}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {content.contactCta.companyPlaceholder}
                </label>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-muted font-medium tracking-wide uppercase">
                {content.contactCta.emailPlaceholder}
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-muted font-medium tracking-wide uppercase">
                {content.contactCta.messagePlaceholder}
              </label>
              <textarea name="message" required rows={5} />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                {content.contactCta.error}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-accent-text/30 border-t-accent-text rounded-full animate-spin" />
                  {content.contactCta.sending}
                </span>
              ) : (
                content.contactCta.submit
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
