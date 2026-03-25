'use client';

export function SocialProof() {
  const LOGOS = ['Pizzeria Napoli', 'Skovbakken VVS', 'Kiosk+', 'Tandlæge Havnegade', 'FitZone', 'Cafe Strand'];

  return (
    <section className="py-10 border-y border-border-subtle overflow-hidden">
      <div className="container">
        <p className="text-xs text-text-muted tracking-widest uppercase text-center mb-6">
          Betroet af lokale virksomheder
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="mx-10 text-text-muted/60 text-sm font-medium tracking-wide flex-shrink-0"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
