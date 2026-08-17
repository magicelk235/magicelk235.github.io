import { OTHER } from '../data';
import Reveal from '../components/Reveal';

export default function Smaller() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2>Smaller things</h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-rule bg-rule-soft md:grid-cols-3">
          {OTHER.map((item, i) => (
            <Reveal key={item.name} distance={26} delay={i * 0.06}>
              <article className="flex h-full flex-col bg-ground px-7 py-8">
                <h3>{item.name}</h3>
                <p className="mt-4 text-body">{item.body}</p>

                {item.name === 'MathSpace' && (
                  <div className="mt-6 flex items-end gap-5">
                    <img
                      src="/mathspace/spaceship_stay.png"
                      alt="The MathSpace player ship"
                      width={90}
                      height={113}
                      loading="lazy"
                      decoding="async"
                      className="pixel h-16 w-auto"
                    />
                    <img
                      src="/mathspace/meteor.png"
                      alt="A meteor from MathSpace"
                      width={40}
                      height={58}
                      loading="lazy"
                      decoding="async"
                      className="pixel h-9 w-auto"
                    />
                  </div>
                )}
                <div className="mt-auto pt-6">
                  <p className="num text-sm text-mute">{item.meta}</p>
                  <a className="link mt-3 inline-block font-mono text-sm" href={item.href}>
                    Source
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
