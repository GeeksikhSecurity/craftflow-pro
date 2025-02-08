/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization where possible
  reactStrictMode: true,
  swcMinify: true,
  
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    domains: ['craftflow-pro.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable experimental features
  experimental: {
    serverActions: true,
    typedRoutes: true,
  }
};

module.exports = nextConfig;
