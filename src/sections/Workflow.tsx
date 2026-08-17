import Reveal from '../components/Reveal';
import { WORKFLOW } from '../data';

export default function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-24 border-t border-rule py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2 className="max-w-[22ch]">Working with agents, not around them</h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-rule-soft md:grid-cols-3">
          {WORKFLOW.map((item, i) => (
            <Reveal key={item.title} distance={26} delay={i * 0.06}>
              <article className="h-full bg-ground px-0 py-8 md:px-7">
                <p className="num text-sm text-amber">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4">{item.title}</h3>
                <p className="mt-4 text-body">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
