/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
  // パフォーマンス最適化
  experimental: {
    optimizeCss: true,
  },
  // スクロール問題対策
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 静的最適化
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
