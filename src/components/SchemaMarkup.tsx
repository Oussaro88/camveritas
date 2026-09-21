// ═══════════════════════════════════════════════
// camVeritas — Schema Markup Components (consolidated)
// V8.5: Fixed "Missing field author" — all reviews use Organization camVeritas + datePublished
// ═══════════════════════════════════════════════
import type { ReviewData, SiteEnrichedData } from '@/lib/types';

// ─── Product + Review Schema (for review pages) ───
// This generates star ratings in Google SERPs

export function ReviewSchema({
  name, score, author, dateModified, description, url, category, priceRange,
}: {
  name: string;
  score: number;
  author: string;
  dateModified: string;
  description: string;
  url: string;
  category?: string;
  priceRange?: string;
}) {
  const isFree = !priceRange || priceRange === 'Free';
  const merchantOffers = {
    '@type': 'Offer',
    price: isFree ? '0' : parseLowPrice(priceRange!),
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/OnlineOnly',
    description: priceRange || 'Free',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
      },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
    },
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${name} — Adult ${category || 'Website'}`,
    description,
    url,
    category: category || 'Adult Website',
    brand: {
      '@type': 'Brand',
      name,
    },
    offers: merchantOffers,
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: score,
        bestRating: 10,
        worstRating: 0,
      },
      author: {
        '@type': 'Organization',
        name: 'camVeritas',
        url: 'https://camveritas.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'camVeritas',
        url: 'https://camveritas.com',
      },
      datePublished: dateModified,
      dateModified,
      reviewBody: description,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Price Parser Helpers ───

function parseLowPrice(priceRange: string): string {
  const match = priceRange.match(/\$?([\d.]+)/);
  return match ? match[1] : '0';
}

// ─── Website Schema (homepage) ───

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'camVeritas',
    url: 'https://camveritas.com',
    description: 'Independent reviews of adult websites. Every site tested for content, privacy, and value.',
    publisher: {
      '@type': 'Organization',
      name: 'camVeritas',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── FAQ Schema ───

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── SoftwareApp Schema (tools) ───


export function ItemListSchema({ name, items }: {
  name: string;
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Breadcrumb Schema (SERP breadcrumbs) ───

export function BreadcrumbSchema({ items }: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Product Schema (safety pages — AI crawlers / GEO) ───

export function ProductSchema({ review, safety }: { review: ReviewData; safety?: SiteEnrichedData | null }) {
  const isFree = !review.priceRange || review.priceRange === 'Free';
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: review.name,
    description: review.summary,
    category: review.category,
    url: review.url,
    review: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'camVeritas', url: 'https://camveritas.com' },
      datePublished: review.updatedAt || '2026-04-05',
      reviewBody: review.summary,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.overall,
        bestRating: 10,
      },
    },
    offers: {
      '@type': 'Offer',
      price: isFree ? '0' : parseLowPrice(review.priceRange || '0'),
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      description: review.priceRange || 'Free',
      availability: 'https://schema.org/OnlineOnly',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
        },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Comparison Schema (compare pages) ───

