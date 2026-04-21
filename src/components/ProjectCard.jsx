import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react';

export default function ProjectCard({ project, variant = 'default' }) {
  const statusColor =
    project.status === 'Completed' ? 'bg-onyx-900 text-ivory-50' :
    project.status === 'Selling'   ? 'bg-umati-500 text-white' :
    'bg-silver-400 text-onyx-900';

  if (variant === 'feature') {
    return (
      <Link
        to={`/developments/${project.slug}`}
        className="block group relative overflow-hidden bg-onyx-900"
      >
        <div className="aspect-[16/11] lg:aspect-[16/9] overflow-hidden">
          <img
            src={project.hero}
            alt={project.name}
            className="w-full h-full object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-110"
            loading="lazy" decoding="async"
            onError={(e) => e.currentTarget.style.display='none'}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-onyx-950/0" />
        <div className="absolute top-5 left-5 sm:top-7 sm:left-7">
          <span className={`inline-block px-3.5 py-1.5 text-[10px] tracking-[0.18em] uppercase font-bold ${statusColor}`}>
            {project.statusTag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 lg:p-12 text-white">
          <p className="eyebrow text-umati-400 mb-3">{project.type}</p>
          <h3 className="display-mega text-4xl sm:text-5xl lg:text-6xl mb-4 text-white leading-none">
            {project.name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-ivory-200/80">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} weight="fill" /> {project.location}</span>
            <span className="text-ivory-300/40">·</span>
            <span>{project.units}</span>
          </div>
          <p className="mt-5 text-[15px] text-ivory-200/90 max-w-2xl leading-relaxed">{project.summary}</p>
          <span className="mt-7 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-semibold text-umati-400 group-hover:text-umati-300">
            View development <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/developments/${project.slug}`}
      className="block group relative bg-ivory-100 overflow-hidden"
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
  );
}
