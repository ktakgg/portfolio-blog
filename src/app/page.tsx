'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import PainPoints from '@/components/home/PainPoints'
import WorksLink from '@/components/home/WorksLink'
import BlogPreview from '@/components/home/BlogPreview'

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([])

  useEffect(() => {
    // HomeのWorksはサーバーAPI経由で取得（/works と同じソース・最新2件）
    const fetchLatestWorks = async () => {
      try {
        const res = await fetch('/api/latest-works', { cache: 'no-store' })
        if (!res.ok)
          throw new Error(`Failed to fetch latest works: ${res.status}`)
        const items = await res.json()
        setFeaturedPosts(Array.isArray(items) ? items : [])
      } catch (error) {
        console.error('Error fetching latest works via API:', error)
        // /works と同じフォールバックの先頭2件
        const fallbackPosts = [
          {
            id: '1',
            title: 'Streamlining Your Workflow: A Guide to Efficiency',
            slug: 'streamlining-workflow-guide-efficiency',
            excerpt:
              'Learn how to optimize your daily tasks and projects for maximum productivity.',
            featuredImage:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA_H-4gozJlEeyGCivUv2M_kuqww_etwdm4rA5y0u1yk8p01yzZlJs81AbHTZW3Bam4virlG6rlZkCRpd26h0skdWu89ogwtsGHSxGf7mbgpikaeXV70QWOfmKKDg536T4O9Aiu_rlxiSZ8ReDenm84WEDPP2K-ZQKb-3LGjEVCtjVAa9ZyI2J1eh_CJxXZO05RBjQvc_skAMGOH84iHv1PXRJ3r44ykKQ5p1bPDV1iUlgHQ8nj2hOrHw7XIedjIcvMiLKiMTIyGQw',
            publishedAt: '2024-01-15',
          },
          {
            id: '2',
            title: 'The Power of Prioritization: Mastering Time Management',
            slug: 'power-prioritization-mastering-time-management',
            excerpt:
              'Discover effective strategies for prioritizing tasks and managing your time efficiently.',
            featuredImage:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ojr92JMeK68_GLBrjyCwVW_HyhGdt8ZhHEwRZf7s5eBaaXvyRA5HbjA_xZOm2FpGRjk-0Kih-GSycovEIeROhAgUqykh68mA-owg5zmRCJ7uHLoUOh1bsjxUfYvdj0AcIy1KaY8z5dgw659x5jPy7qJ-5Zn9vRf5STxTF0Te48bhKlFOuWLP1noU4X0OTx4W6sh2d2wJBdHwheOyTuUH_pc9uBGgGTD7ClCeNdacSDflkzEHuo8y5lljcX-GPYG3cum5GOCW2bo',
            publishedAt: '2024-01-10',
          },
        ]
        setFeaturedPosts(fallbackPosts)
      }
    }

    fetchLatestWorks()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <PainPoints />
      <WorksLink />
      <BlogPreview posts={featuredPosts} />
    </div>
  )
}
