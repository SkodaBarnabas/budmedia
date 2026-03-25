'use client';

import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { FORMSPREE_ENDPOINT, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';

export function KontaktContent() {
  const content = useContent(daPages, enPages);
  const common = useContent(daCommon, enCommon);
  const contact = content.contact;

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
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <h1 className="text-display font-semibold tracking-tighter">{contact.title}</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-[50ch] leading-relaxed">
            {contact.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Direct contact info */}
            <div className="md:col-span-4">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                {contact.direct.title}
              </h2>

              <dl className="space-y-5">
                <div>
                  <dt className="text-xs text-text-muted font-medium tracking-wide uppercase mb-1">
                    {contact.direct.emailLabel}
                  </dt>
                  <dd>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-accent hover:text-accent-hover transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-text-muted font-medium tracking-wide uppercase mb-1">
                    {contact.direct.phoneLabel}
                  </dt>
                  <dd>
                    <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-sm text-accent hover:text-accent-hover transition-colors">
                      {CONTACT_PHONE}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-text-muted font-medium tracking-wide uppercase mb-1">
                    {contact.direct.locationLabel}
                  </dt>
                  <dd className="text-sm text-text-secondary">{common.contact.location}</dd>
                </div>

                <div>
                  <dt className="text-xs text-text-muted font-medium tracking-wide uppercase mb-1">
                    {contact.direct.cvrLabel}
                  </dt>
                  <dd className="text-sm text-text-secondary">46232194</dd>
                </div>
              </dl>
            </div>

            {/* Form */}
            <form className="md:col-span-8 space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {contact.form.name}
                </label>
                <input type="text" id="name" name="name" required autoComplete="name" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {contact.form.company}
                </label>
                <input type="text" id="company" name="company" required autoComplete="organization" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {contact.form.email}
                </label>
                <input type="email" id="email" name="email" required autoComplete="email" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {contact.form.phone}
                </label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {contact.form.message}
                </label>
                <textarea id="message" name="message" required rows={5} />
              </div>

              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? contact.form.sending : contact.form.submit}
              </button>

              {status === 'success' && (
                <p className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-3">
                  {contact.form.success}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  {contact.form.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
