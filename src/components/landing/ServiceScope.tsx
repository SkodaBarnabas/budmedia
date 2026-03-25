'use client';

import {
  Crosshair,
  PaintBrush,
  MapPin,
  ChartBar,
  ArrowsClockwise,
} from '@phosphor-icons/react';
import { useContent } from '@/hooks/useLanguage';
import daLanding from '@/content/da/landing.json';
import enLanding from '@/content/en/landing.json';

const ICONS = [Crosshair, PaintBrush, MapPin, ChartBar, ArrowsClockwise];

export function ServiceScope() {
  const content = useContent(daLanding, enLanding);

  return (
    <section id="inkluderet" className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          {content.serviceScope.title}
        </h2>

        <div className="divide-y divide-border-subtle">
          {content.serviceScope.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-start"
              >
                <div className="md:col-span-1 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center">
                    <Icon size={20} weight="regular" className="text-accent" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
