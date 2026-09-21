'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Row {
  slug: string;
  name: string;
  privateLow: number | null;   // $/min bas
  privateHigh: number | null;  // $/min haut
  spyLow: number | null;
  spyHigh: number | null;
  pricingCheckedAt: string;
}

type Mode = 'budget' | 'minutes';

const fmtMoney = (n: number) => `$${n.toFixed(2)}`;
const fmtMin = (n: number) => (n >= 100 ? Math.round(n).toString() : n.toFixed(n < 10 ? 1 : 0));

// Rend une cellule "range" : à partir d'un bas et d'un haut $/min, calcule selon le mode.
function ResultCell({ low, high, mode, budget, minutes }: {
  low: number | null; high: number | null; mode: Mode; budget: number; minutes: number;
}) {
  if (low === null) {
    return <span style={{ color: 'var(--ink-3)' }} title="Not offered / not measured">—</span>;
  }
  if (mode === 'budget') {
    // budget → minutes (plus le taux est haut, moins de minutes) : on montre la fourchette de minutes
    const minAtHigh = high && high > 0 ? budget / high : null; // moins de minutes (taux haut)
    const maxAtLow = low > 0 ? budget / low : null;            // plus de minutes (taux bas)
    if (maxAtLow === null) return <span style={{ color: 'var(--ink-3)' }}>—</span>;
    const showRange = minAtHigh !== null && high !== low;
    return (
      <span className="mono" style={{ color: 'var(--cost)', fontWeight: 600, whiteSpace: 'nowrap' }}>
        {showRange ? `${fmtMin(minAtHigh!)}–${fmtMin(maxAtLow)}` : fmtMin(maxAtLow)} min
      </span>
    );
  }
  // minutes → coût
  const costLow = low * minutes;
  const costHigh = (high ?? low) * minutes;
  const showRange = high !== null && high !== low;
  return (
    <span className="mono" style={{ color: 'var(--cost)', fontWeight: 600, whiteSpace: 'nowrap' }}>
      {showRange ? `${fmtMoney(costLow)}–${fmtMoney(costHigh)}` : fmtMoney(costLow)}
    </span>
  );
}

export default function TokenCalcClient({ rows }: { rows: Row[] }) {
  const [mode, setMode] = useState<Mode>('budget');
  const [budget, setBudget] = useState(50);
  const [minutes, setMinutes] = useState(10);

  // tri : par coût privé croissant (le moins cher en haut), recalculé selon le mode
  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      const av = a.privateLow ?? Infinity;
      const bv = b.privateLow ?? Infinity;
      return av - bv;
    });
  }, [rows]);

  const inputWrap: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: 10, marginTop: 8,
  };
  const numInput: React.CSSProperties = {
    width: 110, padding: '10px 12px', fontSize: 17, fontFamily: "'JetBrains Mono', monospace",
    border: '1px solid var(--line)', borderRadius: 8, background: 'var(--paper)', color: 'var(--ink-1)',
  };

  return (
    <div style={{ marginTop: 32 }}>
      {/* Bascule budget / minutes */}
      <div style={{ display: 'inline-flex', border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden', marginBottom: 20 }}>
        {(['budget', 'minutes'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: '10px 18px', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600,
              background: mode === m ? 'var(--accent)' : 'transparent',
              color: mode === m ? '#fff' : 'var(--ink-2)',
            }}
          >
            {m === 'budget' ? 'I have a budget' : 'I want X minutes'}
          </button>
        ))}
      </div>

      {/* Entrée */}
      {mode === 'budget' ? (
        <div style={inputWrap}>
          <span style={{ color: 'var(--ink-2)', fontSize: 15 }}>My budget is</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 17, color: 'var(--ink-1)' }}>$</span>
          <input type="number" min={1} value={budget} onChange={(e) => setBudget(Math.max(0, +e.target.value))} style={numInput} />
          <span style={{ color: 'var(--ink-3)', fontSize: 14 }}>→ how many minutes?</span>
        </div>
      ) : (
        <div style={inputWrap}>
          <span style={{ color: 'var(--ink-2)', fontSize: 15 }}>I want</span>
          <input type="number" min={1} value={minutes} onChange={(e) => setMinutes(Math.max(0, +e.target.value))} style={numInput} />
          <span style={{ color: 'var(--ink-3)', fontSize: 14 }}>minutes → what does it cost?</span>
        </div>
      )}

      {/* Résultats : privé + spy côte à côte */}
      <div style={{ overflowX: 'auto', marginTop: 28, border: '1px solid var(--line)', borderRadius: 14, background: 'var(--paper)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--ink-3)' }}>Platform</th>
              <th style={{ padding: '12px 12px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--ink-3)' }}>
                Private {mode === 'budget' ? '(minutes)' : '(cost)'}
              </th>
              <th style={{ padding: '12px 12px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--ink-3)' }}>
                Spy {mode === 'budget' ? '(minutes)' : '(cost)'}
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={r.slug} style={{ borderTop: '1px solid var(--line)' }}>
                <td style={{ padding: '14px 16px' }}>
                  <Link href={`/review/${r.slug}`} style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>{r.name}</Link>
                </td>
                <td style={{ padding: '14px 12px' }}>
                  <ResultCell low={r.privateLow} high={r.privateHigh} mode={mode} budget={budget} minutes={minutes} />
                </td>
                <td style={{ padding: '14px 12px' }}>
                  <ResultCell low={r.spyLow} high={r.spyHigh} mode={mode} budget={budget} minutes={minutes} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 12, lineHeight: 1.6 }}>
        Figures use the smallest-pack token price (the worst case, what a first-timer pays) times the
        realistic per-minute rate range. Buying larger token packs lowers these. A dash means the platform
        doesn’t offer that mode or we haven’t verified it. Rates rise with the model, this is the honest
        floor-to-typical band, not a guarantee.
      </p>
    </div>
  );
}
