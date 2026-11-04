import { personal } from '../data/personal';
import { Icon, Reveal } from './shared';

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-wide">
        <Reveal className="bg-glow card-line relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-soft">Contact</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Let's build something <span className="text-gradient">intelligent</span> together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            {personal.availability}. I'd love to discuss conversational AI, Amelia, Dialogflow, or full-stack opportunities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <Icon name="mail" className="h-4 w-4" />
              {personal.email}
            </a>
            <a
              href={personal.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-fg transition hover:border-primary/60"
            >
              <PhoneIcon className="h-4 w-4" />
              {personal.phone}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-fg transition hover:border-primary/60"
            >
              <Icon name="github" className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-fg transition hover:border-primary/60"
            >
              <Icon name="linkedin" className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <Icon name="pin" className="h-4 w-4 text-dim" />
            {personal.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-dim">© {new Date().getFullYear()} {personal.name}. Built with React + Tailwind.</p>
        <div className="flex items-center gap-3">
          <a href={personal.github} target="_blank" rel="noreferrer" className="text-muted transition hover:text-fg" aria-label="GitHub">
            <Icon name="github" className="h-4 w-4" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-muted transition hover:text-fg" aria-label="LinkedIn">
            <Icon name="linkedin" className="h-4 w-4" />
          </a>
          <a href={`mailto:${personal.email}`} className="text-muted transition hover:text-fg" aria-label="Email">
            <Icon name="mail" className="h-4 w-4" />
          </a>
          <a href={personal.phoneHref} className="text-muted transition hover:text-fg" aria-label="Call">
            <PhoneIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}