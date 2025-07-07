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
    <div className="bg-white py-20">
      <div className="container-custom max-w-3xl mx-auto">
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
      </div>
    </div>
  )
}