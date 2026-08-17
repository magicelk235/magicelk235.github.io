import { APPS } from '../data';
import Framed from '../components/Framed';
import Reveal from '../components/Reveal';

export default function Studio() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-rule py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <h2 className="max-w-[20ch]">Magicelk Labs</h2>
          <p className="mt-5 max-w-[62ch] text-lg text-ink">
            My studio. Two Mac apps released so far, both because macOS was missing something small
            and I got tired of working around it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10">
          {APPS.map((app, i) => (
            <Reveal key={app.name} distance={46} delay={i * 0.08}>
              <article className="flex h-full flex-col">
                <Framed
                  src={app.shot}
                  alt={app.alt}
                  width={app.shotSize[0]}
                  height={app.shotSize[1]}
                  aspect="7 / 5"
                />

                <div className="mt-7 flex items-center gap-3">
                  <img
                    src={app.icon}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="h-9 w-9"
                  />
                  <h3>{app.name}</h3>
                  <span className="num ml-auto text-sm text-mute">{app.year}</span>
                </div>

                <p className="mt-4 text-lg text-ink">{app.line}</p>
                <p className="mt-3 text-body">{app.detail}</p>

                <p className="num mt-6 text-sm text-mute">{app.stack}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-7">
                  <a className="link font-mono text-sm" href={app.site}>
                    Product page
                  </a>
                  <a className="link font-mono text-sm" href={app.repo}>
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
