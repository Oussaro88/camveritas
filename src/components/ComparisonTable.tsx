'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { ComparisonRow } from '@/lib/queries';

type SortKey =
  | 'name' | 'tokenSmall' | 'tokenLarge' | 'tokenAvg'
  | 'privateSort' | 'spyLow' | 'trackers' | 'billingClarity';
type Dir = 'asc' | 'desc';

const NUM_COLS: { key: SortKey; label: string; help: string; kind: 'token' | 'range' | 'score' | 'trackers'; lowKey?: string; highKey?: string }[] = [
  { key: 'privateSort', label: 'Private show', help: 'What a one-on-one show really costs per minute, in dollars. A range because each model sets her own rate.', kind: 'range', lowKey: 'privateLow', highKey: 'privateHigh' },
  { key: 'spyLow', label: 'Just watching (spy)', help: 'The cheap option: quietly watching someone else\'s private show, per minute.', kind: 'range', lowKey: 'spyLow', highKey: 'spyHigh' },
  { key: 'tokenAvg', label: 'Price per token', help: 'What one token actually costs in dollars, on average across packs.', kind: 'token' },
  { key: 'trackers', label: 'Trackers', help: 'How many third-party trackers the site runs. Fewer is more private. Green = zero.', kind: 'trackers' },
  { key: 'billingClarity', label: 'Discreet billing', help: 'How well-hidden the charge is on your bank statement, scored 0-10.', kind: 'score' },
];

function sortRows(rows: ComparisonRow[], key: SortKey, dir: Dir): ComparisonRow[] {
  const withVal: ComparisonRow[] = [];
  const nullVal: ComparisonRow[] = [];
  for (const r of rows) {
    const v = r[key as keyof ComparisonRow];
    (v === null || v === undefined ? nullVal : withVal).push(r);
  }
  withVal.sort((a, b) => {
    const av = a[key as keyof ComparisonRow];
    const bv = b[key as keyof ComparisonRow];
    let cmp = 0;
    if (typeof av === 'number' && typeof bv === 'number') cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv));
    return dir === 'asc' ? cmp : -cmp;
  });
  return [...withVal, ...nullVal];
}

