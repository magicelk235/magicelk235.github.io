import Reveal from '../components/Reveal';
import { CONTACT } from '../data';

const ELSEWHERE = [
  { label: 'GitHub', value: 'github.com/magicelk235', href: CONTACT.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/magicelk235', href: CONTACT.linkedin },
  { label: 'GitLab', value: 'gitlab.com/magicelk235', href: CONTACT.gitlab },
  { label: 'Studio', value: 'magicelklabs.com', href: CONTACT.studio },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-amber py-24 text-[#17120a] md:py-28">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-6" distance={26}>
          <h2 className="max-w-[14ch] text-[#17120a]">Say hello</h2>
          <p className="mt-5 max-w-[42ch] text-lg text-[#3a2a10]">
            Internships, contract work, or a bug that has been bothering you for weeks. I read
            everything that arrives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn border border-[#17120a] bg-[#17120a] text-amber hover:bg-[#241a0d]"
              href={`mailto:${CONTACT.email}`}
            >
              Email me
            </a>
            <a
              className="btn border border-[#17120a]/45 text-[#17120a] hover:border-[#17120a]"
              href={CONTACT.cv}
              download
            >
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5 md:col-start-8" distance={26} delay={0.08}>
          <dl className="m-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-t border-[#17120a]/25 py-4">
              <dt className="font-mono text-xs tracking-[0.14em] text-[#4a3a1c] uppercase">
                Email
              </dt>
              <dd className="m-0 font-mono text-sm text-[#17120a]">
                <a className="underline underline-offset-4" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            {ELSEWHERE.map(row => (
              <div
                key={row.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 border-t border-[#17120a]/25 py-4"
              >
                <dt className="font-mono text-xs tracking-[0.14em] text-[#4a3a1c] uppercase">
                  {row.label}
                </dt>
                <dd className="m-0 font-mono text-sm text-[#17120a]">
                  <a className="underline underline-offset-4" href={row.href}>
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-y border-[#17120a]/25 py-4">
              <dt className="font-mono text-xs tracking-[0.14em] text-[#4a3a1c] uppercase">
                Based in
              </dt>
              <dd className="m-0 font-mono text-sm text-[#17120a]">{CONTACT.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
