import type { Metadata } from 'next';
import { PriserContent } from './content';

export const metadata: Metadata = {
  title: 'Priser — BoxSpot',
  description:
    'Se hvad det koster at annoncere på pizzabakker. Interaktiv prisberegner. Sammenlign med Facebook og Google Ads.',
};

export default function PriserPage() {
  return <PriserContent />;
}
