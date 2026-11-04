import { architecture } from '../data/projects';
import { Reveal, Section } from './shared';

export function Architecture() {
  return (
    <Section
      id="architecture"
      kicker="How I build"
      title="Conversational AI methodology"
      intro="A reference architecture I apply when designing and scaling enterprise conversational AI systems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {architecture.map((a, i) => (
          <Reveal key={a.title} className="card-line flex flex-col rounded-2xl bg-card/60 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 font-display text-xs font-bold text-primary-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <h3 className="font-display text-sm font-bold leading-snug">{a.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{a.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {a.tech.map((t) => (
                <span key={t} className="text-[11px] text-dim">
                  #{t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
