import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Lawn & Garden Architecture in Patna | EXTERRA Landscape',
  description:
    'A lawn that stays green all year. Soil preparation, ground levelling and Korean Carpet, Bermuda or Selection 1 grass installation in Patna.',
  alternates: { canonical: '/services/lawn-garden' },
  openGraph: {
    title: 'Lawn & Garden Architecture in Patna | EXTERRA Landscape',
    description:
      'A lawn that stays green all year. Soil preparation, ground levelling and Korean Carpet, Bermuda or Selection 1 grass installation in Patna.',
    url: `${SITE_CONFIG.domain}/services/lawn-garden`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
