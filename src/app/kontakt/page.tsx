import type { Metadata } from 'next';
import { KontaktContent } from './content';

export const metadata: Metadata = {
  title: 'Kontakt — BoxSpot',
  description:
    'Kontakt BoxSpot for et tilbud på annoncering på pizzabakker eller gratis emballage til din restaurant.',
};

export default function KontaktPage() {
  return <KontaktContent />;
}
