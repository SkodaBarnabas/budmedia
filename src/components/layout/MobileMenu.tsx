'use client';

import Link from 'next/link';

interface MobileMenuProps {
  navLinks: { href: string; key: string }[];
  content: {
    nav: Record<string, string>;
  };
  onClose: () => void;
}

export function MobileMenu({ navLinks, content, onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md flex flex-col pt-20">
      <nav className="flex flex-col items-center gap-6 flex-1 justify-center -mt-16">
        {navLinks.map((link, i) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-2xl font-medium text-text-secondary hover:text-text transition-colors duration-150"
            onClick={onClose}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {content.nav[link.key]}
          </Link>
        ))}
      </nav>
      <div className="p-8 flex justify-center">
        <Link
          href="/#kontakt"
          className="btn-primary w-full max-w-xs text-center justify-center"
          onClick={onClose}
        >
          {content.nav.cta}
        </Link>
      </div>
    </div>
  );
}
