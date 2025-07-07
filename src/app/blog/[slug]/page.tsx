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

  // postsが取得できなかったり、空の場合は空の配列を返す
  if (!posts) {
    return []
  }

  return posts.map((post) => ({
    // Next.jsが要求する形式 { slug: '記事のスラッグ' } に変換する
    slug: post.slug.current,
  }))
}

// 各ページの本体
export default async function BlogPostPage({ params }: Props) {
  // URLのslugを使って、Sanityから特定の1記事のデータを取得する
  const post = await getBlogPost(params.slug)

  // 記事が見つからなかった場合は、404ページを表示する
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
            {post.content ? (
              <PortableText value={post.content} />
            ) : (
              <p>この記事には本文がありません。</p>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}