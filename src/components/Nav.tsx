import { useEffect, useState } from 'react';
import { CONTACT } from '../data';

const SECTIONS = [
  { id: 'apps', label: 'Apps' },
  { id: 'metal', label: 'Metal' },
  { id: 'worldspawn', label: 'Worldspawn' },
  { id: 'about', label: 'About' },
];

export default function Nav() {
  const [current, setCurrent] = useState('');

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

        <a className="btn btn-primary h-10 min-h-10 text-[0.8rem]" href={`mailto:${CONTACT.email}`}>
          Email me
        </a>
      </nav>
    </header>
  );
}
