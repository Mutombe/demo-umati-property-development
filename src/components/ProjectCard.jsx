import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function ProjectCard({ project, variant = 'default' }) {
  const statusColor =
    project.status === 'Completed' ? 'bg-onyx-900 text-ivory-50' :
    project.status === 'Selling'   ? 'bg-umati-500 text-white' :
    'bg-silver-400 text-onyx-900';

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hi Umati, I'd like to know more about ${project.name}.`
  )}`;

  if (variant === 'feature') {
    return (
      <div className="block group relative overflow-hidden bg-onyx-900">
        <Link
          to={`/developments/${project.slug}`}
          className="block"
          aria-label={`View ${project.name}`}
        >
          <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/9] overflow-hidden">
            <img
              src={project.hero}
              alt={project.name}
              className="w-full h-full object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-110"
              loading="lazy" decoding="async"
              onError={(e) => e.currentTarget.style.display='none'}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/70 sm:via-onyx-950/40 to-onyx-950/0 pointer-events-none" />
          <div className="absolute top-4 left-4 sm:top-7 sm:left-7">
            <span className={`inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-bold ${statusColor}`}>
              {project.statusTag}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-9 lg:p-12 text-white">
            <p className="eyebrow text-umati-400 mb-2 sm:mb-3 text-[11px] sm:text-xs">{project.type}</p>
            <h3 className="display-mega text-[26px] leading-[0.95] sm:text-5xl lg:text-6xl mb-3 sm:mb-4 text-white tracking-[-0.02em]">
              {project.name}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] sm:text-sm text-ivory-200/80">
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} weight="fill" className="sm:hidden" /><MapPin size={14} weight="fill" className="hidden sm:inline" /> {project.location}</span>
              <span className="text-ivory-300/40 hidden sm:inline">·</span>
              <span>{project.units}</span>
            </div>
            <p className="mt-3 sm:mt-5 text-[13px] sm:text-[15px] text-ivory-200/90 max-w-2xl leading-relaxed line-clamp-2 sm:line-clamp-none">{project.summary}</p>
            <span className="mt-4 sm:mt-7 inline-flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-umati-400 group-hover:text-umati-300">
              View development <ArrowUpRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>

        {/* WhatsApp floating action */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`WhatsApp about ${project.name}`}
          className="absolute top-4 right-4 sm:top-7 sm:right-7 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white transition-colors z-10"
        >
          <WhatsappLogo size={18} weight="fill" className="sm:hidden" />
          <WhatsappLogo size={20} weight="fill" className="hidden sm:block" />
        </a>
      </div>
    );
  }

  return (
    <div className="block group relative bg-ivory-100 overflow-hidden">
      <Link
        to={`/developments/${project.slug}`}
        className="block"
        aria-label={`View ${project.name}`}
      >
        <div className="aspect-[4/3] overflow-hidden bg-onyx-100">
          <img
            src={project.hero}
            alt={project.name}
            className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            loading="lazy" decoding="async"
            onError={(e) => e.currentTarget.style.display='none'}
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 text-[10px] tracking-[0.16em] uppercase font-bold ${statusColor}`}>
            {project.status}
          </span>
        </div>
        <div className="p-6 sm:p-7">
          <p className="eyebrow text-umati-600">{project.type}</p>
          <h3 className="mt-2.5 font-display font-black text-[26px] sm:text-[28px] leading-[0.98] tracking-[-0.03em] text-onyx-900">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-onyx-500 inline-flex items-center gap-1.5">
            <MapPin size={14} /> {project.location}
          </p>
          <p className="mt-4 text-[14px] text-onyx-600 leading-relaxed line-clamp-3">
            {project.summary}
          </p>
          <div className="mt-5 pt-5 border-t border-onyx-200/60 flex items-center justify-between">
            <span className="text-xs text-onyx-500">{project.units}</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase font-bold text-umati-600 group-hover:text-umati-700">
              Explore <ArrowUpRight size={14} weight="bold" />
            </span>
          </div>
        </div>
      </Link>

      {/* WhatsApp floating action */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`WhatsApp about ${project.name}`}
        className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white transition-colors z-10"
      >
        <WhatsappLogo size={18} weight="fill" />
      </a>
    </div>
  );
}
