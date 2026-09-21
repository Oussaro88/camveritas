import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

// Gabarit propre — le contenu de ce guide est À RÉDIGER À NEUF (angle transparence).
// Rien n'a été importé de nsfwranker. Tant que le corps n'est pas écrit, la page
// est noindex (pas de contenu réel = pas d'index), conformément à la règle anti-pénalité.
const WRITTEN = false;

export const metadata: Metadata = {
  title: 'How to Cancel or Manage Chaturbate Billing',
  description: 'Step-by-step, honest walkthrough for managing tokens and recurring charges on Chaturbate.',
  alternates: { canonical: `${SITE_CONFIG.url}/guides/how-to-cancel-chaturbate` },
  robots: WRITTEN ? { index: true, follow: true } : { index: false, follow: true },
};

export default function GuidePage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>
      <nav style={{ fontSize: 14, color: 'var(--ink-3)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--ink-3)' }}>Home</Link> ·{' '}
        <Link href="/guides" style={{ color: 'var(--ink-3)' }}>Guides</Link>
      </nav>
      <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 30, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        How to Cancel or Manage Chaturbate Billing
      </h1>
      <div style={{ margin: '24px 0', padding: '16px 20px', border: '1px solid var(--accent-line)', borderRadius: 10, background: 'var(--accent-wash)' }}>
        <strong style={{ color: 'var(--accent)' }}>Guide in progress.</strong>
        <span style={{ color: 'var(--ink-2)' }}> This guide is being written from scratch with original data. Check back soon.</span>
      </div>
    </main>
  );
}
