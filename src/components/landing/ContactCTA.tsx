'use client';

import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function ContactCTA() {
  const content = useContent(daLanding, enLanding);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.contactCta}>
      <div className="container">
        <div className={styles.contactGrid}>
          <h2 className={styles.contactHeadline}>{content.contactCta.title}</h2>
          <div>
            {status === 'success' ? (
              <p className={styles.contactSuccess}>{content.contactCta.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.contactFormRow}>
                  <input
                    type="text"
                    name="name"
                    placeholder={content.contactCta.namePlaceholder}
                    required
                    autoComplete="name"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder={content.contactCta.companyPlaceholder}
                    autoComplete="organization"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder={content.contactCta.emailPlaceholder}
                  required
                  autoComplete="email"
                />
                <textarea
                  name="message"
                  placeholder={content.contactCta.messagePlaceholder}
                  required
                />
                {status === 'error' && (
                  <p className={styles.contactError}>{content.contactCta.error}</p>
                )}
                <button
                  type="submit"
                  className={`btn-primary ${styles.contactSubmit}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? content.contactCta.sending
                    : content.contactCta.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
