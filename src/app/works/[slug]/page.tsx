import { getAllPosts, getBlogPost } from '@/lib/sanity-queries'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

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

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container-custom max-w-4xl mx-auto px-4 md:px-8">
        {/* メインコンテンツ */}
        <main className="w-full">
          <article>
            {/* ヘッダー情報 */}
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
              <div className="text-gray-500 text-sm mb-8">
                <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>

              {/* アイキャッチ画像 */}
              {post.featuredImage && (
                <div className="mb-8">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
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
  )
}
