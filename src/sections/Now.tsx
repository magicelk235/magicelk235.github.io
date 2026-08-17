import Reveal from '../components/Reveal';
import { CONTACT } from '../data';

export default function Now() {
  return (
    <section id="now" className="scroll-mt-24 py-24 md:py-32">
      <div className="wrap">
        <Reveal distance={30}>
          <p className="max-w-[48ch] text-2xl leading-snug text-ink md:text-[2rem] md:leading-[1.25]">
            I have been writing and shipping software since 2025, and almost none of what I know
            came from a classroom.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-6" distance={28} delay={0.06}>
            <p className="max-w-[62ch] text-body">
              School is cyber, computer science, and physics. Alongside it I take Tel Aviv
              University's AI and Data Science program, which so far has meant calculus, linear
              algebra, and statistics, with data science next semester. Systems programming,
              compilers, and macOS were self taught, because none of them appear on a syllabus.
            </p>
          </Reveal>

          <Reveal className="md:col-span-6" distance={28} delay={0.12}>
            <p className="max-w-[62ch] text-body">
              I run{' '}
              <a className="link" href={CONTACT.studio}>
                Magicelk Labs
              </a>
              , a one person Mac studio, and I own the whole cycle there: the code, the design, the
              site, the packaging, and the distribution. If you have an internship, contract work,
              or a project that needs someone who reads the manual before writing the code, email
              me.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
