import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Landscaping Services in Patna | EXTERRA Landscape',
  description:
    'Lawn and garden design, plantation, stone walkways, drip irrigation, night lighting and vertical gardens across Patna and nearby Bihar.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Landscaping Services in Patna | EXTERRA Landscape',
    description:
      'Lawn and garden design, plantation, stone walkways, drip irrigation, night lighting and vertical gardens across Patna and nearby Bihar.',
    url: `${SITE_CONFIG.domain}/services`,
    siteName: SITE_CONFIG.brandName,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
