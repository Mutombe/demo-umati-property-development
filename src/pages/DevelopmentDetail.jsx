import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, MapPin, WhatsappLogo, EnvelopeSimple, CheckCircle, CaretLeft, CaretRight,
} from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import ProjectCard from '../components/ProjectCard';
import { developments, business } from '../data/siteData';

export default function DevelopmentDetail() {
  const { slug } = useParams();
  const project = developments.find((d) => d.slug === slug);
  const [gIdx, setGIdx] = useState(0);

  if (!project) return <Navigate to="/developments" replace />;

  const idx  = developments.findIndex((d) => d.slug === slug);
  const prev = developments[(idx - 1 + developments.length) % developments.length];
  const next = developments[(idx + 1) % developments.length];
  const related = developments.filter((d) => d.slug !== slug).slice(0, 3);
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Umati — I'd like information on ${project.name}.`)}`;
  const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(`Inquiry: ${project.name}`)}`;

  const statusBg =
    project.status === 'Completed' ? 'bg-onyx-900 text-white' :
    project.status === 'Selling'   ? 'bg-umati-500 text-white' :
    'bg-silver-400 text-onyx-900';

  return (
    <PageTransition>
      <SEO
        title={`${project.name} — ${project.location} | Umati Property Developments`}
        description={project.summary}
      />

      {/* HERO */}
      <section className="relative bg-onyx-950 pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.hero} alt={project.name} className="w-full h-full object-cover opacity-45" loading="eager" onError={(e) => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/75 to-onyx-950/40" />
        </div>
        <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-ivory-300/60 mb-8 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-umati-400">Home</Link><span>/</span>
            <Link to="/developments" className="hover:text-umati-400">Developments</Link><span>/</span>
            <span className="text-umati-400 truncate">{project.name}</span>
          </nav>
          <span className={`inline-block px-3.5 py-1.5 mb-7 text-[10px] tracking-[0.2em] uppercase font-bold ${statusBg}`}>
            {project.statusTag}
          </span>
          <h1 className="display-mega text-white text-[52px] sm:text-[80px] lg:text-[120px] leading-[0.9]">
            {project.name}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-ivory-200/85">
            <span className="inline-flex items-center gap-2"><MapPin size={18} weight="fill" className="text-umati-500" /> {project.location}</span>
            <span className="text-ivory-300/40">·</span>
            <span>{project.type}</span>
            <span className="text-ivory-300/40">·</span>
            <span>{project.units}</span>
          </div>
          <p className="mt-7 text-[18px] lg:text-[20px] text-ivory-100/90 max-w-3xl leading-[1.65]">{project.summary}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main */}
          <div className="lg:col-span-8">
            {/* Gallery with carousel */}
            <div className="relative aspect-[16/10] overflow-hidden bg-onyx-100">
              <img
                src={project.gallery[gIdx]}
                alt=""
                className="w-full h-full object-cover object-center transition-opacity duration-500"
                loading="eager"
                onError={(e) => e.currentTarget.style.display='none'}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-onyx-950/80 text-white text-xs px-3 py-1.5 font-mono">
                  {String(gIdx + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setGIdx((gIdx - 1 + project.gallery.length) % project.gallery.length)}
                    className="h-11 w-11 bg-onyx-950/80 hover:bg-umati-500 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <CaretLeft size={18} weight="bold" />
                  </button>
                  <button
                    onClick={() => setGIdx((gIdx + 1) % project.gallery.length)}
                    className="h-11 w-11 bg-onyx-950/80 hover:bg-umati-500 text-white flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    <CaretRight size={18} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {project.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setGIdx(i)}
                  className={`aspect-[4/3] overflow-hidden transition-opacity ${gIdx === i ? 'opacity-100 ring-2 ring-umati-500' : 'opacity-60 hover:opacity-100'}`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover object-center" loading="lazy" decoding="async" onError={(e) => e.currentTarget.style.display='none'} />
                </button>
              ))}
            </div>

            {/* Description */}
            <SectionReveal>
              <div className="mt-14">
                <p className="eyebrow text-umati-600 mb-4">About the development</p>
                <h2 className="display-mega text-onyx-900 text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.98]">
                  A closer look at {project.name}.
                </h2>
                <p className="mt-7 text-onyx-700 text-[17px] lg:text-[18px] leading-[1.75]">{project.description}</p>
              </div>
            </SectionReveal>

            {/* Amenities */}
            <SectionReveal>
              <div className="mt-14 pt-12 border-t border-onyx-200">
                <p className="eyebrow text-umati-600 mb-4">Features & amenities</p>
                <h3 className="display-mega text-onyx-900 text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.02]">What lives here.</h3>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {project.amenities.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-onyx-800">
                      <CheckCircle size={22} weight="duotone" className="text-umati-500 mt-0.5 shrink-0" />
                      <span className="text-[15px] leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-onyx-500">Specification: {project.spec}</p>
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-5">
            <div className="bg-onyx-900 text-white p-7">
              <p className="eyebrow text-umati-400 mb-4">Register interest</p>
              <h3 className="display-mega text-[26px] leading-[1.05]">Secure your information pack.</h3>
              <p className="mt-4 text-sm text-ivory-200/80 leading-relaxed">
                Receive the project brochure, floor plans, and current pricing schedule within 24 hours.
              </p>
              <div className="mt-6 space-y-3">
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="block w-full bg-umati-500 hover:bg-umati-600 text-white px-5 py-3.5 text-center text-[12px] tracking-[0.18em] uppercase font-bold transition-colors inline-flex items-center justify-center gap-2">
                  <WhatsappLogo size={16} weight="fill" /> WhatsApp us
                </a>
                <a href={mailHref} className="block w-full border border-white/30 hover:border-white text-white px-5 py-3.5 text-center text-[12px] tracking-[0.18em] uppercase font-bold transition-colors inline-flex items-center justify-center gap-2">
                  <EnvelopeSimple size={16} weight="fill" /> Email team
                </a>
              </div>
            </div>

            <div className="bg-ivory-100 p-7">
              <p className="eyebrow text-onyx-500 mb-5">Key details</p>
              <dl className="space-y-3.5">
                {project.details.map((d) => (
                  <div key={d.label} className="flex justify-between items-start gap-4 pb-3 border-b border-onyx-200 last:border-0 last:pb-0">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-onyx-500 font-semibold">{d.label}</dt>
                    <dd className="text-[14px] text-onyx-900 font-semibold text-right">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link to="/developments" className="block w-full text-center border border-onyx-900 text-onyx-900 hover:bg-onyx-900 hover:text-white px-5 py-3.5 text-[12px] tracking-[0.18em] uppercase font-bold transition-colors inline-flex items-center justify-center gap-2">
              <ArrowLeft size={16} weight="bold" /> All developments
            </Link>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory-100 py-20 lg:py-24 border-t border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex items-end justify-between mb-10 lg:mb-14 gap-4 flex-wrap">
            <div>
              <p className="eyebrow text-umati-600 mb-3">Also on our books</p>
              <h2 className="display-mega text-onyx-900 text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.98]">More developments.</h2>
            </div>
            <Link to="/developments" className="text-[12px] tracking-[0.18em] uppercase font-bold text-onyx-900 hover:text-umati-600 inline-flex items-center gap-2">
              View all <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {related.map((p) => (<ProjectCard key={p.slug} project={p} />))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-ivory-50 border-t border-onyx-100">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to={`/developments/${prev.slug}`} className="group text-left">
            <p className="eyebrow text-onyx-400 mb-2 inline-flex items-center gap-2"><ArrowLeft size={12} weight="bold" /> Previous</p>
            <p className="font-display font-black text-[22px] tracking-[-0.03em] text-onyx-900 group-hover:text-umati-600 transition-colors">{prev.name}</p>
          </Link>
          <Link to={`/developments/${next.slug}`} className="group text-right">
            <p className="eyebrow text-onyx-400 mb-2 inline-flex items-center gap-2">Next <ArrowRight size={12} weight="bold" /></p>
            <p className="font-display font-black text-[22px] tracking-[-0.03em] text-onyx-900 group-hover:text-umati-600 transition-colors">{next.name}</p>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
