import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllReviews } from '@/lib/queries';
import { TO_WRITE } from '@/lib/data/reviews';
import { ItemListSchema } from '@/components/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Best Cam Sites 2026, Compared by Real Cost',
  description:
    'Every major cam platform compared by what it actually costs: token math in real dollars, billing descriptors, Cam2Cam, and privacy. Affiliate links disclosed, verdicts unbought.',
  alternates: { canonical: `${SITE_CONFIG.url}/best/cam-sites` },
};

export default function CamSitesPage() {
  const cams = getAllReviews();

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px 96px' }}>
      <ItemListSchema
        name="Best Cam Sites 2026"
        items={cams.map((c) => ({ name: c.name, url: `${SITE_CONFIG.url}/review/${c.slug}` }))}
      />

      <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 32, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        Cam sites, compared by real cost
      </h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)', marginTop: 14, maxWidth: 620 }}>
        The pricing below is what each platform advertises. The camVeritas verdict, the true dollar-per-minute once you account for token bundles, private-show rates, and billing, publishes with each written review.
      </p>

      <div style={{ marginTop: 40, display: 'grid', gap: 16 }}>
        {cams.map((c) => {
          const written = c.summary !== TO_WRITE;
          return (
            <Link
              key={c.slug}
              href={`/review/${c.slug}`}
              style={{
                display: 'block', padding: '20px 22px', border: '1px solid var(--line)',
                borderRadius: 12, background: 'var(--paper)', textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 21, fontWeight: 600, color: 'var(--ink-1)' }}>
                  {c.name}
                </span>
                {written
                  ? <span style={{ color: 'var(--veritas)', fontWeight: 700 }}>{c.overall}/10</span>
                  : <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>Review in progress</span>}
              </div>
              <div style={{ marginTop: 8, color: 'var(--ink-3)', fontSize: 14 }}>
                {c.priceRange || 'Pricing varies'} · {c.hasCam2Cam ? 'Cam2Cam' : 'No Cam2Cam'}{c.hasVR ? ' · VR' : ''}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
