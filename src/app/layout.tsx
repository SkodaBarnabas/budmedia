import type { Metadata } from 'next';
import Script from 'next/script';
import { Outfit, Fraunces } from 'next/font/google';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PLAUSIBLE_DOMAIN } from '@/lib/constants';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BudMedia — Annoncering på emballage',
    template: '%s — BudMedia',
  },
  description:
    'BudMedia leverer gratis, professionelt trykt emballage til restauranter — finansieret af lokale annoncører. Din annonce fra 5 kr. pr. bakke.',
  metadataBase: new URL('https://budmedia.dk'),
  openGraph: {
    title: 'BudMedia — Annoncering på emballage',
    description:
      'Fysisk reklame på pizzabakker hos lokale restauranter. Fra 5 kr. pr. bakke.',
    url: 'https://budmedia.dk',
    siteName: 'BudMedia',
    locale: 'da_DK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BudMedia — Annoncering på emballage',
    description:
      'Fysisk reklame på pizzabakker. Fra 5 kr. pr. bakke.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://budmedia.dk' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${outfit.variable} ${fraunces.variable}`}>
      <head>
        <script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
