import { Hero } from '@/components/landing/Hero';
import { SocialProof } from '@/components/landing/SocialProof';
import { BoxShowcase } from '@/components/landing/BoxShowcase';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { ProductCards } from '@/components/landing/ProductCards';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { RestaurantBrief } from '@/components/landing/RestaurantBrief';
import { ServiceScope } from '@/components/landing/ServiceScope';
import { AboutBrief } from '@/components/landing/AboutBrief';
import { ContactCTA } from '@/components/landing/ContactCTA';
import { ScrollReveal } from '@/components/landing/ScrollReveal';

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
      <SocialProof />
      <ScrollReveal><BoxShowcase /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><ProductCards /></ScrollReveal>
      <ScrollReveal><ComparisonTable /></ScrollReveal>
      <RestaurantBrief />
      <ScrollReveal><ServiceScope /></ScrollReveal>
      <ScrollReveal><AboutBrief /></ScrollReveal>
      <ContactCTA />
    </>
  );
}
