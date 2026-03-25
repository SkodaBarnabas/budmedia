'use client';

import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

function BoxDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto opacity-60">
      {/* Outer box */}
      <rect x="40" y="20" width="240" height="200" rx="4" stroke="#A8A29E" strokeWidth="1" fill="none" />
      {/* Inner lid fold line */}
      <rect x="60" y="40" width="200" height="160" rx="2" stroke="#A8A29E" strokeWidth="0.5" strokeDasharray="4 3" fill="none" />
      {/* Restaurant logo area */}
      <rect x="100" y="70" width="120" height="50" rx="2" stroke="#D4A76A" strokeWidth="1" fill="rgba(212,167,106,0.08)" />
      <text x="160" y="100" textAnchor="middle" fill="#D4A76A" fontSize="10" fontFamily="sans-serif">RESTAURANT</text>
      {/* Ad panels */}
      <rect x="44" y="140" width="70" height="36" rx="2" stroke="#D4A76A" strokeWidth="0.75" fill="rgba(212,167,106,0.05)" />
      <text x="79" y="162" textAnchor="middle" fill="#78716C" fontSize="7" fontFamily="sans-serif">ANNONCE</text>
      <rect x="206" y="140" width="70" height="36" rx="2" stroke="#D4A76A" strokeWidth="0.75" fill="rgba(212,167,106,0.05)" />
      <text x="241" y="162" textAnchor="middle" fill="#78716C" fontSize="7" fontFamily="sans-serif">ANNONCE</text>
      <rect x="125" y="185" width="70" height="28" rx="2" stroke="#D4A76A" strokeWidth="0.75" fill="rgba(212,167,106,0.05)" />
      <text x="160" y="203" textAnchor="middle" fill="#78716C" fontSize="7" fontFamily="sans-serif">ANNONCE</text>
    </svg>
  );
}

export function HowItWorks() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="hvordan" className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 md:mb-16">
          {content.howItWorks.title}
        </h2>

        {/* Steps timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden mb-16">
          {content.howItWorks.steps.map((step) => (
            <div key={step.number} className="bg-bg p-8 md:p-10 flex flex-col gap-3">
              <span className="text-accent text-xs font-medium tracking-widest">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Box diagram */}
        <div className="max-w-sm mx-auto">
          <BoxDiagram />
          <p className="text-center text-xs text-text-muted mt-4">
            Pizzabakke med annoncepladser
          </p>
        </div>
      </div>
    </section>
  );
}
