import { CONTACT } from '../data';
import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-amber py-24 text-[#17120a] md:py-28">
      <div className="wrap text-center">
        <Reveal distance={26}>
          <h2 className="text-[#17120a]">Say hello</h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-lg text-[#3a2a10]">
            Work, a project that could use a second pair of hands, or a bug that has been
            bothering you for weeks.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              className="btn min-h-12 border border-[#17120a] bg-[#17120a] text-amber hover:bg-[#241a0d]"
              href={`mailto:${CONTACT.email}`}
            >
              Email me
            </a>
            <a
              className="btn min-h-12 border border-[#17120a]/45 text-[#17120a] hover:border-[#17120a]"
              href={CONTACT.linkedin}
            >
              LinkedIn
            </a>
            <a
              className="btn min-h-12 border border-[#17120a]/45 text-[#17120a] hover:border-[#17120a]"
              href={CONTACT.github}
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
