import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cam Token Calculator — Compare Real Costs',
  description: 'Calculate what cam site tokens actually cost in real money. Compare Chaturbate, Stripchat, LiveJasmin prices.',
};

export default function TokenCalcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}