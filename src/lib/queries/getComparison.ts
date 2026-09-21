import { getAllReviews } from './getReview';
import { siteData } from '../data/siteData';
import { TO_WRITE } from '../data/reviews';

export interface ComparisonRow {
  slug: string;
  name: string;
  written: boolean;
  noTokens: boolean;
  // Prix-token (FAITS saisis)
  tokenSmall: number | null;
  tokenLarge: number | null;
  tokenAvg: number | null;       // DÉRIVÉ
  // Coût-min RÉALISTE, en fourchette $ (DÉRIVÉ : tokens réels × prix-token petit paquet)
  privateLow: number | null;
  privateHigh: number | null;
  spyLow: number | null;
  spyHigh: number | null;
  // pour le tri : on trie sur le bas de fourchette privée
  privateSort: number | null;
  // Autres
  trackers: number | null;
  billingClarity: number | null;
  hasCam2Cam: boolean;
  hasVR: boolean;
  priceRange: string;
  pricingCheckedAt: string;
}

const r2 = (n: number) => Math.round(n * 100) / 100;

// Fusionne faits + calculs. RIEN d'inventé : donnée manquante → null → "—".
// Le coût-min est une FOURCHETTE RÉALISTE (bas–haut des tokens/min réellement pratiqués)
// convertie au prix-token du petit paquet (le pire cas honnête, celui du débutant).
export function getComparisonRows(): ComparisonRow[] {
  return getAllReviews().map((review) => {
    const sd = siteData[review.slug];
    const small = review.tokenPriceSmall;
    const large = review.tokenPriceLarge;
    const avg = small !== null && large !== null ? r2((small + large) / 2) : null;

    const priceAt = (tokens: number | null) =>
      small !== null && tokens !== null ? r2(small * tokens) : null;

    const privateLow = priceAt(review.privateLowTokens);
    const privateHigh = priceAt(review.privateHighTokens);
    const spyLow = priceAt(review.spyLowTokens);
    const spyHigh = priceAt(review.spyHighTokens);

    return {
      slug: review.slug,
      name: review.name,
      written: review.summary !== TO_WRITE && review.reviewContent !== TO_WRITE,
      noTokens: review.noTokens === true,
      tokenSmall: small,
      tokenLarge: large,
      tokenAvg: avg,
      privateLow,
      privateHigh,
      spyLow,
      spyHigh,
      privateSort: privateLow,
      trackers: sd ? sd.trackers : null,
      billingClarity: review.billingClarity,
      hasCam2Cam: review.hasCam2Cam,
      hasVR: review.hasVR,
      priceRange: review.priceRange,
      pricingCheckedAt: review.pricingCheckedAt,
    };
  });
}
