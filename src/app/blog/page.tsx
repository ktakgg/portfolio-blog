import Link from 'next/link'
import { getAllPosts, getFeaturedPosts, BlogPost } from '@/lib/sanity-queries'

export default async function BlogPage() {
  // Sanityからデータを取得
  let sanityFeaturedPosts: BlogPost[] = []
  let sanityAllPosts: BlogPost[] = []

  try {
    sanityFeaturedPosts = await getFeaturedPosts()
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
      readTime: '5 min read'
    },
    {
      _id: '2',
      title: 'The Power of Prioritization: Mastering Time Management',
      slug: { current: 'power-prioritization-mastering-time-management' },
      excerpt: 'Discover effective strategies for prioritizing tasks and managing your time efficiently.',
      publishedAt: '2024-01-10',
      category: 'Time Management',
      tags: ['Productivity', 'Time Management', 'Focus'],
      readTime: '7 min read'
    },
    {
      _id: '3',
      title: 'Automating for Success: Tools and Techniques',
      slug: { current: 'automating-success-tools-techniques' },
      excerpt: 'Explore automation tools and techniques that can save you time and reduce manual effort.',
      publishedAt: '2024-01-05',
      category: 'Automation',
      tags: ['Automation', 'Tools', 'Efficiency'],
      readTime: '6 min read'
    },
    {
      _id: '4',
      title: 'Effective Communication Strategies for Teams',
      slug: { current: 'effective-communication-strategies-teams' },
      excerpt: 'Improve team collaboration and communication with these proven strategies.',
      publishedAt: '2023-12-28',
      category: 'Communication',
      tags: ['Team Management', 'Communication', 'Collaboration'],
      readTime: '4 min read'
    },
    {
      _id: '5',
      title: 'The Art of Delegation: Empowering Your Team',
      slug: { current: 'art-delegation-empowering-team' },
      excerpt: 'Learn how to delegate tasks effectively and empower your team members.',
      publishedAt: '2023-12-20',
      category: 'Leadership',
      tags: ['Leadership', 'Delegation', 'Team Management'],
      readTime: '5 min read'
    },
    {
      _id: '6',
      title: 'Optimizing Your Workspace for Productivity',
      slug: { current: 'optimizing-workspace-productivity' },
      excerpt: 'Create a workspace that promotes focus and efficiency with these tips.',
      publishedAt: '2023-12-15',
      category: 'Workspace',
      tags: ['Productivity', 'Workspace', 'Environment'],
      readTime: '3 min read'
    }
  ]

  // 有効なデータがある場合のみSanityのデータを使い、なければフォールバックデータを使う
  const validFeaturedPosts = (sanityFeaturedPosts || []).filter(Boolean);
  const validAllPosts = (sanityAllPosts || []).filter(Boolean);

  const featuredPosts = validFeaturedPosts.length > 0 ? validFeaturedPosts : fallbackPosts.slice(0, 3)
  const allPosts = validAllPosts.length > 0 ? validAllPosts : fallbackPosts.slice(3)

  // ブログ記事画像のマッピング
  const featuredImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_H-4gozJlEeyGCivUv2M_kuqww_etwdm4rA5y0u1yk8p01yzZlJs81AbHTZW3Bam4virlG6rlZkCRpd26h0skdWu89ogwtsGHSxGf7mbgpikaeXV70QWOfmKKDg536T4O9Aiu_rlxiSZ8ReDenm84WEDPP2K-ZQKb-3LGjEVCtjVAa9ZyI2J1eh_CJxXZO05RBjQvc_skAMGOH84iHv1PXRJ3r44ykKQ5p1bPDV1iUlgHQ8nj2hOrHw7XIedjIcvMiLKiMTIyGQw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ojr92JMeK68_GLBrjyCwVW_HyhGdt8ZhHEwRZf7s5eBaaXvyRA5HbjA_xZOm2FpGRjk-0Kih-GSycovEIeROhAgUqykh68mA-owg5zmRCJ7uHLoUOh1bsjxUfYvdj0AcIy1KaY8z5dgw659x5jPy7qJ-5Zn9vRf5STxTF0Te48bhKlFOuWLP1noU4X0OTx4W6sh2d2wJBdHwheOyTuUH_pc9uBGgGTD7ClCeNdacSDflkzEHuo8y5lljcX-GPYG3cum5GOCW2bo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCiZMnD4udaDTALUhwd8apwgXrth2d5X-fFWA7msyRl73QU8kMiiRzo-OlKxkdQuKD4I06CtuaM8_CWj_kpasFc8hWBbA4Nytnryqg095RYIFBWfddZr3UyBVuvEz1ZEDDxjxYmYDIxbeMCEy2QIhxWOlOsDkrtLEF__Wl25S4X4wpavXVFjoNuEn7Yfr14auufhwOAwfafchJYo3OCxhb_Tcvsi4V6grAXER8UGJSU84NFm07DO6gaR1pi5ip91NfOXCRD9T__B2c"
  ]

  const allPostImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD2_d7UbWp-VUqNkLEcr-9xCfKl1AHkqViJjN0xGsdF9JI1AguVSGj13NKR7C5q3pGHAQPHFAcc1cgu-OqUiu3dqDMjk3Gv7CRttp0lofGTTjh3em5wbJ-9OXGhVfR3sWgcW1_CZ-kpuCU8dIf9ApKhzHv1galiSKDyj3nJ6rSahGOTNJf095_UDdRxIGxyLJVOYNoxUxw7px6iqrz6pY2KxSy_cBO7fjWDiYIrRq5MzOCpbtUzDiBLXwBlmrJ2wVkmcF0MBNDm4Ls",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCsLDNiy75tCNu3a5EN2N9YKPiO5RaGgtd2WDIYW8V9LKW5V337CixdsHB1Gt68ZnERQu2ncYiJPNVtwzTyGIWGpKqHDJG1jqipbpnASFd7w9R4nh9DKxf1-MBjghm_9_XJ9WEIiA70UmrwONbKom5DhB9tCCoZ4OUpKOPmT1U4NMgHy-SrVstjnkoFqkgKAcd-aIZxqztzqsXWlC19MTmpUhnWVYodf4lPrtmrR3IMFUmpmQpHFW_nbhBNypo3KCgPpfjZrTCZu-w",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzamF3qQ8-bLubtWc7p-zzrfSiqOvw_e12hxrMdfROqmDwA1FiM_KnuhzS9j-IQXA1N6BLCKbr7MbvtesWoZ5_IYcRATnchQQnFOB7J6zSDU2zvbEWY5uSx8mcbPzUsOyU3B5eLwrzQSqxrcpxFI_BtSMtBc_-dR9OVovF-SaWSLqP471gifsVD3Xo8SwzUjoWlyKzKAlqNCYMGNJAK2LQAZ1TqFsqUvn-IU7827yav_ejVDInGFlt091ZTdX3GhD4eOeX9PIWHeM"
  ]

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col lg:flex-row max-w-[1200px] flex-1 gap-8">
            {/* Main Content */}
            <div className="flex flex-col flex-1 order-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Blog</p>
            </div>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Welcome to my blog, where I share insights and tips on enhancing business efficiency. Explore articles on various topics, from time management to process
              optimization, all aimed at helping you achieve greater productivity and success.
            </p>
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Articles</h2>
            
            {/* Featured Articles */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4">
              {featuredPosts.map((post, index) => (
                <div key={post._id} className="flex flex-col gap-3 pb-3 group hover:transform hover:scale-105 transition-all duration-300 ease-out">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg group-hover:shadow-lg transition-shadow duration-300"
                    style={{backgroundImage: `url("${post.featuredImage || featuredImages[index % featuredImages.length]}")`}}
                  ></div>
                  <div>
                    <p className="text-[#141414] text-base font-medium leading-normal group-hover:text-blue-600 transition-colors duration-300">{post.title}</p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">{post.excerpt}</p>
                    <div className="mt-3">
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="inline-flex items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#ededed] text-[#141414] text-sm font-medium leading-normal hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        <span className="truncate">Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">All Articles</h2>
            
            {/* All Articles */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4">
              {allPosts.map((post, index) => (
                <div key={post._id} className="flex flex-col gap-3 pb-3 group hover:transform hover:scale-105 transition-all duration-300 ease-out">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg group-hover:shadow-lg transition-shadow duration-300"
                    style={{backgroundImage: `url("${post.featuredImage || allPostImages[index % allPostImages.length]}")`}}
                  ></div>
                  <div>
                    <p className="text-[#141414] text-base font-medium leading-normal group-hover:text-blue-600 transition-colors duration-300">{post.title}</p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">{post.excerpt}</p>
                    <div className="mt-3">
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="inline-flex items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#ededed] text-[#141414] text-sm font-medium leading-normal hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        <span className="truncate">Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#141414]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#141414] rounded-full bg-[#ededed]" href="#">1</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full" href="#">2</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full" href="#">3</a>
              <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full">...</span>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full" href="#">10</a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#141414]" data-icon="CaretRight" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0 order-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post, index) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`} className="flex gap-3 group">
                      <div
                        className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
                        style={{backgroundImage: `url("${post.featuredImage || featuredImages[index % featuredImages.length]}")`}}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Productivity', 'Time Management', 'Automation', 'Communication', 'Leadership', 'Workspace'].map((category) => (
                    <Link key={category} href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`} className="flex items-center justify-between text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <span>{category}</span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                        {Math.floor(Math.random() * 5) + 1}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Efficiency', 'Tools', 'Freelancing', 'Focus', 'Team Management', 'Collaboration', 'Environment'].map((tag) => (
                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`} className="inline-block bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs px-3 py-1 rounded-full transition-colors">
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
