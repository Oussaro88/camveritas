import { CURRENT_DATE } from '@/lib/utils/date';

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '64px 16px', color: '#9090B0', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: 39, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ fontSize: 12, color: '#606080', marginBottom: 40 }}>Last updated: {CURRENT_DATE}</p>

      <h2 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 8 }}>What We Collect</h2>
      <p>camVeritas collects minimal data. We use privacy-friendly analytics (no cookies required). We do not collect personally identifiable information unless you voluntarily provide it.</p>

      <h2 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginTop: 32, marginBottom: 8 }}>Cookies</h2>
      <p>We use a single functional cookie to remember your age verification status. This cookie contains no personal information and expires after 30 days.</p>

      <h2 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginTop: 32, marginBottom: 8 }}>Affiliate Links</h2>
      <p>camVeritas contains affiliate links to third-party websites. When you click these links, the destination site may collect data according to their own privacy policy.</p>

      <h2 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginTop: 32, marginBottom: 8 }}>GDPR (EU Visitors)</h2>
      <p>If you are located in the European Union, you have the right to access, rectify, or delete any personal data we hold about you.</p>

      <h2 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginTop: 32, marginBottom: 8 }}>Contact</h2>
      <p>For privacy-related inquiries, contact us at contact@camveritas.com.</p>
    </div>
  );
}