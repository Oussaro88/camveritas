import { getAllReviews } from '@/lib/queries';
import { TO_WRITE } from '@/lib/data/reviews';
import { SITE_CONFIG } from '@/lib/config';

// Ne soumet aux moteurs QUE des pages réelles et indexables (même logique que le sitemap).
// Les reviews non rédigées (noindex) ne sont jamais poussées.
export async function GET() {
  const base = SITE_CONFIG.url;
  const staticPaths = [
    '', '/best/cam-sites', '/guides', '/guides/how-to-stay-safe-on-cam-sites',
    '/guides/cam-site-privacy-report', '/guides/how-to-cancel-cam-sites',
    '/tools/token-calc', '/about', '/faq',
  ];
  const reviewPaths = getAllReviews()
    .filter((r) => r.summary !== TO_WRITE && r.reviewContent !== TO_WRITE)
    .map((r) => `/review/${r.slug}`);

  const urls = [...staticPaths, ...reviewPaths].map((p) => `${base}${p}`);
  return Response.json({ urls, count: urls.length });
}
