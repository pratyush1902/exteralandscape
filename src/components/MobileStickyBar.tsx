import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-deep/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 pb-safe shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-earth hover:text-earth transition-colors active:scale-95"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25d366] hover:bg-[#1da851] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
