'use client';

import { useContent } from '@/hooks/useLanguage';
import { Reveal } from '@/components/shared/Reveal';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './ComparisonSection.module.css';

export function ComparisonSection() {
  const content = useContent(daLanding, enLanding);

  return (
    <section className={styles.section}>
      <Reveal className={styles.inner}>
        <h2 className={styles.title}>{content.comparison.title}</h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th />
                {content.comparison.columns.map((col, i) => (
                  <th
                    key={col}
                    className={
                      i === 0
                        ? `${styles.boxspotCol} ${styles.boxspotHeader}`
                        : ''
                    }
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.label}-${i}`}
                      className={
                        i === 0
                          ? `${styles.boxspotCol} ${styles.boxspotCell}`
                          : styles.otherCell
                      }
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
