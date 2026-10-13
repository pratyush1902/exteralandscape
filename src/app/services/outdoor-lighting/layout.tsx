import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Architectural Night Lighting in Patna | EXTERRA Landscape',
  description:
    'Warm 2700K low-voltage LED garden lighting that highlights trees and paths and makes steps safer after dark in Patna.',
  alternates: { canonical: '/services/outdoor-lighting' },
  openGraph: {
    title: 'Architectural Night Lighting in Patna | EXTERRA Landscape',
    description:
      'Warm 2700K low-voltage LED garden lighting that highlights trees and paths and makes steps safer after dark in Patna.',
    url: `${SITE_CONFIG.domain}/services/outdoor-lighting`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
