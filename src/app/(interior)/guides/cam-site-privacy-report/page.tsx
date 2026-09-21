import type { Metadata } from 'next';
import Link from 'next/link';
import GuideBody from '@/components/GuideBody';
import { SITE_CONFIG } from '@/lib/config';

// Guide rédigé à neuf (fond inspiré, texte 100% original). WRITTEN=true => indexable.
const WRITTEN = true;

const BODY = `Most "is this cam site safe" articles mean *will my wife find out.* This one means something more specific: what each platform records, what shows on your bank statement, and which payment routes actually keep your activity off the grid. It's the privacy picture the affiliate guides skip because it doesn't sell signups.

## What shows on your statement

None of the majors bill under their own name, that part is genuinely handled well across the board. The real descriptors, from actual 2026 purchases:

| Platform | Statement shows |
|---|---|
| Stripchat | Paymentico · EPOCH.COM*Technius |
| Chaturbate | mmbill.com · chaturbill.com · EPOCH.COM |
| CamSoda | EPOCH.COM*LIVESODA |
| Jerkmate | ECHST.NET · EPOCH.COM*ICFTECHNOL |
| BongaCams | Epoch · SegPay |
| MyFreeCams | CCBill.com*ActiveSoft · MFCBill.com*Tokens |
| LiveJasmin | JWSBill · EPOCH · SEGPAY |
| Cam4 | Granity Entertainment |
| ImLive | CCBill / CCBILLEU.com |

Useful to know, but don't over-trust it: a generic descriptor still shows an **amount and a date**, and anyone who searches the descriptor name finds what it is in seconds. Discretion on the statement is real but partial.

## The genuinely private payment routes

- **Crypto** is the strongest option where offered (Stripchat, Chaturbate, Cam4). It leaves **no card-network entry at all**, and often costs slightly less per token. If privacy is the priority, this is the lever.
- **A dedicated virtual card** (from your bank or a service that issues them) keeps the charge off your main statement and caps spending. Second-best to crypto, and easier for most people.
- **PayPal is worse, not better, for privacy**, it leaves its own record, and on Stripchat it also gave fewer tokens for the same money. Convenient, not discreet.
- **Gift cards / prepaid**, where accepted, break the link to your identity but are fiddly and sometimes surcharged.

## What the sites themselves collect

This is the part with the least public disclosure, so treat it as directional rather than precise. All of these platforms run standard web tracking, analytics, ad pixels, session tools, and the number of third-party trackers varies. In our data, the freemium/token sites tended to load more third-party trackers than the premium ones, but tracker counts shift constantly and none of these sites publishes a straight answer. Assume every site knows what you browsed and bought on it, and that logged-in activity is tied to your account.

Two concrete cautions:

- **Account = history.** Your purchases, tips, and often your private-show archives sit against your account. A unique throwaway email keeps that pool isolated from your main identity.
- **"Private" isn't always private from other viewers.** On several sites, a standard private can be watched in "spy" mode by paying strangers unless you buy the exclusive tier. That's a privacy dimension people forget, it's not just about your bank.

## Practical privacy setup

1. **Unique email**, not your main one. This alone prevents most cross-linking.
2. **Fund with crypto or a limited virtual card.** Skip PayPal if privacy is the goal.
3. **A password manager entry**, so nothing is reused from accounts tied to your name.
4. **Browser hygiene**, a separate browser profile or private window keeps cam-site cookies out of your normal browsing and ad profile.
5. **Skip the phone app** where a mobile-browser session does the job; apps can request more device access.

## The honest bottom line

Cam sites are better on statement discretion than most people expect and worse on data collection than they'd like, you're anonymous to your bank, not to the platform. If your only concern is a shared bank statement, a virtual card solves it. If you want to be genuinely hard to trace, crypto plus a throwaway email plus a separate browser profile is the real answer, and no amount of "discreet billing" marketing substitutes for it.

---

This is general privacy information, not legal advice, and tracker/data practices change, treat the specifics as a snapshot, not a guarantee.`;

export const metadata: Metadata = {
  title: 'Cam Site Privacy Report',
  description: 'What each cam platform puts on your bank statement, what it collects, and which payment routes actually keep you private. The privacy picture affiliate guides skip.',
  alternates: { canonical: `${SITE_CONFIG.url}/guides/cam-site-privacy-report` },
  robots: WRITTEN ? { index: true, follow: true } : { index: false, follow: true },
};

export default function GuidePage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>
      <nav style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--ink-3)' }}>Home</Link> ·{' '}
        <Link href="/guides" style={{ color: 'var(--ink-3)' }}>Guides</Link>
      </nav>
      <h1 style={{ fontSize: 31, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        Cam Site Privacy Report
      </h1>
      <GuideBody markdown={BODY} />
    </main>
  );
}
