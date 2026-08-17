import { lazy, Suspense } from 'react';
import SplitText from '../reactbits/SplitText';
import { CONTACT } from '../data';
import { useReducedMotion } from '../hooks/useReducedMotion';

// The WebGL field is decoration behind the headline, so it loads after the
// text has painted rather than sitting in the critical bundle.
const Field = lazy(() => import('../reactbits/FaultyTerminal'));

const NAME = 'Yehonatan Cohen';

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pt-28 pb-16 md:pb-24"
    >
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            maskImage:
              'radial-gradient(78% 72% at 94% -2%, #000 0%, rgba(0,0,0,.72) 40%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(78% 72% at 94% -2%, #000 0%, rgba(0,0,0,.72) 40%, transparent 78%)',
          }}
        >
          <Suspense fallback={null}>
            <Field
              tint="#f2a63c"
              scale={2.1}
              digitSize={1.5}
              timeScale={0.28}
              scanlineIntensity={0.4}
              glitchAmount={0.35}
              flickerAmount={0.35}
              noiseAmp={0.7}
              chromaticAberration={0}
              curvature={0}
              brightness={1.05}
              mouseReact={false}
              pageLoadAnimation
            />
          </Suspense>
        </div>
      )}

      <div className="wrap relative">
        <div className="max-w-[68rem]">
          {reduced ? (
            <h1>{NAME}</h1>
          ) : (
            <SplitText
              tag="h1"
              className="block w-full"
              text={NAME}
              splitType="lines"
              delay={90}
              duration={0.9}
              ease="power4.out"
              from={{ opacity: 0, yPercent: 110 }}
              to={{ opacity: 1, yPercent: 0 }}
              textAlign="left"
              threshold={0.1}
            />
          )}
        </div>

        <p className="mt-8 max-w-[54ch] text-xl leading-relaxed text-ink md:text-2xl">
          I write compilers, Mac apps, and games. Eleventh grade in Israel, and in Tel Aviv
          University's AI and Data Science program.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
            Email me
          </a>
          <a className="btn btn-ghost" href={CONTACT.cv} download>
            Download CV
          </a>
        </div>
      </div>

      <div className="wrap relative mt-16">
        <div className="h-px w-full bg-rule" />
      </div>
    </section>
  );
}
