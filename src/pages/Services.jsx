import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import { services, ecosystem } from '../data/siteData';

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="What we do — Umati Property Developments"
        description="Deal structuring, investor mobilisation, master planning, construction, off-plan sales, and property management. End-to-end under one integrated platform."
      />

      {/* Hero */}
      <section className="bg-onyx-950 text-white pt-28 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1900&q=80" alt="" className="w-full h-full object-cover" loading="eager" onError={(e)=>e.currentTarget.style.display='none'} />
        </div>
        <div className="absolute inset-0 bg-onyx-950/70" />
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-ivory-300/50 mb-8">
            <Link to="/" className="hover:text-umati-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-umati-400">What we do</span>
          </nav>
          <p className="eyebrow text-umati-400 mb-5">What we do</p>
          <h1 className="display-mega text-[52px] sm:text-[80px] lg:text-[112px] leading-[0.9]">
            Turnkey, means
            <span className="block text-umati-500">turnkey.</span>
          </h1>
          <p className="mt-8 text-[17px] lg:text-[19px] text-ivory-200/80 max-w-3xl leading-[1.65]">
            We are selective in the projects we take on, choosing only those with the right fundamentals, the right location, and the right potential for lasting financial and community impact. Every stage — concept to completion — is delivered in-house.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-onyx-900 text-white py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <p className="eyebrow text-umati-400 mb-4">Integrated ecosystem</p>
              <h2 className="display-mega text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                Four entities, one standard.
              </h2>
              <p className="mt-6 text-ivory-200/80 text-[17px] leading-[1.7]">
                Every Umati project is delivered in concert by four strategically aligned entities — eliminating the gaps, delays, and conflicts that arise when functions are managed by separate, unaligned parties.
              </p>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystem.map((e, i) => (
              <SectionReveal key={e.name} delay={i * 80}>
                <div className="bg-white/[0.03] border border-white/10 p-7 h-full">
                  <p className="font-mono text-xs text-umati-400 mb-4">0{i + 1} / 04</p>
                  <h3 className="font-display font-black text-[22px] leading-[1.1] tracking-[-0.03em] text-white mb-1.5">{e.name}</h3>
                  <p className="eyebrow text-umati-400 mb-5">{e.role}</p>
                  <p className="text-[14px] text-ivory-200/75 leading-relaxed">{e.blurb}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-umati-600 mb-4">Thinking of a partnership?</p>
            <h2 className="display-mega text-onyx-900 text-[36px] sm:text-[52px] lg:text-[64px] leading-[0.95]">
              Bring us the land.
              <span className="block text-umati-500">We will structure the rest.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 bg-onyx-900 hover:bg-umati-500 text-white px-8 py-5 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors"
          >
            Start a conversation <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
