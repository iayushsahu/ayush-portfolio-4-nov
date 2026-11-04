import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/** Observes `.reveal` descendants (including dynamically added ones) and reveals them as they enter the viewport. */
export function useReveal(): RefObject<HTMLDivElement> {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const observeNode = (node: Element) => {
      if (node.classList.contains('reveal')) io.observe(node);
      node.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el));
    };

    // Initial scan
    root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el));

    // Re-observe elements added after filtering / re-rendering
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) observeNode(n as Element);
        });
      });
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return rootRef;
}

/** Tracks which section is currently in view for scroll-spy navigation. */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    let cancelled = false;
    const onScroll = () => {
      if (cancelled) return;
      const pos = window.scrollY + 120;
      let current = ids[0] ?? '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelled = true;
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids]);

  return active;
}
