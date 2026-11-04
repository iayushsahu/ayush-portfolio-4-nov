import { experiences } from '../data/experiences';
import { Chip, Icon, Reveal, Section } from './shared';

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="Career"
      title="Experience"
      intro="Four-plus years delivering production conversational AI for global enterprises, from Amelia and Dialogflow to Gen-AI prototypes."
    >
      <div className="border-b border-line">
        {experiences.map((exp) => {
          const isCurrent = exp.period.toLowerCase().includes('present');

          return (
            <Reveal
              key={exp.role + exp.company + exp.period}
              className="grid gap-6 border-t border-line py-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10"
            >
              {/* Left rail: when and where.
                  Mobile: period + badge share the first row; desktop: stacked as before. */}
              <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 md:sticky md:top-24 md:block md:self-start">
                <p className="col-start-1 flex items-center gap-2 font-display text-sm font-semibold text-fg">
                  {isCurrent && (
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 motion-safe:animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                    </span>
                  )}
                  {exp.period}
                </p>
                <p className="col-span-2 mt-2 text-sm font-medium text-fg/90">{exp.company}</p>
                <p className="col-span-2 mt-1 flex items-start gap-1.5 text-xs text-dim">
                  <Icon name="pin" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {exp.location}
                </p>
                <span className="col-start-2 row-start-1 justify-self-end rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary-soft md:col-auto md:row-auto md:mt-3 md:inline-block md:px-3 md:py-1 md:text-xs">
                  {exp.type}
                </span>
              </div>

              {/* Right: what was done */}
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold leading-snug sm:text-2xl">{exp.role}</h3>
                {exp.client && <p className="mt-1 text-sm text-muted">{exp.client}</p>}

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2.5 text-sm text-fg/90">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      {h}
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 grid grid-cols-1 divide-y divide-line rounded-xl border border-line bg-card/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {exp.outcomes.map((o) => (
                    <div key={o.label} className="flex flex-col-reverse px-5 py-4">
                      <dt className="mt-0.5 text-xs text-dim">{o.label}</dt>
                      <dd className="font-display text-2xl font-bold tracking-tight text-fg">{o.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}