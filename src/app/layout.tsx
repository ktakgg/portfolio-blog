import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Efficiency Boost - Portfolio & Blog',
  description: 'ビジネス効率化のためのポートフォリオとブログサイト',
  keywords: ['効率化', 'ビジネス', 'ポートフォリオ', 'ブログ'],
  authors: [{ name: 'Efficiency Boost' }],
  openGraph: {
    title: 'Efficiency Boost - Portfolio & Blog',
    description: 'ビジネス効率化のためのポートフォリオとブログサイト',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
