import { Fragment } from 'react';

// One pass over each line: comments, strings, keywords, numbers. Enough to read
// two languages without pulling in a highlighter.
const TOKEN =
  /(#.*|;.*|\/\/.*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(include|func|new|end|global|const|def|class|return|for|in|if|else|elif|import|from|self|True|False|None)\b|\b(qword|byte|word|float|int|long|char|short|bool)\b|\b(-?\d+(?:\.\d+)?)\b/g;

const CLASS = ['text-mute', 'text-[#9fd3a0]', 'text-amber', 'text-[#e0b877]', 'text-[#e0b877]'];

/** Real source, coloured just enough to read. No window chrome, no fake terminal. */
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

  TOKEN.lastIndex = 0;
  for (const match of line.matchAll(TOKEN)) {
    const start = match.index;
    if (start > cursor) parts.push(line.slice(cursor, start));
    const group = match.slice(1).findIndex(g => g !== undefined);
    parts.push(
      <span key={start} className={CLASS[group]}>
        {match[0]}
      </span>
    );
    cursor = start + match[0].length;
  }

  if (cursor < line.length) parts.push(line.slice(cursor));
  return parts;
}
