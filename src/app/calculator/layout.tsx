import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Landscape Cost Calculator Patna | EXTERRA Landscape',
  description:
    'Get a quick ballpark estimate for your garden, terrace or estate in Patna. Detailed BOQ after a site visit.',
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: 'Landscape Cost Calculator Patna | EXTERRA Landscape',
    description:
      'Get a quick ballpark estimate for your garden, terrace or estate in Patna. Detailed BOQ after a site visit.',
    url: `${SITE_CONFIG.domain}/calculator`,
    siteName: SITE_CONFIG.brandName,
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
