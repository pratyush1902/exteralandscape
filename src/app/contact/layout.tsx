import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Book a Site Visit | EXTERRA Landscape, Patna',
  description:
    'Contact EXTERRA Landscape in Patna. Share your space and get a call from the founders.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Book a Site Visit | EXTERRA Landscape, Patna',
    description:
      'Contact EXTERRA Landscape in Patna. Share your space and get a call from the founders.',
    url: `${SITE_CONFIG.domain}/contact`,
    siteName: SITE_CONFIG.brandName,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
