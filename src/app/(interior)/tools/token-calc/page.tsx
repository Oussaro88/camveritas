import type { Metadata } from 'next';
import { getComparisonRows } from '@/lib/queries';
import { SITE_CONFIG } from '@/lib/config';
import TokenCalcClient from './TokenCalcClient';

export const metadata: Metadata = {
  title: 'Cam Token Cost Calculator, Real $/Minute',
  description: 'Enter a budget or a number of minutes and see the real cost of a private or spy show on every major cam site, using verified 2026 pricing. No sticker-price spin.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/token-calc` },
};

export default function TokenCalcPage() {
  // Mêmes données vérifiées que le tableau comparatif → cohérence + mise à jour automatique.
  const rows = getComparisonRows()
    .filter((r) => r.privateLow !== null || r.spyLow !== null)
    .map((r) => ({
      slug: r.slug,
      name: r.name,
      privateLow: r.privateLow,
      privateHigh: r.privateHigh,
      spyLow: r.spyLow,
      spyHigh: r.spyHigh,
      pricingCheckedAt: r.pricingCheckedAt,
    }));

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 96px' }}>
      <h1 style={{ fontSize: 31, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        The real cost calculator
      </h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)', marginTop: 14, maxWidth: 640 }}>
        Cam sites quote tokens, not dollars, on purpose. Put in a budget or a number of minutes and see
        what a private or spy show actually costs on each platform, from the same verified rates as our
        comparison table. Ranges reflect the spread between typical low and high per-minute rates.
      </p>
      <TokenCalcClient rows={rows} />
    </main>
  );
}
