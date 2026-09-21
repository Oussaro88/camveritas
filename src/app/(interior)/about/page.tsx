import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why camVeritas exists: cam-site reviews that start from the real dollar cost, with every affiliate link disclosed and every number verified at checkout.',
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '48px 24px 96px' }}>
      <h1 style={{ fontSize: 31, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        About camVeritas
      </h1>

      <div style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', marginTop: 24 }}>
        <p style={{ marginBottom: 18 }}>
          Cam sites are built to make spending hard to track. Everything is priced in “tokens” or “credits,”
          the real per-minute cost is buried, and most review sites rank platforms by whoever pays them the
          biggest commission. camVeritas exists to undo that.
        </p>
        <p style={{ marginBottom: 18 }}>
          We take every site back to one honest number: <strong style={{ color: 'var(--ink-1)' }}>what a minute
          actually costs you, in real dollars.</strong> We buy the tokens, read the checkout, note the exact
          descriptor that lands on your bank statement, and convert the fake currency into money you understand.
        </p>

        <h2 style={{ fontSize: 21, marginTop: 36, marginBottom: 12 }}>How we check our numbers</h2>
        <p style={{ marginBottom: 18 }}>
          Every price on this site is cross-checked against multiple sources and, wherever possible, a real
          2026 checkout, not a grid copied from an affiliate blog. When sources disagree, we say so. When we
          can’t verify something, we mark it unverified rather than guess. If a figure would flatter a site
          without proof, we leave it out.
        </p>

        <h2 style={{ fontSize: 21, marginTop: 36, marginBottom: 12 }}>How we make money</h2>
        <p style={{ marginBottom: 18 }}>
          Some links here are affiliate links, and that’s always disclosed. It never changes a verdict or a
          ranking. Our comparison table is sorted purely on price; our short list of{' '}
          <Link href="/" style={{ color: 'var(--accent)' }}>top picks</Link> is a separate, clearly labelled
          editor’s choice you’re free to ignore. When a platform is a bad deal, the review says so —{' '}
          <strong style={{ color: 'var(--ink-1)' }}>including when it pays us.</strong> That’s the whole point
          of the name: <em>veritas</em>, the truth.
        </p>

        <h2 style={{ fontSize: 21, marginTop: 36, marginBottom: 12 }}>What we are not</h2>
        <p style={{ marginBottom: 18 }}>
          camVeritas hosts no cam shows, displays no explicit media, and produces no adult content. It is a
          review and comparison service for adults (18+). All platform names, prices and features refer to
          independent third-party services.
        </p>

        <p style={{ color: 'var(--ink-3)', fontSize: 14, marginTop: 28 }}>
          Spotted a price that’s changed or a number that looks off? That’s exactly the kind of thing we want
          to fix, the whole site lives or dies on being right.
        </p>
      </div>
    </main>
  );
}
