import { Fragment } from 'react';

const KEYWORDS = /\b(include|func|new|return|end|qword|byte|global|const|float)\b/g;

/** Real HolyC++ source, coloured just enough to read: keywords amber, strings soft. */
export default function CodeSpecimen({ code, label }: { code: string; label: string }) {
  return (
    <figure className="m-0 rounded-sharp border border-rule bg-panel">
      <figcaption className="border-b border-rule-soft px-5 py-2.5 font-mono text-xs tracking-[0.08em] text-mute">
        {label}
      </figcaption>
      <pre className="m-0 overflow-x-auto px-5 py-5 font-mono text-[0.82rem] leading-[1.7] text-body">
        <code>
          {code.split('\n').map((line, i) => (
            <Fragment key={i}>
              {highlight(line)}
              {'\n'}
            </Fragment>
          ))}
        </code>
      </pre>
    </figure>
  );
}

function highlight(line: string) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of line.matchAll(KEYWORDS)) {
    const start = match.index;
    if (start > cursor) parts.push(line.slice(cursor, start));
    parts.push(
      <span key={start} className="text-amber">
        {match[0]}
      </span>
    );
    cursor = start + match[0].length;
  }

  if (cursor < line.length) parts.push(line.slice(cursor));
  return parts;
}
