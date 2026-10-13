import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Design Concepts | EXTERRA Landscape, Patna',
  description:
    'Sample garden, rooftop and courtyard design concepts for villas, terraces and cafes in Patna, Danapur, Bihta and Hajipur.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Design Concepts | EXTERRA Landscape, Patna',
    description:
      'Sample garden, rooftop and courtyard design concepts for villas, terraces and cafes in Patna, Danapur, Bihta and Hajipur.',
    url: `${SITE_CONFIG.domain}/projects`,
    siteName: SITE_CONFIG.brandName,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
