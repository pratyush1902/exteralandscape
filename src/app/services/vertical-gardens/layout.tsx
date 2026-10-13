import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Vertical Gardens & Bio-Walls in Patna | EXTERRA Landscape',
  description:
    'A green wall for small spaces. Modular planter frames for courtyards, balconies and shop fronts with built-in drip watering in Patna.',
  alternates: { canonical: '/services/vertical-gardens' },
  openGraph: {
    title: 'Vertical Gardens & Bio-Walls in Patna | EXTERRA Landscape',
    description:
      'A green wall for small spaces. Modular planter frames for courtyards, balconies and shop fronts with built-in drip watering in Patna.',
    url: `${SITE_CONFIG.domain}/services/vertical-gardens`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
