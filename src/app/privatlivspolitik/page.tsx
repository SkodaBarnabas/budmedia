import type { Metadata } from 'next';
import { PrivatlivspolitikContent } from './content';

export const metadata: Metadata = {
  title: 'Privatlivspolitik — BoxSpot',
  description: 'Privatlivspolitik for BoxSpot.',
};

export default function PrivatlivspolitikPage() {
  return <PrivatlivspolitikContent />;
}
