'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { href: '/restauranter', key: 'restaurants' },
  { href: '/annoncorer', key: 'advertisers' },
  { href: '/priser', key: 'pricing' },
  { href: '/presse', key: 'press' },
  { href: '/kontakt', key: 'contact' },
];

export function Footer() {
  const content = useContent(daCommon, enCommon);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.wordmark}>BoxSpot</span>
            <p className={styles.parent}>{content.footer.parent}</p>
          </div>

          <nav className={styles.nav}>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={styles.navLink}
              >
                {content.nav[link.key as keyof typeof content.nav]}
              </Link>
            ))}
          </nav>

          <div className={styles.contactCol}>
            <a
              href={`mailto:${content.contact.email}`}
              className={styles.contactLink}
            >
              {content.contact.email}
            </a>
            <a
              href={`tel:${content.contact.phone}`}
              className={styles.contactLink}
            >
              {content.contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
