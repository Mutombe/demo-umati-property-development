import React from 'react';

export default function LeadershipCard({ person }) {
  return (
    <article className="group">
      <div className="aspect-[3/4] overflow-hidden bg-onyx-100">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[900ms] ease-out"
          loading="lazy"
          onError={(e) => e.currentTarget.style.display='none'}
        />
      </div>
      <div className="pt-5">
        <p className="eyebrow text-umati-600">{person.role}</p>
        <h3 className="mt-2 font-display font-black text-[22px] leading-tight tracking-[-0.03em] text-onyx-900">
          {person.name}
        </h3>
        <p className="mt-3 text-[14px] text-onyx-600 leading-relaxed">{person.bio}</p>
      </div>
    </article>
  );
}
