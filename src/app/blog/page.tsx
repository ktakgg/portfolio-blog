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
    // Vercelのビルド時などにここでエラーが起きることが多い（環境変数が原因）
    console.error('Failed to fetch posts from Sanity:', error)
    // エラーが起きても、変数は空の配列[]のままなので、この後フォールバックデータが使われる
  }

  // フォールバックデータ（Sanityにデータがない、または接続に失敗した場合）
  const fallbackPosts: BlogPost[] = [
    {
      _id: '1',
      title: 'Streamlining Your Workflow: Essential Tools for Freelancers',
      slug: { current: 'streamlining-workflow-tools-freelancers' },
      excerpt: 'Discover the top software and apps that can help you manage your projects, clients, and finances more efficiently.',
      publishedAt: '2024-01-15',
      category: 'Productivity',
      tags: ['Tools', 'Freelancing', 'Efficiency'],
      readTime: '5 min read'
    },
    {
      _id: '2',
      title: 'Mastering Time Management: Techniques for Increased Productivity',
      slug: { current: 'mastering-time-management-techniques' },
      excerpt: 'Learn proven strategies to prioritize tasks, eliminate distractions, and make the most of your working hours.',
      publishedAt: '2024-01-10',
      category: 'Time Management',
      tags: ['Productivity', 'Time Management', 'Focus'],
      readTime: '7 min read'
    },
    {
      _id: '3',
      title: 'Building a Strong Online Presence: Tips for Personal Branding',
      slug: { current: 'building-strong-online-presence-personal-branding' },
      excerpt: 'Explore effective ways to showcase your skills, connect with potential clients, and establish yourself as an expert in your field.',
      publishedAt: '2024-01-05',
      category: 'Branding',
      tags: ['Personal Branding', 'Marketing', 'Online Presence'],
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
      slug: { current: 'art-of-delegation-empowering-team' },
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

  // === ▼▼▼ ここからが修正箇所 ▼▼▼ ===

  // 1. Sanityからのデータがnullやundefinedでないか確認し、配列内のnull要素も除去する
  const validFeaturedPosts = (sanityFeaturedPosts || []).filter(Boolean);
  const validAllPosts = (sanityAllPosts || []).filter(Boolean);

  // 2. 有効なデータがある場合のみSanityのデータを使い、なければフォールバックデータを使う
  const featuredPosts = validFeaturedPosts.length > 0 ? validFeaturedPosts : fallbackPosts.slice(0, 3)
  const allPosts = validAllPosts.length > 0 ? validAllPosts : fallbackPosts

  // === ▲▲▲ ここまでが修正箇所 ▲▲▲ ===

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to my blog, where I share insights and tips on enhancing business efficiency. Explore articles on various topics, from time management to process optimization, all aimed at helping you achieve greater productivity and success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post._id} className="card hover:shadow-lg transition-shadow">
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary-700">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{post.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium mr-3">
                      {post.category}
                    </span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Read More →
                    </Link>
                    <div className="flex flex-wrap gap-1">
                      {/* ▼▼▼ 修正箇所: post.tagsがnullでもエラーにならないようにする ▼▼▼ */}
                      {(post.tags || []).slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">All Articles</h2>
          
          <div className="space-y-8">
            {allPosts.map((post) => (
              <article key={post._id} className="card p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Article Image */}
                  <div className="lg:w-64 h-48 lg:h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-primary-700">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium">{post.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium mr-3">
                        {post.category}
                      </span>
                      <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Read More →
                      </Link>
                      <div className="flex flex-wrap gap-1">
                        {/* ▼▼▼ 修正箇所: post.tagsがnullでもエラーにならないようにする ▼▼▼ */}
                        {(post.tags || []).map((tag, index) => (
                          <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
              <button className="px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">2</button>
              <button className="px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">3</button>
              <span className="px-3 py-2 text-gray-500">...</span>
              <button className="px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">10</button>
              <button className="px-3 py-2 text-gray-500 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Tips
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest productivity tips and business insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 focus:outline-none"
            />
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}