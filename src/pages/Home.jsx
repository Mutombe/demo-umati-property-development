import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, MapPin, Quotes, WhatsappLogo, Phone, Shield, ChartLineUp, Handshake,
} from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';
import {
  business, heroSlides, stats, services, developments, ecosystem,
  pillars, testimonials,
} from '../data/siteData';

export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[slide];
  const featured = developments.find((d) => d.status === 'Selling') || developments[3];
  const completed = developments.filter((d) => d.status === 'Completed').slice(0, 3);
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <PageTransition>
      <SEO
        title="Umati Property Developments — Integrated Turnkey Developer | Harare, Zimbabwe"
        description="40+ units delivered across 3 completed gated estates in Harare's prime northern suburbs. USD-denominated investment, professionally structured. Redefining lifestyles."
      />

      {/* ================================================================ */}
      {/*  HERO — full-bleed cinematic carousel                             */}
      {/* ================================================================ */}
      <section className="relative -mt-[72px] lg:-mt-20 h-[100svh] min-h-[600px] max-h-[920px] overflow-hidden bg-onyx-950">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt=""
              className="w-full h-full object-cover object-center animate-slow-drift"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : 'low'}
              decoding={i === 0 ? 'sync' : 'async'}
              onError={(e) => e.currentTarget.style.display='none'}
            />
          </div>
        ))}

        {/* Vignette / text protection */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/60 via-onyx-950/20 to-onyx-950/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/70 via-transparent to-transparent pointer-events-none" />

        {/* Content — 3-row grid: top spacer (nav + breathing) / centred content / bottom meta */}
        <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto]">
          {/* Top spacer — clears nav (72/80px) plus comfortable breathing room */}
          <div className="pt-[88px] sm:pt-[104px] lg:pt-[120px]" />

          {/* Hero content — vertically centred in the free space */}
          <div className="max-w-[1480px] mx-auto w-full px-5 sm:px-8 lg:px-14 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <span className="h-[1px] w-10 bg-umati-500" />
              <p className="eyebrow text-umati-400">{current.eyebrow}</p>
            </div>
            <h1
              className="display-mega text-white max-w-[1100px] leading-[0.9]"
              style={{ fontSize: 'clamp(2.5rem, 8.2vw, 7.5rem)' }}
            >
              {current.headline}<br />
              <span className="text-umati-500">{current.headlineSecond}</span>
            </h1>
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] lg:text-[19px] text-ivory-100/85 max-w-2xl leading-[1.55]">
              {current.sub}
            </p>

            {/* Split reservation-style CTA */}
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-0 border border-white/20 max-w-xl">
              <Link
                to="/developments"
                className="flex-1 bg-umati-500 hover:bg-umati-600 text-white px-6 sm:px-7 py-4 sm:py-5 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold inline-flex items-center justify-center gap-2.5 transition-colors min-h-[44px]"
              >
                Explore developments <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                to="/invest"
                className="flex-1 bg-transparent hover:bg-white/10 text-white px-6 sm:px-7 py-4 sm:py-5 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold inline-flex items-center justify-center gap-2.5 transition-colors border-l border-white/20 min-h-[44px]"
              >
                Invest with Umati <ArrowUpRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          {/* Bottom meta — pinned to bottom of viewport */}
          <div className="max-w-[1480px] mx-auto w-full px-5 sm:px-8 lg:px-14 pb-6 sm:pb-8 lg:pb-12">
            <div className="flex flex-wrap items-end gap-x-8 lg:gap-x-10 gap-y-4">
              <div>
                <p className="eyebrow text-white/50 mb-1.5">Current focus</p>
                <p className="text-white font-semibold inline-flex items-center gap-2 text-[14px] sm:text-[15px]"><MapPin size={16} weight="fill" className="text-umati-500" /> {current.location}</p>
              </div>
              <div className="flex gap-2.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-[3px] transition-all duration-500 ${i === slide ? 'w-12 bg-umati-500' : 'w-6 bg-white/30'}`}
                  />
                ))}
              </div>
              <div className="ml-auto hidden lg:flex items-center gap-3 text-white/70 text-sm">
                <span className="font-mono">0{slide + 1}</span>
                <span className="h-[1px] w-12 bg-white/30" />
                <span className="font-mono">0{heroSlides.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  INTRO STRIP — track record ribbon                                */}
      {/* ================================================================ */}
      <section className="bg-onyx-950 border-y border-white/5">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-umati-400 mb-5">About Umati · est. 2016</p>
            <h2 className="display-mega text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[0.95]">
              We do not simply build.
              <span className="block text-umati-500 mt-2">We structure, build, manage.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-ivory-200/85 text-[17px] lg:text-[18px] leading-[1.65]">
              {business.shortBio}
            </p>
            <p className="mt-5 text-ivory-300/70 text-[15px] leading-relaxed">
              We structure deals, mobilise capital, manage legal compliance, drive sales, and operate the finished asset — end to end, under one seamlessly integrated platform. Every project we deliver is financially sound, legally clean, expertly marketed, and professionally managed from first brick to final title deed.
            </p>
            <Link
              to="/invest"
              className="mt-8 inline-flex items-center gap-2 text-umati-400 hover:text-umati-300 text-[12px] tracking-[0.2em] uppercase font-bold"
            >
              The Umati way <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  STATS                                                            */}
      {/* ================================================================ */}
      <section className="bg-ivory-50 border-b border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 80}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  FEATURED DEVELOPMENT — Ivory Gardens                             */}
      {/* ================================================================ */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <p className="eyebrow text-umati-600 mb-4">Now selling</p>
                <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                  Featured development.
                </h2>
              </div>
              <Link
                to="/developments"
                className="inline-flex items-center gap-2 text-onyx-900 hover:text-umati-600 text-[12px] tracking-[0.2em] uppercase font-bold"
              >
                All developments <ArrowUpRight size={16} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <ProjectCard project={featured} variant="feature" />
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  COMPLETED ESTATES — track record grid                            */}
      {/* ================================================================ */}
      <section className="bg-ivory-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
              <div className="lg:col-span-5">
                <p className="eyebrow text-umati-600 mb-4">Our track record</p>
                <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[68px] leading-[0.95]">
                  Three estates.
                  <span className="block text-umati-500">Forty units. All occupied.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
                <p className="text-onyx-600 text-[17px] leading-[1.7]">
                  Since 2016 Umati has built and delivered more than 40 residential units across three completed gated estates in Harare's prime northern residential corridors. Each has met market demand while setting new benchmarks in quality, security, and modern living. Our track record is not a claim — it is a body of completed, occupied, and appreciated assets.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {completed.map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 100}>
                <ProjectCard project={p} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  SERVICES — what we do                                            */}
      {/* ================================================================ */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
              <div className="lg:col-span-6">
                <p className="eyebrow text-umati-600 mb-4">What we do</p>
                <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                  End to end.
                  <span className="block">Under one roof.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
                <p className="text-onyx-600 text-[16px] leading-[1.7]">
                  Four strategically aligned entities work in concert on every project — eliminating the gaps, delays, and conflicts that arise when development, legal, financial, and sales functions are managed by separate parties.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  INTEGRATED ECOSYSTEM — dark band                                 */}
      {/* ================================================================ */}
      <section className="bg-onyx-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="max-w-3xl mb-14 lg:mb-20">
              <p className="eyebrow text-umati-400 mb-4">Our integrated ecosystem</p>
              <h2 className="display-mega text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.92]">
                Four entities.
                <span className="block text-umati-500">One accountable structure.</span>
              </h2>
              <p className="mt-6 text-ivory-200/80 text-[16px] leading-[1.7]">
                What makes Umati fundamentally different is not just what we build — it is how we build it. One point of accountability, no handover gaps, and a seamless journey from first inquiry to final title deed.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {ecosystem.map((e, i) => (
              <SectionReveal key={e.name} delay={i * 80}>
                <div className="border border-white/10 hover:border-umati-500 transition-colors duration-500 p-7 lg:p-9 h-full bg-white/[0.02] backdrop-blur-sm">
                  <p className="font-mono text-xs text-umati-400 mb-4">0{i + 1} / 04</p>
                  <h3 className="font-display font-black text-[22px] leading-[1.1] tracking-[-0.03em] text-white mb-1.5">
                    {e.name}
                  </h3>
                  <p className="eyebrow text-umati-400 mb-5">{e.role}</p>
                  <p className="text-[14px] text-ivory-200/75 leading-relaxed">{e.blurb}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  WHY UMATI — pillars split layout                                 */}
      {/* ================================================================ */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
              <div className="lg:col-span-6">
                <p className="eyebrow text-umati-600 mb-4">Why Umati</p>
                <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                  Results that
                  <span className="block text-umati-500">stand, last, endure.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
                <p className="text-onyx-600 text-[17px] leading-[1.7]">
                  We deliver projects that stand, returns that last, and trust that endures. Six commitments that frame every single Umati project — held to the same uncompromising standard.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 60}>
                <div className="bg-ivory-50 p-7 lg:p-9 h-full border-l-2 border-umati-500">
                  <h3 className="font-display font-black text-[22px] tracking-[-0.03em] text-onyx-900 mb-4">
                    {p.title}
                  </h3>
                  <div className="space-y-4 text-[14px] leading-relaxed">
                    <div>
                      <p className="eyebrow text-umati-600 mb-1.5">Our standard</p>
                      <p className="text-onyx-700">{p.standard}</p>
                    </div>
                    <div className="pt-3 border-t border-onyx-100">
                      <p className="eyebrow text-onyx-400 mb-1.5">For you</p>
                      <p className="text-onyx-600">{p.foryou}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  INVESTMENT CTA — big photo background                            */}
      {/* ================================================================ */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=75"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
          onError={(e) => e.currentTarget.style.display='none'}
        />
        <div className="absolute inset-0 bg-onyx-950/70" />
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-4xl">
            <p className="eyebrow text-umati-400 mb-6">Investment opportunity</p>
            <h2 className="display-mega text-white text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.92]">
              Zimbabwe real estate.
              <span className="block text-umati-500">USD-denominated.</span>
              <span className="block">Actively managed.</span>
            </h2>
            <p className="mt-8 text-ivory-100/85 text-[18px] leading-[1.7] max-w-2xl">
              Harare's northern suburbs present a compelling investment case — grounded in structural undersupply, hard-currency pricing, and demonstrated capital appreciation. Umati is the platform to access it, with professional oversight at every stage.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl">
              <div className="flex items-center gap-2.5 text-white/90"><Shield size={20} weight="duotone" className="text-umati-400" /><span className="text-sm font-semibold">Clean title</span></div>
              <div className="flex items-center gap-2.5 text-white/90"><ChartLineUp size={20} weight="duotone" className="text-umati-400" /><span className="text-sm font-semibold">USD rental yield</span></div>
              <div className="flex items-center gap-2.5 text-white/90"><Handshake size={20} weight="duotone" className="text-umati-400" /><span className="text-sm font-semibold">One integrated team</span></div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/invest"
                className="inline-flex items-center gap-2 bg-umati-500 hover:bg-umati-600 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors"
              >
                Why invest with Umati <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors"
              >
                <WhatsappLogo size={16} weight="fill" /> Request prospectus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  TESTIMONIALS                                                     */}
      {/* ================================================================ */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="mb-14 lg:mb-20">
              <p className="eyebrow text-umati-600 mb-4">In their words</p>
              <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[68px] leading-[0.95] max-w-3xl">
                Owners. Investors. Partners.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <figure className="h-full flex flex-col">
                  <Quotes size={34} weight="fill" className="text-umati-500 mb-6" />
                  <blockquote className="flex-1 text-[16px] lg:text-[17px] text-onyx-800 leading-[1.65]">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-onyx-200">
                    <p className="font-display font-bold text-onyx-900">{t.name}</p>
                    <p className="text-[13px] text-onyx-500 mt-0.5">{t.role}</p>
                  </figcaption>
                </figure>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CONTACT CTA — split                                              */}
      {/* ================================================================ */}
      <section className="bg-ivory-100 border-t border-onyx-100 py-20 lg:py-28">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow text-umati-600 mb-5">Get in touch</p>
              <h2 className="display-mega text-onyx-900 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95]">
                Start a conversation.
              </h2>
              <p className="mt-6 text-onyx-600 text-[17px] leading-[1.7] max-w-lg">
                WhatsApp is our preferred channel for the fastest response — brochures, floor plans, and current pricing delivered within 24 hours.
              </p>
            </div>
            <div className="space-y-4">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="block bg-onyx-900 hover:bg-umati-500 text-white p-7 transition-colors group">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-umati-400 group-hover:text-white mb-2">Preferred channel</p>
                    <p className="font-display font-black text-2xl text-white">WhatsApp</p>
                    <p className="text-sm text-ivory-300/80 group-hover:text-white mt-1">{business.phone}</p>
                  </div>
                  <WhatsappLogo size={40} weight="duotone" className="text-umati-400 group-hover:text-white shrink-0" />
                </div>
              </a>
              <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="block bg-ivory-50 hover:bg-onyx-900 hover:text-white border border-onyx-200 p-7 transition-colors group">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-onyx-500 group-hover:text-umati-400 mb-2">Call</p>
                    <p className="font-display font-black text-2xl text-onyx-900 group-hover:text-white">{business.phone}</p>
                    <p className="text-sm text-onyx-500 group-hover:text-ivory-300 mt-1">{business.phoneAlt}</p>
                  </div>
                  <Phone size={40} weight="duotone" className="text-onyx-400 group-hover:text-umati-400 shrink-0" />
                </div>
              </a>
              <Link to="/contact" className="block border border-onyx-900 hover:bg-onyx-900 hover:text-white p-7 transition-colors group">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="eyebrow text-onyx-500 group-hover:text-umati-400 mb-2">Visit or write</p>
                    <p className="font-display font-black text-2xl">Contact page</p>
                  </div>
                  <ArrowUpRight size={28} weight="bold" className="shrink-0" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
