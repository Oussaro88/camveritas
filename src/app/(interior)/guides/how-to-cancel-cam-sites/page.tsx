import type { Metadata } from 'next';
import Link from 'next/link';
import GuideBody from '@/components/GuideBody';
import { SITE_CONFIG } from '@/lib/config';

const WRITTEN = true;

const BODY = `Cam sites rarely lock you into a subscription for the spending itself, tokens and credits are usually one-time buys. So "cancelling" almost always means one of three things: switching off an auto-refill you enabled, killing a separate monthly membership, or disputing a charge you didn't expect. This guide covers all three, plus the exact statement descriptor for each major site so you can tell *which* site, and which mechanism, is actually billing you.

## Step 1, Identify the charge

No major cam site bills under its own name. Match what's on your statement to the platform:

| Statement shows | Platform |
|---|---|
| mmbill.com · chaturbill.com | Chaturbate |
| Paymentico · EPOCH.COM*Technius | Stripchat |
| EPOCH.COM*LIVESODA | CamSoda |
| ECHST.NET · EPOCH.COM*ICFTECHNOL | Jerkmate |
| Epoch · SegPay | BongaCams |
| CCBill.com*ActiveSoft · MFCBill.com*Tokens | MyFreeCams |
| JWSBill · EPOCH · SEGPAY | LiveJasmin |
| Granity Entertainment | Cam4 |
| CCBill · CCBILLEU.com | ImLive |

Note the amount and date, then work out which of the three mechanisms below it is. If the descriptor matches none of these, it may be a different site entirely, confirm before disputing.

## Step 2, Which mechanism is charging you?

Three different things can hit your card. They're constantly confused, so pin down which one you're dealing with:

- **A one-time token/credit purchase**, won't recur on its own. If you were only charged once, there's nothing to cancel.
- **Auto-refill / auto-reload**, re-buys your last pack when your balance runs low. Card-only, and off unless you switched it on. This is the #1 cause of "why was I charged again?"
- **A monthly membership**, a separate recurring subscription (Stripchat *Ultimate*, Chaturbate *Supporter*, Cam4 *Gold*, all ~\$19.95/mo; LiveJasmin *Fan Clubs* \$5.99–\$42.99/mo). Opt-in, but easy to start via a free-trial tick and forget.

## Step 3, Turn off auto-refill

If your token balance keeps topping itself up:

1. Log in and open **Settings** (often "Settings & Privacy" or the token/purchase area).
2. Find the **auto-refill / auto-reload** toggle, the wording varies (Stripchat: "Balance Auto-Refill"; Chaturbate: "Auto Refill"; BongaCams/CamSoda: "auto top-up" / "re-up").
3. Switch it off and save.

That stops future automatic buys immediately. It doesn't refund past ones, for those, see Step 5.

## Step 4, Cancel a monthly membership

If you're seeing a recurring ~\$19.95 (or a Fan Club fee):

1. Log in and open your **profile / account menu**.
2. Find the membership section, **Ultimate** (Stripchat), **Supporter** (Chaturbate), **Gold** (Cam4), **Memberships / Fan Clubs** (MyFreeCams, LiveJasmin).
3. Choose **cancel** or **disable auto-renew**, confirm, and look for a confirmation email.

You generally keep the perks until the current period ends; only the next charge is stopped. Remember: cancelling a membership does **not** remove your token balance, they're separate.

## Step 5, Dispute an unauthorized charge

If the settings above don't explain the charge:

1. **Contact the billing processor first**, not the cam site. Use whichever name is on your statement, Epoch, CCBill, SegPay, mmbill.com, ECHST.NET, Paymentico, Granity Entertainment. They resolve refunds faster than the sites and can look the charge up by your billing ID.
2. **Give them the descriptor and amount**, not the brand name, they route by their own system.
3. **If that fails, dispute with your bank or card issuer** as an unauthorized charge. Keep any confirmation emails; they strengthen your case.

One platform-specific note: **Jerkmate** (ECHST.NET) has a notably higher volume of billing complaints, and its own FAQ contradicts itself on automatic payments, if that's your charge, watch closely and consider freezing the card. A ~\$2 "ECHST.NET" line is usually a temporary authorization, not a real charge, and should drop off.

## Things worth knowing

- **A one-time purchase won't recur.** If something bills you monthly, it's auto-refill or a membership, never the token pack itself.
- **Credits can expire.** ImLive expires unused credits in **30 days**, Cam4 in **6 months**, cancelling isn't how you "save" them, so don't overbuy in the first place.
- **Spent tokens are final.** Most terms make tips and paid actions non-refundable outside genuine billing errors.
- **A freezable or virtual card** makes every one of these problems smaller, you can cut off any recurring charge at the source.

## FAQ

**Does deleting my account refund my balance?** No, unused tokens/credits are generally forfeited on closure. Spend them or don't buy them before deleting.

**I don't recognize the descriptor on my statement.** Match it to the table above. If it's there, check auto-refill and memberships in your account before disputing, one of them is usually the answer.

**Cancelling the membership, do I lose my tokens?** No. Memberships and token balances are separate; your tokens stay.`;

export const metadata: Metadata = {
  title: 'How to Cancel or Dispute a Charge on Any Cam Site',
  description: 'Switch off auto-refill, cancel a monthly membership, or dispute an unexpected charge, with the exact statement descriptor for every major cam site so you know which one is billing you.',
  alternates: { canonical: `${SITE_CONFIG.url}/guides/how-to-cancel-cam-sites` },
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
        How to Cancel or Dispute a Charge on Any Cam Site
      </h1>
      <GuideBody markdown={BODY} />
    </main>
  );
}
