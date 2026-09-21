// ═══════════════════════════════════════════════
// camVeritas — SEO meta (généré depuis les FAITS, zéro verdict importé)
// ═══════════════════════════════════════════════
import type { ReviewData } from '../types';
import { TO_WRITE } from '../data/reviews';

// Titre/description dérivés uniquement des faits (nom, prix affiché).
// Aucun score ni jugement en dur : ceux-ci n'existent qu'une fois la review écrite.
export function reviewMeta(review: ReviewData) {
  const written = review.summary !== TO_WRITE && review.summary.length > 0;
  if (written) {
    return {
      title: `${review.name} Review — Real Cost & Verdict (2026)`,
      description: review.summary.slice(0, 155),
    };
  }
  return {
    title: `${review.name} — Cost, Facts & Review`,
    description: `${review.name}: advertised pricing (${review.priceRange || 'varies'}), features, and an independent camVeritas review in progress.`,
  };
}

export function bestOfMeta(categoryName: string, count: number) {
  return {
    title: `Best ${categoryName} 2026 — Compared by Real Cost`,
    description: `${count} ${categoryName.toLowerCase()} compared by real token cost, billing, and privacy. Affiliate links disclosed, verdicts unbought.`,
  };
}
