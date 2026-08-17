import Reveal from '../components/Reveal';
import LanguageBar from '../components/LanguageBar';
import { BACKGROUND, SKILLS } from '../data';

// Education rows carry sentences, so they stack; skill rows are short tokens
// and read better wrapped on one line.
const ROWS = [
  ...BACKGROUND.map(row => ({ ...row, stack: true })),
  ...SKILLS.map(row => ({ ...row, stack: false })),
];

export default function Background() {
  return (
    <section id="background" className="scroll-mt-24 border-t border-rule py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2>Background</h2>
        </Reveal>

        <div className="mt-12">
          <Reveal distance={22} duration={0.6}>
            <div className="grid gap-5 border-t border-rule py-8 md:grid-cols-12 md:gap-8">
              <p className="tag md:col-span-3">Written in</p>
              <div className="md:col-span-9">
                <LanguageBar />
              </div>
            </div>
          </Reveal>

          {ROWS.map((row, i) => (
            <Reveal key={row.label} distance={22} duration={0.6} delay={Math.min(i, 4) * 0.04}>
              <div className="grid gap-3 border-t border-rule py-7 last:border-b md:grid-cols-12 md:gap-8">
                <p className="tag md:col-span-3">{row.label}</p>
                <ul
                  className={`m-0 list-none p-0 md:col-span-9 ${
                    row.stack ? 'space-y-1' : 'flex flex-wrap gap-x-6 gap-y-2'
                  }`}
                >
                  {row.items.map(item => (
                    <li key={item} className="max-w-[68ch] text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal distance={22} duration={0.6}>
            <div className="grid gap-3 border-b border-rule py-7 md:grid-cols-12 md:gap-8">
              <p className="tag md:col-span-3">Off the desk</p>
              <p className="max-w-[62ch] text-body md:col-span-9">
                Skiing, hiking, and tennis. Then back to designing complex systems and picking
                fights with annoying problems.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
