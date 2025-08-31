import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDoCoWorks - 業務効率化のためのオンラインサポート',
  description: '業務効率化のためのオンラインサポート',
  keywords: ['オンライン業務', '業務サポート', 'オンライン経理', 'オンライン秘書'],
  authors: [{ name: 'Efficiency Boost' }],
  openGraph: {
    title: 'ToDoCoWorks - 業務効率化のためのオンラインサポート',
    description: '業務効率化のためのオンラインサポート',
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
