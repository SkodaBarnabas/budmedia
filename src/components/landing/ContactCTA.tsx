'use client';

import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './contact.module.css';

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
    <section id="kontakt" className={styles.section}>
      <div className="container">
        <h2 className={styles.headline}>{content.contactCta.title}</h2>

        {status === 'success' ? (
          <div className={styles.formContainer}>
            <p className={styles.success}>{content.contactCta.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>{content.contactCta.namePlaceholder}</label>
                <input type="text" name="name" required autoComplete="name" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{content.contactCta.companyPlaceholder}</label>
                <input type="text" name="company" autoComplete="organization" className={styles.input} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{content.contactCta.emailPlaceholder}</label>
              <input type="email" name="email" required autoComplete="email" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{content.contactCta.messagePlaceholder}</label>
              <textarea name="message" required className={styles.textarea} />
            </div>
            {status === 'error' && <p className={styles.error}>{content.contactCta.error}</p>}
            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? content.contactCta.sending : content.contactCta.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
