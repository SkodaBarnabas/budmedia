import { HeroSection } from './HeroSection';
import { ScrollAnimation } from './ScrollAnimation';
import { SocialProofBar } from './SocialProofBar';
import { OfferColumns } from './OfferColumns';
import { ComparisonSection } from './ComparisonSection';

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ScrollAnimation />
      <SocialProofBar />
      <OfferColumns />
      <ComparisonSection />
    </>
  );
}
