import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FunnelSimple } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import ProjectCard from '../components/ProjectCard';
import { developments } from '../data/siteData';

const FILTERS = ['All', 'Completed', 'Selling', 'Pipeline'];

export default function Developments() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(
    () => developments.filter((d) => filter === 'All' || d.status === filter),
    [filter]
  );

  return (
    <PageTransition>
      <SEO
        title="Developments — Umati Property Developments"
        description="Completed, active, and pipeline developments across Harare's prime northern suburbs and Zimbabwe's secondary growth cities."
      />

      {/* Hero */}
      <section className="relative bg-onyx-950 text-white pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=75"
            alt=""
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            onError={(e) => e.currentTarget.style.display='none'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-onyx-950/80 to-onyx-950" />
        </div>
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-ivory-300/50 mb-8">
            <Link to="/" className="hover:text-umati-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-umati-400">Developments</span>
          </nav>
          <p className="eyebrow text-umati-400 mb-5">Our portfolio</p>
          <h1 className="display-mega text-[52px] sm:text-[80px] lg:text-[112px] leading-[0.9]">
            Three complete.
            <span className="block text-umati-500">Three in motion.</span>
          </h1>
          <p className="mt-8 text-[17px] lg:text-[19px] text-ivory-200/80 max-w-2xl leading-[1.65]">
            Forty-plus units already delivered. A pipeline that extends from Harare's prime northern suburbs to Zimbabwe's fastest-growing secondary cities — each one held to the same uncompromising Umati standard.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[72px] lg:top-20 z-20 bg-ivory-50/90 backdrop-blur-md border-b border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-4 flex items-center gap-6 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-2 text-onyx-500 text-[11px] tracking-[0.16em] uppercase font-semibold shrink-0">
            <FunnelSimple size={14} weight="bold" /> Filter
          </div>
          <div className="flex gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-[12px] tracking-[0.14em] uppercase font-semibold transition-colors ${
                  filter === f
                    ? 'bg-onyx-900 text-white'
                    : 'text-onyx-600 hover:text-onyx-900'
                }`}
              >
                {f} <span className="ml-1 text-[10px] opacity-60">
                  ({f === 'All' ? developments.length : developments.filter((d) => d.status === f).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          {visible.length === 0 ? (
            <p className="text-onyx-500 text-center py-20">No developments match that filter yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {visible.map((p, i) => (
                <SectionReveal key={p.slug} delay={i * 70}>
                  <ProjectCard project={p} />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-100 py-20 lg:py-28 border-t border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-umati-600 mb-4">Priority access</p>
            <h2 className="display-mega text-onyx-900 text-[36px] sm:text-[52px] lg:text-[64px] leading-[0.95]">
              Register for the next launch.
            </h2>
            <p className="mt-5 text-onyx-600 text-[17px] leading-[1.65] max-w-xl">
              Registered investors receive priority notification of new launches, off-plan pricing access, and invitations to Umati investor briefings before opportunities go public.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-umati-500 hover:bg-umati-600 text-white px-8 py-5 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors"
            >
              Register interest <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
