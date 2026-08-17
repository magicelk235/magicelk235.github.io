import { LANGUAGE_BYTES, LANGUAGE_MEASURED } from '../data';

// One hue, stepped in lightness. The darkest step still reads against the
// ground, so no segment disappears.
const SHADES = ['#f6bd6a', '#f2a63c', '#d4881f', '#b06f1c', '#8e5a1a', '#6f4718'];

export default function LanguageBar() {
  const total = LANGUAGE_BYTES.reduce((sum, l) => sum + l.bytes, 0);
  const summary = LANGUAGE_BYTES.map(l => `${l.name} ${l.percent}%`).join(', ');

  return (
    <div>
      <div
        role="img"
        aria-label={`Language distribution by bytes of code: ${summary}`}
        className="flex h-3 w-full gap-px overflow-hidden"
      >
        {LANGUAGE_BYTES.map((lang, i) => (
          <span
            key={lang.name}
            className="block h-full"
            style={{ width: `${(lang.bytes / total) * 100}%`, background: SHADES[i] }}
          />
        ))}
      </div>

      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
        {LANGUAGE_BYTES.map((lang, i) => (
          <div key={lang.name} className="flex items-baseline gap-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 translate-y-[-1px]"
              style={{ background: SHADES[i] }}
            />
            <dt className="text-sm text-body">{lang.name}</dt>
            <dd className="num m-0 text-sm text-mute">{lang.percent}%</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-sm text-body">
        {(LANGUAGE_BYTES.reduce((sum, l) => sum + l.bytes, 0) / 1_000_000).toFixed(2)} MB of code
        across the {LANGUAGE_MEASURED.repos} project repositories behind this page, counted by
        GitHub in {LANGUAGE_MEASURED.date}.
      </p>
    </div>
  );
}
