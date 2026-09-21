import type { Metadata } from 'next';
import Link from 'next/link';
import { getComparisonRows } from '@/lib/queries';
import ComparisonTable from '@/components/ComparisonTable';
import Podium from '@/components/Podium';
import TokenCalcClient from './tools/token-calc/TokenCalcClient';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'camVeritas, Cam-site pricing, explained in 30 seconds',
  description: 'Cam-site pricing, explained in 30 seconds. We turn every site\'s hidden token prices back into real dollars per minute, ranked, honest, no affiliate spin.',
  openGraph: {
    title: 'Cam-site pricing, explained in 30 seconds',
    description: 'Every cam site\'s real cost per minute, in plain dollars. Ranked honestly, no affiliate spin.',
    url: SITE_CONFIG.url,
    siteName: 'camVeritas',
    type: 'website',
  },
  alternates: { canonical: SITE_CONFIG.url },
};

// Encadré de section : bordure arrondie + fond surélevé. Uniformise toutes les sections.
function Panel({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <section style={{
      marginBottom: 28,
      padding: '32px 28px',
      borderRadius: 18,
      border: `1px solid ${accent ? 'var(--accent-line)' : 'var(--line)'}`,
      background: accent
        ? 'linear-gradient(180deg, var(--accent-wash) 0%, var(--paper-2) 100%)'
        : 'var(--paper-2)',
    }}>
      {children}
    </section>
  );
}

// En-tête de section : badge "step" optionnel + label + gros titre + sous-titre. Centré.
function SectionHead({ step, eyebrow, title, subtitle }: { step?: number; eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: 28, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
        {step !== undefined && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 26, height: 26, borderRadius: '50%', background: 'var(--accent)',
            color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
          }}>{step}</span>
        )}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          {step !== undefined ? `Step ${step} · ${eyebrow}` : eyebrow}
        </div>
      </div>
      <h2 style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em', margin: 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 14.5, color: 'var(--ink-3)', marginTop: 10, lineHeight: 1.55 }}>{subtitle}</p>
      )}
    </div>
  );
}

export default function HomePage() {
  const rows = getComparisonRows();
  const calcRows = rows
    .filter((r) => r.privateLow !== null || r.spyLow !== null)
    .map((r) => ({
      slug: r.slug, name: r.name,
      privateLow: r.privateLow, privateHigh: r.privateHigh,
      spyLow: r.spyLow, spyHigh: r.spyHigh,
      pricingCheckedAt: r.pricingCheckedAt,
    }));

  return (
    <main className="home-centered" style={{ maxWidth: 1000, margin: '0 auto', padding: '52px 24px 96px' }}>
      {/* Hero, centré */}
      <header style={{ marginBottom: 44, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
          Cam-site pricing, explained in 30 seconds
        </div>
        <h1 style={{ fontSize: 'clamp(30px, 4.4vw, 44px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-0.02em' }}>
          What cam sites really cost, in plain dollars.
        </h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-2)', marginTop: 20 }}>
          Cam sites hide the price behind “tokens” so you can’t easily tell what you’re spending.
          We bought the tokens, did the math, and turned every rate back into real dollars per minute.
          No sticker-price tricks, no ranking sold to the highest bidder.
        </p>
      </header>

      {/* Podium, dans son encadré */}
      <Panel>
        <Podium />
      </Panel>

      {/* Step 1, Learn the basics */}
      <Panel>
        <SectionHead
          step={1}
          eyebrow="Learn the basics"
          title="The 3 things you need to know"
          subtitle="Cam-site jargon, decoded, so the numbers below actually make sense."
        />
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            ['What’s a “token”?', 'The fake currency every cam site uses. You buy tokens, then spend them per minute. We convert them back to real dollars.'],
            ['“Private” vs “Spy”', 'A private is a one-on-one show. Spy means quietly watching someone else’s private, much cheaper, if you just want to look.'],
            ['Why a price range?', 'Each model sets her own rate, so a show costs somewhere between a low and high price. We show the realistic band, not a fake single number.'],
          ].map(([t, d]) => (
            <div key={t} style={{ padding: '18px 20px', border: '1px solid var(--line)', borderRadius: 12, background: 'var(--paper)' }}>
              <h3 style={{ fontSize: 15, marginBottom: 8 }}>{t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Panel>

      {/* Step 2, le tableau */}
      <Panel>
        <SectionHead
          step={2}
          eyebrow="Compare every site"
          title="Every site, ranked by real cost"
          subtitle="Cheapest to watch at the top. Tap any column to re-sort, by private price, the cheap “spy” price, or how many trackers a site runs."
        />
        <ComparisonTable rows={rows} />
      </Panel>

      {/* Step 3, le calculateur (encadré accentué) */}
      <Panel accent>
        <SectionHead
          step={3}
          eyebrow="Check your budget"
          title="What will your budget actually get you?"
          subtitle="Type in a budget, or a number of minutes, and see the real cost on every site instantly. This is the number cam sites don’t want you to do in your head."
        />
        <TokenCalcClient rows={calcRows} />
      </Panel>

      {/* Pourquoi nous croire, dans son encadré */}
      <Panel>
        <SectionHead
          eyebrow="Our promise"
          title="Why you can trust these numbers"
        />
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 620, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          Most “top cam sites” lists are ordered by who pays the most per signup. We disclose every affiliate
          link and never let it move a number in the table. When a site is a bad deal, we say so, even when
          it pays us. Our top picks above are a separate, clearly labelled recommendation, so you can ignore
          them and read the raw numbers if you’d rather.
        </p>
      </Panel>
    </main>
  );
}
