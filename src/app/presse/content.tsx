'use client';

import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import styles from './presse.module.css';

export function PresseContent() {
  const content = useContent(daPages, enPages);
  const press = content.press;

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <h1>{press.title}</h1>
          <p className={styles.subtitle}>{press.subtitle}</p>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <h2 className={styles.statsTitle}>{press.stats.title}</h2>
          <div className={styles.statsGrid}>
            {press.stats.items.map((item) => (
              <div key={item.label} className={styles.statItem}>
                <span className={styles.statValue}>{item.value}</span>
                <span className={styles.statLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className={styles.timeline}>
        <div className="container container--narrow">
          <h2 className={styles.timelineTitle}>{press.timeline.title}</h2>
          <ol className={styles.timelineList}>
            {press.timeline.items.map((item, i) => (
              <li key={i} className={styles.timelineItem}>
                <span className={styles.timelineDate}>{item.date}</span>
                <span className={styles.timelineEvent}>{item.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <hr className="divider" />

      <section className={styles.founder}>
        <div className="container container--narrow">
          <h2 className={styles.founderTitle}>{press.founder.title}</h2>
          <div className={styles.founderRow}>
            <div className={styles.founderPhoto}>
              <img
                src="/images/founder.jpg"
                alt={press.founder.name}
                className={styles.founderImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className={styles.founderInitials} aria-hidden="true">BS</span>
            </div>
            <div className={styles.founderInfo}>
              <p className={styles.founderName}>{press.founder.name}</p>
              <p className={styles.founderBio}>{press.founder.bio}</p>
              <p className={styles.founderContact}>
                <a href={`mailto:${press.founder.contact}`}>{press.founder.contact}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className={styles.assets}>
        <div className="container container--narrow">
          <h2 className={styles.assetsTitle}>{press.assets.title}</h2>
          <p className={styles.assetsDescription}>{press.assets.description}</p>
          <a
            href="/files/budmedia-media-kit.pdf"
            className="btn-secondary"
            download
          >
            {press.assets.downloadButton}
          </a>
        </div>
      </section>
    </>
  );
}
