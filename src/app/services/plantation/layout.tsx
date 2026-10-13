import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Plantation & Canopy Planning in Patna | EXTERRA Landscape',
  description:
    'Trees and plants chosen for Bihar’s soil and climate. Palms, shrubs, hedges and shade trees planned across the seasons.',
  alternates: { canonical: '/services/plantation' },
  openGraph: {
    title: 'Plantation & Canopy Planning in Patna | EXTERRA Landscape',
    description:
      'Trees and plants chosen for Bihar’s soil and climate. Palms, shrubs, hedges and shade trees planned across the seasons.',
    url: `${SITE_CONFIG.domain}/services/plantation`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
