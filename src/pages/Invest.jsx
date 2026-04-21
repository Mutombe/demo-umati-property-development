import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, WhatsappLogo, CurrencyDollar, ChartLineUp, ShieldCheck, Handshake, Target, CheckCircle } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import { investmentReasons, buySteps, pillars, business } from '../data/siteData';

const ICONS = [CurrencyDollar, ChartLineUp, CurrencyDollar, ShieldCheck, Target, Handshake];

export default function Invest() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Umati — I'd like to request your investor deck.")}`;

  return (
    <PageTransition>
      <SEO
        title="Invest with Umati — USD-Denominated Zimbabwean Property"
        description="USD-denominated, professionally structured, actively managed. Why invest in Zimbabwean property through Umati, and how to buy from abroad."
      />

      {/* Hero */}
      <section className="relative bg-onyx-950 text-white pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=75" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="eager" onError={(e)=>e.currentTarget.style.display='none'} />
        <div className="absolute inset-0 bg-onyx-950/70" />
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-ivory-300/50 mb-8">
            <Link to="/" className="hover:text-umati-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-umati-400">Invest</span>
          </nav>
          <p className="eyebrow text-umati-400 mb-5">Investment opportunity</p>
          <h1 className="display-mega text-[52px] sm:text-[80px] lg:text-[120px] leading-[0.9]">
            Zimbabwe real estate.
            <span className="block text-umati-500">Hard currency.</span>
            <span className="block">Actively managed.</span>
          </h1>
          <p className="mt-8 text-[17px] lg:text-[19px] text-ivory-200/85 max-w-3xl leading-[1.65]">
            Zimbabwe's residential property market — particularly Harare's northern suburbs — presents a compelling investment case grounded in structural undersupply, hard-currency pricing, and demonstrated capital appreciation. Umati is the platform to access it, with professional oversight at every stage.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-umati-500 hover:bg-umati-600 text-white px-7 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors">
              <WhatsappLogo size={16} weight="fill" /> Request investor deck
            </a>
            <Link to="/developments" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors">
              See current projects <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why invest — 6 reasons */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="max-w-3xl mb-14 lg:mb-20">
              <p className="eyebrow text-umati-600 mb-4">Why invest with Umati</p>
              <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">Six reasons.</h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {investmentReasons.map((r, i) => {
              const Icon = ICONS[i] || CheckCircle;
              return (
                <SectionReveal key={r.title} delay={i * 60}>
                  <div className="bg-ivory-100 border border-onyx-100 p-7 h-full hover:border-umati-500 transition-colors">
                    <Icon size={30} weight="duotone" className="text-umati-500 mb-6" />
                    <h3 className="font-display font-black text-[20px] leading-[1.15] tracking-[-0.03em] text-onyx-900 mb-3">{r.title}</h3>
                    <p className="text-[14px] text-onyx-600 leading-relaxed">{r.body}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to buy */}
      <section className="bg-onyx-900 text-white py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="max-w-3xl mb-14 lg:mb-20">
              <p className="eyebrow text-umati-400 mb-4">How to buy</p>
              <h2 className="display-mega text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                A straightforward process.
                <span className="block text-umati-500">Secure from abroad.</span>
              </h2>
              <p className="mt-6 text-ivory-200/80 text-[16px] leading-[1.7]">
                Purchasing Zimbabwean property is a straightforward, secure process through Umati's integrated platform. Legal, payment, and registration are all handled in-house.
              </p>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {buySteps.map((s, i) => (
              <SectionReveal key={s.step} delay={i * 80}>
                <div className="bg-white/[0.03] border border-white/10 p-6 h-full">
                  <p className="font-display font-black text-5xl text-umati-500 leading-none tracking-[-0.04em] mb-5">{s.step}</p>
                  <h3 className="font-display font-black text-[18px] leading-[1.15] tracking-[-0.03em] text-white mb-3">{s.title}</h3>
                  <p className="text-[13px] text-ivory-200/75 leading-relaxed">{s.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars (why Umati) */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="max-w-3xl mb-14 lg:mb-20">
              <p className="eyebrow text-umati-600 mb-4">The Umati commitment</p>
              <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                Results matter.
                <span className="block text-umati-500">Always have.</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {pillars.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 60}>
                <div className="bg-ivory-50 p-7 h-full border-l-2 border-umati-500">
                  <h3 className="font-display font-black text-[22px] tracking-[-0.03em] text-onyx-900 mb-4">{p.title}</h3>
                  <div className="space-y-4 text-[14px] leading-relaxed">
                    <div><p className="eyebrow text-umati-600 mb-1.5">Our standard</p><p className="text-onyx-700">{p.standard}</p></div>
                    <div className="pt-3 border-t border-onyx-100"><p className="eyebrow text-onyx-400 mb-1.5">For you</p><p className="text-onyx-600">{p.foryou}</p></div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="bg-umati-500 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/70 mb-5">Register your interest</p>
            <h2 className="display-mega text-white text-[40px] sm:text-[56px] lg:text-[80px] leading-[0.95]">
              Priority access to every launch.
            </h2>
            <p className="mt-6 text-white/90 text-[17px] leading-[1.65] max-w-xl">
              Registered investors receive priority notification of new project launches, off-plan pricing access, and invitations to Umati investor briefings before opportunities are released to the general market.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end w-full">
            <div className="bg-onyx-950 text-white p-8 max-w-md">
              <p className="eyebrow text-umati-400 mb-5">Please provide</p>
              <ul className="space-y-3 text-sm">
                {['Your full name and country of residence','Your WhatsApp number (with country code)','Whether you are a local, diaspora, or foreign investor','The project(s) you are interested in','Your approximate budget range (USD)'].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5"><CheckCircle size={18} weight="duotone" className="text-umati-400 mt-0.5 shrink-0" /><span className="text-ivory-200/85">{t}</span></li>
                ))}
              </ul>
              <Link to="/contact" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-umati-500 hover:bg-umati-600 text-white px-6 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors">
                Register now <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
