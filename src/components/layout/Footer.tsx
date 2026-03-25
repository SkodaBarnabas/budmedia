'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { useContent } from '@/hooks/useLanguage';
import daCommon from '@/content/da/common.json';
import enCommon from '@/content/en/common.json';

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
    <footer className="border-t border-border pt-12 pb-8">
      <div className="container">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-sm text-text-muted">{content.footer.parent}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text transition-colors duration-150 w-fit"
              >
                {content.nav[link.key as keyof typeof content.nav]}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-1">
            <a
              href={`mailto:${content.contact.email}`}
              className="text-sm text-text-secondary hover:text-text transition-colors duration-150 w-fit"
            >
              {content.contact.email}
            </a>
            <a
              href={`tel:${content.contact.phone}`}
              className="text-sm text-text-secondary hover:text-text transition-colors duration-150 w-fit"
            >
              {content.contact.phoneDisplay}
            </a>
            <p className="text-sm text-text-muted mt-1">{content.contact.location}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex items-center gap-2 text-xs text-text-muted flex-wrap">
            <span>{content.footer.cvr}</span>
            <span className="select-none opacity-40">·</span>
            <Link
              href="/privatlivspolitik"
              className="text-text-secondary hover:text-text transition-colors duration-150"
            >
              {content.footer.privacy}
            </Link>
            <span className="select-none opacity-40">·</span>
            <Link
              href="/cookies"
              className="text-text-secondary hover:text-text transition-colors duration-150"
            >
              {content.footer.cookies}
            </Link>
          </div>
          <p className="text-xs text-text-muted">
            &copy; {year} BudMedia. {content.footer.rights}
          </p>
        </div>

        {/* SDG */}
        <div className="pt-4">
          <p className="text-xs text-text-muted">{content.footer.sdg}</p>
        </div>
      </div>
    </footer>
  );
}
