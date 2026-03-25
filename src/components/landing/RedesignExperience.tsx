'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, X } from '@phosphor-icons/react';
import { useContent } from '@/hooks/useLanguage';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

function splitWords(text: string) {
  return text.split(' ').filter(Boolean);
}

export function RedesignExperience() {
  const content = useContent(daLanding, enLanding);
  const [videoFailed, setVideoFailed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [hasGsap, setHasGsap] = useState(false);
  const scopeRef = useRef<HTMLDivElement>(null);

  const headlineWords = useMemo(() => splitWords(content.hero.headline), [content.hero.headline]);

  useEffect(() => {
    if (!scopeRef.current) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const isReady = Boolean(gsap && ScrollTrigger);
    setHasGsap(isReady);

    if (!isReady || !gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.set('.hero-word', { opacity: 0, y: 64 });
      gsap.set('.hero-subline, .hero-cta-row, .hero-kicker, .hero-visual-card', { opacity: 0, y: 28 });

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-stage',
          start: 'top top',
          end: '+=160%',
          scrub: true,
          pin: '.hero-pin',
          anticipatePin: 1,
        },
      });

      heroTimeline
        .to('.hero-word', {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.35,
          ease: 'power2.out',
        })
        .to('.hero-kicker', { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, '-=0.2')
        .to('.hero-subline', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.1')
        .to('.hero-cta-row', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.15')
        .to('.hero-visual-card', {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.35')
        .to('.hero-copy-wrap', {
          opacity: 0.2,
          y: -22,
          duration: 0.3,
          ease: 'power2.inOut',
        }, '+=0.25')
        .to('.hero-visual-card', {
          opacity: 0,
          scale: 1.05,
          duration: 0.25,
          ease: 'power2.inOut',
        }, '-=0.25');

      gsap.set('.story-title-word', { opacity: 0, y: 42 });
      gsap.set('.story-step, .story-visual, .story-foot', { opacity: 0, y: 38, scale: 0.92 });

      const storyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.story-stage',
          start: 'top top',
          end: '+=220%',
          scrub: true,
          pin: '.story-pin',
          anticipatePin: 1,
        },
      });

      storyTimeline
        .to('.story-title-word', {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.26,
          ease: 'power2.out',
        })
        .to('.story-step-0', { opacity: 1, y: 0, scale: 1, duration: 0.26, ease: 'power2.out' }, '+=0.05')
        .to('.story-step-1', { opacity: 1, y: 0, scale: 1, duration: 0.26, ease: 'power2.out' }, '+=0.12')
        .to('.story-step-2', { opacity: 1, y: 0, scale: 1, duration: 0.26, ease: 'power2.out' }, '+=0.12')
        .to('.story-visual', { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }, '-=0.2')
        .to('.story-foot', { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }, '-=0.12')
        .to('.story-board', { opacity: 0.2, y: -28, duration: 0.3, ease: 'power2.inOut' }, '+=0.26');

      gsap.utils.toArray('[data-reveal]').forEach((node: Element, i: number) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: node,
            start: 'top 84%',
            end: 'top 28%',
            scrub: true,
          },
        }).fromTo(
          node,
          { opacity: 0, y: 56, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            delay: i * 0.02,
          },
        );
      });
    }, scopeRef.current);

    return () => {
      context.revert();
    };
  }, [headlineWords.length]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    try {
      const form = event.currentTarget;
      const payload = Object.fromEntries(new FormData(form));
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div ref={scopeRef} className={hasGsap ? 'landing-motion' : 'landing-motion scroll-fallback'}>
      <section id="hero" className="hero-stage">
        <div className="hero-pin">
          <div className="hero-media-shell" aria-hidden="true">
            <div className="hero-media-fallback" />
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
            >
              <source src="/videos/bg_video_animation.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay-dim" />
            <div className="hero-overlay-vignette" />
            <div className="hero-overlay-side hero-overlay-side-left" />
            <div className="hero-overlay-side hero-overlay-side-right" />
            <div className="hero-overlay-bottom" />
          </div>

          <div className="hero-content container">
            <div className="hero-layout">
              <div className="hero-copy-wrap">
                <p className="hero-kicker eyebrow">{content.hero.eyebrow}</p>
                <h1 className="hero-title" aria-label={content.hero.headline}>
                  {headlineWords.map((word, index) => (
                    <span key={`${word}-${index}`} className="hero-word-wrap">
                      <span className="hero-word">{word}</span>{' '}
                    </span>
                  ))}
                </h1>
                <p className="hero-subline">{content.hero.subheadline}</p>
                <div className="hero-cta-row">
                  <Link href="/kontakt" className="btn-primary">
                    {content.hero.ctaPrimary}
                  </Link>
                  <a href="#hvordan" className="btn-secondary">
                    {content.hero.ctaSecondary}
                  </a>
                </div>
              </div>

              <article className="hero-visual-card" data-reveal>
                <p className="eyebrow">{content.boxShowcase.eyebrow}</p>
                <h2>{content.boxShowcase.headline}</h2>
                <p>{content.boxShowcase.description}</p>
                <ul>
                  {content.boxShowcase.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <p className="hero-price-note">{content.boxShowcase.priceNote}</p>
              </article>
            </div>
          </div>
        </div>

        {videoFailed && <div className="hero-video-error" aria-hidden="true" />}
      </section>

      <section id="hvordan" className="story-stage">
        <div className="story-pin">
          <div className="container story-board">
            <p className="eyebrow">{content.howItWorks.title}</p>
            <h2 className="story-title" aria-label={content.howItWorks.title}>
              {splitWords(content.howItWorks.title).map((word, index) => (
                <span key={`${word}-${index}`} className="story-word-wrap">
                  <span className="story-title-word">{word}</span>{' '}
                </span>
              ))}
            </h2>

            <div className="story-grid">
              <div className="story-steps">
                {content.howItWorks.steps.map((step, index) => (
                  <article key={step.number} className={`story-step story-step-${index}`}>
                    <p className="story-step-number">{step.number}</p>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>

              <aside className="story-visual" aria-label={content.boxShowcase.headline}>
                <img
                  src="/images/products/multipleadds.png"
                  alt="Pizzabakker med annoncepladser"
                />
                <div className="story-visual-label">
                  <p>{content.boxShowcase.priceNote}</p>
                </div>
              </aside>
            </div>

            <p className="story-foot">{content.restaurantBrief.description}</p>
          </div>
        </div>
      </section>

      <section id="produkt" className="section section-deep" data-reveal>
        <div className="container product-stage">
          <div className="section-heading-wrap">
            <p className="eyebrow">{content.products.title}</p>
            <h2>{content.products.title}</h2>
          </div>

          <div className="product-grid">
            {content.products.items.map((item, index) => (
              <article key={item.key} className={`product-card product-card-${index}`}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.priceFrom}</span>
              </article>
            ))}
          </div>

          <div className="product-cta-wrap">
            <Link href="/produkter" className="btn-secondary">{content.products.cta}</Link>
          </div>
        </div>
      </section>

      <section id="priser" className="section section-dark" data-reveal>
        <div className="container comparison-stage">
          <div className="section-heading-wrap">
            <p className="eyebrow">{content.comparison.title}</p>
            <h2>{content.comparison.title}</h2>
          </div>

          <div className="comparison-table-wrap">
            <table>
              <thead>
                <tr>
                  {content.comparison.headers.map((header, index) => (
                    <th key={`${header}-${index}`}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    {row.values.map((value, index) => {
                      const isNegative = value === 'Nej' || value === 'No';
                      const isPositive = value === 'Ja' || value.startsWith('Ja ') || value === 'Yes' || value.startsWith('Yes ');

                      return (
                        <td key={`${row.label}-${index}`}>
                          {isPositive && (
                            <span className="comparison-pill positive">
                              <Check size={14} weight="bold" />
                              {value}
                            </span>
                          )}
                          {isNegative && (
                            <span className="comparison-pill negative">
                              <X size={14} weight="bold" />
                              {value}
                            </span>
                          )}
                          {!isPositive && !isNegative && <span>{value}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="restauranter" className="section" data-reveal>
        <div className="container split-stage">
          <article className="split-card split-card-feature">
            <p className="eyebrow">{content.restaurantBrief.title}</p>
            <h2>{content.restaurantBrief.title}</h2>
            <p>{content.restaurantBrief.description}</p>
            <Link href="/restauranter" className="btn-primary">{content.restaurantBrief.cta}</Link>
          </article>

          <article className="split-card split-card-service">
            <p className="eyebrow">{content.serviceScope.title}</p>
            <h3>{content.serviceScope.title}</h3>
            <ul>
              {content.serviceScope.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="split-card split-card-about">
            <p className="eyebrow">{content.aboutBrief.title}</p>
            <h3>{content.aboutBrief.title}</h3>
            <p>{content.aboutBrief.text}</p>
            <Link href="/om-os" className="btn-secondary">{content.aboutBrief.cta}</Link>
          </article>
        </div>
      </section>

      <section id="kontakt" className="section section-contact" data-reveal>
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Kontakt</p>
            <h2>{content.contactCta.title}</h2>
            <p>{content.hero.subheadline}</p>
          </div>

          {status === 'success' ? (
            <article className="contact-success">
              <p>{content.contactCta.success}</p>
            </article>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <label>
                <span>{content.contactCta.namePlaceholder}</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>

              <label>
                <span>{content.contactCta.companyPlaceholder}</span>
                <input type="text" name="company" autoComplete="organization" />
              </label>

              <label>
                <span>{content.contactCta.emailPlaceholder}</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>

              <label>
                <span>{content.contactCta.messagePlaceholder}</span>
                <textarea name="message" required rows={5} />
              </label>

              {status === 'error' && <p className="contact-error">{content.contactCta.error}</p>}

              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? content.contactCta.sending : content.contactCta.submit}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
