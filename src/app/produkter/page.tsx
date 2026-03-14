import type { Metadata } from 'next';
import { ProdukterContent } from './content';

export const metadata: Metadata = {
  title: 'Produkter — BudMedia',
  description:
    'Pizzabakker, leveringsposer og indpakningspapir med din annonce. Fuld farvetryk, food-safe, EU-certificeret. Se produkter og priser.',
};

export default function ProdukterPage() {
  return <ProdukterContent />;
}
