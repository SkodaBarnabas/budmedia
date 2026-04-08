'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const content = useContent(daLanding, enLanding);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className={styles.edgeFade} aria-hidden="true" />
      <div className={styles.textScrim} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
        <h1 className={styles.headline}>{content.hero.headline}</h1>
        <p className={styles.subline}>{content.hero.subline}</p>
        <Link href="/kontakt" className={styles.cta}>
          {content.hero.cta}
        </Link>
      </div>
    </section>
  );
}
