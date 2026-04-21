import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlass,
  X,
  WhatsappLogo,
  ArrowRight,
  Buildings,
  Briefcase,
  UsersThree,
  Quotes,
} from '@phosphor-icons/react';
import {
  developments,
  services,
  leadership,
  insights,
  business,
} from '../data/siteData';

const SUGGESTIONS = [
  'Ivory Gardens',
  'Land Acquisition',
  'Avondale',
  'Marlborough',
  'Off-plan',
  'Diaspora investor',
];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return null;

    const match = (...fields) =>
      fields
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(needle);

    const devs = developments
      .filter((d) =>
        match(d.name, d.tagline, d.summary, d.description, d.location, d.type, d.category, d.units)
      )
      .slice(0, 8)
      .map((d) => ({
        key: `dev-${d.slug}`,
        to: `/developments/${d.slug}`,
        title: d.name,
        meta: `${d.location} · ${d.type}`,
        body: d.summary,
        image: d.hero,
      }));

    const svcs = services
      .filter((s) =>
        match(s.title, s.short, s.blurb, (s.bullets || []).join(' '))
      )
      .slice(0, 8)
      .map((s) => ({
        key: `svc-${s.slug}`,
        to: `/services`,
        title: s.title,
        meta: s.short,
        body: s.blurb,
        image: s.image,
      }));

    const team = leadership
      .filter((m) => match(m.name, m.role, m.bio))
      .slice(0, 8)
      .map((m, i) => ({
        key: `lead-${i}`,
        to: `/leadership`,
        title: m.name,
        meta: m.role,
        body: m.bio,
        image: m.image,
      }));

    const articles = insights
      .filter((a) => match(a.title, a.excerpt, a.category))
      .slice(0, 8)
      .map((a) => ({
        key: `ins-${a.slug}`,
        to: `/insights`,
        title: a.title,
        meta: `${a.category} · ${a.date}`,
        body: a.excerpt,
        image: a.image,
      }));

    return [
      { label: 'Developments', icon: Buildings, items: devs },
      { label: 'Services',     icon: Briefcase, items: svcs },
      { label: 'Leadership',   icon: UsersThree, items: team },
      { label: 'Insights',     icon: Quotes,    items: articles },
    ].filter((g) => g.items.length > 0);
  }, [q]);

  const totalResults =
    groups?.reduce((acc, g) => acc + g.items.length, 0) ?? 0;

  if (!open) return null;

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hi Umati — I was searching for "${q}" and could not find it on the site.`
  )}`;

  return (
    <div className="fixed inset-0 z-[60] bg-ivory-50/95 backdrop-blur-xl overflow-y-auto">
      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-14 pt-10 pb-24">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-5 right-5 sm:top-7 sm:right-8 lg:top-8 lg:right-14 h-11 w-11 flex items-center justify-center text-onyx-800 hover:text-umati-600 transition-colors"
        >
          <X size={24} weight="bold" />
        </button>

        {/* Title */}
        <p className="eyebrow text-umati-600 text-center mt-10">Search the Umati platform</p>

        {/* Input */}
        <div className="relative mt-5 max-w-3xl mx-auto">
          <MagnifyingGlass
            size={22}
            weight="bold"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-onyx-400"
          />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'Ivory Gardens' or 'Land acquisition'"
            className="w-full pl-10 pr-4 py-4 sm:py-5 bg-transparent border-b border-onyx-300 focus:border-umati-500 outline-none text-2xl sm:text-4xl lg:text-5xl font-display font-black tracking-[-0.03em] text-onyx-900 placeholder:text-onyx-300 placeholder:font-normal"
            style={{ borderRadius: 0 }}
          />
        </div>

        {/* Body */}
        <div className="mt-12 lg:mt-16">
          {/* Empty — no query */}
          {!q.trim() && (
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-onyx-500 mb-4">Try searching</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQ(t)}
                    className="px-4 py-2 text-[13px] tracking-[0.02em] border border-onyx-200 hover:border-umati-500 hover:text-umati-600 transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-14 grid sm:grid-cols-2 gap-3">
                <QuickLink to="/developments" label="All developments" onClick={onClose} />
                <QuickLink to="/services" label="What we do" onClick={onClose} />
                <QuickLink to="/invest" label="Why invest with Umati" onClick={onClose} />
                <QuickLink to="/contact" label="Register your interest" onClick={onClose} />
              </div>
            </div>
          )}

          {/* No results */}
          {q.trim() && totalResults === 0 && (
            <div className="text-center py-16">
              <p className="display-mega text-onyx-900 text-3xl sm:text-4xl">
                Nothing matched.
              </p>
              <p className="mt-3 text-onyx-500 text-sm">
                We are happy to help you find it.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-[#25D366] hover:bg-[#1DA851] text-white text-[11px] tracking-[0.18em] uppercase font-bold transition-colors"
              >
                <WhatsappLogo size={16} weight="fill" /> WhatsApp us
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          )}

          {/* Results grouped */}
          {q.trim() && totalResults > 0 && (
            <>
              <p className="eyebrow text-onyx-500 mb-10">
                {totalResults} {totalResults === 1 ? 'result' : 'results'}
              </p>

              <div className="space-y-14">
                {groups.map((g) => {
                  const GroupIcon = g.icon;
                  return (
                    <div key={g.label}>
                      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-onyx-200">
                        <GroupIcon size={16} weight="bold" className="text-umati-500" />
                        <span className="eyebrow text-onyx-800">{g.label}</span>
                        <span className="ml-auto text-[11px] text-onyx-400">
                          {g.items.length} {g.items.length === 1 ? 'match' : 'matches'}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {g.items.map((it) => (
                          <Link
                            key={it.key}
                            to={it.to}
                            onClick={onClose}
                            className="group flex gap-4 p-4 bg-ivory-100 hover:bg-ivory-200 border border-transparent hover:border-umati-500 transition-all"
                          >
                            {it.image && (
                              <div className="h-20 w-24 shrink-0 overflow-hidden bg-onyx-100">
                                <img
                                  src={it.image}
                                  alt=""
                                  loading="lazy"
                                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                  onError={(e) => (e.currentTarget.style.display = 'none')}
                                />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <h4 className="font-display font-black text-[16px] text-onyx-900 leading-[1.15] tracking-[-0.02em] group-hover:text-umati-600 transition-colors">
                                {it.title}
                              </h4>
                              {it.meta && (
                                <p className="mt-1 text-[11px] tracking-[0.12em] uppercase text-onyx-500">
                                  {it.meta}
                                </p>
                              )}
                              {it.body && (
                                <p className="mt-2 text-[13px] text-onyx-600 leading-snug line-clamp-2">
                                  {it.body}
                                </p>
                              )}
                            </div>
                            <ArrowRight
                              size={18}
                              weight="bold"
                              className="text-onyx-300 group-hover:text-umati-500 group-hover:translate-x-0.5 transition-all shrink-0 self-center"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function QuickLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group flex items-center justify-between px-5 py-4 bg-ivory-100 hover:bg-onyx-900 hover:text-white border border-onyx-100 transition-colors"
    >
      <span className="text-[13px] tracking-[0.08em] uppercase font-bold">{label}</span>
      <ArrowRight
        size={16}
        weight="bold"
        className="text-onyx-400 group-hover:text-umati-400 group-hover:translate-x-0.5 transition-all"
      />
    </Link>
  );
}
