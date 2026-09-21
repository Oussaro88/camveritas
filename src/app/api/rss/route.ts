import { getAllReviews } from '@/lib/queries';
import { TO_WRITE } from '@/lib/data/reviews';
import { SITE_CONFIG } from '@/lib/config';

export async function GET() {
  const items = getAllReviews()
    .filter((r) => r.summary !== TO_WRITE)
    .map((r) => `<item><title>${r.name} review</title><link>${SITE_CONFIG.url}/review/${r.slug}</link></item>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Camveritas</title><link>${SITE_CONFIG.url}</link><description>${SITE_CONFIG.description}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
