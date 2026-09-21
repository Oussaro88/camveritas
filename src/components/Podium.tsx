import Link from 'next/link';

interface Winner {
  slug: string;
  name: string;
  rank: 1 | 2 | 3;
  tagline: string;
  perks: string[];
  // hauteur de la marche (px), le podium
  stepHeight: number;
  // dégradés métalliques
  medalGrad: string;
  medalRing: string;
  medalShine: string;
}

const WINNERS: Winner[] = [
  {
    slug: 'stripchat',
    name: 'Stripchat',
    rank: 1,
    tagline: 'Best all-rounder',
    perks: [
      'Statement stays private (“Paymentico”)',
      'Cheap to just watch, spy from ~$0.88/min',
      'Biggest variety + real 4K / VR',
    ],
    stepHeight: 132,
    medalGrad: 'linear-gradient(145deg, #FFF3C4 0%, #F5C542 38%, #C8961E 70%, #F7DC7A 100%)',
    medalRing: '#E8B923',
    medalShine: 'linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 45%)',
  },
  {
    slug: 'jerkmate',
    name: 'Jerkmate',
    rank: 2,
    tagline: 'Slickest experience',
    perks: [
      'The cleanest, most fun interface here',
      'Match-and-go format finds someone fast',
      'Huge model pool (runs on Streamate)',
    ],
    stepHeight: 96,
    medalGrad: 'linear-gradient(145deg, #FFFFFF 0%, #D7DBE0 40%, #A8AEB6 72%, #EDEFF2 100%)',
    medalRing: '#C2C7CE',
    medalShine: 'linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 45%)',
  },
  {
    slug: 'chaturbate',
    name: 'Chaturbate',
    rank: 3,
    tagline: 'Best free tier',
    perks: [
      'The biggest audience in camming',
      'Watch huge public rooms for free',
      'Spy from ~$0.66/min if you go private-adjacent',
    ],
    stepHeight: 68,
    medalGrad: 'linear-gradient(145deg, #F6C9A0 0%, #C87F45 42%, #97561F 72%, #E0A877 100%)',
    medalRing: '#B87333',
    medalShine: 'linear-gradient(160deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%)',
  },
];

function Card({ w }: { w: Winner }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 200 }}>
      {/* Carte du gagnant */}
      <div style={{
        width: '100%', background: 'var(--paper-2)', border: '1px solid var(--line)',
        borderRadius: 14, padding: '20px 18px', textAlign: 'center',
        boxShadow: w.rank === 1 ? '0 8px 30px -12px rgba(245,197,66,0.4)' : 'none',
      }}>
        {/* Médaille */}
        <div style={{ position: 'relative', width: 52, height: 52, margin: '0 auto 12px' }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: w.medalGrad,
            border: `2px solid ${w.medalRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 21, color: '#3a2e0a',
          }}>
            {w.rank}
          </div>
          {/* reflet brillant */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: w.medalShine, pointerEvents: 'none' }} />
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>
          {w.tagline}
        </div>
        <Link href={`/review/${w.slug}`} style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 21, fontWeight: 700,
          color: 'var(--ink-1)', textDecoration: 'none',
        }}>
          {w.name}
        </Link>

        <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 16px', display: 'grid', gap: 7, textAlign: 'left' }}>
          {w.perks.map((p) => (
            <li key={p} style={{ display: 'flex', gap: 8, alignItems: 'baseline', fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.45 }}>
              <span style={{ color: 'var(--veritas)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a href={`/go/${w.slug}`} rel="sponsored nofollow noopener" target="_blank" style={{
            display: 'block', padding: '10px 16px', borderRadius: 8, fontWeight: 600, textDecoration: 'none',
            background: w.rank === 1 ? 'var(--accent)' : 'transparent',
            color: w.rank === 1 ? '#fff' : 'var(--accent)',
            border: w.rank === 1 ? 'none' : '1px solid var(--accent-line)',
          }}>
            Visit {w.name}
          </a>
          <Link href={`/review/${w.slug}`} style={{ fontSize: 12, color: 'var(--ink-3)', textDecoration: 'none' }}>
            Read review →
          </Link>
        </div>
      </div>

      {/* Marche métallique brillante */}
      <div style={{
        width: '86%', height: w.stepHeight, marginTop: 14,
        background: w.medalGrad, borderRadius: '8px 8px 4px 4px',
        border: `1px solid ${w.medalRing}`, borderBottom: 'none',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.5), 0 6px 18px -8px rgba(0,0,0,0.5)',
      }}>
        {/* bande de reflet brillant qui traverse la marche */}
        <div style={{
          position: 'absolute', top: 0, left: '-30%', width: '50%', height: '100%',
          background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
          transform: 'skewX(-18deg)', pointerEvents: 'none',
        }} />
        <span style={{
          marginTop: 12, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 33,
          color: 'rgba(58,46,10,0.55)', textShadow: '0 1px 0 rgba(255,255,255,0.4)',
        }}>
          {w.rank}
        </span>
      </div>
    </div>
  );
}

export default function Podium() {
  // ordre visuel : 2 - 1 - 3 (le gagnant au milieu, comme un vrai podium)
  const order = [WINNERS[1], WINNERS[0], WINNERS[2]];

  return (
    <section style={{ marginBottom: 44 }}>
      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
          Editor’s choice
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em', margin: 0 }}>
          Our top 3 picks
        </h2>
        <p style={{ fontSize: 14.5, color: 'var(--ink-3)', marginTop: 10, marginBottom: 0, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55 }}>
          A quick shortlist if you don’t want to read the whole table. These are affiliate links; they don’t
          change the price-ranked table below.
        </p>
      </div>

      {/* Desktop : podium aligné en bas. Mobile : empilé. */}
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        {order.map((w) => <Card key={w.slug} w={w} />)}
      </div>
    </section>
  );
}
