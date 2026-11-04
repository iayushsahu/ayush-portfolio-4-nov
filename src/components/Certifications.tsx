import { useState } from 'react';
import { certifications, education, type Certification } from '../data/certifications';
import { Icon, Reveal, Section } from './shared';

const filters = ['All', 'Gen-AI', 'Full-Stack', 'Data'];

export function Certifications() {
  const [cat, setCat] = useState('All');
  const visible: Certification[] = cat === 'All' ? certifications : certifications.filter((c) => c.cat === cat);

  return (
    <Section
      id="certifications"
      kicker="Credentials"
      title="Certifications & education"
      intro="Continuous learning across conversational AI, generative AI, and full-stack engineering."
    >
      <Reveal className="mb-6 flex flex-wrap gap-2">
        {filters.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              cat === c ? 'bg-primary text-white' : 'border border-line bg-surface text-muted hover:text-fg'
            }`}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <Reveal key={c.name + c.issuer} className="card-line rounded-2xl bg-card/60 p-5">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary-soft">
                {c.cat}
              </span>
              <span className="text-xs text-dim">{c.date}</span>
            </div>
            <h3 className="mt-3 text-sm font-semibold leading-snug">{c.name}</h3>
            <p className="mt-1 text-xs text-muted">{c.issuer}</p>
            {c.badge && <p className="mt-2 text-[11px] text-dim">Credential · {c.badge}</p>}
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="card-line flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-r from-card to-surface p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-lg font-bold">
              {education.degree} · {education.field}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {education.institution} · {education.location}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-soft">
            <Icon name="pin" className="h-4 w-4" />
            {education.period}
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
