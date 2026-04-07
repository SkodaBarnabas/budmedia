'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';
import styles from './ScrollAnimation.module.css';

/**
 * Frame count and path pattern for the lid-opening animation.
 * Extract frames from animation.mp4 with:
 *   ffmpeg -i animation.mp4 -vf "fps=30" -q:v 5 public/images/frames/frame-%03d.jpg
 * Then update FRAME_COUNT to match the total number of extracted frames.
 */
const FRAME_COUNT = 151;
const FRAME_PATH = '/images/frames/frame-';

function padFrame(n: number): string {
  return String(n).padStart(3, '0');
}

export function ScrollAnimation() {
  const content = useContent(daLanding, enLanding);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef(0);
  const framesLoaded = useRef(false);
  const [hasFrames, setHasFrames] = useState(true);

  // Preload all frames on mount
  useEffect(() => {
    const testImg = new Image();
    testImg.onload = () => {
      framesLoaded.current = true;
      for (let i = 2; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `${FRAME_PATH}${padFrame(i)}.jpg`;
      }
    };
    testImg.onerror = () => {
      setHasFrames(false);
    };
    testImg.src = `${FRAME_PATH}001.jpg`;
  }, []);

  const onScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      const img = imgRef.current;
      if (!section) {
        rafId.current = 0;
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableHeight = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollableHeight);

      // Update displayed frame via direct DOM manipulation (no React re-render)
      if (img && framesLoaded.current) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );
        const newSrc = `${FRAME_PATH}${padFrame(frameIndex + 1)}.jpg`;
        if (!img.src.endsWith(newSrc)) {
          img.src = newSrc;
        }
      }

      // Fade in panels at scroll thresholds
      const thresholds = [0.12, 0.42, 0.72];
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        const visible = progress >= thresholds[i];
        panel.style.opacity = visible ? '1' : '0';
        panel.style.transform = visible ? 'translateY(0)' : 'translateY(24px)';
      });

      rafId.current = 0;
    });
  }, []);

  // Only enable scroll-linked animation on desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    if (!mq.matches) return;

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.frameContainer}>
          {hasFrames ? (
            <img
              ref={imgRef}
              className={styles.frame}
              src={`${FRAME_PATH}001.jpg`}
              alt=""
              aria-hidden="true"
            />
          ) : (
            <div className={styles.frameFallback}>
              <span>Frames pending</span>
            </div>
          )}
        </div>

        <div className={styles.panels}>
          {content.scrollPanels.map((panel, i) => (
            <div
              key={panel.label}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className={styles.panel}
              style={{ opacity: 0, transform: 'translateY(24px)' }}
            >
              <span className={styles.panelLabel}>{panel.label}</span>
              <h3 className={styles.panelHeadline}>{panel.headline}</h3>
              <p className={styles.panelBody}>{panel.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
