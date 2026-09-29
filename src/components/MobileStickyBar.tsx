import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-deep/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:+919315359040"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20want%20to%20discuss%20a%20landscape%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25d366] hover:bg-[#1da851] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
