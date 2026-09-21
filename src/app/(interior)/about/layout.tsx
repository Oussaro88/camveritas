import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Independent Adult Site Reviews',
  description: 'Who we are, how we rate, and why we exist. Independent, honest reviews of adult websites.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}