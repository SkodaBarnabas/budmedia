'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { useContent } from '@/hooks/useLanguage';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';

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
      const threshold = Math.max(window.innerHeight * 0.55, 140);
      setScrolled(window.scrollY > threshold);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 ${
          scrolled
            ? 'bg-bg/74 backdrop-blur-2xl border-b border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_40px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-container mx-auto px-[var(--container-padding)] h-16">
          <Link href="/" aria-label="BudMedia forside">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text transition-colors duration-150"
              >
                {content.nav[link.key as keyof typeof content.nav]}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher />
            <Link href="/#kontakt" className="btn-primary">
              {content.nav.cta}
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              className="flex flex-col justify-center items-center gap-1.5 w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-[1.5px] bg-text transition-transform duration-250 origin-center ${
                  menuOpen ? 'translate-y-[3.75px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-text transition-transform duration-250 origin-center ${
                  menuOpen ? '-translate-y-[3.75px] -rotate-45' : ''
                }`}
              />
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
