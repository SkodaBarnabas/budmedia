'use client';

import Link from 'next/link';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  navLinks: { href: string; key: string }[];
  content: { nav: Record<string, string> };
  onClose: () => void;
}

export function MobileMenu({ navLinks, content, onClose }: MobileMenuProps) {
  return (
    <div className={styles.overlay}>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={styles.link}
            onClick={onClose}
          >
            {content.nav[link.key]}
          </Link>
        ))}
      </nav>
      <div className={styles.bottom}>
        <Link
          href="/kontakt"
          className={`btn-primary ${styles.cta}`}
          onClick={onClose}
        >
          {content.nav.cta}
        </Link>
      </div>
    </div>
  );
}
