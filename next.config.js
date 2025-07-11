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
}

module.exports = nextConfig
