'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './landing.module.css';

export function ComparisonTable() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.comparison}>
      <div className="container">
        <h2 className={styles.comparisonTitle}>{content.comparison.title}</h2>
        <div className={styles.comparisonScroll}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                {content.comparison.headers.map((header, i) => (
                  <th key={i} scope={i === 0 ? undefined : 'col'}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.values.map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
