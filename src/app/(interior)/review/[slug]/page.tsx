import Link from 'next/link';
import type { Metadata } from 'next';
import { getReview, getAllSlugs } from '@/lib/queries';
import { ReviewSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/config';
import { TO_WRITE } from '@/lib/data/reviews';
import { renderMarkdown } from '@/lib/utils/markdown';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const review = getReview(slug);
  if (!review) return { title: 'Not Found' };

  const written = review.summary !== TO_WRITE && review.summary.length > 0;
  const title = written
    ? `${review.name} Review — Real Token Cost & Verdict`
    : `${review.name} — Review in progress`;
  const description = written
    ? review.summary
    : `Our independent ${review.name} review is being written. Facts and pricing are shown; the full verdict is coming.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/review/${slug}` },
    // Un review non rédigé ne doit PAS être indexé : pas de contenu réel = pas d'index.
    robots: written ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/review/${slug}`,
      siteName: 'camVeritas',
      type: 'article',
    },
  };
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
      <span style={{ color: 'var(--ink-3)' }}>{label}</span>
      <span style={{ color: 'var(--ink-1)', fontWeight: 600, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);

  if (!review) {
    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px' }}>
        <h1>Platform not found</h1>
        <p style={{ marginTop: 12 }}>
          <Link href="/best/cam-sites" style={{ color: 'var(--accent)' }}>See all cam platforms →</Link>
        </p>
      </main>
    );
  }

  const written = review.summary !== TO_WRITE && review.reviewContent !== TO_WRITE;
  const yesno = (b: boolean) => (b ? 'Yes' : 'No');

  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 96px' }}>
      <BreadcrumbSchema items={[
        { name: 'Home', url: SITE_CONFIG.url },
        { name: 'Cam sites', url: `${SITE_CONFIG.url}/best/cam-sites` },
        { name: review.name, url: `${SITE_CONFIG.url}/review/${slug}` },
      ]} />
      {written && (
        <ReviewSchema
          name={review.name}
          score={review.overall}
          author="camVeritas"
          dateModified={review.updatedAt || '2026'}
          description={review.summary}
          url={`${SITE_CONFIG.url}/review/${slug}`}
          category={review.category}
          priceRange={review.priceRange}
        />
      )}

      <nav style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--ink-3)' }}>Home</Link> ·{' '}
        <Link href="/best/cam-sites" style={{ color: 'var(--ink-3)' }}>Cam sites</Link> ·{' '}
        <span style={{ color: 'var(--ink-1)' }}>{review.name}</span>
      </nav>

      <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 31, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '-0.02em' }}>
        {review.name}
      </h1>

      {!written && (
        <div style={{ margin: '24px 0', padding: '16px 20px', border: '1px solid var(--accent-line)', borderRadius: 10, background: 'var(--accent-wash)' }}>
          <strong style={{ color: 'var(--accent)' }}>Review in progress.</strong>
          <span style={{ color: 'var(--ink-2)' }}> The facts and pricing below are confirmed. The full verdict — real token math, billing traps, what the affiliate guides leave out — is being written and will publish here.</span>
        </div>
      )}

      <section style={{ margin: '32px 0' }}>
        <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: 19, color: 'var(--ink-1)', marginBottom: 8 }}>The facts</h2>
        <FactRow label="Platform" value={review.name} />
        <FactRow label="Type" value={review.category} />
        <FactRow label="Advertised price" value={review.priceRange || '—'} />
        <FactRow label="Cam2Cam" value={yesno(review.hasCam2Cam)} />
        <FactRow label="VR" value={yesno(review.hasVR)} />
        <FactRow label="Account required to watch" value={yesno(review.requiresAccount)} />
      </section>

      {written ? (
        <section
          className="review-body"
          style={{ margin: '32px 0' }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(review.reviewContent) }}
        />
      ) : null}

      <div style={{ marginTop: 40 }}>
        <a
          href={review.goUrl || review.url}
          rel="sponsored nofollow noopener"
          target="_blank"
          style={{ display: 'inline-block', padding: '12px 22px', borderRadius: 8, background: 'var(--accent)', color: '#fff', fontWeight: 600 }}
        >
          Visit {review.name}
        </a>
        <p style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 10 }}>
          This may be an affiliate link. It never changes our verdict — that’s the whole point of camVeritas.
        </p>
      </div>
    </main>
  );
}
