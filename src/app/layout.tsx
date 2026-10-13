import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/config/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a1a12',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: 'EXTERRA Landscape | Garden & Landscape Design in Patna',
  description:
    'Garden design, lawns, drip irrigation, stone pathways and vertical gardens in Patna. Transparent pricing with an itemized BOQ. Book a site visit.',
  keywords:
    'exterra landscape, garden design patna, landscape design patna, drip irrigation patna, stone pathways patna, vertical garden patna, saurabh raj, gaurav raj',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EXTERRA Landscape | Garden & Landscape Design in Patna',
    description:
      'Garden design, lawns, drip irrigation, stone pathways and vertical gardens in Patna. Transparent pricing with an itemized BOQ. Book a site visit.',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 600,
        alt: 'EXTERRA Landscape — Shaping Outdoor Living in Patna',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased text-dark bg-white">
        {children}
      </body>
    </html>
  );
}
