import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone, MagnifyingGlass } from '@phosphor-icons/react';
import { business, navLinks } from '../data/siteData';

export default function Navbar({ onOpenSearch = () => {} }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const [logoDarkOk, setLogoDarkOk] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ${
          transparent ? 'bg-transparent' : 'glass-nav'
        }`}
      >
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 h-[72px] lg:h-20 flex items-center justify-between gap-4">
          {/* Logo + wordmark */}
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            {transparent && logoDarkOk ? (
              <img
                src={business.logoDark}
                alt={business.name}
                className="h-12 sm:h-14 lg:h-16 w-auto shrink-0"
                loading="eager"
                onError={() => setLogoDarkOk(false)}
              />
            ) : logoOk ? (
              <img
                src={business.logo}
                alt={business.name}
                className="h-12 sm:h-14 lg:h-16 w-auto shrink-0"
                loading="eager"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <span
                className={`font-display font-black text-2xl tracking-[-0.04em] ${
                  transparent ? 'text-white' : 'text-onyx-900'
                }`}
              >
                {business.wordmark}
              </span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9 xl:gap-11">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-semibold tracking-[0.02em] transition-colors ${
                    transparent
                      ? isActive
                        ? 'text-umati-400'
                        : 'text-white/90 hover:text-umati-400'
                      : isActive
                      ? 'text-umati-600'
                      : 'text-onyx-700 hover:text-umati-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span
                        className={`absolute -bottom-1.5 left-0 right-0 h-[2px] ${
                          transparent ? 'bg-umati-400' : 'bg-umati-500'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right side CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Open search"
              className={`flex h-10 w-10 items-center justify-center transition-colors ${
                transparent
                  ? 'text-white/90 hover:text-umati-400'
                  : 'text-onyx-700 hover:text-umati-600'
              }`}
            >
              <MagnifyingGlass size={18} weight="bold" />
            </button>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              aria-label="Call"
              className={`hidden md:flex h-10 w-10 items-center justify-center transition-colors ${
                transparent
                  ? 'text-white/90 hover:text-umati-400'
                  : 'text-onyx-700 hover:text-umati-600'
              }`}
            >
              <Phone size={18} weight="bold" />
            </a>
            <Link
              to="/developments"
              className="hidden lg:inline-flex items-center gap-2 bg-umati-500 hover:bg-umati-600 text-white px-5 py-2.5 text-[12px] tracking-[0.14em] uppercase font-semibold transition-colors"
            >
              Explore developments
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`h-11 w-11 flex lg:hidden items-center justify-center ${
                transparent ? 'text-white' : 'text-onyx-900'
              }`}
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer when not transparent */}
      <div className={transparent ? '' : 'h-[72px] lg:h-20'} />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-onyx-900/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-onyx-900 flex flex-col transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/10">
            <span className="font-display font-black text-xl text-white tracking-[-0.04em]">
              {business.wordmark}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => { setOpen(false); onOpenSearch(); }}
                aria-label="Open search"
                className="h-11 w-11 flex items-center justify-center text-white hover:text-umati-400 transition-colors"
              >
                <MagnifyingGlass size={22} weight="bold" />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-11 w-11 flex items-center justify-center text-white"
              >
                <X size={24} weight="bold" />
              </button>
            </div>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-0.5">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-4 border-b border-white/10 font-display font-bold text-[26px] tracking-[-0.03em] transition-colors ${
                    isActive ? 'text-umati-400' : 'text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-white/10 space-y-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full flex items-center justify-center gap-2 bg-umati-500 hover:bg-umati-600 text-white py-3.5 text-[12px] tracking-[0.18em] uppercase font-semibold transition-colors"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="block w-full flex items-center justify-center gap-2 border border-white/30 text-white py-3.5 text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-white hover:text-onyx-900 transition-colors"
            >
              <Phone size={16} weight="fill" /> Call office
            </a>
            <p className="text-[11px] text-white/50 text-center mt-4">{business.address}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
