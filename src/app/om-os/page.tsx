import type { Metadata } from 'next';
import { OmOsContent } from './content';

export const metadata: Metadata = {
  title: 'Om os — BudMedia',
  description:
    'BudMedia er et brand under BudGruppen. Vi forbinder lokale annoncører med lokale restauranter gennem emballage.',
};

export default function OmOsPage() {
  return <OmOsContent />;
}
