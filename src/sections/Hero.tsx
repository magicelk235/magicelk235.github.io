import { lazy, Suspense } from 'react';
import SplitText from '../reactbits/SplitText';
import { useReducedMotion } from '../hooks/useReducedMotion';

// The WebGL field is decoration behind the headline, so it loads after the
// text has painted rather than sitting in the critical bundle.
const Threads = lazy(() => import('../reactbits/Threads'));

const HEADLINE = 'Compilers, games, and Mac apps.';

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pt-28 pb-16 md:pb-24"
    >
      {/* Ambient amber field. Off under reduced motion, parked when off screen. */}
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 72%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, #000 22%, #000 72%, transparent)',
          }}
        >
          <Suspense fallback={null}>
            <Threads color={[0.949, 0.651, 0.235]} amplitude={1.1} distance={0.28} />
          </Suspense>
        </div>
      )}

      <div className="wrap relative">
        <div className="max-w-[68rem]">
          {reduced ? (
            <h1>{HEADLINE}</h1>
          ) : (
            <SplitText
              tag="h1"
              className="block w-full"
              text={HEADLINE}
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

        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-body md:text-xl">
          AI and data science student at Tel Aviv University. I build small, exact tools that solve
          annoying problems.
        </p>
      </div>

      <div className="wrap relative mt-16">
        <div className="h-px w-full bg-rule" />
      </div>
    </section>
  );
}
