import { credentials, skillGroups } from '../data/skills';
import type { SkillGroup } from '../data/skills';
import { Reveal, Section } from './shared';

function Badge({ kind }: { kind: NonNullable<SkillGroup['badge']> }) {
  const style =
    kind === 'Core'
      ? 'bg-primary/15 text-primary-soft'
      : 'border border-dim/40 text-dim';
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${style}`}
    >
      {kind}
    </span>
  );
}

function GroupCard({ group }: { group: SkillGroup }) {
  return (
    <Reveal className="card-line flex flex-col rounded-2xl bg-card/60 p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold">{group.title}</h3>
          <p className="mt-1 text-sm text-muted">{group.subtitle}</p>
        </div>
        {group.badge && <Badge kind={group.badge} />}
      </div>

      <p className="mt-6 text-[11px] font-semibold uppercase tracking-wide text-dim">
        Core
      </p>
      <ul className="mt-2.5 flex flex-wrap gap-2">
        {group.core.map((s) => (
          <li
            key={s}
            className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-fg"
          >
            {s}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-dim">
        Also
      </p>
      <ul className="mt-2.5 flex flex-wrap gap-2">
        {group.working.map((s) => (
          <li
            key={s}
            className="rounded-lg border border-line px-2.5 py-1 text-xs text-muted"
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <p className="border-t border-line pt-4 text-xs text-dim">
          <span className="mr-2 font-semibold uppercase tracking-wide">Applied in</span>
          <span className="text-muted">{group.applied.join(' · ')}</span>
        </p>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="Capabilities"
      title="Skills & platforms"
      intro="Production-proven expertise in conversational AI platforms, backed by full-stack and cloud engineering."
    >
      <ul className="mb-8 flex flex-wrap gap-2">
        {credentials.map((c) => (
          <li
            key={c}
            className="rounded-full border border-line bg-card/60 px-4 py-1.5 text-sm text-muted"
          >
            {c}
          </li>
        ))}
      </ul>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((g) => (
          <GroupCard key={g.id} group={g} />
        ))}
      </div>
    </Section>
  );
}