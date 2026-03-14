import type { Metadata } from 'next';
import { PresseContent } from './content';

export const metadata: Metadata = {
  title: 'Presse — BudMedia',
  description:
    'Pressemateriale, nøgletal og brandaktiver for BudMedia.',
};

export default function PressePage() {
  return <PresseContent />;
}