function NumCell({ row, col }: { row: ComparisonRow; col: typeof NUM_COLS[number] }) {
  const value = row[col.key as keyof ComparisonRow] as number | null;
  if (value === null || value === undefined) {
    return <span style={{ color: 'var(--ink-3)' }} title="Not measured yet">—</span>;
  }
  if (col.kind === 'token') {
    if (row.noTokens) return <span style={{ color: 'var(--ink-3)' }} title="No token system — priced directly">n/a</span>;
    return <span className="mono" style={{ color: 'var(--ink-2)' }}>${value.toFixed(3)}</span>;
  }
  if (col.kind === 'range') {
    const low = row[col.lowKey as keyof ComparisonRow] as number | null;
    const high = row[col.highKey as keyof ComparisonRow] as number | null;
    if (low === null) return <span style={{ color: 'var(--ink-3)' }} title="Not verified yet">—</span>;
    return (
      <span className="mono" style={{ color: 'var(--cost)', fontWeight: 600, whiteSpace: 'nowrap' }} title="Realistic range — rises with the model">
        ${low.toFixed(2)}{high !== null && high !== low ? `–$${high.toFixed(2)}` : ''}
      </span>
    );
  }
  if (col.kind === 'trackers') {
    const c = value === 0 ? 'var(--veritas)' : value <= 5 ? 'var(--cost)' : 'var(--danger)';
    return <span className="mono" style={{ color: c, fontWeight: 600 }}>{value}</span>;
  }
  const c = value >= 7 ? 'var(--veritas)' : value >= 4 ? 'var(--cost)' : 'var(--danger)';
  return <span className="mono" style={{ color: c, fontWeight: 600 }}>{value}/10</span>;
}

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('privateSort');
  const [dir, setDir] = useState<Dir>('asc');

  const sorted = useMemo(() => sortRows(rows, sortKey, dir), [rows, sortKey, dir]);

  const onSort = (key: SortKey) => {
    if (key === sortKey) setDir(dir === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setDir('asc'); }
  };
  const arrow = (key: SortKey) => (sortKey === key ? (dir === 'asc' ? ' \u2191' : ' \u2193') : '');

  return (
    <div>
      <div style={{ overflowX: 'auto', border: '1px solid var(--line)', borderRadius: 14, background: 'var(--paper)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              <th style={{ padding: '10px 8px 4px 16px' }} />
              <th style={{ padding: '10px 8px 4px' }} />
              <th colSpan={2} style={groupTh}>Real cost per minute</th>
              <th colSpan={1} style={groupTh}>Token</th>
              <th colSpan={2} style={groupTh}>Privacy</th>
              <th colSpan={2} style={groupTh}>Features</th>
            </tr>
            <tr style={{ background: 'var(--paper-2)' }}>
              <th style={{ padding: '4px 8px 12px 16px', textAlign: 'left', width: 30 }}><span style={thLabel}>#</span></th>
              <th style={{ padding: '4px 8px 12px', textAlign: 'left' }}>
                <button onClick={() => onSort('name')} style={thBtn(sortKey === 'name')}>Platform{arrow('name')}</button>
              </th>
              {NUM_COLS.map((c) => (
                <th key={c.key} style={{ padding: '4px 8px 12px', textAlign: 'left', whiteSpace: 'nowrap' }} title={c.help}>
                  <button onClick={() => onSort(c.key)} style={thBtn(sortKey === c.key)}>{c.label}{arrow(c.key)}</button>
                </th>
              ))}
              <th style={{ padding: '4px 8px 12px', textAlign: 'left' }}><span style={thLabel}>C2C</span></th>
              <th style={{ padding: '4px 8px 12px', textAlign: 'left' }}><span style={thLabel}>VR</span></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr key={row.slug} style={{ borderTop: '1px solid var(--line)' }}>
                <td className="mono" style={{ padding: '14px 8px 14px 16px', color: 'var(--ink-3)' }}>{i + 1}</td>
                <td style={{ padding: '14px 8px' }}>
                  <Link href={`/review/${row.slug}`} style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>{row.name}</Link>
                  {!row.written && <span style={{ marginLeft: 6, fontSize: 11, color: 'var(--ink-3)' }}>&middot; writing</span>}
                </td>
                {NUM_COLS.map((c) => (
                  <td key={c.key} style={{ padding: '14px 8px' }}><NumCell row={row} col={c} /></td>
                ))}
                <td style={{ padding: '14px 8px', color: row.hasCam2Cam ? 'var(--ink-2)' : 'var(--ink-3)' }}>{row.hasCam2Cam ? 'Yes' : 'No'}</td>
                <td style={{ padding: '14px 8px', color: row.hasVR ? 'var(--ink-2)' : 'var(--ink-3)' }}>{row.hasVR ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 12, lineHeight: 1.6 }}>
        Click any column to sort. <strong style={{ color: 'var(--ink-2)', fontWeight: 600 }}>Real cost/min is a floor</strong> —
        the cheapest honest rate (smallest-pack token price x the platform&rsquo;s documented minimum). It rises with the model;
        each review shows the range. A dash means we haven&rsquo;t verified that figure yet &mdash; never a guess.
      </p>
    </div>
  );
}

const groupTh: React.CSSProperties = {
  padding: '10px 8px 4px', textAlign: 'left', fontSize: 11, fontWeight: 600,
  color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em',
  borderBottom: '1px solid var(--accent-line)',
};
const thLabel: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: 'var(--ink-3)' };
function thBtn(active: boolean): React.CSSProperties {
  return {
    background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit',
    fontSize: 12, fontWeight: 600, color: active ? 'var(--accent)' : 'var(--ink-2)',
  };
}
