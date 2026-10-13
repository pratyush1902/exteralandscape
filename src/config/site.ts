export const SITE_CONFIG = {
  brandName: 'EXTERRA Landscape',
  brandUpper: 'EXTERRA LANDSCAPE',
  tagline: 'Shaping Outdoor Living',
  domain: 'https://exteralandscape.vercel.app',
  phoneDisplay: '+91 93153 59040',
  phoneHref: 'tel:+919315359040',
  whatsappNumber: '919315359040',
  email: 'info@exterralandscape.com',
  instagramHandle: '@exterralandscape',
  instagramUrl: 'https://instagram.com/exterralandscape',
  address: 'Bailey Road, Danapur, Patna, Bihar 801503',
  googleBusinessUrl: 'https://maps.google.com/?q=Bailey+Road+Danapur+Patna+Bihar',
  yearFounded: '2025',
  foundedYear: '2025',
  siteVisitPolicy:
    'Free within Patna city limits. For sites outside Patna, a small visit fee applies and is adjusted against your project quote.',
  replyTimePromise: 'We reply within 24 hours.',
  replyTime: 'We reply within 24 hours.',
  coverageShort: 'Patna, Danapur, Bihta, Hajipur & nearby Bihar',
  coverageFull:
    'Greater Patna (Bailey Road, Danapur, Saguna More, Kankarbagh, Boring Road, Patliputra, Rajendra Nagar). Bihta, Maner and Naubatpur for villas and farmhouses. Hajipur and beyond for larger estates and commercial sites, with visits scheduled in advance.',
  coverage: {
    patnaAndSuburbs:
      'Bailey Road, Danapur, Saguna More, Kankarbagh, Boring Road, Patliputra, and Rajendra Nagar — consultations within 24–48 hours.',
    westernCorridor:
      'Bihta, Maner, and Naubatpur — villa and farmhouse sites.',
    widerBihar:
      'Hajipur, Muzaffarpur, Gaya, and nearby districts — scheduled visits for larger residential and commercial sites.',
  },
};

/**
 * Generates a safely URL-encoded WhatsApp link using the single brand variable.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = `Hello ${SITE_CONFIG.brandName}, I would like to discuss a landscape project and book a site visit.`;
  const text = customMessage || defaultMsg;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
