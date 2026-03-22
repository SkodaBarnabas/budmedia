'use client';
import styles from './socialProof.module.css';

const LOGOS = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'];

export function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className="container">
        <p className={styles.label}>Betroet af lokale virksomheder</p>
        <div className={styles.logos}>
          {LOGOS.map((logo) => (
            <div key={logo} className={styles.logoBox}>
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
