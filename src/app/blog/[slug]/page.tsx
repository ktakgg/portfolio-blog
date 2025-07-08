import { getAllPosts, getBlogPost, getRecentPosts, getPostsByCategories, getPopularPosts } from '@/lib/sanity-queries'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

// propsの型を定義
type Props = {
  params: {
    slug: string
  }
}

// Next.jsに、どのスラッグのページを生成すればいいか教える関数
export async function generateStaticParams() {
  const posts = await getAllPosts()

  if (!posts) {
    return []
  }

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// 各ページの本体
export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // サイドバー用のデータを並行して取得
  const [recentPosts, categorizedPosts, popularPosts] = await Promise.all([
    getRecentPosts(3),
    getPostsByCategories(),
    getPopularPosts(3)
  ])

  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* サイドバー */}
          <aside className="lg:w-80 flex-shrink-0 order-2 lg:order-1">
            <div className="sticky top-8 space-y-8">
              {/* 最新記事 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  最新記事
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((recentPost) => (
                    <Link key={recentPost._id} href={`/blog/${recentPost.slug.current}`} className="block group">
                      <div className="flex gap-3">
                        {recentPost.featuredImage && (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={recentPost.featuredImage} 
                              alt={recentPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {recentPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(recentPost.publishedAt).toLocaleDateString('ja-JP')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* カテゴリ別記事 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  カテゴリ別
                </h3>
                <div className="space-y-6">
                  {categorizedPosts.slice(0, 2).map((categoryGroup) => (
                    <div key={categoryGroup.category}>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{categoryGroup.category}</h4>
                      <div className="space-y-3">
                        {categoryGroup.posts.slice(0, 3).map((categoryPost) => (
                          <Link key={categoryPost._id} href={`/blog/${categoryPost.slug.current}`} className="block group">
                            <h5 className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {categoryPost.title}
                            </h5>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(categoryPost.publishedAt).toLocaleDateString('ja-JP')}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 人気記事 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  人気記事
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((popularPost, index) => (
                    <Link key={popularPost._id} href={`/blog/${popularPost.slug.current}`} className="block group">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {popularPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(popularPost.publishedAt).toLocaleDateString('ja-JP')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* メインコンテンツ */}
          <main className="flex-1 order-1 lg:order-2">
            <article>
              {/* ヘッダー情報 */}
              <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
                <div className="text-gray-500 text-sm">
                  <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
              </header>

              {/* 本文 (SanityのPortable Textをレンダリング) */}
              <div className="prose lg:prose-xl max-w-none">
                {/* ★★★ ここを 'post.body' に統一 ★★★ */}
                {post.body ? (
                  <PortableText value={post.body} />
                ) : (
                  <p>この記事には本文がありません。</p>
                )}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
