import { LANGUAGES } from '../data';
import Reveal from '../components/Reveal';

const BLOCKS = [
  {
    label: 'Studying',
    body: 'AI and data science at Tel Aviv University, majoring in cyber, computer science and physics.',
  },
  {
    label: 'Off the desk',
    body: 'Skiing, hiking and tennis. Otherwise designing complex systems nobody asked for and fixing things that annoy me.',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-rule py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2>The rest of it</h2>
        </Reveal>

        <div className="mt-12">
          {BLOCKS.map((block, i) => (
            <Reveal key={block.label} distance={28} delay={i * 0.06}>
              <div className="grid gap-3 border-t border-rule py-8 md:grid-cols-12 md:gap-8">
                <p className="tag md:col-span-4">{block.label}</p>
                <p className="max-w-[62ch] text-lg text-ink md:col-span-8">{block.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal distance={28} delay={0.12}>
            <div className="grid gap-3 border-y border-rule py-8 md:grid-cols-12 md:gap-8">
              <p className="tag md:col-span-4">Written in</p>
              <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 md:col-span-8">
                {LANGUAGES.map(lang => (
                  <li key={lang} className="num text-lg text-ink">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
