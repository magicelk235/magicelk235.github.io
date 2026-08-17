import CountUp from '../reactbits/CountUp';
import PixelTransition from '../reactbits/PixelTransition';
import Reveal from '../components/Reveal';
import { SPRITES, WORLDSPAWN_STATS } from '../data';
import { useFinePointer, useReducedMotion } from '../hooks/useReducedMotion';

export default function Worldspawn() {
  const reduced = useReducedMotion();
  const fine = useFinePointer();

  return (
    <section
      id="worldspawn"
      className="scroll-mt-24 border-y border-rule bg-panel py-24 md:py-32"
    >
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
          <Reveal className="md:col-span-7" distance={34}>
            <h2>Worldspawn</h2>
            <p className="mt-5 max-w-[54ch] text-lg text-ink">
              An open world sandbox in Python. Mine it, farm it, craft from it, fight what lives
              in it, and play the whole thing with other people.
            </p>
            <p className="mt-4 max-w-[60ch] text-body">
              The world generates into plains, desert, swamp and snow, then fills with creatures
              that hunt on their own schedule. Players connect to a server over TCP and share one
              world. It started in April 2024 and has been growing since.
            </p>
            <a
              className="link mt-6 inline-block font-mono text-sm"
              href="https://github.com/magicelk235/Worldspawn-game"
            >
              Play it from source
            </a>
          </Reveal>

          <div className="md:col-span-4 md:col-start-9">
            <div className="mx-auto w-40 md:w-full md:max-w-[13rem]">
              {reduced || !fine ? (
                <img
                  src="/worldspawn/player_idle.gif"
                  alt="The Worldspawn player character, idle"
                  width={14}
                  height={18}
                  className="pixel h-auto w-full rounded-sharp border border-rule bg-ground"
                />
              ) : (
                <PixelTransition
                  className="rounded-sharp border border-rule bg-ground"
                  gridSize={10}
                  pixelColor="#f2a63c"
                  animationStepDuration={0.35}
                  aspectRatio="100%"
                  firstContent={
                    <img
                      src="/worldspawn/player_idle.gif"
                      alt="The Worldspawn player character, idle"
                      className="pixel h-full w-full object-contain p-6"
                    />
                  }
                  secondContent={
                    <img
                      src="/worldspawn/player_attack.gif"
                      alt="The same character swinging a sword"
                      className="pixel h-full w-full object-contain p-6"
                    />
                  }
                />
              )}
            </div>
          </div>
        </div>

        <Reveal distance={26} delay={0.1}>
          <div
            role="img"
            aria-label="Twenty eight creature sprites drawn for Worldspawn, from chickens to fire golems"
            className="mt-16 grid grid-cols-7 gap-px border border-rule bg-rule-soft md:grid-cols-[repeat(14,minmax(0,1fr))]"
          >
            {SPRITES.map(name => (
              <div
                key={name}
                className="flex aspect-square items-center justify-center bg-panel p-2"
                title={name.replace(/_/g, ' ')}
              >
                <img
                  src={`/worldspawn/${name}.gif`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="pixel h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-px border border-rule bg-rule-soft md:grid-cols-4">
          {WORLDSPAWN_STATS.map(stat => (
            <div key={stat.label} className="bg-panel px-6 py-7">
              <dt className="num text-3xl text-amber md:text-4xl">
                {reduced ? (
                  stat.value.toLocaleString('en-US')
                ) : (
                  <CountUp to={stat.value} duration={1.4} separator="," />
                )}
              </dt>
              <dd className="mt-2 ml-0 text-sm text-mute">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
