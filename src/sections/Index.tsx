import Reveal from '../components/Reveal';
import { INDEX } from '../data';

export default function Index() {
  return (
    <section id="index" className="scroll-mt-24 border-t border-rule bg-panel py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2>Everything else</h2>
        </Reveal>

        <ul className="mt-12 list-none p-0">
          {INDEX.map(row => (
            <li key={row.name}>
              <Reveal distance={18} duration={0.55}>
                <a
                  href={row.href}
                  className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-1 border-t border-rule py-6 no-underline md:grid-cols-12"
                >
                  <span className="num text-sm text-mute md:col-span-1">{row.year}</span>
                  <span className="text-lg text-ink transition-colors duration-200 group-hover:text-amber md:col-span-3">
                    {row.name}
                  </span>
                  <span className="text-body md:col-span-6">{row.what}</span>
                  <span className="num text-sm text-mute md:col-span-2 md:text-right">
                    {row.lang}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="border-t border-rule" />
      </div>
    </section>
  );
}
