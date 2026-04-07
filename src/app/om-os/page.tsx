import type { Metadata } from 'next';
import { OmOsContent } from './content';

export const metadata: Metadata = {
  title: 'Om os — BoxSpot',
  description:
    'BoxSpot er et brand under SeedWork Co.. Vi forbinder lokale annoncører med lokale restauranter gennem emballage.',
};

export default function OmOsPage() {
  return <OmOsContent />;
}
