import { useState } from 'react';
import { nav } from '../data/nav';
import { personal } from '../data/personal';

export function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {personal.shortName}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {n.label}
                {/* Active underline bar anchored to the bottom */}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-fg" />
                )}
              </a>
            );
          })}

          <a
            href={`mailto:${personal.email}`}
            className="ml-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-fg transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-fg transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-fg transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-t border-line bg-bg/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((n) => {
              const isActive = active === n.id;
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'font-semibold text-fg' : 'text-muted hover:bg-card hover:text-fg'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{n.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-fg" />}
                </a>
              );
            })}
            <a
              href={`mailto:${personal.email}`}
              className="mt-2 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}