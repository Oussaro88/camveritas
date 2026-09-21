// ═══════════════════════════════════════════════
// /go/[site] — Route Handler (HTTP redirect)
// NextResponse.redirect() requires ABSOLUTE URLs only.
// Relative URLs cause silent errors → tab closes.
// ═══════════════════════════════════════════════

import { NextRequest, NextResponse } from 'next/server';
import { getAffiliateLink, getCategorySmartLink } from '@/lib/data/affiliateLinks';
import { getReviewData } from '@/lib/queries';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ site: string }> }
) {
  const { site } = await params;
  const origin = request.nextUrl.origin; // e.g. https://camveritas.com

  // 1. Specific affiliate link (always absolute)
  const affiliate = getAffiliateLink(site);
  if (affiliate) {
    return NextResponse.redirect(affiliate.url, { status: 307 });
  }

  // 4. Category SmartLink fallback (always absolute)
  const review = getReviewData(site);
  if (review) {
    const smartLink = getCategorySmartLink(review.category);
    if (smartLink) {
      return NextResponse.redirect(smartLink, { status: 307 });
    }
    // 5. No affiliate — go to site's actual URL (always absolute)
    return NextResponse.redirect(review.url, { status: 307 });
  }

  // 6. Fallback — must use absolute URL
  return NextResponse.redirect(`${origin}/review/${site}`, { status: 307 });
}
