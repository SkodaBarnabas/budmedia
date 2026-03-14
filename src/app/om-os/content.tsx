'use client';

import { useContent } from '@/hooks/useLanguage';
import daPages from '@/content/da/pages.json';
import enPages from '@/content/en/pages.json';
import styles from './om-os.module.css';

export function OmOsContent() {
  const content = useContent(daPages, enPages);
  const about = content.about;

  return (
    <>
      <section className={styles.header}>
        <div className="container container--narrow">
          <h1>{about.title}</h1>
          <p className={styles.intro}>{about.intro}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container--narrow">
          <h2 className={styles.sectionTitle}>{about.mission.title}</h2>
          <p className={styles.sectionText}>{about.mission.text}</p>
        </div>
      </section>

      <hr className="divider" />

      <section className={styles.section}>
        <div className="container container--narrow">
          <h2 className={styles.sectionTitle}>{about.parent.title}</h2>
          <p className={styles.sectionText}>{about.parent.text}</p>
        </div>
      </section>

      <hr className="divider" />

      <section className={styles.section}>
        <div className="container container--narrow">
          <h2 className={styles.sectionTitle}>{about.founder.title}</h2>
          <div className={styles.founderRow}>
            <div className={styles.founderPhoto}>
              {/* Replace /images/founder.jpg with actual photo */}
              <img
                src="/images/founder.jpg"
                alt={about.founder.name}
                className={styles.founderImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className={styles.founderInitials} aria-hidden="true">BS</span>
            </div>
            <div className={styles.founderInfo}>
              <p className={styles.founderName}>{about.founder.name}</p>
              <p className={styles.sectionText}>{about.founder.text}</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className={styles.section}>
        <div className="container container--narrow">
          <h2 className={styles.sectionTitle}>{about.location.title}</h2>
          <p className={styles.sectionText}>{about.location.text}</p>
        </div>
      </section>
    </>
  );
}
