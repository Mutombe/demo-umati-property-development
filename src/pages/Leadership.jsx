import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import LeadershipCard from '../components/LeadershipCard';
import { leadership } from '../data/siteData';

export default function Leadership() {
  return (
    <PageTransition>
      <SEO
        title="Leadership — Umati Property Developments"
        description="The integrated leadership behind Umati — development, legal, investment, sales, and technical expertise under one accountable structure."
      />

      <section className="bg-onyx-950 text-white pt-28 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1900&q=80" alt="" className="w-full h-full object-cover" loading="eager" onError={(e)=>e.currentTarget.style.display='none'} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-onyx-950/75 to-onyx-950" />
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-ivory-300/50 mb-8">
            <Link to="/" className="hover:text-umati-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-umati-400">Leadership</span>
          </nav>
          <p className="eyebrow text-umati-400 mb-5">The people behind the platform</p>
          <h1 className="display-mega text-[52px] sm:text-[80px] lg:text-[120px] leading-[0.9]">
            One team.
            <span className="block text-umati-500">One standard.</span>
          </h1>
          <p className="mt-8 text-[17px] lg:text-[19px] text-ivory-200/80 max-w-2xl leading-[1.65]">
            Development, legal, investment, sales, and technical expertise brought together under one accountable structure — so your investment is never caught between conflicting parties.
          </p>
        </div>
      </section>

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {leadership.map((p, i) => (
              <SectionReveal key={p.name} delay={i * 80}>
                <LeadershipCard person={p} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-100 py-20 lg:py-28 border-t border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-umati-600 mb-4">Want to work with us?</p>
            <h2 className="display-mega text-onyx-900 text-[36px] sm:text-[52px] lg:text-[64px] leading-[0.95]">Partner with the Umati platform.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2.5 bg-onyx-900 hover:bg-umati-500 text-white px-8 py-5 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors">
            Start a conversation <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
