import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Sevensky',
  description: 'Transforming brands through experiences.',
};

import AboutContent from './AboutContent';

export default function AboutPage() {
  return <AboutContent />;
}
