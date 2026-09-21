import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about how camVeritas reviews cam sites and handles affiliate links.',
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
};

const QA = [
  { q: 'How does camVeritas make money?', a: 'Some outbound links to platforms are affiliate links. When you sign up through one, we may earn a commission at no extra cost to you. It is always disclosed and never affects a verdict.' },
  { q: 'Do you show explicit content?', a: 'No. camVeritas is text and data only, reviews, prices, and comparisons. No explicit images or video.' },
  { q: 'Why are some reviews marked “in progress”?', a: 'Every review is written from scratch with original analysis. Until a platform’s review is written, its page shows confirmed facts and pricing only, and is not indexed.' },
];

export default function FAQPage() {
  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '48px 24px 96px' }}>
      <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 31, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>FAQ</h1>
      <div style={{ marginTop: 28 }}>
        {QA.map((item, i) => (
          <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
            <h2 style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 8 }}>{item.q}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
