import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/sanity-queries'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const posts = await getAllPosts()
    const latest = (posts || []).slice(0, 2).map((p: any) => ({
      id: p._id,
      title: p.title,
      slug: p.slug?.current || '',
      excerpt: p.excerpt || '',
      featuredImage: p.featuredImage,
      publishedAt: p.publishedAt,
    }))

    if (latest.length > 0) {
      return NextResponse.json(latest, { status: 200 })
    }
  } catch (e) {
    console.error('GET /api/latest-works failed:', e)
  }

  // フォールバック（/works と同等の2件を返す）
  const fallback = [
    {
      id: '1',
      title: 'Streamlining Your Workflow: A Guide to Efficiency',
      slug: 'streamlining-workflow-guide-efficiency',
      excerpt: 'Learn how to optimize your daily tasks and projects for maximum productivity.',
      // Works 側の画像テイストに合わせた代表画像
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

  return NextResponse.json(fallback, { status: 200 })
}
