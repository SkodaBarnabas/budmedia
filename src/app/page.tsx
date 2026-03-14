import { Hero } from '@/components/landing/Hero';
import { BoxShowcase } from '@/components/landing/BoxShowcase';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { ProductCards } from '@/components/landing/ProductCards';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { RestaurantBrief } from '@/components/landing/RestaurantBrief';
import { ServiceScope } from '@/components/landing/ServiceScope';
import { AboutBrief } from '@/components/landing/AboutBrief';
import { ContactCTA } from '@/components/landing/ContactCTA';

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
      <Hero />
      <BoxShowcase />
      <HowItWorks />
      <ProductCards />
      <ComparisonTable />
      <RestaurantBrief />
      <ServiceScope />
      <AboutBrief />
      <ContactCTA />
    </>
  );
}
