import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/best', destination: '/best/cam-sites', permanent: true },
    ];
  },
};
export default nextConfig;
