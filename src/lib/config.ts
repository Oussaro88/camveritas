// ═══════════════════════════════════════════════
// camVeritas — Site configuration
// ═══════════════════════════════════════════════

export const SITE_CONFIG = {
  name: 'camVeritas',
  tagline: 'The real cost of cam sites — no affiliate spin.',
  url: 'https://camveritas.com',
  description:
    'Independent cam-site reviews. Real token costs, real billing traps, and what affiliate guides leave out. Cam platforms only, compared honestly.',
};

export const AGE_GATE = {
  cookieName: 'camveritas_age_verified',
  cookieValue: 'true',
  maxAgeDays: 30,
  publicPaths: ['/privacy', '/about', '/_next', '/api', '/favicon.ico'],
};

export const COMPLIANCE_2257 = {
  short:
    'camVeritas is a review and comparison service. It does not host, produce, or distribute any adult content, and displays no explicit media. All platform names and prices refer to third-party services.',
  full: `18 U.S.C. § 2257 Record-Keeping Requirements Compliance Statement

camVeritas (camveritas.com) is an independent review and comparison service for adult cam platforms. camVeritas does not produce, host, store, or distribute any adult content, and does not display explicit images or video.

All platform names, prices, and feature data on this site refer to third-party services operated independently of camVeritas. Where a link to a third-party platform is an affiliate link, this is disclosed.

camVeritas does not maintain 18 U.S.C. § 2257 records as it is neither a primary nor a secondary producer of adult content.

For 2257 compliance records regarding content on any listed platform, please contact that platform directly.`,
};

// camVeritas is cam-only. One category.
export const CATEGORIES = [
  {
    slug: 'cams',
    name: 'Live Cams',
    icon: '\u25C9',
    color: '#6B4E9E',
    description: 'Live cam platforms compared — real token costs, billing, privacy',
  },
] as const;

export const TOOLS = [
  { slug: 'token-calc', name: 'Token Cost Calculator', description: 'What cam tokens actually cost in real dollars', phase: 1 },
] as const;
