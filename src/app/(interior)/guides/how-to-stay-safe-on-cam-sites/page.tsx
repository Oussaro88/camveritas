import type { Metadata } from 'next';
import Link from 'next/link';
import GuideBody from '@/components/GuideBody';
import { SITE_CONFIG } from '@/lib/config';

// Guide rédigé à neuf (fond inspiré, texte 100% original). WRITTEN=true => indexable.
const WRITTEN = true;

const BODY = `Cam sites aren't dangerous the way the scare articles imply, the real risks are mundane and financial, not cloak-and-dagger. Here's what actually goes wrong for viewers, and the handful of habits that prevent almost all of it. No fear-mongering, just the stuff that costs people money or privacy.

## Protect your statement first

The single most common worry is someone seeing an adult charge. Good news: none of the major sites bill under their own name. What you'll actually see:

- Stripchat → **Paymentico** or **EPOCH.COM*Technius**
- Chaturbate → **mmbill.com** (or chaturbill.com / EPOCH.COM)
- CamSoda → **EPOCH.COM*LIVESODA**
- Jerkmate → **ECHST.NET**
- BongaCams → **Epoch** or **SegPay**

If total discretion matters, **crypto** skips the card-network entry entirely on the sites that take it (Stripchat, Chaturbate, Cam4), and often costs a little less per token too. A dedicated **virtual card** with a spending limit is the other strong move, it caps the damage of any billing mistake and keeps the charge off your main statement.

## The money traps, ranked by how often they bite

**Auto-refill / auto-reload.** Several sites offer to re-buy your last token pack automatically when your balance runs low. On every site we checked it was **off by default**, but it's a click away, and it's the number-one source of "why was I charged again?" Leave it off unless you genuinely want it.

**The per-minute meter running faster than you think.** A "private" isn't priced in dollars, it's priced in tokens per minute set by the model, and many sites let her set a **minimum length** billed up front. A 90 token/min room with a 5-minute minimum is 450 tokens gone the instant you enter. Always read the rate *and* the minimum in the confirmation popup before you hit go.

**The tiny starter pack.** Small token packs charge the worst per-token rate, and on some sites (Chaturbate's 50-pack, for one) send the platform the biggest cut. If you're going to spend regularly, a mid pack is usually the honest sweet spot, but don't overbuy either (see expiry below).

**Recurring memberships you didn't mean to keep.** Stripchat's "Ultimate," Chaturbate's "Supporter," Cam4's "Gold", all ~\$19.95/month, all auto-renewing, all separate from tokens. They're opt-in, not forced, but easy to start with a free-trial tick and forget. Check your subscriptions if a monthly charge appears.

**Credit expiry.** A couple of sites expire unused credits, ImLive is the harshest at **30 days**, Cam4 at **6 months**. Don't buy a big balance you won't spend soon.

## Account and interaction safety

- **Use a unique email and password.** A throwaway email and a password manager entry keep this compartment sealed off from the rest of your life.
- **Never take chat off-platform.** Requests to move to another app, pay off-site, or send gift cards are the classic scam pattern, the site's billing protections vanish the moment you leave it.
- **Tips and paid actions are final.** Treat every token you spend as non-refundable, because most sites' terms say exactly that outside genuine billing errors.
- **Know what "Private" actually includes.** On several sites others can "spy" on a standard private unless you pay for the exclusive tier. If you want true one-on-one, confirm you're in the exclusive mode.

## The one-minute setup that prevents most problems

Fund with crypto or a limited virtual card; keep auto-refill off; use a unique email; read the per-minute rate and minimum before every private; and check for any recurring membership after your first purchase. Do those five things and the realistic risks of a cam site drop to almost nothing, what's left is just deciding how much you actually want to spend.

---

This is general safety information, not financial or legal advice. If you're dealing with a disputed charge you can't resolve, your card issuer's dispute process is your backstop.`;

export const metadata: Metadata = {
  title: 'How to Stay Safe on Cam Sites',
  description: 'The real risks on cam sites are financial, not dramatic. Discreet billing, the auto-refill trap, per-minute minimums, and the one-minute setup that prevents most problems.',
  alternates: { canonical: `${SITE_CONFIG.url}/guides/how-to-stay-safe-on-cam-sites` },
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
        How to Stay Safe on Cam Sites
      </h1>
      <GuideBody markdown={BODY} />
    </main>
  );
}
