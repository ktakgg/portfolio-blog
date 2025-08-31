/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
  // スクロール問題対策
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 静的最適化
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/works', destination: '/blog', permanent: true },
      { source: '/works/:slug', destination: '/blog/:slug', permanent: true },
    ]
  },
}

module.exports = nextConfig
