'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const NAV = [
  { href: '/', name: 'Home' },
  { href: '/best/cam-sites', name: 'Comparison' },
  { href: '/guides', name: 'Guides' },
  { href: '/about', name: 'About' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const closeAll = () => setMobileMenuOpen(false);

  return (
    <header ref={headerRef} style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66,
      }}>
        {/* Wordmark texte — sobre, "veritas" */}
        <Link href="/" onClick={closeAll} className="brand" style={{
          fontSize: 29, textDecoration: 'none', color: 'var(--ink-1)', lineHeight: 1,
        }}>
          cam<span className="v">V</span>eritas
        </Link>

        {isDesktop && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} style={{
                padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                color: 'var(--ink-2)', textDecoration: 'none',
              }}>
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {!isDesktop && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--ink-1)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileMenuOpen
                ? <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                : <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
            </svg>
          </button>
        )}
      </div>

      {!isDesktop && mobileMenuOpen && (
        <nav style={{
          display: 'flex', flexDirection: 'column', padding: '8px 24px 20px',
          borderBottom: '1px solid var(--line)', background: 'var(--paper)',
        }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeAll} style={{
              padding: '14px 0', fontSize: 15, fontWeight: 500, color: 'var(--ink-2)',
              textDecoration: 'none', borderBottom: '1px solid var(--line)',
            }}>
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
