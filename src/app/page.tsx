import { LandingPage } from '@/components/landing/LandingPage';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BoxSpot',
  description: 'Annoncering på emballage. Gratis pizzabakker til restauranter.',
  url: 'https://boxspot.dk',
  telephone: '+4591190369',
  email: 'kontakt@boxspot.dk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sonderborg',
    addressCountry: 'DK',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'SeedWork Co.',
    taxID: 'DK46232194',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
