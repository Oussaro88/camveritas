// ═══════════════════════════════════════════════
// camVeritas, Reviews (cam platforms)
// ═══════════════════════════════════════════════
// Les champs ÉDITORIAUX (overall, scores, summary, reviewContent, pros, cons)
// sont VIDES par design. RIEN n'a été importé de nsfwranker : ni prose, ni
// verdicts, ni scores, ni pros/cons. Seuls les FAITS non-éditoriaux (slug, url,
// catégorie, prix affiché, flags techniques) sont repris.
// Tant qu'une review a summary === TO_WRITE, sa page est noindex (voir la page).
// ═══════════════════════════════════════════════
import type { ReviewData } from '../types';

export const TO_WRITE = '__TO_WRITE__';

export const reviews: ReviewData[] = [
  {
    slug: 'chaturbate',
    name: 'Chaturbate',
    url: 'https://chaturbate.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 8.1,
    scores: { content: 9, experience: 9, value: 7, privacy: 8, features: 7 },
    summary: 'The biggest free tier in camming, and genuinely cheap if you just watch. But the starter token pack is the worst deal twice over, top per-token rate and the platform\'s biggest cut (the tiny 50-token pack sends only 36% to the model). Statement reads mmbill.com. Buy bigger or use spy.',
    reviewContent: '## The real cost\n\nFree to watch, and that free tier is genuinely huge, you can browse hundreds of public rooms without spending a cent or handing over a card. That\'s the hook, and it\'s real. The spending starts the moment you want anything one-on-one.\n\nTokens are the currency, and the price you pay per token swings more than most people notice. Buy the smallest pack, 100 tokens for $10.99, and each token runs about **$0.11**. Buy in bulk and the rate drops to roughly **$0.08** on the 1,000-token pack, a little lower still on the giant crypto and wire options. So call it a **$0.095 token** on average, but know that the first-timer buying small is paying the top of that range, not the bottom.\n\nPrivate shows are where the meter runs, and note the model also sets a **minimum length**, so a 90 tk/min room with a 5-minute minimum means 450 tokens committed the moment you enter, whatever you planned. The rate and minimum both show in the request popup before you confirm; read them. The model sets the rate; Chaturbate only bounds it, from 6 all the way to 150 tokens a minute. The floor sounds gentle, but almost nobody streams at 6. Real private rates cluster between **30 and 90 tokens a minute**, which at the small-pack price is **$3.30 to $9.90 a minute**. A ten-minute private with a mid-tier model lands around $24–$33. Top performers blow past $10/min. None of that appears on the front page, because the front page is free and the front page is the point.\n\nSpy shows are the underrated move. You pay to watch someone else\'s private instead of booking your own, no interaction, just a look. Rates sit around **6 to 25 tokens a minute**, so **$0.66 to $2.75** at the small-pack rate. It\'s a third to half the price of going private yourself. Affiliate guides rarely lead with it, and the reason is boring: it earns them less.\n\n## Where your money actually goes\n\nThe model is paid **$0.05 a token**, flat, no matter what you paid to buy it. Sit with that for a second, because the percentage it implies isn\'t the one everyone repeats.\n\n"50/50" is the line you\'ll read everywhere. It\'s only true at one price point. Buy the 1,000-token pack at $0.08 and the model actually keeps about **62%** of your money, better than the cliché. Buy the $10.99 starter pack at $0.11 and the model\'s share falls to **around 45%**. Grab the tiny 50-token pack at $6.99 and it sinks to just **36%**, the platform keeps nearly two-thirds. Same tip, same show, but the split rides entirely on which pack you bought. The person most likely to overpay is the newcomer testing the waters with the smallest purchase, exactly the person the "50/50" shorthand reassures.\n\nThe takeaway isn\'t that Chaturbate is greedy; the flat $0.05 is industry-standard, matched by Stripchat and MyFreeCams. It\'s that the honest number depends on your receipt, and buying bigger is the single change that puts more of your money on the performer\'s side instead of the platform\'s.\n\n## Billing and privacy\n\nYour statement won\'t say "Chaturbate." A real September 2026 card purchase showed the descriptor **mmbill.com** (the checkout also lists chaturbill.com, and EPOCH.COM for its third processor), not the brand, and not the "RGHelp / CW Billing" older guides still repeat, which aren\'t confirmed for 2026. Trust your own statement over any blog, this one included. Crypto is an option (minimum 250 tokens, ~$0.08 each) and skips the card-network entry, so it\'s the most private way to load up if you\'re buying in volume anyway.\n\nTwo recurring charges are worth knowing about, because neither is forced on you but both are easy to forget. **Chaturbate Supporter** is a ~$19.95/month membership (ad-free, private messaging, 200 bonus tokens up front) that auto-renews until you cancel it under My Profile → Memberships, it isn\'t pre-checked at token checkout, but it renews quietly once you\'re in. And **Auto-Refill** will top your balance back up when it runs low; handy if you want it, a slow leak if you switched it on without meaning to. Both live in your settings, both are off unless you turn them on, and both are worth a glance before you assume a charge is a mistake.\n\n## What the guides skip\n\n- **The starter pack is the worst deal twice over.** You pay the highest per-token rate *and* hand the platform its biggest cut, right when you\'re least sure the site is for you.\n- **"50/50" is marketing math.** The real split runs from just 36% to the model on the tiny 50-token pack, to 45% on the $10.99 starter, up to ~63% on the biggest. Buy bigger and far more of your money reaches the person you\'re actually there for.\n- **Spy is the cheap seat nobody advertises.** A third to half the cost of a private, and it\'s rarely on the "getting started" lists because it pays affiliates less.\n\n## Who it\'s for\n\nChaturbate earns its reputation on volume: the biggest audience in camming, the deepest free tier, and enough models online at any hour that you\'ll always find someone. If you\'re happy watching public rooms and tipping occasionally, it might be the cheapest real entertainment on this whole list. If you want private time, go in with a plan, buy a larger pack so your money and your split both improve, use spy when you just want to watch, and treat the per-minute rate as the number that matters, not the free front door. Wander in expecting "free" to stay free, and the first private show will correct you fast.',
    tokenPriceSmall: 0.11,
    tokenPriceLarge: 0.08,
    privateLowTokens: 30,    // réel 30–90 (range officiel 6–150)
    privateHighTokens: 90,
    spyLowTokens: 6,         // réel 6–25 tk/min
    spyHighTokens: 25,
    billingClarity: 8,       // relevé discret (Multi Media LLC), jamais 'Chaturbate'
    pricingCheckedAt: '2026-09',
    pros: [
      'Huge free tier, watch and browse without a card',
      'The largest audience in camming; always someone online',
      'Discreet billing, statement shows Multi Media LLC / Segpay, never "Chaturbate"',
      'Spy shows (from ~$0.66/min) are a cheap way to just watch',
      'Crypto shaves 5–10% off and skips the bank entry',
    ],
    cons: [
      'Starter pack charges the worst per-token rate (~$0.11)',
      'Private shows run $3.30–$9.90/min once you convert tokens',
      'Small-pack buyers hand the platform ~55% (the "50/50" line is optimistic)',
      'Supporter membership auto-renews at ~$19.95/mo if you opt in and forget',
      'No VR',
    ],
    persona: 'Best for watchers and tippers. If you go private, buy big and use spy, don\'t dabble small.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free / $0.08/token',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: false,
    hasApp: false,
  },
  {
    slug: 'stripchat',
    name: 'Stripchat',
    url: 'https://stripchat.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 7.4,
    scores: { content: 9, experience: 8, value: 6, privacy: 8, features: 9 },
    summary: 'Cheap by the token, brutal by the minute. Discreet billing (statement reads Paymentico / EPOCH.COM*Technius) is a real plus, and Auto-Refill is off by default. But small-pack buyers pay the worst rate and hand the platform the bigger half; pay by card, not PayPal (fewer tokens).',
    reviewContent: '## The real cost\n\nStripchat looks cheap until you do the arithmetic. The token price is the first place people get fooled, so start there.\n\nA token costs about **$0.11** in the small packs and drops to roughly **$0.093** on the largest pack a verified September 2026 checkout actually showed (45 tokens/$4.99 up to 540/$49.99). Call it a **$0.10 token**. The spread matters: the guy testing with a $9.99 pack pays the worst rate, the one buying $50 at once pays the best, same tokens, different price, depending only on how much you front. One quiet catch from that same checkout: paying by **PayPal gave fewer tokens than card** for the identical price ($49.99 bought 540 tokens on card, only 460 via PayPal, about 17% worse). Pay by card.\n\nNow the part the sticker price hides. A private show isn\'t priced in dollars, it\'s priced in tokens per minute, and **the model sets that rate**, Stripchat only defines the range it can fall in: **8 to 150 tokens a minute**. So the honest floor, at the smallest-pack token price, is about **$0.88/min**. That\'s the theoretical cheapest. In practice most private rates sit in the 30–60 token band, which is **$3 to $6 a minute** once you convert. An hour of a mid-priced model in private runs past $200. Nobody puts that number on a landing page.\n\nIf you want the same show for less, **spy mode** is the lever almost no affiliate guide points you to, because it pays them less. You watch someone else\'s private instead of buying your own. Stripchat\'s floor for spy is **4 tokens a minute**, model-set up to 60. At the small-pack rate that\'s **from ~$0.44/min**, a fraction of a full private. You lose the two-way interaction, but if watching is enough, it\'s the cheapest real way in.\n\n## Where your money actually goes\n\nHere\'s the figure that reframes everything: **the model is paid a flat $0.05 per token**, no matter what you paid for it.\n\nDo the division. Buy the big pack at ~$0.093 and the model keeps about **54%** of what you spent. Buy the small $9.99 pack at $0.11 and the model\'s share drops to about **45%**, meaning **Stripchat pockets the larger half of a beginner\'s money**. Stripchat\'s own page advertises payouts "over 55%," even "up to 70%" once you fold in absorbed fees and free tokens. That\'s not a lie, it\'s just true for the big spenders. The first-timer with a $9.99 balance is on the worst end of it, funding the platform more than the performer. If transparency is the point, that\'s the sentence to remember.\n\n## Billing and privacy\n\nStripchat is discreet where it counts: **your bank statement never says "Stripchat."** A real September 2026 purchase showed the descriptor **Paymentico** (and, via one processor, **EPOCH.COM*Technius**), not the brand, and not the "VS Media / SegPay" names affiliate lists tend to repeat, which weren\'t the ones actually observed. If a shared statement is a concern, that discretion is a genuine plus. Two things not to be blindsided by, both checked at that same checkout: an **Auto-Refill** option exists but sat **off by default** (it re-buys your last pack when your balance runs low, only if you switch it on), and a big-pack purchase pitches a **7-day trial of "Ultimate" membership** ($19.99/month after), the box was unticked by default, but tick it and you\'ve started a recurring sub. Neither is forced on you; both are worth a glance before you confirm.\n\nTwo things worth knowing before you buy. Crypto payments dodge the bank entry entirely and often come with bonus tokens, so they\'re both the most private and frequently the cheapest route. And the only price that\'s actually yours is the one on your own checkout screen, logged in, in your country, regional pricing, taxes and promos move the number, so treat every token grid (this one included) as a guide, not gospel.\n\n## What the guides skip\n\n- **The token rate is a decoy.** "$0.09 a token" reads as cheap; it\'s the per-minute token count that empties your balance, and that\'s set by the model, not the headline.\n- **Small packs are the sucker\'s rate.** You pay the most per token *and* hand the platform its biggest cut exactly when you\'re least sure the site is worth it.\n- **Spy exists and they\'re quiet about it.** The cheapest way to watch is the one that earns affiliates the least, so it rarely makes the "how to use Stripchat" lists.\n\n## Who it\'s for\n\nStripchat is a strong pick if you value model variety, VR, and a genuinely discreet statement, and you\'re the type to buy a large token pack deliberately rather than topping up $10 at a time. It\'s a poor fit if you plan to dabble with small purchases, you\'ll pay the worst token rate and the worst split, and the per-minute cost of private shows will surprise you. Go in knowing the real numbers, buy big or spy, and it\'s fair. Wander in off the sticker price and it isn\'t.',
    tokenPriceSmall: 0.11,
    tokenPriceLarge: 0.093,   // 540 tk = 49.99$ (checkout observé 09/2026)
    privateLowTokens: 30,    // fourchette réelle 30–60 tk/min (range officiel 8–150)
    privateHighTokens: 60,
    spyLowTokens: 8,         // fourchette réelle spy 8–20 tk/min (plancher officiel 4)
    spyHighTokens: 20,
    billingClarity: 8,       // relevé discret, jamais 'Stripchat'
    pricingCheckedAt: '2026-09',
    pros: [
      'Genuinely discreet billing, never says "Stripchat" on your statement',
      'Huge model variety plus real 4K/VR streams',
      'Spy mode (from ~4 tk/min) is a cheap way in if you just want to watch',
      'Crypto payments are private and often bonus-boosted',
    ],
    cons: [
      'Small token packs charge the worst per-token rate',
      'Private per-minute cost (30–60 tk/min typical) adds up fast, $3–6/min',
      'Beginners hand Stripchat the larger half of their spend (~55%)',
      'Real price only visible at your own logged-in checkout',
    ],
    persona: 'Buy a big pack deliberately, or use spy, don\'t dabble $10 at a time.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free / $0.09/token',
    hasVR: true,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: false,
    hasApp: false,
  },
  {
    slug: 'livejasmin',
    name: 'LiveJasmin',
    url: 'https://livejasmin.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 6.8,
    scores: { content: 9, experience: 9, value: 5, privacy: 7, features: 8 },
    summary: 'The premium, studio-quality end of camming, and the most confusing pricing. A credit isn\'t $1 (~$0.63–$0.78), extras like Cam2Cam (+3/min) and audio (+3/min) can double the rate, there\'s no cheap spy mode, and models keep the least (30–80%, resets every 14 days).',
    reviewContent: '## The real cost\n\nLiveJasmin is the premium end of camming, studio-quality performers, genuinely good HD, a polished interface, and a history back to 2001. It\'s the site that looks least like a webcam site and most like a product. That polish is real, and for some viewers it\'s the whole appeal. It also comes with the most confusing pricing on this list, so read carefully.\n\nFirst myth to kill: **a credit is not a dollar.** You\'ll see "1 credit = $1" repeated everywhere; it\'s wrong. On a September 2026 new-user grid, credits ran about **$0.78 each** on the small pack (36 for $27.99) down to **$0.63** on the big one (316 for $197.99), and other checkouts have shown credits well above a dollar. The price shifts by pack, promo, region and account, so the only number that counts is the one on your own Get Credits screen.\n\nPrivate shows are set by each model, not the platform, the opposite of MyFreeCams. The site\'s own price filter spans **0.01 to 9.99+ credits a minute**, and rates genuinely start low: some rooms sit under $1/min, plenty land in the $1–$3.50 range once you convert, and top performers run higher. I won\'t quote you a tidy "average," because the honest sources that actually counted rooms refused to, the spread is too wide and too model-dependent. Two cautions the profile price hides: the **$0.98/min** you\'ll see on some rooms is a temporary newbie promo, not a standard rate, and models can run "Hot Deals" of up to 90% off, so the sticker on the tile isn\'t always what you\'re billed.\n\nHere\'s the part that quietly doubles your bill: **the extras are separate and steep.** Cam2Cam adds up to **+3 credits a minute**, and Two-Way Audio adds up to **+3** more, both on top of the private rate, both confirmed in LiveJasmin\'s own docs. A 4-credit/min model with cam2cam and audio is 10 credits a minute, call it $6.30–$7.80 depending on your credit price. The private rate you picked the room for can be less than half the real cost of an interactive session.\n\nOne structural note: LiveJasmin has **no true spy mode**, no paying a low rate to watch someone else\'s private, the way Chaturbate, MFC or CamSoda let you. There\'s a "Sneak Peek" and there are VIP group shows (a buy-in-plus-goal format, not a cheap per-minute seat), but the budget "just let me watch" option that the token sites offer doesn\'t really exist here. On LiveJasmin you\'re paying for your own show or nothing.\n\n## Where your money actually goes\n\nThis is where the premium shine gets complicated for the person on camera. LiveJasmin pays models on a **level-dependent scale from 30% to 80%**, and the level **resets every 14 days**. To reach the headline 80%, a model has to generate over **$30,000 in a single two-week period**. Everyone else lives lower down: a new or average performer is often at **30%**, the bottom of the industry. Human Rights Watch has flagged how unstable this structure is for workers.\n\nAnd that\'s before studios. A large share of LiveJasmin\'s models, especially in Eastern Europe, Latin America and the Philippines, work through studios that take their own cut of that percentage. So the person you\'re tipping may keep a fraction of an already-low share. Of every platform here, this is the one where the least of your money is most likely to reach the actual performer. For a site that markets itself as the classy, ethical-feeling option, that\'s the fact worth knowing.\n\n## Billing and privacy\n\nDiscreet, as you\'d expect: your statement shows the processor, **JWSBill, EPOCH, SEGPAY or CCBill** have all been observed in 2026, never "LiveJasmin" or its parent Docler. Card is universal; PayPal, WebMoney and crypto are reported but vary by region, so don\'t count on any specific one until you see it at checkout.\n\nTwo things to keep straight. The **"9.99 free credits"** offer that pops up when you try to leave the purchase page is real, not a scam, but it works by validating (and storing) your card, which makes one-click spending later very easy. And while buying credits is a one-time charge with no forced recurring billing, LiveJasmin does sell separate **Fan Club subscriptions** ($5.99 / $21.99 / $42.99 a month) that auto-renew, different thing from credits, easy to forget once joined.\n\n## What the guides skip\n\n- **A credit isn\'t a dollar.** It\'s roughly $0.63–$0.78 on the observed bulk grid, sometimes more, so every "X credits/min" rate is really X × up-to-a-dollar. Convert before you judge.\n- **Extras can double the rate.** Cam2Cam (+3/min) and Two-Way Audio (+3/min) stack on top of the private price. The number on the tile is the floor, not the cost of an interactive show.\n- **The performer sees the smallest slice.** A 30–80% scale that resets every 14 days leaves most models at 30%, and studios take a cut of even that. The classiest-looking site pays its people the harshest.\n\n## Who it\'s for\n\nLiveJasmin is for the viewer who wants production quality above all and will pay for it, the HD, the curated performers, the interface that doesn\'t feel seedy. For a plain private show it can even be reasonable, since rates start genuinely low. The traps are the credit-price illusion, the stacking extras that turn a $2/min room into a $7/min session, and the absence of a cheap watch-only mode. Buy a bigger credit pack so your per-credit cost drops, check the real rate and any Hot Deal on the room, and decide up front whether you\'re paying for cam2cam and audio, because those are where the bill runs away. Just know that behind the polish, it\'s also the platform where the performer sees the smallest slice of what you spend.',
    noTokens: true,
    tokenPriceSmall: 0.78,   // 36 cr = 27.99$ (0.78/crédit)
    tokenPriceLarge: 0.63,   // 316 cr = 197.99$ (0.63/crédit)
    privateLowTokens: 2,     // réel ~2–5 crédits/min (fixé par modèle)
    privateHighTokens: 5,
    spyLowTokens: null,      // pas de vrai spy sur LiveJasmin
    spyHighTokens: null,
    billingClarity: 7,       // JWSBill/EPOCH/SEGPAY, jamais LiveJasmin
    pricingCheckedAt: '2026-09',
    pros: [
      'Genuinely premium: studio-quality performers, strong HD, polished interface',
      'Private rates start low, a basic private can be reasonable',
      'Discreet billing (JWSBill / EPOCH / SEGPAY), never says LiveJasmin',
      'Huge, well-curated model base; 10 min of some lives free',
      'Established since 2001, ~229M visits/month',
    ],
    cons: [
      'A credit is not $1, really ~$0.63–$0.78, sometimes more',
      'Cam2Cam (+3/min) and Two-Way Audio (+3/min) can double your real cost',
      'No true spy/watch-only mode like the token sites',
      'Worst payout for models: 30–80% that resets every 14 days; most sit at 30%',
      'Studios take a further cut; classiest site pays performers the least',
    ],
    persona: 'For viewers who want production quality and will pay for it. Buy bulk, check the real rate + extras before starting.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: '$0.01-9.99/min',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: true,
    hasApp: false,
  },
  {
    slug: 'bongacams',
    name: 'BongaCams',
    url: 'https://bongacams.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 7.6,
    scores: { content: 8, experience: 7, value: 8, privacy: 7, features: 7 },
    summary: 'One of the cheaper big rooms, and honest about it: published default rates, the clearest and cheapest spy mode on this list (~$1–2/min), and a fair ~50% payout. Just turn off Auto Top-up, the one real billing trap.',
    reviewContent: '## The real cost\n\nBongaCams is one of the cheaper big rooms to spend in, and that\'s a real point in its favor, not marketing. Tokens run about **$0.10** in the small packs and drop toward **$0.06** in bulk, a shade lower than Chaturbate or Stripchat at the top end. Call it a **$0.08 token** on average. If you buy big, your money goes a little further here than on most of the majors.\n\nThe private-show math is refreshingly documented, because BongaCams still publishes default rates and most models start from them. A standard **private runs 60 tokens a minute** by default, a **full private** (the kind no one can spy on) **90**, and a **group show 30**. Models adjust up or down, real rates land between 20 and 120 tk/min, but the defaults give you an honest anchor most sites don\'t. At the small-pack price, a normal private works out to roughly **$3 to $9 a minute** depending on the model. A ten-minute private with a mid-tier performer is around $40–$50.\n\nThe genuinely useful move here is **spy mode**, and BongaCams makes it cheap and clear: **15 tokens a minute** by default, sometimes 10–20. That\'s **$1 to $2 a minute**, a quarter of a full private, to watch someone else\'s show without interacting. Of all the sites on this list, BongaCams is the most upfront about spy pricing, and it\'s the one I\'d point a budget-minded viewer to first.\n\n## Where your money actually goes\n\nI\'ll correct a number you\'ll see repeated elsewhere, including in some "transparency" guides: the claim that BongaCams pays models only ~$0.025 a token, a 37% cut. When you check it against the platform\'s own payout information and multiple 2026 sources, it doesn\'t hold up. Models actually earn around **$0.045–$0.05 a token**, which, against the $0.06–$0.10 you pay, puts the performer\'s share near **50%**, in line with Chaturbate and Stripchat. Newer models sit at the lower end and established ones climb higher, so the split isn\'t fixed, but "half the standard rate" is wrong. Credit where due: on payout, BongaCams is ordinary, not predatory.\n\nThat correction cuts both ways for us. It would\'ve made a punchier story to call BongaCams the worst-paying site here, but it isn\'t, and saying so would be the same affiliate-grade sloppiness we\'re supposed to be the antidote to.\n\n## Billing and privacy\n\nYour statement won\'t read "BongaCams." Charges route through the usual discreet processors, most commonly **Epoch** or **SegPay**, and tokens don\'t expire on an active account. So far, so standard.\n\nThe one thing to actually watch is **Auto Top-up**. Multiple sources report it as the most common billing surprise on BongaCams: an option that re-buys your last token pack automatically the moment your balance hits zero, sometimes mid-session. Reports differ on whether it\'s pre-ticked during a first purchase or simply easy to enable by accident, I can\'t confirm the default from the outside, so check the box state yourself at checkout. Leave it off and there\'s no recurring charge; miss it and your card gets hit again without a second prompt. It lives in your profile settings if you want to kill it after the fact.\n\n## What the guides skip\n\n- **Spy is the cheapest honest seat, and it\'s actually documented here.** 15 tk/min default, about $1–$2, versus $3–$9 to go private yourself.\n- **The "BongaCams pays models 37%" line is wrong.** Real payout is ~50%, same ballpark as the token majors. Don\'t let a scary stat pick your site for you.\n- **Auto Top-up is the real trap, not the token price.** The recurring re-buy catches more people than any per-minute rate. Untick it.\n\n## Who it\'s for\n\nBongaCams suits a viewer who wants big-room variety at a slightly lower token cost and who\'ll use spy mode instead of defaulting to expensive privates. The published default rates make it easier to budget than most, the European and South American model pool is deep, and the payout to performers is fair. The catch is operational, not moral: set your token limit, turn off Auto Top-up, and it\'s one of the better-value majors. Leave the re-buy on and wander into full privates, and it\'ll drain a balance as fast as anywhere.',
    tokenPriceSmall: 0.10,
    tokenPriceLarge: 0.06,
    privateLowTokens: 30,    // réel 30–90 (défaut privé 60, groupe 30, full 90)
    privateHighTokens: 90,
    spyLowTokens: 10,        // défaut officiel 15, fourchette 10–20
    spyHighTokens: 20,
    billingClarity: 6,       // discret (Epoch/SegPay) mais Auto Top-up piège
    pricingCheckedAt: '2026-09',
    pros: [
      'Cheaper tokens at volume (~$0.06) than most majors',
      'Cheapest, clearest spy mode on this list, 15 tk/min default (~$1–2)',
      'Published default private rates make budgeting easier',
      'Fair ~50% payout to models (not the 37% some guides claim)',
      'Deep European / South American model pool',
    ],
    cons: [
      'Auto Top-up may be easy to enable, re-buys your pack automatically',
      'Full private (90 tk/min) gets expensive fast',
      'Cam2Cam can add per-minute cost on top',
      'Small packs still ~$0.10/token',
    ],
    persona: 'Best for budget-minded viewers who use spy mode. Set a token limit and kill Auto Top-up first.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free / $0.06/token',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: false,
    hasApp: false,
  },
  {
    slug: 'camsoda',
    name: 'CamSoda',
    url: 'https://camsoda.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 7.8,
    scores: { content: 8, experience: 8, value: 8, privacy: 8, features: 8 },
    summary: 'The lowest entry point of the majors (300 tokens for $14.99, new users) and the lowest default private/spy rates. Payout is a touch above standard, but not the best (Cam4 pays double). Watch the per-minute minimums.',
    reviewContent: '## The real cost\n\nCamSoda has the lowest bar to entry of any major on this list, and that\'s the honest headline. A 50-token pack is $6.99, a hundred is $10.99 (~$0.11 each), and the rate falls to about **$0.081 a token** on the big 3,100 pack. Average it out and you\'re looking at a **~$0.10 token**, roughly in line with the others but with a genuinely cheaper way in.\n\nThat cheap way in comes with an asterisk worth understanding. New accounts get pushed a **300-token pack for $14.99**, half the usual $31.98, about **$0.05 a token**. It\'s real; it\'s also one-time. Buy it, enjoy the best rate on the site, and know that every refill afterward costs roughly double. Any guide that quotes CamSoda at "5 cents a token" is quietly using the intro price to describe your whole future, which is exactly the sleight-of-hand this site exists to call out.\n\nPrivate shows default to **30 tokens a minute**, the lowest default of any platform here, which sounds like $3–$4 a minute and often is. But "default" is doing heavy lifting. Models set their own rate, and real rooms run anywhere from 6 to 120+ tk/min. Here\'s the part the calculators hide: a real September 2026 check found a 60 tk/min room that billed a **10-minute minimum up front**, 600 tokens, gone before the show even started. Always read the room\'s own rate and minimum before you hit go; the "$1.50/min" figure you\'ll see quoted is the floor, not the norm.\n\nSpy mode is the cheap seat again: **12 tokens a minute** by default, about **$1.30–$1.70** at typical token prices. Watch someone else\'s private, no interaction. It\'s one of CamSoda\'s better-value options and, as usual, one the affiliate guides don\'t lead with.\n\n## Where your money actually goes\n\nModels earn **$0.05 to $0.055 a token**, tiered by volume. That\'s a notch above the flat $0.05 that Chaturbate, Stripchat and MyFreeCams pay, so on payout, CamSoda treats performers slightly better than the token standard. Against what you pay, the model\'s share works out to about **50% on a small pack and up to ~68% on the biggest**, since the payout is fixed while your per-token cost drops with bulk.\n\nOne correction, because you\'ll see it claimed: CamSoda is *not* "the best-paying cam site." Cam4 documents $0.10 a token to its broadcasters, double CamSoda\'s rate. CamSoda is better than the $0.05 standard, not the top of the market. Precise beats flattering: above average, not the crown.\n\n## Billing and privacy\n\nYour statement shows **EPOCH.COM*LIVESODA** (sometimes EPOCH.COM*SECURELIVE), never "CamSoda", confirmed on a real 2026 purchase, and often converted to your local currency at checkout. Discreet, as expected.\n\nA few real mechanics worth knowing, all confirmed rather than rumored. A straight token purchase is **non-recurring**, buying the 300 pack doesn\'t sign you up for anything. There\'s a separate **Premium membership at $19.95/month** that *does* auto-renew, but it\'s an opt-in, not something bolted onto a token buy. Auto-reload exists as a feature, but on a tested account the toggle sat **off by default**, still, glance at it before you pay, since defaults can vary. And note the fine print the reviews skip: tokens have no normal expiry, but unused credits are **forfeited if your account is closed**, purchases are **final sale** outside billing errors, and you have a **30-day window** to dispute a wrong charge before it\'s treated as accepted.\n\n## What the guides skip\n\n- **The "$0.05 token" is the intro price, not your real cost.** The 300/$14.99 new-user deal is one-time; refills run ~$0.08–$0.14. Judging the site by the promo is the trap.\n- **The per-minute minimum can dwarf the token rate.** A 60 tk/min room with a 10-minute minimum is 600 tokens up front, the "$1.50/min" headline hides it. Read the room\'s rate and minimum first.\n- **Tokens vanish if the account closes.** They\'re credits, not a bank balance, and it\'s final-sale with a 30-day dispute window. Worth knowing before you load up big.\n\n## Who it\'s for\n\nCamSoda is a strong value pick, especially to start: the cheapest entry point, the lowest default private and spy rates, a payout that\'s a touch kinder to models than the standard, plus VR and toy integration if that\'s your thing. The catches are operational, not shady, the intro price won\'t last, and individual rooms can charge far above the default with minimums attached. Use the new-user deal with eyes open, read each room\'s actual rate, lean on spy mode for cheap viewing, and it\'s one of the better-value majors here. Take the "$1.50/min" marketing at face value and the first premium room will set you straight.',
    tokenPriceSmall: 0.14,   // 50 tk = 6.99$ (0.1398)
    tokenPriceLarge: 0.08,   // 3100 tk = 249.99$ (0.0806)
    privateLowTokens: 30,    // défaut 30, réel 6–120
    privateHighTokens: 90,
    spyLowTokens: 12,        // défaut 12 tk/min
    spyHighTokens: 20,
    billingClarity: 8,       // EPOCH.COM*LIVESODA, non-recurring tokens
    pricingCheckedAt: '2026-09',
    pros: [
      'Cheapest way in, 300-token new-user deal at $14.99 (~$0.05/token)',
      'Lowest default rates on this list: private 30 tk/min, spy 12 tk/min',
      'Payout ($0.05–$0.055/token) is a notch above the token standard',
      'VR + Lovense/toy integration, open free tier (watch without a card)',
      'Discreet billing, statement reads EPOCH.COM*LIVESODA, never CamSoda',
    ],
    cons: [
      'The $0.05 intro price is one-time; refills cost ~$0.08–$0.14',
      'Rooms can charge far above the 30 tk/min default, with paid minimums (600 tk seen up front)',
      'Separate Premium ($19.95/mo) auto-renews if you opt in',
      'Tokens forfeited if the account closes; final-sale purchases',
      'Not the best payout, Cam4 pays models double per token',
    ],
    persona: 'Best value to start. Use the new-user deal, read each room\'s real rate, lean on spy.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free / $0.08/token',
    hasVR: true,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: false,
    hasApp: false,
  },
  {
    slug: 'jerkmate',
    name: 'Jerkmate',
    url: 'https://jerkmate.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 6.3,
    scores: { content: 8, experience: 8, value: 4, privacy: 7, features: 7 },
    summary: 'A marketing front end for Streamate (same models, available there directly). Gold is a simple 1:1 dollar unit, but the billing around it is the problem: statement reads ECHST.NET, the \'no automatic payments\' claim contradicts its own FAQ, and 2026 BBB complaints of unexpected charges are numerous. Priciest, worst payout to models (~35%).',
    reviewContent: '## What Jerkmate actually is\n\nStart here, because it\'s the fact that reframes everything else: **Jerkmate is a branded front end for Streamate.** Same models, same rooms, same streams, a different paint job over someone else\'s network. The performers you match with aren\'t "Jerkmate models"; they\'re Streamate models appearing through a Jerkmate-shaped window. You can reach the exact same people by going to Streamate directly, and by every account the underlying show and its price are the same. What Jerkmate adds on top is the marketing: the roulette-style matching, the polished onboarding quiz, the "Jerky" chat mascot, and a lot of pop-ups.\n\nThat\'s not automatically a knock, the interface is genuinely one of the cleaner ones in camming, and the matching gimmick is fun the first few times. But you should know you\'re paying attention to a storefront, not a unique catalog. If a guide sells Jerkmate as a special roster you can\'t get elsewhere, it\'s selling you the wrapper.\n\n## The real cost\n\nJerkmate\'s pricing is refreshingly literal: **1 Gold = $1**, and, confirmed by a September 2026 account check, there aren\'t even prepaid Gold packs to decode. There\'s no wallet, no "buy 100 Gold" bundle; Gold is just the unit Jerkmate bills actions in, and your card is charged as you spend. So the credit math itself is honest and simple. What isn\'t simple is everything around the billing, which is where the real cautions live (below).\n\nPrivate shows are billed by the minute, set by each model, Jerkmate publishes no fixed grid, and the rate only shows inside the room. Affiliate reviews put it around **$1.40 to $10 a minute** with a claimed ~$3 average, but those are secondary numbers I can\'t verify, so treat them as a rough shape rather than gospel. What\'s clear structurally: a "Private" here isn\'t exclusive by default, others can watch or join unless you pay for "Exclusive." A ten-minute private at a mid rate still runs real money, and it goes fast.\n\nThere\'s no real cheap seat, either. Where Chaturbate and Stripchat let you spy on someone else\'s private for a fraction of the price, Jerkmate\'s model funnels you toward your own paid session. The free tier is thin: browse, peek at public rooms, and get nudged toward spending almost immediately. It\'s a storefront, not the open public-room firehose you get on Chaturbate.\n\n## Where your money actually goes\n\nThis is the number the "pornstar matching" marketing never mentions. Because Jerkmate rides on Streamate\'s network, it inherits Streamate\'s payout structure, and models keep roughly **30 to 35%** of what you spend. The network and the funnel take the other **65 to 70%**.\n\nPut that next to the sites we\'ve measured: Stripchat and Chaturbate pay models a flat $0.05 a token, which works out to **45–62%** of your money reaching the performer. Jerkmate/Streamate is the worst split of the three by a clear margin. You\'re paying premium per-minute rates *and* a smaller share of it reaches the person on screen. If supporting the performer factors into where you spend, that\'s a genuine mark against it.\n\n## Billing and privacy\n\nYour statement won\'t say "Jerkmate." A real September 2026 purchase showed the descriptor **ECHST.NET** (also seen: EPOCH.COM *ICFTECHNOL, PayPal *ICFTECH), the ICF Technology billing stack behind the site, never the brand name. One thing to expect and not panic over: adding a card can trigger a **~$2 authorization** (not a charge) that\'s meant to drop off, several people have seen "ECHST.NET $2" and assumed they\'d been billed.\n\nThis is where I\'d slow down. Jerkmate\'s FAQ says outright "no automatic payments, no sneaky subscriptions", but the same FAQ elsewhere describes a billing clause tied to 15 days of inactivity, which is a contradiction the site hasn\'t resolved. And the complaint record is not small: the BBB lists numerous 2026 billing complaints against ICF Technology, people reporting unexpected charges after a "free" signup, $2, $19.95, one totaling $74.40, often refunded once disputed. I can\'t confirm an auto-reload box is ticked by default (no clean evidence either way), so I won\'t claim it is. But the honest verdict is that Jerkmate\'s "no automatic payments" promise is contradicted by its own fine print and by a real trail of 2026 chargeback complaints. Watch your statement, use a card you can freeze, and treat any "free" prompt as one that wants your card on file.\n\n## What the guides skip\n\n- **It\'s Streamate with a marketing layer.** The same models are available on Streamate directly, at the same underlying price. Jerkmate\'s value-add is the interface and the matching, not the roster.\n- **Models keep the least here.** ~30–35% versus 45–62% on the token sites, you pay more per minute and less of it reaches the performer.\n- **The credit math is honest; the billing around it isn\'t.** 1 Gold really is $1 with no packs to decode, but the "no automatic payments" claim is contradicted by Jerkmate\'s own FAQ and a trail of 2026 unexpected-charge complaints.\n\n## Who it\'s for\n\nJerkmate makes sense if the experience is what you\'re buying, the clean interface, the match-and-go format, the pornstar-branded events, and you\'ll spend deliberately with a set budget rather than getting funneled by the upsell modals. The tech is good and the model pool (being Streamate\'s) is deep. But if you\'re optimizing for cost or for the performer\'s cut, it\'s the weakest value on this list: pricier per minute, thinner free tier, and the smallest share reaching the model. Know that you can get the same people on Streamate, set a hard Gold limit before you start, and it\'s a fair night out. Follow the pop-ups and it gets expensive fast.',
    tokenPriceSmall: 1.0,    // 1 Gold = $1 (pas de conversion token)
    tokenPriceLarge: 1.0,
    privateLowTokens: 5,     // privé ~5–10 $/min (Gold = $)
    privateHighTokens: 10,
    spyLowTokens: null,
    spyHighTokens: null,
    billingClarity: 5,       // discret (Streamate billing), jamais 'Jerkmate'
    pricingCheckedAt: '2026-09',
    pros: [
      'One of the cleanest interfaces in camming; fun match-and-go format',
      'Deep model pool (it\'s Streamate\'s whole network)',
      '1 Gold = $1 spending is easy to track in the moment',
      'Discreet billing, never says "Jerkmate" on your statement',
    ],
    cons: [
      'It\'s a white-label of Streamate, same models available there directly',
      '\'No automatic payments\' is contradicted by its own FAQ + 2026 BBB charge complaints',
      'Statement shows ECHST.NET; adding a card can trigger a $2 authorization',
      'Worst payout, models keep ~35% (Streamate structure)',
      'Private isn\'t exclusive by default; no published price grid',
    ],
    persona: 'For the experience and the interface, on a set budget. If you want value or the same models cheaper, use Streamate direct.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Gold packages from $27.99 (30 gold) to $179.99 (300 gold)',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: true,
    hasApp: false,
  },
  {
    slug: 'myfreecams',
    name: 'MyFreeCams',
    url: 'https://myfreecams.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 7.2,
    scores: { content: 7, experience: 6, value: 7, privacy: 7, features: 6 },
    summary: 'The only major with platform-fixed show rates, no per-room surprises, and a fair ~60% cut to models. But it\'s dated (2002 interface), women-only, no crypto, and Private is pricey: 200 tokens buys just 3 minutes.',
    reviewContent: '## The real cost\n\nMyFreeCams does one thing no other major does: it sets the show rates itself. Everywhere else, the model picks a per-minute price and you hope it\'s reasonable. On MFC the rates are fixed by the platform, the same in every room, **Private 60 tokens a minute, TruePrivate 80, Spy 20, Group 10 per person**. That predictability is the site\'s best feature and the honest reason to consider it: you always know the meter before you start.\n\nTokens run about **$0.10** in the entry pack (200 for $19.99) and drift down to roughly **$0.079** on the largest, which only become available after you\'ve been a paying member a while. There\'s less bulk discount than most sites, MFC\'s whole pricing is flatter and plainer.\n\nNow the number the calculators get wrong, and it matters. You\'ll see "Private = $3/min" quoted everywhere. **That $3 is what the model receives, not what you pay.** At 60 tokens a minute, your cost is 60 × your token price, so **$6 a minute on the entry pack, about $4.75 on the biggest**. TruePrivate (the fully exclusive mode nobody can spy on) is 80 tk/min, so $6.40–$8/min. Read any MFC price as tokens first, then convert, or you\'ll underestimate by half.\n\nSpy is the cheap seat: **20 tokens a minute**, about **$1.60–$2** to watch someone else\'s private without interacting. Group is cheaper still at 10 tk/min per head, though tips run on top. Because the rates never vary by room, MFC is genuinely the easiest site here to budget, there\'s no premium-model surprise waiting.\n\n## Where your money actually goes\n\nModels earn a flat **$0.05 a token**, same headline rate as Chaturbate and Stripchat. Because your per-token cost falls with bigger packs while the payout stays fixed, the model\'s share climbs from **50% on the entry pack to about 63% on the largest**, and MFC states its site-wide average is "over 60%." That\'s a genuinely good deal for performers, at the upper end of the token sites.\n\nWhat I won\'t tell you is that it\'s "the highest-paying site in the industry", you\'ll see that claim, and it isn\'t verified. The 60%+ figure is an average the platform calculates from its own price ladder, not a contractual rate that beats every rival. Cam4, for one, documents a higher per-token payout. So: better than the $0.05-flat standard on a percentage basis, especially in bulk, but not a proven crown.\n\n## Billing and privacy\n\nHere\'s a correction worth making, because a lot of guides (including an earlier draft of my own notes) get it wrong: MFC is **not** cards-only through a single processor. It runs several, **CCBill, NetBilling, Rocketgate, SegPay/PayPal**, and your statement shows the processor, never "MyFreeCams": descriptors like ‘CCBill.com*ActiveSoft’, ‘MFCBill.com*Tokens’, ‘MFCGate.com*Tokens’, or ‘SegPay*MFCXY’. Crypto isn\'t documented as an option, so if that\'s your privacy route, this isn\'t your site. Token purchases are **one-time charges, no recurring billing**, per MFC\'s own terms, and there\'s no monthly Premium fee: your first token purchase upgrades the account to Premium for life.\n\nTwo bits of fine print the price tables skip. Foreign-transaction and currency-conversion fees can apply since the processor may sit outside the US, relevant if your card isn\'t USD. And private-show archives, while a nice Premium perk, are explicitly **not guaranteed**; if one fails, the tokens you spent aren\'t automatically refunded.\n\n## What the guides skip\n\n- **"$3/min" is the model\'s cut, not your bill.** You actually pay $4.75–$6 a minute for Private once tokens convert. Always read MFC prices in tokens first.\n- **200 tokens is 3 minutes and 20 seconds of Private.** The entry pack empties fast, MFC has a dedicated refund page for exactly this new-user shock. Budget before you click.\n- **Prices live in the room topic, not a panel.** Session rates are fixed, but tip menus, goals and tributes are crammed into one line of room text. Learn to read it or it looks like noise.\n\n## Who it\'s for\n\nMFC suits someone who values predictability over polish: fixed, no-surprise rates, a fair cut to performers, and a straightforward "buy once, Premium for life" model. The trade-offs are real, the interface is stuck in 2002, it\'s women-only by design, there\'s no crypto, and Private is genuinely expensive at 60 fixed tokens a minute. It rewards the viewer who takes a minute to learn the room-topic shorthand and leans on Spy or Group for cheaper time. Come for the honesty of fixed pricing, not for a modern experience, and MFC delivers exactly what it says, no more, no less.',
    tokenPriceSmall: 0.10,   // 200 tk = 19.99$ (0.10)
    tokenPriceLarge: 0.079,  // 7575 tk = 599.99$ (0.0792)
    privateLowTokens: 60,    // FIXE plateforme (pas de fourchette)
    privateHighTokens: 60,
    spyLowTokens: 20,        // FIXE plateforme
    spyHighTokens: 20,
    billingClarity: 7,       // multi-processeur, jamais 'MyFreeCams'
    pricingCheckedAt: '2026-09',
    pros: [
      'Only major with fully fixed show rates, no per-room price surprises',
      'Fair payout: ~50% to 63% to the model, above the token standard',
      'First token purchase = Premium for life, no monthly fee',
      'One-time charges only, no recurring billing',
      'Easiest site to budget: same rates in every room',
    ],
    cons: [
      'Private is expensive: 60 tk/min fixed = ~$6/min on the entry pack',
      '200-token entry pack lasts just 3 min 20s in Private',
      'Dated 2002 interface; prices hidden in the room topic',
      'Women-only by design; no crypto payment option',
      'The "$3/min" you\'ll see quoted is the model\'s cut, not your bill',
    ],
    persona: 'For viewers who want fixed, predictable pricing over a modern interface. Lean on Spy/Group.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free to watch / Tokens from $19.99',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: false,
    hasApp: false,
  },
  {
    slug: 'cam4',
    name: 'Cam4',
    url: 'https://cam4.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 7.0,
    scores: { content: 7, experience: 7, value: 6, privacy: 8, features: 7 },
    summary: 'The amateur freemium option with the best payout for models ($0.10/token, up to ~79% of your spend), but the priciest tokens for viewers. Watch two traps: tokens expire after 6 months, and Gold auto-renews. Quirk: the mid pack beats the big one.',
    reviewContent: '## The real cost\n\nCam4 is the amateur freemium option, real people broadcasting from home, not studio productions, free public rooms with full nudity and no signup to watch. It\'s been running since 2007, it\'s French-owned, and it feels more like a community than a storefront. If you just want to browse, it costs nothing and asks nothing.\n\nWhen you do spend, here\'s the honest headline: **Cam4\'s tokens are the most expensive on this list.** A verified September 2026 checkout put the entry pack at 50 tokens for $9.95, about **$0.20 a token**, with the rate improving only to roughly **$0.13–$0.15** on bigger packs. For context, Chaturbate and Stripchat tokens run $0.08–$0.11. So minute-for-minute, Cam4 costs the viewer more.\n\nAnd a genuinely useful quirk the affiliate guides miss: **the biggest pack is not the best deal.** On that same checkout, the 150-token pack ($18.99, ~$0.127/token) beat the 300, 550 and 1,050 packs, which all sat around $0.15. The usual "buy bigger to save" rule is simply false here, the mid pack is the sweet spot. Buy accordingly.\n\nPrivate shows are set by the model from a fixed menu (6 to 120 tokens a minute, default 24), and Cam4 says the commonly chosen band is **12–18 tk/min**. Convert that at the mid-pack price and a typical private is about **$1.50–$2.30 a minute**, up to $4.50+ for higher rates, competitive per-minute, though the pricier tokens eat into that. **Cam2Cam is included** in the private rate rather than billed as an extra (a real plus versus LiveJasmin\'s stacking surcharges), though a model can ask for a tip to turn it on. There\'s a real **spy mode** too, watch someone else\'s private silently, priced by the model somewhere in the 3–60 tk/min range, not the flat 15 you\'ll see quoted. And group ticket shows start cheap, around 10 tokens to buy in.\n\n## Where your money actually goes\n\nNow the flip side of those pricey tokens, and it\'s the best news for performers on this whole list: **Cam4 pays models $0.10 a token**, double the $0.05 flat rate that Chaturbate, Stripchat and MyFreeCams pay. That\'s confirmed in Cam4\'s own broadcaster docs (100 tokens = $10 to the model).\n\nBecause you pay $0.13–$0.20 a token and the model keeps $0.10, the performer\'s share works out to roughly **50% on the small pack and up to ~79% on the mid pack**, genuinely high. I\'ll stop short of crowning it "the best-paying site in the industry," because that claim needs an apples-to-apples comparison nobody has cleanly done, and studio cuts can still apply. But on the numbers we can verify, Cam4 sends more of your money to the performer than anywhere else here. If supporting the person on camera matters to you, that\'s a real point in its favor, and the direct opposite of LiveJasmin, where the model keeps the least.\n\n## Billing and privacy\n\nYour statement reads **Granity Entertainment**, not Cam4, discreet, confirmed on Cam4\'s own billing support. Card and PayPal are official; crypto is reported. Public viewing needs no account or card at all, which makes Cam4 one of the easier sites to sample before spending.\n\nTwo recurring-charge things to watch, and they\'re the real traps here. First, **Cam4 Gold** ($19.99/month, ad-free, spy perks, 100 first-month tokens) **auto-renews by default**; cancel it through the payment processor if you only wanted a month. Second, and unusual for this industry: **unused tokens expire after six months.** Multiple 2026 tests report this, though I couldn\'t find it stated on an official help page, so treat it as well-reported rather than contractually confirmed, and either way, don\'t stockpile a big balance you won\'t spend. The combination is the thing to avoid: paying $19.99 a month for Gold while a token balance quietly expires unused.\n\n## What the guides skip\n\n- **The mid pack beats the big pack.** 150 tokens (~$0.127 each) was cheaper per token than 300/550/1,050 at the verified checkout. "Buy bigger to save" is wrong on Cam4, the 150 is the sweet spot.\n- **Tokens expire in six months.** Rare in this industry and easy to lose money to, especially paired with an auto-renewing Gold sub. Buy what you\'ll actually use.\n- **The pricey token funds a generous payout.** You pay more per token here, but the model keeps $0.10 of it, up to ~79% of your spend, the highest share on this list. Expensive for you, fair to them.\n\n## Who it\'s for\n\nCam4 suits the viewer who likes amateur, community-feel rooms over polished studio performers, wants a real free tier to browse, and doesn\'t mind paying a premium per token, especially if knowing the performer keeps a large share matters to you. The catches are concrete and avoidable: buy the 150-token pack rather than a bigger one, skip or promptly cancel Gold unless you\'ll use it, and don\'t leave tokens sitting past six months. Handle those three and Cam4 is a fair, performer-friendly option. Ignore them and you\'ll pay the market\'s priciest token, lose the leftovers, and rebill for a subscription you forgot.',
    tokenPriceSmall: 0.20,   // 50 tk = 9.95$ (0.199)
    tokenPriceLarge: 0.15,   // gros packs ~0.15 (150 pack meilleur a 0.127)
    privateLowTokens: 12,    // typique 12–18, defaut 24 (6–120)
    privateHighTokens: 36,
    spyLowTokens: 6,         // spy variable 3–60, courant 6–15
    spyHighTokens: 15,
    billingClarity: 8,       // Granity Entertainment, jamais Cam4
    pricingCheckedAt: '2026-09',
    pros: [
      'Best payout for performers: $0.10/token, up to ~79% of your spend',
      'Real free tier, full public nudity, no signup to watch',
      'Cam2Cam included in the private rate (no stacking surcharge)',
      'Genuine spy mode and cheap group tickets (from ~10 tk)',
      'Discreet billing (Granity Entertainment); card, PayPal, crypto',
    ],
    cons: [
      'Priciest tokens on this list (~$0.13–$0.20 each)',
      'Unused tokens expire after 6 months, rare and easy to lose',
      'Cam4 Gold ($19.99/mo) auto-renews by default',
      'The biggest pack isn\'t the best deal, the 150 pack is cheapest per token',
      'Amateur focus means less studio-level production',
    ],
    persona: 'For amateur/community fans who value a fair model cut. Buy the 150 pack, skip Gold, don\'t hoard tokens.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free to watch / Gold $19.99/mo / Tokens from $12.99',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: false,
    hasApp: false,
  },
  {
    slug: 'imlive',
    name: 'ImLive',
    url: 'https://imlive.com',
    category: 'Live Cams',
    // ─── Éditorial : À ÉCRIRE À NEUF (angle transparence). Vide = noindex auto. ───
    overall: 6.5,
    scores: { content: 6, experience: 7, value: 6, privacy: 7, features: 7 },
    summary: 'The veteran (since 2002) with a genuinely unique Multi-Viewer, watch six Hosts at once, the best browsing tool in camming. But small roster, dated interface, credits that cost ~$1.15 (not $1) and expire in just 30 days, and a low/opaque payout for Hosts.',
    reviewContent: '## The real cost\n\nImLive is the veteran, running since 2002, one of the oldest cam sites still standing, and it shows in both good ways and bad. It calls its performers "Hosts," rewards loyalty harder than anyone, and has one genuinely great feature you won\'t find elsewhere. It\'s also small, dated, and priced in a way that\'s quietly more expensive than the marketing suggests.\n\nStart with the credit price, because it\'s where the old guides mislead. You\'ll read "1 credit = $1" everywhere. A verified September 2026 card checkout says otherwise: **25 credits cost $29.95**, about **$1.15–$1.20 a credit**, and it barely drops on bigger packs (the 100 pack is only ~4% cheaper per credit). PayPal costs more still. The one real discount is the **first-purchase bonus of +40%**, which makes your opening buy work out around **$0.85 a credit**, but that\'s one-time. After it, you\'re back to $1.15+. Any site quoting ImLive at "$1/credit" or "$0.85/credit" is either using the old grid or the first-buy bonus as if it lasts.\n\nPrivate shows are set by each Host, from **0.98 to about 5.99 credits a minute** (higher-rated Hosts can go up to ~9.80). Newbies sit at the 0.98 floor. Convert at the real credit price and a typical private runs roughly **$1.15 to $7 a minute**, the low end is genuinely cheap for the industry, the high end is ordinary. **Cam2Cam is included** in the private rate rather than billed on top, which is a real plus. There\'s no true spy mode here, no paying a small rate to watch someone else\'s private. What ImLive has instead are **Candy Shows** (a goal/ticket group show, price set by the Host) for cheaper shared viewing.\n\nThe feature that actually justifies ImLive: **Multi-Viewer / LiveRoom lets you watch six Hosts at once.** For browsing and sampling, it\'s the best tool on any cam site, reviewers who test everything single it out. Just know the free version is public rooms; the "Full Sex" multi-view of private streams runs about **3 credits a minute**, and with six streams that adds up fast.\n\n## Where your money actually goes\n\nThis is the honest gap in ImLive\'s story, and I\'m going to be careful about it rather than repeat a number I can\'t stand behind. Older guides say Hosts keep **30%**; 2026 performer reviews put it lower, around **12–27%**. Neither is a published, official rate I can verify, ImLive doesn\'t post its payout contract publicly. What\'s fair to say: the Host\'s share here is reported as **low, at the bottom end of the industry**, but the exact figure isn\'t confirmed, so treat any single percentage (including "30%") with suspicion.\n\nOne clarification, because it causes confusion: ImLive is marketed through **PussyCash**, an affiliate network advertising commissions up to 55%. That\'s what affiliates who send traffic earn, it is *not* what the Host on camera keeps. Don\'t let a "55%" figure from an affiliate page stand in for performer pay; they\'re different economies entirely.\n\n## Billing and privacy\n\nYour statement shows the payment processor, **CCBill (CCBILLEU.com)** and similar, never "ImLive." Card and PayPal are the standard methods (PayPal priced a little higher in the tested checkout); crypto is claimed by some sources and denied by others, so don\'t count on it. No account or card is needed to browse the free rooms.\n\nNow the trap that sets ImLive apart, and not in a good way: **credits expire 30 days after purchase.** That\'s the most aggressive expiry in this whole roundup, Cam4\'s is six months, most sites don\'t expire at all. Buying a big balance "to save" is actively risky here: unused credits are gone in a month. Combined with the modest per-pack discount, there\'s little reason to over-buy. Purchase what you\'ll spend in the next few weeks and no more. (On chargebacks: ImLive historically absorbed them itself rather than clawing back from Hosts, but I couldn\'t confirm the current policy, so I\'ll leave it there.)\n\n## What the guides skip\n\n- **A credit isn\'t a dollar, it\'s ~$1.15–$1.20.** The "$1/credit" you\'ll read is an old grid; the only sub-dollar rate is the one-time +40% first-buy bonus. Convert at the real price before comparing.\n- **Credits expire in 30 days.** The harshest expiry on this list by far. Don\'t stockpile, buy for the next few weeks only.\n- **Multi-Viewer is the reason to come, but the good version costs.** Six Hosts at once is unmatched for browsing; the private "Full Sex" multi-view is ~3 credits/min, and six streams burn credits quickly.\n\n## Who it\'s for\n\nImLive is for the browser and the regular, not the newcomer chasing variety. If you love the idea of watching six rooms at once to find someone, and you\'re the type to build up loyalty status on one site rather than hop around, its Rewards system genuinely gets cheaper over time and the low-end private rates are fair. If you want a big live roster, a modern interface, crypto payments, or you only spend occasionally, it\'s a poor fit, the roster is small, the design is dated, and those 30-day-expiry credits punish the light user. Come for the Multi-Viewer and the loyalty math, go in knowing a credit costs more than a dollar and won\'t wait a month for you, and ImLive earns its place. Wander in expecting cheap, modern, and flexible, and it\'s none of the three.',
    noTokens: true,
    tokenPriceSmall: 1.15,   // 25 cr = 29.95$ (1.198), ~1.15-1.20/crédit
    tokenPriceLarge: 1.15,   // peu dégressif
    privateLowTokens: 1,     // 0.98–5.99 cr/min (fixé par Host)
    privateHighTokens: 6,
    spyLowTokens: null,      // pas de vrai spy sur ImLive      // pas de vrai spy (Candy Show = goal show)
    spyHighTokens: null,
    billingClarity: 6,       // CCBill, mais crédits expirent en 30j
    pricingCheckedAt: '2026-09',
    pros: [
      'Multi-Viewer: watch six Hosts at once, the best browsing tool in camming',
      'Low entry private rates (from ~0.98 credits/min) and strong loyalty rewards',
      'Cam2Cam included in the private rate',
      'Discreet billing (CCBill); no card needed to browse',
      'First purchase gets +40% bonus credits (~$0.85/credit that once)',
    ],
    cons: [
      'Credits cost ~$1.15–$1.20 each, not the advertised $1',
      'Credits expire just 30 days after purchase, the harshest on this list',
      'Small live roster and a dated interface',
      'Low, unverified Host payout (~12–30% reported); no crypto',
      'The good Multi-Viewer (private streams) costs ~3 credits/min',
    ],
    persona: 'For browsers who love Multi-View and regulars who build loyalty. Not for newcomers, variety-seekers, or light spenders.',
    updatedAt: '2026-09',
    // ─── Faits non-éditoriaux (repris tels quels) ───
    priceRange: 'Free to browse / Privates from $0.98/min',
    hasVR: false,
    hasDownload: false,
    hasCam2Cam: true,
    requiresAccount: true,
    hasApp: false,
  },
];
