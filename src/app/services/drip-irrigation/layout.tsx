import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Automated Drip & Sprinklers in Patna | EXTERRA Landscape',
  description:
    'Water your garden without lifting a hose. Separate automatic drip and sprinkler zones for lawns, shrubs and palms in Patna.',
  alternates: { canonical: '/services/drip-irrigation' },
  openGraph: {
    title: 'Automated Drip & Sprinklers in Patna | EXTERRA Landscape',
    description:
      'Water your garden without lifting a hose. Separate automatic drip and sprinkler zones for lawns, shrubs and palms in Patna.',
    url: `${SITE_CONFIG.domain}/services/drip-irrigation`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
