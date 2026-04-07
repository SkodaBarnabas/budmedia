import type { Metadata } from 'next';
import { PresseContent } from './content';

export const metadata: Metadata = {
  title: 'Presse — BoxSpot',
  description:
    'Pressemateriale, nøgletal og brandaktiver for BoxSpot.',
};

export default function PressePage() {
  return <PresseContent />;
}
