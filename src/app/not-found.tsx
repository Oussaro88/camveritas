import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ maxWidth: 620, margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 43, marginBottom: 12 }}>Page not found</h1>
      <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 32 }}>
        That page doesn’t exist. Here’s where to go instead:
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { href: '/', label: 'Home' },
          { href: '/best/cam-sites', label: 'Compare cam sites' },
          { href: '/guides', label: 'Guides' },
        ].map((l) => (
          <Link key={l.href} href={l.href} style={{
            padding: '10px 18px', border: '1px solid var(--line)', borderRadius: 8,
            color: 'var(--accent)', textDecoration: 'none', fontWeight: 500,
          }}>{l.label}</Link>
        ))}
      </div>
    </main>
  );
}
