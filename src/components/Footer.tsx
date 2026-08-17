import { CONTACT } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-sm text-mute">Yehonatan Cohen, {new Date().getFullYear()}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="link font-mono text-sm" href={CONTACT.cv} download>
            CV
          </a>
          <a className="link font-mono text-sm" href={CONTACT.studio}>
            Magicelk Labs
          </a>
          <a className="link font-mono text-sm" href={CONTACT.github}>
            GitHub
          </a>
          <a className="link font-mono text-sm" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
