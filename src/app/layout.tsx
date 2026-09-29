import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

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
  title: 'EXTERRA LANDSCAPE — Shaping Outdoor Living | Patna, Bihar',
  description: 'EXTERRA LANDSCAPE: Shaping Outdoor Living. Premier landscape architecture, living lawn development, automated drip irrigation, and outdoor civil execution in Patna, Bihar. Founded by B.Sc Agriculture & Civil Engineering experts.',
  keywords: 'exterra landscape, shaping outdoor living, landscape design patna, garden contractor bihar, villa landscape design, drip irrigation patna, vertical garden patna, saurabh raj horticulture',
  openGraph: {
    title: 'EXTERRA LANDSCAPE — Shaping Outdoor Living',
    description: 'Bespoke architectural landscape design, climate-resilient plantation, drip irrigation and civil outdoor development in Patna, Bihar.',
    url: 'https://exterralandscape.com',
    siteName: 'EXTERRA LANDSCAPE',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 600,
        alt: 'EXTERRA LANDSCAPE — Shaping Outdoor Living',
      },
    ],
    locale: 'en_IN',
    type: 'website',
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
