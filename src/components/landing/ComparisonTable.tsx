'use client';

import { Check, X } from '@phosphor-icons/react';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

function formatValue(value: string, isBudMedia: boolean) {
  const isPositive = value === 'Ja' || value.startsWith('Ja ') || value === 'Yes' || value.startsWith('Yes ') || value === 'Nej' && !isBudMedia ? false : value === 'Nej' || value === 'No' ? false : true;
  const isNeg = value === 'Nej' || value === 'No';
  const isPos = value === 'Ja' || value.startsWith('Ja ') || value === 'Yes' || value.startsWith('Yes ');

  if (isPos) {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-400">
        <Check weight="bold" size={14} />
        <span>{value}</span>
      </span>
    );
  }
  if (isNeg) {
    return (
      <span className="inline-flex items-center gap-1.5 text-text-muted">
        <X weight="bold" size={14} />
        <span>{value}</span>
      </span>
    );
  }
  return isBudMedia ? <strong className="text-text font-medium">{value}</strong> : <span className="text-text-secondary">{value}</span>;
}

export function ComparisonTable() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="priser" className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          {content.comparison.title}
        </h2>

        <div className="rounded-xl border border-border-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {content.comparison.headers.map((header, i) => (
                    <th
                      key={i}
                      className={`text-left px-5 py-4 font-medium ${
                        i === 1
                          ? 'bg-accent/5 text-accent'
                          : i === 0
                          ? 'text-text-muted'
                          : 'text-text-secondary'
                      }`}
                    >
                      {i === 1 && (
                        <span className="inline-block text-[10px] uppercase tracking-widest bg-accent text-accent-text px-2 py-0.5 rounded mb-1 font-medium">
                          Anbefalet
                        </span>
                      )}
                      {header && <span className="block">{header}</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row, rowIdx) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border-subtle last:border-b-0 ${
                      rowIdx % 2 === 0 ? '' : 'bg-surface/30'
                    }`}
                  >
                    <td className="px-5 py-4 text-text-secondary font-medium whitespace-nowrap">
                      {row.label}
                    </td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`px-5 py-4 ${
                          i === 0 ? 'bg-accent/5' : ''
                        }`}
                      >
                        {formatValue(value, i === 0)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
