import Link from 'next/link'
import { getAllPosts, BlogPost } from '@/lib/sanity-queries'

export default async function BlogPage() {
  // Sanityからデータを取得
  let sanityAllPosts: BlogPost[] = []

  try {
    sanityAllPosts = await getAllPosts()
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error)
  }


  // フォールバックデータ（Sanityにデータがない、または接続に失敗した場合）
  const fallbackPosts: BlogPost[] = [
    {
      _id: '1',
      title: 'Streamlining Your Workflow: A Guide to Efficiency',
      slug: { current: 'streamlining-workflow-guide-efficiency' },
      excerpt: 'Learn how to optimize your daily tasks and projects for maximum productivity.',
      publishedAt: '2024-01-15',
      category: 'Productivity',
      tags: ['Tools', 'Freelancing', 'Efficiency'],
      readTime: '5 min read',
    },
    {
      _id: '2',
      title: 'The Power of Prioritization: Mastering Time Management',
      slug: { current: 'power-prioritization-mastering-time-management' },
      excerpt: 'Discover effective strategies for prioritizing tasks and managing your time efficiently.',
      publishedAt: '2024-01-10',
      category: 'Time Management',
      tags: ['Productivity', 'Time Management', 'Focus'],
      readTime: '7 min read',
    },
    {
      _id: '3',
      title: 'Automating for Success: Tools and Techniques',
      slug: { current: 'automating-success-tools-techniques' },
      excerpt: 'Explore automation tools and techniques that can save you time and reduce manual effort.',
      publishedAt: '2024-01-05',
      category: 'Automation',
      tags: ['Automation', 'Tools', 'Efficiency'],
      readTime: '6 min read',
    },
    {
      _id: '4',
      title: 'Effective Communication Strategies for Teams',
      slug: { current: 'effective-communication-strategies-teams' },
      excerpt: 'Improve team collaboration and communication with these proven strategies.',
      publishedAt: '2023-12-28',
      category: 'Communication',
      tags: ['Team Management', 'Communication', 'Collaboration'],
      readTime: '4 min read',
    },
    {
      _id: '5',
      title: 'The Art of Delegation: Empowering Your Team',
      slug: { current: 'art-delegation-empowering-team' },
      excerpt: 'Learn how to delegate tasks effectively and empower your team members.',
      publishedAt: '2023-12-20',
      category: 'Leadership',
      tags: ['Leadership', 'Delegation', 'Team Management'],
      readTime: '5 min read',
    },
    {
      _id: '6',
      title: 'Optimizing Your Workspace for Productivity',
      slug: { current: 'optimizing-workspace-productivity' },
      excerpt: 'Create a workspace that promotes focus and efficiency with these tips.',
      publishedAt: '2023-12-15',
      category: 'Workspace',
      tags: ['Productivity', 'Workspace', 'Environment'],
      readTime: '3 min read',
    },
  ]

  // 有効なデータがある場合のみSanityのデータを使い、なければフォールバックデータを使う
  const validAllPosts = (sanityAllPosts || []).filter(Boolean)

  const allPosts = validAllPosts.length > 0 ? validAllPosts : fallbackPosts

  // ブログ記事画像のマッピング
  const allPostImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD2_d7UbWp-VUqNkLEcr-9xCfKl1AHkqViJjN0xGsdF9JI1AguVSGj13NKR7C5q3pGHAQPHFAcc1cgu-OqUiu3dqDMjk3Gv7CRttp0lofGTTjh3em5wbJ-9OXGhVfR3sWgcW1_CZ-kpuCU8dIf9ApKhzHv1galiSKDyj3nJ6rSahGOTNJf095_UDdRxIGxyLJVOYNoxUxw7px6iqrz6pY2KxSy_cBO7fjWDiYIrRq5MzOCpbtUzDiBLXwBlmrJ2wVkmcF0MBNDm4Ls',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsLDNiy75tCNu3a5EN2N9YKPiO5RaGgtd2WDIYW8V9LKW5V337CixdsHB1Gt68ZnERQu2ncYiJPNVtwzTyGIWGpKqHDJG1jqipbpnASFd7w9R4nh9DKxf1-MBjghm_9_XJ9WEIiA70UmrwONbKom5DhB9tCCoZ4OUpKOPmT1U4NMgHy-SrVstjnkoFqkgKAcd-aIZxqztzqsXWlC19MTmpUhnWVYodf4lPrtmrR3IMFUmpmQpHFW_nbhBNypo3KCgPpfjZrTCZu-w',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAzamF3qQ8-bLubtWc7p-zzrfSiqOvw_e12hxrMdfROqmDwA1FiM_KnuhzS9j-IQXA1N6BLCKbr7MbvtesWoZ5_IYcRATnchQQnFOB7J6zSDU2zvbEWY5uSx8mcbPzUsOyU3B5eLwrzQSqxrcpxFI_BtSMtBc_-dR9OVovF-SaWSLqP471gifsVD3Xo8SwzUjoWlyKzKAlqNCYMGNJAK2LQAZ1TqFsqUvn-IU7827yav_ejVDInGFlt091ZTdX3GhD4eOeX9PIWHeM',
  ]

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Blog</p>
            </div>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
              ブログページへようこそ。<br />
              業務効率化や生産性向上に関する記事を公開しています。
            </p>

            {/* All Articles */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-4">
              {allPosts.map((post, index) => (
                <div key={post._id} className="relative flex flex-col gap-3 pb-3 group hover:transform hover:scale-105 transition-all duration-300 ease-out">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg group-hover:shadow-lg transition-shadow duration-300"
                    style={{ backgroundImage: `url("${(post as any).featuredImage || allPostImages[index % allPostImages.length]}")` }}
                  ></div>
                  <div>
                    <p className="text-[#141414] text-base font-medium leading-normal group-hover:text-blue-600 transition-colors duration-300">{post.title}</p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">{post.excerpt}</p>
                    <div className="mt-3">
                      <span
                        className="inline-flex items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#ededed] text-[#141414] text-sm font-medium leading-normal group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                      >
                        <span className="truncate">Read More</span>
                      </span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug.current}`} className="absolute inset-0">
                    <span className="sr-only">Read more about {post.title}</span>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
