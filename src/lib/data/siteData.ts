// ═══════════════════════════════════════════════
// camVeritas — Données techniques mesurées (cam platforms)
// Faits observés : trackers, cookies, billing descriptor, domain age.
// safetyAnalysis reste null tant qu'une analyse n'est pas RÉDIGÉE à neuf.
// ═══════════════════════════════════════════════
import type { SiteEnrichedData } from '../types';

export const siteData: Record<string, SiteEnrichedData> = {
  chaturbate: {
    trackers: 0, cookies: 1, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'Multi Media LLC', paymentProcessor: 'Segpay',
    vtScore: '0/94', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: '2011',
    adIntrusiveness: null, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: true, paypal: false, giftCard: true },
  },
  stripchat: {
    trackers: 0, cookies: 0, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'Stripcash', paymentProcessor: 'Stripcash',
    vtScore: '0/94', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: '2006',
    adIntrusiveness: null, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: true, paypal: false, giftCard: false },
  },
  livejasmin: {
trackers: 2, cookies: 3, fingerprinting: false, sessionRecording: true, keystrokeCapture: true,
billingDescriptor: 'JFRTECH', paymentProcessor: 'Epoch',
vtScore: '0/94', vtFlagged: false, vtScanDate: 'February 2026',
monthlyVisits: null, topCountry: null, domainAge: '2001',
adIntrusiveness: null, safetyAnalysis: null,
paymentMethods: { creditCard: true, crypto: true, paypal: true, giftCard: false },
},
  bongacams: {
trackers: 2, cookies: 0, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
billingDescriptor: 'Proweb LTD', paymentProcessor: 'Segpay',
vtScore: '0/94', vtFlagged: false, vtScanDate: 'February 2026',
monthlyVisits: null, topCountry: null, domainAge: '2012',
adIntrusiveness: null, safetyAnalysis: null,
paymentMethods: { creditCard: true, crypto: true, paypal: false, giftCard: false },
},
  camsoda: {
    trackers: 1, cookies: 1, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'Granity Entertainment', paymentProcessor: 'Segpay',
    vtScore: '0/94', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: '2015',
    adIntrusiveness: null, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: true, paypal: false, giftCard: false },
  },
  jerkmate: {
    trackers: 3, cookies: 1, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'Streamate / echst.net', paymentProcessor: 'Streamate',
    vtScore: '0/93', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: null,
    adIntrusiveness: 2, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: false, paypal: true, giftCard: false },
  },
  myfreecams: {
    trackers: 1, cookies: 0, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'CCBill / MFCBill.com', paymentProcessor: 'CCBill / NetBilling',
    vtScore: '0/93', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: null,
    adIntrusiveness: 1, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: false, paypal: false, giftCard: false },
  },
  cam4: {
    trackers: 1, cookies: 1, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'Granity Entertainment', paymentProcessor: 'Multiple (DialXS, others)',
    vtScore: '0/93', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: null,
    adIntrusiveness: 4, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: false, paypal: true, giftCard: true },
  },
  imlive: {
    trackers: 0, cookies: 7, fingerprinting: false, sessionRecording: false, keystrokeCapture: false,
    billingDescriptor: 'Segpay (discreet)', paymentProcessor: 'Segpay',
    vtScore: '0/93', vtFlagged: false, vtScanDate: 'February 2026',
    monthlyVisits: null, topCountry: null, domainAge: null,
    adIntrusiveness: 2, safetyAnalysis: null,
    paymentMethods: { creditCard: true, crypto: false, paypal: false, giftCard: false },
  },
};
