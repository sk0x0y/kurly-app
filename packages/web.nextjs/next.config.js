/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['product-image.kurly.com', 'collection-image.kurly.com', 'img-cf.kurly.com', '3p-image.kurly.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/nx/api/session',
        destination: 'https://www.kurly.com/nx/api/session',
      },
      {
        source: '/api/:path*',
        destination: 'https://api.kurly.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
