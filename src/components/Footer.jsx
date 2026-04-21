import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Clock, Phone, EnvelopeSimple, WhatsappLogo, ArrowUpRight,
} from '@phosphor-icons/react';
import { business, services, developments } from '../data/siteData';

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
  const [logoOk, setLogoOk] = useState(true);

  return (
    <footer className="relative bg-onyx-950 text-ivory-100 mt-0">
      {/* Top banner band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="eyebrow text-umati-400">Let us build together</p>
            <h3 className="mt-5 display-mega text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.9] text-white">
              From concept<br />
              <span className="text-umati-500">to keys.</span>
            </h3>
            <p className="mt-6 max-w-xl text-ivory-300/80 text-lg leading-relaxed">
              Whether you are looking for your next home in Harare, exploring investment opportunities from abroad, or seeking a development partner — we welcome your inquiry.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-umati-500 hover:bg-umati-600 text-white px-7 py-4 text-[12px] tracking-[0.18em] uppercase font-semibold transition-colors"
              >
                <WhatsappLogo size={18} weight="fill" /> WhatsApp us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-4 text-[12px] tracking-[0.18em] uppercase font-semibold transition-colors"
              >
                Contact office <ArrowUpRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-white/10">
            <p className="eyebrow text-ivory-300/60">Our preferred channel — fastest response</p>
            <div className="mt-6 space-y-5">
              <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 text-white hover:text-umati-400 transition-colors">
                <Phone size={18} weight="bold" className="mt-1 text-umati-500 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Phone</p>
                  <p className="text-lg font-semibold">{business.phone}</p>
                  <p className="text-sm text-ivory-300/60">{business.phoneAlt}</p>
                </div>
              </a>
              <a href={`mailto:${business.email}`} className="flex items-start gap-3 text-white hover:text-umati-400 transition-colors">
                <EnvelopeSimple size={18} weight="bold" className="mt-1 text-umati-500 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Email</p>
                  <p className="text-lg font-semibold">{business.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} weight="bold" className="mt-1 text-umati-500 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Office</p>
                  <p className="text-base text-white">{business.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} weight="bold" className="mt-1 text-umati-500 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Hours</p>
                  <p className="text-sm text-ivory-300/80">Mon–Fri {business.hours.weekdays}</p>
                  <p className="text-sm text-ivory-300/80">Sat {business.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav columns */}
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 grid grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="col-span-2 lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3">
            {logoOk ? (
              <img
                src={business.logoDark}
                alt={business.name}
                className="h-11 w-auto"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; setLogoOk(false); }}
              />
            ) : (
              <span className="font-display font-black text-3xl tracking-[-0.04em] text-white">
                {business.wordmark}
              </span>
            )}
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-ivory-300/70 max-w-sm">
            An integrated turnkey property developer headquartered in Harare. Structuring, building, and managing residential and commercial developments across Zimbabwe.
          </p>
          <p className="mt-5 text-umati-400 text-sm italic">Redefining Lifestyles.</p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.18em] uppercase font-semibold text-ivory-300/50 mb-5">Company</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/" className="text-ivory-200 hover:text-umati-400">Home</Link></li>
            <li><Link to="/services" className="text-ivory-200 hover:text-umati-400">What we do</Link></li>
            <li><Link to="/leadership" className="text-ivory-200 hover:text-umati-400">Leadership</Link></li>
            <li><Link to="/insights" className="text-ivory-200 hover:text-umati-400">Insights</Link></li>
            <li><Link to="/contact" className="text-ivory-200 hover:text-umati-400">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.18em] uppercase font-semibold text-ivory-300/50 mb-5">Developments</h4>
          <ul className="space-y-3 text-[14px]">
            {developments.slice(0, 5).map((d) => (
              <li key={d.slug}>
                <Link
                  to={`/developments/${d.slug}`}
                  className="text-ivory-200 hover:text-umati-400 flex items-center justify-between gap-3"
                >
                  <span>{d.name}</span>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-ivory-300/40">{d.status}</span>
                </Link>
              </li>
            ))}
            <li><Link to="/developments" className="text-umati-400 hover:text-umati-300 flex items-center gap-1.5">View all <ArrowUpRight size={14} /></Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.18em] uppercase font-semibold text-ivory-300/50 mb-5">Services</h4>
          <ul className="space-y-3 text-[14px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services`} className="text-ivory-200 hover:text-umati-400">{s.short}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-300/50">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">USD-denominated · Professionally structured · Zimbabwe</p>
          <p>
            Website by{' '}
            <a href="https://bitstudio.co.zw" target="_blank" rel="noopener noreferrer" className="text-umati-400 hover:text-umati-300 underline-offset-2 hover:underline">
              Bit Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
