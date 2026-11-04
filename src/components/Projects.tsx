import { projects } from "../data/projects";
import { Chip, Reveal, Section } from "./shared";

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="Work"
      title="Projects & products"
      intro="Production conversational AI systems delivered for global clients, plus products I've built end-to-end."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <Reveal
            key={p.title}
            className="card-line group flex flex-col rounded-2xl bg-card/60 p-7 transition hover:border-primary/50"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-soft">
                {p.category}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  p.status.toLowerCase().includes("poc")
                    ? "border border-dim/40 text-dim"
                    : "border border-green/30 bg-green/10 text-green"
                }`}
              >
                {p.status}
              </span>
              {p.featured && (
                <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-amber">
                  Featured
                </span>
              )}
            </div>

            <h3 className="mt-4 font-display text-xl font-bold leading-snug">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-primary/50 decoration-2 underline-offset-4 transition hover:text-primary-soft hover:decoration-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {p.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="mt-2 text-xs text-dim">{p.client}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p.description}
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-fg/90">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            {p.impact && (
              <div className="mt-6 border-t border-line pt-4 text-sm font-semibold text-gradient">
                {p.impact}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
