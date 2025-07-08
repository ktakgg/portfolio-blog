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
      <body className={inter.className} style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
        <div className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
