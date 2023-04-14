/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/nx/api/session',
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
