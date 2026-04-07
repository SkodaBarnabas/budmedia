import type { Metadata } from 'next';
import { Outfit, Fraunces } from 'next/font/google';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PLAUSIBLE_DOMAIN } from '@/lib/constants';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
    default: 'BoxSpot — Annoncering på emballage',
    template: '%s — BoxSpot',
  },
  description:
    'BoxSpot leverer gratis, professionelt trykt emballage til restauranter — finansieret af lokale annoncører.',
  metadataBase: new URL('https://boxspot.dk'),
  openGraph: {
    title: 'BoxSpot — Annoncering på emballage',
    description:
      'Fysisk reklame på pizzabakker hos lokale restauranter.',
    url: 'https://boxspot.dk',
    siteName: 'BoxSpot',
    locale: 'da_DK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoxSpot — Annoncering på emballage',
    description: 'Fysisk reklame på pizzabakker.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://boxspot.dk' },
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
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
