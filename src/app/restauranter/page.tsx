import type { Metadata } from 'next';
import { RestauranterContent } from './content';

export const metadata: Metadata = {
  title: 'Gratis emballage til restauranter — BoxSpot',
  description:
    'Få gratis emballage med dit logo og branding. Ingen kontrakt, ingen omkostning. BoxSpot leverer direkte til din restaurant.',
};

export default function RestauranterPage() {
  return <RestauranterContent />;
}
