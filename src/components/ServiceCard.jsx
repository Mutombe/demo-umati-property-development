import React from 'react';
import {
  Target, Handshake, Compass, HardHat, Megaphone, Key, WhatsappLogo,
} from '@phosphor-icons/react';
import { business } from '../data/siteData';

const ICONS = { target: Target, handshake: Handshake, compass: Compass, hardhat: HardHat, megaphone: Megaphone, key: Key };

export default function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] || Target;
  const num  = String(index + 1).padStart(2, '0');

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hi Umati, I'd like to learn about your ${service.short || service.title} service.`
  )}`;

  return (
    <div className="group relative bg-ivory-50 border border-onyx-100 hover:border-umati-500 transition-colors duration-500 p-7 sm:p-9 h-full flex flex-col">
      <div className="flex items-start justify-between mb-8">
        <div className="h-14 w-14 flex items-center justify-center bg-onyx-900 text-umati-400 group-hover:bg-umati-500 group-hover:text-white transition-colors duration-500">
          <Icon size={26} weight="duotone" />
        </div>
        <span className="font-display font-black text-5xl leading-none text-onyx-100 group-hover:text-umati-100 transition-colors duration-500">
          {num}
        </span>
      </div>
      <h3 className="font-display font-black text-[22px] sm:text-[24px] leading-[1.05] tracking-[-0.03em] text-onyx-900 mb-3">
        {service.title}
      </h3>
      <p className="text-[14px] text-onyx-600 leading-relaxed flex-1">{service.blurb}</p>
      <ul className="mt-6 pt-6 border-t border-onyx-100 space-y-2">
        {service.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-onyx-700">
            <span className="h-[6px] w-[6px] bg-umati-500 mt-1.5 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* WhatsApp CTA */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp about ${service.short || service.title}`}
        className="mt-7 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#1DA851] text-white text-[11px] tracking-[0.18em] uppercase font-bold transition-colors"
      >
        <WhatsappLogo size={16} weight="fill" /> Enquire on WhatsApp
      </a>
    </div>
  );
}
