'use client';

import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { FORMSPREE_ENDPOINT, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';
import styles from './kontakt.module.css';

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
      <section className={styles.header}>
        <div className="container">
          <h1>{contact.title}</h1>
          <p className={styles.subtitle}>{contact.subtitle}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.direct}>
            <h2 className={styles.directTitle}>{contact.direct.title}</h2>

            <dl className={styles.info}>
              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>{contact.direct.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={styles.infoLink}>
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>

              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>{contact.direct.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={styles.infoLink}>
                    {CONTACT_PHONE}
                  </a>
                </dd>
              </div>

              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>{contact.direct.locationLabel}</dt>
                <dd className={styles.infoValue}>{common.contact.location}</dd>
              </div>

              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>{contact.direct.cvrLabel}</dt>
                <dd className={styles.infoValue}>46232194</dd>
              </div>
            </dl>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.label}>
                {contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="company" className={styles.label}>
                {contact.form.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                autoComplete="organization"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                {contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.label}>
                {contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message" className={styles.label}>
                {contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? contact.form.sending : contact.form.submit}
            </button>

            {status === 'success' && (
              <p className={styles.success}>{contact.form.success}</p>
            )}
            {status === 'error' && (
              <p className={styles.error}>{contact.form.error}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
