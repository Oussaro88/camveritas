// ═══════════════════════════════════════════════
// camVeritas V6 — Types
// ═══════════════════════════════════════════════

// ─── Core Review ───
export interface ReviewData {
  slug: string;
  name: string;
  url: string;
  category: Category;
  overall: number;
  scores: {
    content: number;
    experience: number;
    value: number;
    privacy: number;
    features: number;
  };
  summary: string;
  reviewContent: string;        // Full review text (was "content" in V5)
  pros: string[];
  cons: string[];
  persona: string;
  updatedAt?: string;
  // ─── camVeritas : coûts réels ───
  // FAITS que tu renseignes une fois par plateforme (null tant que non vérifié sur ton compte).
  // Rien n'est un chiffre magique : ce sont des prix relevés, horodatés par pricingCheckedAt.
  noTokens?: boolean;                // true = plateforme sans tokens (ex. Jerkmate/Gold, Streamate USD direct)
  tokenPriceSmall: number | null;    // $ par token dans le PLUS PETIT paquet (pire cas, débutant)
  tokenPriceLarge: number | null;    // $ par token dans le PLUS GROS paquet (meilleur cas)
  // Fourchette RÉALISTE de tokens/min réellement pratiquée (pas le plancher théorique du range officiel).
  // Statut : observé sur la plateforme, pas un chiffre officiel. Le texte de la review donne le range officiel complet.
  privateLowTokens: number | null;   // bas de la fourchette privée réelle, tokens/min
  privateHighTokens: number | null;  // haut de la fourchette privée réelle, tokens/min
  spyLowTokens: number | null;       // bas de la fourchette spy réelle, tokens/min
  spyHighTokens: number | null;      // haut de la fourchette spy réelle, tokens/min
  billingClarity: number | null;     // clarté de facturation notée 0–10 (null = pas encore évalué)
  pricingCheckedAt: string;          // "2026-09" — date de vérif des prix ; "" si jamais vérifié
  // Feature flags
  priceRange: string;           // "Free", "$9.99/mo", "$0.08/token"
  hasVR: boolean;
  hasDownload: boolean;
  hasCam2Cam: boolean;
  requiresAccount: boolean;
  hasApp: boolean;
}

// ─── Site Enriched Data (Blacklight + VT + SW + WHOIS) ───
export interface SiteEnrichedData {
  // Blacklight
  trackers: number;
  cookies: number;
  fingerprinting: boolean;
  sessionRecording: boolean;
  keystrokeCapture: boolean;
  // Billing
  billingDescriptor: string;
  paymentProcessor: string;
  // VirusTotal (Phase 2 — user provides)
  vtScore: string | null;         // "0/70", "2/70"
  vtFlagged: boolean | null;
  vtScanDate: string | null;
  // SimilarWeb (Phase 2 — user provides)
  monthlyVisits: string | null;   // "500M", "50M"
  topCountry: string | null;
  // WHOIS (Phase 2 — user provides)
  domainAge: string | null;       // "2011", "2007"
  // Manual assessment
  adIntrusiveness: number | null; // 0-10
  // AI-generated safety analysis (Phase 3)
  safetyAnalysis: string | null;  // ~150 words
  // Payment methods accepted (user-facing, for purchases/subscriptions)
  paymentMethods: {
    creditCard: boolean;
    crypto: boolean;
    paypal: boolean;
    giftCard: boolean;
  } | null;
}

// ─── Affiliate Links ───
export interface AffiliateLink {
  url: string;
  network: string;
}

export interface VpnLink {
  url: string;
  payout: string;
}

// ─── FAQ ───
export interface FAQ {
  question: string;
  answer: string;
}

// ─── Assembled Review (what getReview() returns) ───
export interface FullReview extends ReviewData {
  affiliate: AffiliateLink | null;
  safety: SiteEnrichedData | null;
  faqs: FAQ[];
  goUrl: string;
}

// ─── Comparison (what getComparison() returns) ───
export interface ComparisonData {
  siteA: FullReview;
  siteB: FullReview;
  winner: string;           // slug of winner (or "tie")
  verdict: string | null;   // AI-generated verdict (Phase 3)
  pairSlug: string;         // "chaturbate-vs-stripchat"
}

// ─── Categories ───
export type Category =
  | 'Free Tubes'
  | 'Premium Studios'
  | 'Creator Platforms'
  | 'Live Cams'
  | 'VR Porn'
  | 'Hentai & Animation'
  | 'Manga & Comics'
  | 'Adult Games'
  | 'AI Porn'
  | 'Dating'
  | 'Aggregators'
  | 'Sex Stories';