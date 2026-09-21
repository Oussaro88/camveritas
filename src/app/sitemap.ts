import { MetadataRoute } from 'next';
import { getAllReviews } from '@/lib/queries';
import { TO_WRITE } from '@/lib/data/reviews';
import { SITE_CONFIG } from '@/lib/config';

// N'inclut QUE des URLs à contenu réel.
// Une review non rédigée (summary === TO_WRITE) est noindex → on ne la met PAS
// au sitemap. Elle y entre automatiquement dès qu'elle est écrite.
// C'est la leçon directe de la désindexation qualité : ne jamais soumettre de page vide.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/best/cam-sites`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guides/how-to-stay-safe-on-cam-sites`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/cam-site-privacy-report`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/how-to-cancel-cam-sites`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/tools/token-calc`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  const writtenReviews: MetadataRoute.Sitemap = getAllReviews()
    .filter((r) => r.summary !== TO_WRITE && r.reviewContent !== TO_WRITE)
    .map((r) => ({
      url: `${base}/review/${r.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...writtenReviews];
}
