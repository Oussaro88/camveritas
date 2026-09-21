// ═══════════════════════════════════════════════
// Query: getReview — Assembles review + affiliate + safety + faqs
// ═══════════════════════════════════════════════
import { reviews } from '../data/reviews';
import { getAffiliateLink, getCategorySmartLink } from '../data/affiliateLinks';
import { siteData } from '../data/siteData';
import { faqs } from '../data/faqs';
import type { ReviewData, FullReview } from '../types';

// ─── Cached slug → review Map (O(1) lookup) ───
const reviewMap = new Map(reviews.map(r => [r.slug, r]));

/**
 * Get a complete review by slug.
 * Returns null if not found.
 */
export function getReview(slug: string): FullReview | null {
  const review = reviewMap.get(slug);
  if (!review) return null;

  const affiliate = getAffiliateLink(slug);
  const safety = siteData[slug] ?? null;
  const reviewFaqs = faqs[slug] ?? [];

  // goUrl priority:
  // 1. Specific affiliate link → /go/[slug] (tracked redirect)
  // 2. Category SmartLink fallback → direct CrakRevenue SmartLink
  // 3. No affiliate → '' (falls back to direct site URL in components)
  let goUrl = '';
  if (affiliate) {
    goUrl = `/go/${slug}`;
  } else {
    const smartLink = getCategorySmartLink(review.category);
    if (smartLink) goUrl = smartLink;
  }

  return {
    ...review,
    affiliate,
    safety,
    faqs: reviewFaqs,
    goUrl,
  };
}

/**
 * Get a review by slug (core data only, no assembly).
 */
export function getReviewData(slug: string): ReviewData | undefined {
  return reviewMap.get(slug);
}

/**
 * Get all reviews.
 */
export function getAllReviews(): ReviewData[] {
  return reviews;
}

/**
 * Get all review slugs (for generateStaticParams).
 */
export function getAllSlugs(): string[] {
  return reviews.map(r => r.slug);
}
