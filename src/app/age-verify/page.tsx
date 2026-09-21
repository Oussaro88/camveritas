'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function AgeVerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';

  const handleEnter = () => {
    document.cookie = `camveritas_age_verified=true; path=/; max-age=${30 * 24 * 60 * 60}; SameSite=Lax`;
    router.push(redirectTo);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #0A0A0F 0%, #14142B 50%, #0A0A0F 100%)',
      fontFamily: 'system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        opacity: 0.12,
        background: 'radial-gradient(circle, #FF2D78 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 420, padding: '0 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1 }}>
            <span style={{
              background: 'linear-gradient(135deg, #FF2D78, #FF6B35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>NSFW</span>
            <span style={{ color: '#fff' }}>Ranker</span>
          </h1>
          <p style={{ fontSize: 13, color: '#606080', marginTop: 8 }}>
            Honest Reviews. Real Rankings.
          </p>
        </div>

        <div style={{
          background: '#14142B',
          border: '1px solid #2A2A4A',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(255,45,120,0.1)',
              border: '2px solid rgba(255,45,120,0.3)',
              marginBottom: 16,
              fontSize: 28,
            }}>🔞</div>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>This site reviews adult content</h2>
            <p style={{ fontSize: 14, color: '#9090B0', marginTop: 12, lineHeight: 1.6 }}>
              You must be at least 18 years old to enter.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button onClick={handleEnter}
              style={{
                width: '100%',
                padding: '16px 0',
                minHeight: 56,
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 16,
                background: 'linear-gradient(135deg, #FF2D78, #FF6B35)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255,45,120,0.3)',
              }}>
              I&apos;m 18+ — Enter Site
            </button>
            <button onClick={() => { window.location.href = 'https://www.google.com'; }}
              style={{
                width: '100%',
                padding: '14px 0',
                minHeight: 48,
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 14,
                background: '#39353F',
                color: '#9090B0',
                border: 'none',
                cursor: 'pointer',
              }}>
              Exit
            </button>
          </div>
        </div>

        <p style={{
          textAlign: 'center', fontSize: 11, color: '#606080', marginTop: 24,
          maxWidth: 360, margin: '24px auto 0', lineHeight: 1.6,
        }}>
          By entering, you confirm you have reached the age of majority in your jurisdiction
          and agree to our <a href="/privacy" style={{ color: '#FF2D78', textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default function AgeVerifyPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0A0A0F' }} />}>
      <AgeVerifyContent />
    </Suspense>
  );
}