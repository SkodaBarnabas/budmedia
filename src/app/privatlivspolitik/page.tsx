import type { Metadata } from 'next';
import { PrivatlivspolitikContent } from './content';

export const metadata: Metadata = {
  title: 'Privatlivspolitik — BudMedia',
  description: 'Privatlivspolitik for BudMedia.',
};

export default function PrivatlivspolitikPage() {
  return <PrivatlivspolitikContent />;
}
