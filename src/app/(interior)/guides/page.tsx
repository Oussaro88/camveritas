import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cam Site Guides',
  description: 'Honest, original guides on cam-site costs, billing, privacy, and safety. Written from testing, not affiliate copy.',
  alternates: { canonical: `${SITE_CONFIG.url}/guides` },
};

const GUIDES = [
  { slug: 'how-to-stay-safe-on-cam-sites', title: 'How to Stay Safe on Cam Sites', desc: 'Billing discretion, payment protection, and the common traps.' },
  { slug: 'cam-site-privacy-report', title: 'Cam Site Privacy Report', desc: 'What cam platforms collect, and how billing shows up.' },
  { slug: 'how-to-cancel-cam-sites', title: 'How to Cancel or Dispute a Charge on Any Cam Site', desc: 'Auto-refill, memberships, disputes, with the exact statement descriptor for every major site.' },
];

export default function GuidesIndex() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>
      <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 31, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        Guides
      </h1>
      <p style={{ fontSize: 17, color: 'var(--ink-2)', marginTop: 14, marginBottom: 36 }}>
        Written from original testing. No affiliate copy dressed up as advice.
      </p>
      <div style={{ display: 'grid', gap: 14 }}>
        {GUIDES.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} style={{ display: 'block', padding: '18px 20px', border: '1px solid var(--line)', borderRadius: 12 }}>
            <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 19, fontWeight: 600, color: 'var(--ink-1)' }}>{g.title}</span>
            <div style={{ marginTop: 6, color: 'var(--ink-3)', fontSize: 14 }}>{g.desc}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
