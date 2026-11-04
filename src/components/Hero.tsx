import type { ComponentProps, ReactNode } from 'react';
import { personal, stats } from '../data/personal';
import { Icon, Reveal } from './shared';

type IconName = ComponentProps<typeof Icon>['name'];
type Social = { label: string; icon: IconName; href: string; external?: boolean };

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const socials: Social[] = [
  { label: 'GitHub', icon: 'github', href: personal.github, external: true },
  { label: 'LinkedIn', icon: 'linkedin', href: personal.linkedin, external: true },
  { label: 'Email', icon: 'mail', href: `mailto:${personal.email}` },
];

/* Tiny helpers so the code card reads like a real file */
const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-primary-soft">&quot;{children}&quot;</span>
);
const Key = ({ children }: { children: ReactNode }) => <span className="text-cyan">{children}</span>;
const Punct = ({ children }: { children: ReactNode }) => <span className="text-dim">{children}</span>;

function Line({
  n,
  indent = 0,
  children,
}: {
  n: number;
  indent?: number;
  children: ReactNode;
}) {
  return (
    <div className="flex">
      <span className="w-7 shrink-0 select-none pr-3 text-right text-dim/60">{n}</span>
      <span
        style={{ paddingLeft: `${indent * 1}rem` }}
        className="min-w-0 flex-1 whitespace-pre-wrap break-words"
      >
        {children}
      </span>
    </div>
  );
}

function ProfileCard() {
  let n = 0;
  const next = () => ++n;

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-line bg-card/70 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 text-xs text-dim">
        <span className="font-mono">profile.ts</span>
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
          </span>
          live
        </span>
      </div>

      <div className="px-3 py-5 font-mono text-[13px] leading-7 text-muted sm:text-sm sm:leading-8">
        <Line n={next()}>
          <Punct>export const </Punct>
          <span className="text-fg">engineer</span>
          <Punct> = {'{'}</Punct>
        </Line>
        <Line n={next()} indent={1}>
          <Key>name</Key>
          <Punct>: </Punct>
          <Str>{personal.name}</Str>
          <Punct>,</Punct>
        </Line>
        <Line n={next()} indent={1}>
          <Key>role</Key>
          <Punct>: </Punct>
          <Str>{personal.title}</Str>
          <Punct>,</Punct>
        </Line>
        <Line n={next()} indent={1}>
          <Key>status</Key>
          <Punct>: </Punct>
          <Str>{personal.availability}</Str>
          <Punct>,</Punct>
        </Line>
        <Line n={next()} indent={1}>
          <Key>stats</Key>
          <Punct>: {'{'}</Punct>
        </Line>
        {stats.map((s) => (
          <Line key={s.label} n={next()} indent={2}>
            <Key>{s.label}</Key>
            <Punct>: </Punct>
            <Str>{s.value}</Str>
            <Punct>, </Punct>
            <span className="hidden text-dim/70 sm:inline">{`// ${s.sub}`}</span>
          </Line>
        ))}
        <Line n={next()} indent={1}>
          <Punct>{'},'}</Punct>
        </Line>
        <Line n={next()}>
          <Punct>{'};'}</Punct>
        </Line>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="bg-glow relative overflow-hidden pt-16">
      <div className="container-wide grid min-h-[calc(100vh-4rem)] grid-cols-[minmax(0,1fr)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="min-w-0">
          <div className="min-w-0">
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
              {personal.name}
            </h1>

            <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              <span className="text-gradient">{personal.title}</span>
            </p>

            <p className="mt-5 max-w-lg font-display text-base text-cyan">{personal.headline}</p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {personal.subtext}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={`rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 ${focus}`}
              >
                View selected work
              </a>
              <a
                href="#contact"
                className={`rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-fg transition hover:border-primary/60 hover:text-primary-soft ${focus}`}
              >
                Contact me
              </a>
              <ul className="ml-1 flex items-center gap-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      aria-label={s.label}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition hover:text-fg ${focus}`}
                    >
                      <Icon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          <ProfileCard />
        </Reveal>
      </div>
    </section>
  );
}