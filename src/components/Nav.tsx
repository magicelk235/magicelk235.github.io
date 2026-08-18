import { useEffect, useState } from 'react';
import { CONTACT } from '../data';

const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'metal', label: 'Compilers' },
  { id: 'worldspawn', label: 'Worldspawn' },
  { id: 'background', label: 'Background' },
];

export default function Nav() {
  const [current, setCurrent] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const targets = SECTIONS.map(s => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape and once the viewport reaches the desktop
  // breakpoint, so it never lingers open behind the inline links.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const desktop = window.matchMedia('(min-width: 768px)');
    const onChange = () => desktop.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-ground/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="wrap flex h-16 items-center justify-between gap-6"
      >
        <a
          href="#top"
          className="font-display text-[0.95rem] font-extrabold tracking-[-0.01em] text-ink no-underline"
          style={{ fontStretch: '110%' }}
        >
          Yehonatan Cohen
        </a>

        <ul className="hidden list-none items-center gap-7 p-0 md:flex">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={current === s.id ? 'true' : undefined}
                className={`font-mono text-[0.8rem] tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-amber ${
                  current === s.id ? 'text-amber' : 'text-mute'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            className="btn btn-primary h-10 min-h-10 text-[0.8rem]"
            href={`mailto:${CONTACT.email}`}
          >
            Email me
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            className="flex h-10 w-10 items-center justify-center border border-[rgba(246,241,232,0.28)] text-ink transition-colors duration-200 hover:border-amber hover:text-amber md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-rule bg-ground/95 backdrop-blur-md md:hidden">
          <ul className="wrap m-0 flex list-none flex-col gap-1 py-4">
            {SECTIONS.map(s => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={current === s.id ? 'true' : undefined}
                  className={`block py-3 font-mono text-sm tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-amber ${
                    current === s.id ? 'text-amber' : 'text-mute'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
