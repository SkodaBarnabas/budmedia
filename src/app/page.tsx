import { RedesignExperience } from '@/components/landing/RedesignExperience';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BudMedia',
  description: 'Annoncering på emballage. Gratis pizzabakker til restauranter.',
  url: 'https://budmedia.dk',
  telephone: '+4591190369',
  email: 'kontakt@budmedia.dk',
  address: { '@type': 'PostalAddress', addressLocality: 'Sonderborg', addressCountry: 'DK' },
  parentOrganization: { '@type': 'Organization', name: 'BudGruppen', taxID: 'DK46232194' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RedesignExperience />
    </>
  );
}
