import { getAllPosts, getBlogPost } from '@/lib/sanity-queries'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  if (!posts) return []

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-4xl mx-auto px-4 md:px-8">
        <main className="w-full">
          <article>
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
              <div className="text-gray-500 text-sm mb-8">
                <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>

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

            <div className="prose lg:prose-xl max-w-none">
              {post.body ? <PortableText value={post.body} /> : <p>この記事には本文がありません。</p>}
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
