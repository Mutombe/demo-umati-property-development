import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import { insights } from '../data/siteData';

export default function Insights() {
  const [feature, ...rest] = insights;

  return (
    <PageTransition>
      <SEO
        title="Insights & news — Umati Property Developments"
        description="Market thinking, project updates, and investor briefings from Umati Property Developments."
      />

      <section className="bg-ivory-50 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-onyx-400 mb-8">
            <Link to="/" className="hover:text-umati-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-umati-600">Insights</span>
          </nav>
          <p className="eyebrow text-umati-600 mb-5">Insights & news</p>
          <h1 className="display-mega text-onyx-900 text-[52px] sm:text-[80px] lg:text-[120px] leading-[0.9]">
            Thinking out loud.
          </h1>
          <p className="mt-6 text-[17px] text-onyx-600 max-w-2xl leading-[1.65]">
            Project updates, market notes, and investor briefings — from the Umati platform.
          </p>
        </div>
      </section>

      {/* Feature article */}
      <section className="bg-ivory-50 pb-20 lg:pb-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <Link to={`/insights`} className="block group relative overflow-hidden bg-onyx-900">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/11] lg:aspect-auto overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-105" loading="eager" onError={(e)=>e.currentTarget.style.display='none'} />
                </div>
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <p className="eyebrow text-umati-400 mb-5">{feature.category} · {feature.date}</p>
                  <h2 className="display-mega text-white text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.98]">{feature.title}</h2>
                  <p className="mt-6 text-[16px] text-ivory-200/85 leading-[1.7]">{feature.excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-umati-400 group-hover:text-umati-300 text-[12px] tracking-[0.2em] uppercase font-bold">
                    Read article <ArrowUpRight size={16} weight="bold" />
                  </span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Rest */}
      <section className="bg-ivory-100 py-20 lg:py-28 border-t border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((a, i) => (
              <SectionReveal key={a.slug} delay={i * 70}>
                <Link to="/insights" className="block group">
                  <div className="aspect-[4/3] overflow-hidden bg-onyx-100">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" onError={(e)=>e.currentTarget.style.display='none'} />
                  </div>
                  <div className="pt-6">
                    <p className="eyebrow text-umati-600">{a.category} · {a.date}</p>
                    <h3 className="mt-3 font-display font-black text-[22px] leading-[1.1] tracking-[-0.03em] text-onyx-900 group-hover:text-umati-600 transition-colors">{a.title}</h3>
                    <p className="mt-3 text-[14px] text-onyx-600 leading-relaxed">{a.excerpt}</p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
