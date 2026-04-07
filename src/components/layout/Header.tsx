'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { useContent } from '@/hooks/useLanguage';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/restauranter', key: 'restaurants' },
  { href: '/annoncorer', key: 'advertisers' },
  { href: '/priser', key: 'pricing' },
  { href: '/kontakt', key: 'contact' },
] as const;

export function Header() {
  const content = useContent(daCommon, enCommon);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.wordmark} aria-label="BoxSpot forside">
            BoxSpot
          </Link>

          <div className={styles.desktopRight}>
            <nav className={styles.desktopNav}>
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
            <LanguageSwitcher />
          </div>

          <div className={styles.mobileActions}>
            <LanguageSwitcher />
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
              aria-expanded={menuOpen}
            >
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <MobileMenu
          navLinks={[...NAV_LINKS]}
          content={content}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
