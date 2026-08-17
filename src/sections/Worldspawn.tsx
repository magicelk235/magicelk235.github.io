import CountUp from '../reactbits/CountUp';
import Reveal from '../components/Reveal';
import CodeSpecimen from '../components/CodeSpecimen';
import { WORLDSPAWN_SAMPLE, WORLDSPAWN_STATS } from '../data';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Worldspawn() {
  const reduced = useReducedMotion();

  return (
    <section id="worldspawn" className="scroll-mt-24 border-y border-rule bg-panel py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-14">
          <Reveal className="md:col-span-5" distance={34}>
            <h2>Worldspawn</h2>
            <p className="mt-5 max-w-[46ch] text-lg text-ink">
              An open world sandbox in Python. Mine it, farm it, craft from it, fight what lives in
              it, and play the whole thing with other people.
            </p>
            <p className="mt-4 max-w-[52ch] text-body">
              Every world comes out of a seed. Temperature and elevation are drawn deterministically
              per region, the biome falls out of those two numbers, and chunks fill themselves with
              objects and creatures as you walk into them. A server holds the world, clients join
              over TCP, and the state travels between them as JSON.
            </p>
            <p className="mt-4 max-w-[52ch] text-body">
              Started in April 2024 and still the largest thing I have written.
            </p>
            <a
              className="link mt-6 inline-block font-mono text-sm"
              href="https://github.com/magicelk235/Worldspawn-game"
            >
              Read the source
            </a>
          </Reveal>

          <Reveal className="md:col-span-7" distance={40} delay={0.08}>
            <CodeSpecimen code={WORLDSPAWN_SAMPLE} label="world_generation.py" />
          </Reveal>
        </div>

        <Reveal distance={26} delay={0.1}>
          <dl className="mt-16 grid grid-cols-2 gap-px border border-rule bg-rule-soft md:grid-cols-4">
            {WORLDSPAWN_STATS.map(stat => (
              <div key={stat.label} className="bg-panel px-6 py-7">
                <dt className="tag">{stat.label}</dt>
                <dd className="num mt-2 ml-0 text-3xl text-amber md:text-4xl">
                  {reduced ? (
                    stat.value.toLocaleString('en-US')
                  ) : (
                    <CountUp to={stat.value} duration={1.6} separator="," />
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
