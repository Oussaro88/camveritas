'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

interface SiteLinkProps {
  slug: string;
  siteName: string;
  score: number;
  summary: string;
  rank: number;
  url?: string;
}

export default function SiteLink({ slug, siteName, score, summary, rank, url }: SiteLinkProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scoreColor = score >= 8.5 ? '#3B8C6E' : score >= 7 ? '#4FA384' : score >= 5.5 ? '#FBBF24' : '#EF4444';
  const scoreBg = score >= 8.5 ? 'rgba(16,185,129,0.12)' : score >= 7 ? 'rgba(52,211,153,0.10)' : score >= 5.5 ? 'rgba(251,191,36,0.10)' : 'rgba(239,68,68,0.10)';

  const domain = url ? url.replace('https://', '').replace('http://', '').split('/')[0] : null;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowTooltip(true), 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowTooltip(false), 150);
  };

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/review/${slug}`} className="nav-link" style={{
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '8px 10px',
        textDecoration: 'none', color: '#B8B8D0',
        fontSize: 13, borderRadius: 6,
        transition: 'background 0.15s',
      }}>
        <span style={{ color: '#9C97A8', fontSize: 11, width: 16, textAlign: 'right', flexShrink: 0, fontWeight: 700 }}>{rank}</span>
        {domain && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
            alt=""
            width={14}
            height={14}
            style={{ borderRadius: 2, flexShrink: 0 }}
          />
        )}
        <span style={{ flex: 1, fontWeight: 600, color: '#B8B8D0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 13 }}>{siteName}</span>
        <span style={{
          fontWeight: 800, color: scoreColor, fontSize: 12,
          background: scoreBg, padding: '2px 7px', borderRadius: 5, flexShrink: 0,
        }}>{score}</span>
      </Link>

      {/* Hover Card */}
      {showTooltip && (() => {
        const rect = containerRef.current?.getBoundingClientRect();
        const opensLeft = rect ? rect.right + 290 > window.innerWidth : false;
        return (
        <div className="site-tooltip" style={{
          position: 'absolute',
          left: opensLeft ? 'auto' : '100%',
          right: opensLeft ? '100%' : 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: opensLeft ? 0 : 8,
          marginRight: opensLeft ? 8 : 0,
          width: 270,
          padding: '16px 18px',
          background: '#141420',
          border: '1px solid rgba(107, 78, 158,0.12)',
          borderRadius: 12,
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          zIndex: 100,
          pointerEvents: 'auto',
        }}>
          <div style={{
            position: 'absolute',
            [opensLeft ? 'right' : 'left']: -6,
            top: '50%',
            transform: 'translateY(-50%) rotate(45deg)',
            width: 12,
            height: 12,
            background: '#141420',
            border: '1px solid rgba(107, 78, 158,0.12)',
            [opensLeft ? 'borderLeft' : 'borderRight']: 'none',
            [opensLeft ? 'borderBottom' : 'borderTop']: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {domain && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                    alt=""
                    width={14}
                    height={14}
                    style={{ borderRadius: 2 }}
                  />
                )}
                <span style={{ fontWeight: 700, fontSize: 15, color: '#D8D8E8' }}>{siteName}</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 14, color: scoreColor }}>{score}/10</span>
            </div>

            <p style={{ fontSize: 13, color: '#9C97A8', lineHeight: 1.5, margin: 0 }}>
              {summary}
            </p>

            <Link href={`/review/${slug}`} style={{
              display: 'block',
              marginTop: 12,
              fontSize: 12,
              fontWeight: 700,
              color: '#6B4E9E',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}>
              Read full review →
            </Link>
          </div>
        </div>
        );
      })()}
    </div>
  );
}