'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { useContent } from '@/hooks/useLanguage';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/#produkt', key: 'products' },
  { href: '/#hvordan', key: 'pricing' },
  { href: '/#priser', key: 'restaurants' },
  { href: '/#restauranter', key: 'about' },
  { href: '/#kontakt', key: 'contact' },
] as const;

export function Header() {
  const content = useContent(daCommon, enCommon);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" aria-label="BudMedia forside">
            <Logo />
          </Link>

          <nav className={styles.nav}>
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

          <div className={styles.actions}>
            <LanguageSwitcher />
            <Link href="/#kontakt" className="btn-primary">
              {content.nav.cta}
            </Link>
          </div>

          <div className={styles.mobileActions}>
            <LanguageSwitcher />
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
              aria-expanded={menuOpen}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
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
