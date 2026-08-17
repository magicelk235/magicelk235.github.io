import { HOLYC_SAMPLE, METAL } from '../data';
import CodeSpecimen from '../components/CodeSpecimen';
import DecryptedText from '../reactbits/DecryptedText';
import Reveal from '../components/Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Metal() {
  const reduced = useReducedMotion();

  return (
    <section id="metal" className="scroll-mt-24 border-t border-rule py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2>
            {reduced ? (
              'Close to the metal'
            ) : (
              <DecryptedText
                text="Close to the metal"
                animateOn="view"
                sequential
                speed={38}
                maxIterations={12}
                useOriginalCharsOnly
                encryptedClassName="text-amber"
              />
            )}
          </h2>
          <p className="mt-5 max-w-[62ch] text-body">
            A language, the tooling around it, and a couple of programs that talk to the machine
            directly.
          </p>
        </Reveal>

        <div className="mt-14">
          {METAL.map((item, i) => (
            <Reveal key={item.name} distance={34} delay={i * 0.05}>
              <article className="grid gap-5 border-t border-rule py-9 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <h3>{item.name}</h3>
                    <span className="num text-sm text-mute">{item.year}</span>
                  </div>
                  <ul className="mt-4 list-none space-y-1.5 p-0">
                    {item.facts.map(fact => (
                      <li key={fact} className="num text-sm text-mute">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-8">
                  <p className="text-lg text-ink">{item.what}</p>
                  <p className="mt-3 max-w-[68ch] text-body">{item.body}</p>
                  <a className="link mt-5 inline-block font-mono text-sm" href={item.href}>
                    {item.hrefLabel}
                  </a>

                  {item.name === 'HolyC++' && (
                    <div className="mt-8">
                      <CodeSpecimen code={HOLYC_SAMPLE} label="hello.hcpp" />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
