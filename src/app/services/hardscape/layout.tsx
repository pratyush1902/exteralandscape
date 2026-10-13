import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Hardscape & Stone Walkways in Patna | EXTERRA Landscape',
  description:
    'Pathways that stay level. Natural stone walkways, stepping stones and patios laid on a compacted base in Patna and Bihar.',
  alternates: { canonical: '/services/hardscape' },
  openGraph: {
    title: 'Hardscape & Stone Walkways in Patna | EXTERRA Landscape',
    description:
      'Pathways that stay level. Natural stone walkways, stepping stones and patios laid on a compacted base in Patna and Bihar.',
    url: `${SITE_CONFIG.domain}/services/hardscape`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
