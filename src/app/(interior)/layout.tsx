import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipToContent from '@/components/SkipToContent';

export default function InteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipToContent />
      <Header />
      {/* ═══ Emplacement 1 — Header Leaderboard 728×90 ═══ */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 20px 0', background: 'rgba(0,0,0,0.2)' }}>
        
      </div>
      <div id="main-content" className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}