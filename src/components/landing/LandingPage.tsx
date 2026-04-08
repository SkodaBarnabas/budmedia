import { HeroSection } from './HeroSection';
import { SocialProofBar } from './SocialProofBar';
import { ScrollAnimation } from './ScrollAnimation';
import { OfferColumns } from './OfferColumns';
import { ComparisonSection } from './ComparisonSection';

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ScrollAnimation />
      <OfferColumns />
      <ComparisonSection />
    </>
  );
}
