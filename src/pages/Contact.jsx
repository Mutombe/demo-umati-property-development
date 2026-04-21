import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { WhatsappLogo, EnvelopeSimple, Phone, MapPin, Clock, ArrowRight, CheckCircle } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import { business, developments } from '../data/siteData';

const INTERESTS = [
  'Local buyer',
  'Diaspora investor',
  'Foreign investor',
  'Development partner',
  'General inquiry',
];

export default function Contact() {
  const [channel, setChannel] = useState('whatsapp');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', interest: 'Diaspora investor', project: '', budget: '', message: '',
  });

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || (!form.email && !form.phone)) {
      toast.error('Please share your name and at least one contact channel.');
      return;
    }
    const body = [
      `Name: ${form.name}`,
      `Country: ${form.country}`,
      `Interest: ${form.interest}`,
      form.project ? `Project: ${form.project}` : null,
      form.budget ? `Budget (USD): ${form.budget}` : null,
      form.phone ? `WhatsApp: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      '',
      form.message || 'Please send me the brochure, floor plans, and current pricing.',
    ].filter(Boolean).join('\n');

    if (channel === 'whatsapp') {
      const wa = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(body)}`;
      window.open(wa, '_blank', 'noopener,noreferrer');
      toast.success('Opening WhatsApp — we will respond within 24 hours.');
    } else {
      const mail = `mailto:${business.email}?subject=${encodeURIComponent(`Inquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
      window.location.href = mail;
      toast.success('Opening your email app.');
    }
  };

  return (
    <PageTransition>
      <SEO title="Contact — Umati Property Developments" description={`Contact Umati Property Developments in ${business.addressShort}. WhatsApp ${business.phone} or email ${business.email}.`} />

      <section className="bg-onyx-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-ivory-300/50 mb-8">
            <Link to="/" className="hover:text-umati-400">Home</Link><span className="mx-2">/</span><span className="text-umati-400">Contact</span>
          </nav>
          <p className="eyebrow text-umati-400 mb-5">Contact & inquiries</p>
          <h1 className="display-mega text-[52px] sm:text-[80px] lg:text-[112px] leading-[0.9]">
            Let us talk.
          </h1>
          <p className="mt-7 text-[17px] lg:text-[19px] text-ivory-200/85 max-w-3xl leading-[1.65]">
            Whether you are looking for your next home, exploring an investment from abroad, or seeking a development partner — we welcome your inquiry. WhatsApp is our preferred channel for the fastest response.
          </p>
        </div>
      </section>

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="eyebrow text-umati-600 mb-4">Register your interest</p>
              <h2 className="display-mega text-onyx-900 text-[32px] sm:text-[44px] lg:text-[52px] leading-[0.98]">
                Start with the essentials.
              </h2>
              <p className="mt-4 text-onyx-600 text-[15px] leading-relaxed max-w-xl">
                We will send the project brochure, floor plans, and current pricing schedule within 24 hours.
              </p>
            </SectionReveal>

            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              {/* Channel toggle */}
              <div>
                <p className="eyebrow text-onyx-500 mb-3">Preferred reply channel</p>
                <div className="flex gap-0 border border-onyx-200">
                  <button
                    type="button"
                    onClick={() => setChannel('whatsapp')}
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[12px] tracking-[0.16em] uppercase font-bold transition-colors ${channel === 'whatsapp' ? 'bg-[#25D366] text-white' : 'bg-ivory-50 text-onyx-800 hover:bg-ivory-100'}`}
                  >
                    <WhatsappLogo size={16} weight="fill" /> WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setChannel('email')}
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[12px] tracking-[0.16em] uppercase font-bold transition-colors border-l border-onyx-200 ${channel === 'email' ? 'bg-umati-500 text-white' : 'bg-ivory-50 text-onyx-800 hover:bg-ivory-100'}`}
                  >
                    <EnvelopeSimple size={16} weight="fill" /> Email
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name *" value={form.name} onChange={onChange('name')} />
                <Field label="Country of residence" value={form.country} onChange={onChange('country')} placeholder="e.g. United Kingdom" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="WhatsApp (with country code)" value={form.phone} onChange={onChange('phone')} placeholder="+44 7..." type="tel" />
                <Field label="Email" value={form.email} onChange={onChange('email')} placeholder="you@domain.com" type="email" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-onyx-500 mb-2">I am a</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, interest: opt })}
                      className={`px-4 py-2 text-[12px] tracking-[0.1em] uppercase font-semibold border transition-colors ${form.interest === opt ? 'border-umati-500 bg-umati-500 text-white' : 'border-onyx-200 text-onyx-700 hover:border-onyx-900'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-onyx-500 mb-2">Project of interest</p>
                  <select
                    value={form.project}
                    onChange={onChange('project')}
                    className="w-full bg-ivory-100 border border-onyx-200 px-4 py-3.5 text-[15px] text-onyx-900 focus:border-umati-500 focus:outline-none"
                  >
                    <option value="">Any / not yet decided</option>
                    {developments.map((d) => <option key={d.slug} value={d.name}>{d.name} — {d.location}</option>)}
                  </select>
                </div>
                <Field label="Approximate budget (USD)" value={form.budget} onChange={onChange('budget')} placeholder="e.g. 200,000 – 350,000" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-onyx-500 mb-2">Anything else to share?</p>
                <textarea
                  value={form.message}
                  onChange={onChange('message')}
                  rows={4}
                  placeholder="Tell us a little more about what you are looking for."
                  className="w-full bg-ivory-100 border border-onyx-200 px-4 py-3.5 text-[15px] text-onyx-900 focus:border-umati-500 focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-5 text-[12px] tracking-[0.2em] uppercase font-bold text-white transition-colors ${channel === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#1DA851]' : 'bg-umati-500 hover:bg-umati-600'}`}
              >
                Send via {channel === 'whatsapp' ? 'WhatsApp' : 'Email'} <ArrowRight size={16} weight="bold" />
              </button>
              <p className="text-xs text-onyx-400 leading-relaxed">
                <CheckCircle size={12} weight="fill" className="inline text-umati-500 mr-1.5" />
                We respond within 24 hours. Registered investors receive priority notification of new project launches.
              </p>
            </form>
          </div>

          {/* Sidebar info */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-onyx-900 text-white p-7 lg:p-8">
              <p className="eyebrow text-umati-400 mb-6">Direct channels</p>
              <ul className="space-y-5">
                <li>
                  <a href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white hover:text-umati-400 transition-colors">
                    <WhatsappLogo size={22} weight="fill" className="mt-1 text-[#25D366] shrink-0" />
                    <div><p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">WhatsApp — preferred</p><p className="text-lg font-semibold">{business.phone}</p></div>
                  </a>
                </li>
                <li>
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 text-white hover:text-umati-400 transition-colors">
                    <Phone size={22} weight="fill" className="mt-1 text-umati-500 shrink-0" />
                    <div><p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Phone</p><p className="text-lg font-semibold">{business.phone}</p><p className="text-sm text-ivory-300/60">{business.phoneAlt}</p></div>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="flex items-start gap-3 text-white hover:text-umati-400 transition-colors">
                    <EnvelopeSimple size={22} weight="fill" className="mt-1 text-umati-500 shrink-0" />
                    <div><p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Email</p><p className="text-lg font-semibold">{business.email}</p></div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={22} weight="fill" className="mt-1 text-umati-500 shrink-0" />
                  <div><p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Office</p><p className="text-base text-white leading-relaxed">{business.address}</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={22} weight="fill" className="mt-1 text-umati-500 shrink-0" />
                  <div><p className="text-xs uppercase tracking-[0.15em] text-ivory-300/50">Hours</p><p className="text-sm text-ivory-300/80">Mon–Fri {business.hours.weekdays}</p><p className="text-sm text-ivory-300/80">Sat {business.hours.saturday}</p></div>
                </li>
              </ul>
            </div>

            {/* Map embed */}
            <div className="aspect-[4/3] overflow-hidden bg-onyx-100">
              <iframe
                src="https://www.google.com/maps?q=Avondale%2C%20Harare%2C%20Zimbabwe&output=embed"
                title="Umati office — Avondale, Harare"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-onyx-500 mb-2">{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-ivory-100 border border-onyx-200 px-4 py-3.5 text-[15px] text-onyx-900 focus:border-umati-500 focus:outline-none"
      />
    </div>
  );
}
