// ═══════════════════════════════════════════════
// Camveritas V6.8 — Tier Utility
// Tier 1 = has a full review (200 target)
// Tier 2 = data-only in siteData.ts (800 target)
// ═══════════════════════════════════════════════

import { reviews } from '../data/reviews';
import { siteData } from '../data/siteData';
import type { SiteEnrichedData } from '../types';

// ─── Cached slug sets ───
const tier1Slugs = new Set(reviews.map(r => r.slug));

/**
 * Returns true if the slug has a full review (Tier 1).
 * Tier 2 sites exist only in siteData.ts, never get individual pages.
 */
export function isTier1(slug: string): boolean {
  return tier1Slugs.has(slug);
}

export function getTier(slug: string): 1 | 2 {
  return isTier1(slug) ? 1 : 2;
}

/**
 * Human-readable display name from slug.
 * Tier 1: use review.name (canonical).
 * Tier 2: capitalize slug, replace hyphens with spaces.
 */
export function getDisplayName(slug: string): string {
  const review = reviews.find(r => r.slug === slug);
  if (review) return review.name;
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ─── Privacy Score Tool Data ───

export interface PrivacySiteEntry {
  slug: string;
  name: string;
  tier: 1 | 2;
  category: string | null;
  overallScore: number | null;     // From review (Tier 1 only)
  privacyScore: number | null;     // From review (Tier 1 only)
  trackers: number;
  cookies: number;
  fingerprinting: boolean;
  sessionRecording: boolean;
  keystrokeCapture: boolean;
  vtScore: string | null;
  vtFlagged: boolean | null;
  domainAge: string | null;
  monthlyVisits: string | null;
}

/**
 * Build the full dataset for the Privacy Score tool.
 * Merges siteData (all sites) with review data (Tier 1 only).
 * Sorted: Tier 1 first (alpha), then Tier 2 (alpha).
 */
export function buildPrivacyScoreDataset(): PrivacySiteEntry[] {
  const entries: PrivacySiteEntry[] = Object.entries(siteData).map(([slug, data]: [string, SiteEnrichedData]) => {
    const review = reviews.find(r => r.slug === slug);
    return {
      slug,
      name: review ? review.name : getDisplayName(slug),
      tier: review ? 1 : 2,
      category: review ? review.category : null,
      overallScore: review ? review.overall : null,
      privacyScore: review ? review.scores.privacy : null,
      trackers: data.trackers,
      cookies: data.cookies,
      fingerprinting: data.fingerprinting,
      sessionRecording: data.sessionRecording,
      keystrokeCapture: data.keystrokeCapture,
      vtScore: data.vtScore,
      vtFlagged: data.vtFlagged,
      domainAge: data.domainAge,
      monthlyVisits: data.monthlyVisits,
    };
  });

  // Sort: Tier 1 first, then Tier 2, each group alphabetical
  return entries.sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    return a.name.localeCompare(b.name);
  });
}