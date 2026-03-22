'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './comparison.module.css';

function formatValue(value: string, isBudMedia: boolean) {
  const isPositive = value === 'Ja' || value.startsWith('Ja ') || value === 'Yes' || value.startsWith('Yes ');
  const isNegative = value === 'Nej' || value === 'No';

  if (isPositive) return <span className={styles.positive}>{value}</span>;
  if (isNegative) return <span className={styles.negative}>{value}</span>;
  return isBudMedia ? <strong>{value}</strong> : value;
}

export function ComparisonTable() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="priser" className={styles.comparison}>
      <div className="container">
        <h2 className={styles.title}>{content.comparison.title}</h2>
        <div className={styles.tableContainer}>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {content.comparison.headers.map((header, i) => (
                    <th key={i} className={i === 1 ? styles.budMediaHeader : undefined}>
                      {i === 1 && <span className={styles.badge}>Anbefalet</span>}
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row) => (
                  <tr key={row.label}>
                    <td className={styles.rowLabel}>{row.label}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className={i === 0 ? styles.budMediaCell : undefined}>
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
