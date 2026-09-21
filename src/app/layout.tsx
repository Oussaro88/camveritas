import type { Metadata, Viewport } from 'next';
import './globals.css';
import { WebsiteSchema } from '@/components/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/config';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#16151A',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'camVeritas — The Real Cost of Cam Sites (2026)',
    template: '%s | camVeritas',
  },
  description: SITE_CONFIG.description,
  keywords: ['cam site reviews', 'cam site comparison', 'token cost', 'cam site billing', 'best cam sites 2026'],
  openGraph: {
    title: 'camVeritas — The Real Cost of Cam Sites',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: 'camVeritas',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'camVeritas — The Real Cost of Cam Sites',
    description: SITE_CONFIG.description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: '3RyAmrQUoGh6mo5UXxPC7AVFp0XYq0-ThVkxGs8Xwh0',
  },
  other: {
    // Honest adult classification — declared site-wide, on purpose.
    rating: 'adult',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Honest adult rating — legacy meta forms for crawlers that still read them */}
        <meta name="rating" content="adult" />
        <meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&family=Caveat:wght@600;700&display=swap"
        />
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <WebsiteSchema />
        {children}
      </body>
    </html>
  );
}
