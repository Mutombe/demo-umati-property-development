import React from 'react';

export default function LeadershipCard({ person }) {
  return (
    <article className="group">
      <div className="aspect-[3/4] overflow-hidden bg-onyx-100">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[900ms] ease-out"
          loading="lazy" decoding="async"
          onError={(e) => e.currentTarget.style.display='none'}
        />
      </div>
      <div className="pt-5">
        <p className="eyebrow text-umati-600">{person.role}</p>
        <h3 className="type-sub mt-2 text-onyx-900">
          {person.name}
        </h3>
        <p className="type-small mt-3 text-onyx-600">{person.bio}</p>
      </div>
    </article>
  );
}
