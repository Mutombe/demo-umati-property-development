import React, { useEffect, useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const phone = business.whatsapp.replace(/[^0-9]/g, '');
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hi Umati, I'd like to learn more about your developments."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40 flex items-center transition-all duration-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Desktop hover label */}
      <span className="hidden lg:flex items-center mr-3 px-4 py-2 bg-onyx-900 text-white text-[11px] tracking-[0.18em] uppercase font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </span>

      {/* Button with pulse ring */}
      <span className="relative flex items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          style={{ animationDuration: '2.2s' }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"
          style={{ animationDuration: '2.2s', animationDelay: '1.1s' }}
        />
        <span
          className="relative h-14 w-14 lg:h-[60px] lg:w-[60px] rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white flex items-center justify-center shadow-[0_10px_24px_-6px_rgba(37,211,102,0.55)] transition-all duration-300 group-hover:scale-105"
        >
          <WhatsappLogo size={30} weight="fill" />
        </span>
      </span>
    </a>
  );
}
