import { getAllReviews } from '@/lib/queries';
import { TO_WRITE } from '@/lib/data/reviews';
import { SITE_CONFIG } from '@/lib/config';

// llms.txt généré dynamiquement.
// Principe : ne lister QUE des pages réelles et indexables.
// Une review non rédigée (summary === TO_WRITE) est noindex → elle n'apparaît PAS ici,
// exactement comme dans le sitemap. Elle s'ajoute automatiquement une fois écrite.
// Aucun score ni verdict n'est inventé : la section Key Data reste factuelle tant que
// les reviews ne sont pas rédigées.

export const dynamic = 'force-static';

export async function GET() {
  const base = SITE_CONFIG.url;
  const all = getAllReviews();
  const written = all.filter((r) => r.summary !== TO_WRITE && r.reviewContent !== TO_WRITE);

  const platformList = all
    .map((r) => `- ${r.name}, advertised ${r.priceRange || 'varies'}${r.hasCam2Cam ? ', Cam2Cam' : ''}${r.hasVR ? ', VR' : ''}`)
    .join('\n');

  const writtenReviewLinks = written.length
    ? written.map((r) => `- ${base}/review/${r.slug}`).join('\n')
    : '(No individual reviews are published yet. Each will be listed here once written.)';

  const body = `# camVeritas, llms.txt
# ${base}
# Cam-site reviews, transparency angle. Cam platforms only.

## About
camVeritas is an independent review and comparison service for adult cam platforms.
The focus is cost transparency: what a cam site actually costs once token bundles and
private-show rates are accounted for, the descriptor that appears on your bank statement,
and the details that affiliate ranking guides tend to leave out. camVeritas displays no
explicit media and hosts no adult content. Cam platforms only, no tubes, studios, or
creator platforms.

## Methodology
- Reviews are written from first-hand testing and original analysis, one platform at a time.
- The core metric is real cost: dollar-per-minute derived from actual token pricing and
  typical private-show rates, not the advertised headline price.
- Billing transparency: every review records the billing descriptor that shows on statements.
- Affiliate disclosure: some outbound links are affiliate links; this is always disclosed and
  never affects a verdict. When a platform is a poor deal, the review says so, including for
  platforms that pay camVeritas.
- A review is published (and indexed) only when its full analysis is written. Until then, the
  platform page shows confirmed facts and pricing only, and is not indexed.

## Key Data Points (factual)
- ${all.length} cam platforms tracked
- Platforms and advertised pricing:
${platformList}
${written.length ? `- ${written.length} full review(s) published` : '- Full reviews in progress; scored verdicts will appear here as they are written.'}

## Site Structure

### Comparison (pillar)
- ${base}/, home: the ${all.length}-platform comparison
- ${base}/best/cam-sites, full cam-site comparison by real cost

### Reviews (published)
URL pattern: ${base}/review/{slug}
${writtenReviewLinks}

### Guides
- ${base}/guides/how-to-stay-safe-on-cam-sites
- ${base}/guides/cam-site-privacy-report
- ${base}/guides/how-to-cancel-cam-sites

### Tools
- ${base}/tools/token-calc, real cost of cam tokens in dollars

### Other Pages
- ${base}/about
- ${base}/faq
- ${base}/guides, all guides index

## Contact
For data inquiries, corrections, or partnerships: contact@camveritas.com
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
