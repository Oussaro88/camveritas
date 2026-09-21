import Link from 'next/link';
import { SITE_CONFIG, COMPLIANCE_2257 } from '@/lib/config';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: 80, background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 320 }}>
            <div className="brand" style={{ fontSize: 25, color: 'var(--ink-1)', lineHeight: 1 }}>
              cam<span className="v">V</span>eritas
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', marginTop: 12 }}>
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reviews</h4>
              {[
                { href: '/best/cam-sites', label: 'All cam sites' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none', padding: '5px 0' }}>{l.label}</Link>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Site</h4>
              {[
                { href: '/guides', label: 'Guides' },
                { href: '/about', label: 'About' },
                { href: '/faq', label: 'FAQ' },
                { href: '/privacy', label: 'Privacy' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none', padding: '5px 0' }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          <p style={{ fontSize: 11, lineHeight: 1.6, color: 'var(--ink-3)' }}>{COMPLIANCE_2257.short}</p>
          <p style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 12 }}>
            © {new Date().getFullYear()} camVeritas · 18+ only · This site displays no explicit content.
          </p>
        </div>
      </div>
    </footer>
  );
}
