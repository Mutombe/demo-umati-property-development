import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Not found — Umati Property Developments" description="That page does not exist — let us point you home." />
      <section className="min-h-[80vh] bg-ivory-50 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <p className="eyebrow text-umati-600 mb-4">404</p>
          <h1 className="display-mega text-onyx-900 text-[56px] sm:text-[88px] lg:text-[128px] leading-[0.9]">
            Lost the plot.
          </h1>
          <p className="mt-7 text-onyx-600 text-[17px] leading-relaxed max-w-md mx-auto">
            That page does not exist — but our developments definitely do. Let us show you around.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/" className="inline-flex items-center gap-2 bg-onyx-900 hover:bg-umati-500 text-white px-7 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors">
              Home <ArrowRight size={16} weight="bold" />
            </Link>
            <Link to="/developments" className="inline-flex items-center gap-2 border border-onyx-900 hover:bg-onyx-900 hover:text-white text-onyx-900 px-7 py-4 text-[12px] tracking-[0.2em] uppercase font-bold transition-colors">
              Our developments
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
