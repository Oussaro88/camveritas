import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Bots qui doivent voir le contenu sans age-gate (SEO + previews + IA crawlers).
const BOT_PATTERNS = [
  'googlebot', 'google-inspectiontool', 'bingbot', 'yandexbot', 'duckduckbot',
  'slurp', 'baiduspider', 'applebot', 'sogou', 'yeti', 'seznambot', 'qwant', 'petalbot',
  'apis-google', 'mediapartners-google', 'adsbot-google', 'google-extended',
  'chrome-lighthouse', 'google-safety',
  'gptbot', 'chatgpt-user', 'perplexitybot', 'claudebot', 'anthropic-ai',
  'bytespider', 'cohere-ai', 'meta-externalagent', 'amazonbot',
  'ahrefsbot', 'ahrefs', 'semrushbot', 'mj12bot', 'dotbot',
  'twitterbot', 'facebookexternalhit', 'linkedinbot', 'whatsapp',
  'telegrambot', 'discordbot', 'slackbot',
];

const PUBLIC_PATHS = [
  '/privacy', '/about', '/go',
  '/_next', '/api', '/favicon.ico', '/robots.txt', '/sitemap.xml', '/llms.txt',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Canonique : www → non-www
  if (hostname.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = hostname.replace('www.', '');
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  // Laisser passer les chemins publics
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    const response = NextResponse.next();
    if (pathname.startsWith('/go')) {
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    }
    return response;
  }

  // Fichiers statiques
  if (pathname.includes('.')) return NextResponse.next();

  // Bots sans age-gate
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  if (BOT_PATTERNS.some((bot) => userAgent.includes(bot))) {
    return NextResponse.next();
  }

  // Age-gate désactivé (voir age-verify pour réactiver). Rien d'autre à faire.
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
