import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'About EXTERRA Landscape | Founders Saurabh & Gaurav Raj',
  description:
    'A Patna landscape studio founded by two brothers: agriculture science and civil engineering in one team.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About EXTERRA Landscape | Founders Saurabh & Gaurav Raj',
    description:
      'A Patna landscape studio founded by two brothers: agriculture science and civil engineering in one team.',
    url: `${SITE_CONFIG.domain}/about`,
    siteName: SITE_CONFIG.brandName,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
