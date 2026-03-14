'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { useContent } from '@/hooks/useLanguage';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { href: '/produkter', key: 'products' },
  { href: '/priser', key: 'pricing' },
  { href: '/restauranter', key: 'restaurants' },
  { href: '/om-os', key: 'about' },
  { href: '/kontakt', key: 'contact' },
  { href: '/presse', key: 'press' },
] as const;

export function Footer() {
  const content = useContent(daCommon, enCommon);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.parent}>{content.footer.parent}</p>
        </div>

        <nav className={styles.navColumn}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={styles.navLink}
            >
              {content.nav[link.key as keyof typeof content.nav]}
            </Link>
          ))}
        </nav>

        <div className={styles.contactColumn}>
          <a href={`mailto:${content.contact.email}`} className={styles.navLink}>
            {content.contact.email}
          </a>
          <a href={`tel:${content.contact.phone}`} className={styles.navLink}>
            {content.contact.phoneDisplay}
          </a>
          <p className={styles.location}>{content.contact.location}</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <div className={styles.bottomLeft}>
          <span>{content.footer.cvr}</span>
          <span className={styles.separator}>·</span>
          <Link href="/privatlivspolitik" className={styles.bottomLink}>
            {content.footer.privacy}
          </Link>
          <span className={styles.separator}>·</span>
          <Link href="/cookies" className={styles.bottomLink}>
            {content.footer.cookies}
          </Link>
        </div>
        <p className={styles.rights}>
          &copy; {year} BudMedia. {content.footer.rights}
        </p>
      </div>

      <div className={`container ${styles.sdgRow}`}>
        <p className={styles.sdg}>{content.footer.sdg}</p>
      </div>
    </footer>
  );
}
