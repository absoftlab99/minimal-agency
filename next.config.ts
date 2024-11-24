import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co'
      },
      {
        hostname: 'i.ibb.co.com'
      }
    ],
  },
};

export default nextConfig;
