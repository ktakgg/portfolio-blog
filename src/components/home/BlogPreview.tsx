import Link from 'next/link'

interface BlogPreviewProps {
    posts: any[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
    return (
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                {(posts || []).slice(0, 2).map((post: any, index: number) => {
                    const slug =
                        typeof post.slug === 'string'
                            ? post.slug
                            : post.slug?.current || post.slug
                    const image =
                        post.featuredImage ||
                        post.mainImage ||
                        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80'
                    const excerpt =
                        post.excerpt ||
                        (post.publishedAt
                            ? `Published on ${new Date(post.publishedAt).toLocaleDateString(
                                'en-US',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }
                            )}`
                            : '')

                    return (
                        <Link
                            key={index}
                            href={`/blog/${slug}`}
                            className="flex flex-col gap-3 pb-3 hover:transform hover:scale-105 transition-transform duration-200"
                        >
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                style={{ backgroundImage: `url("${image}")` }}
                            ></div>
                            <div>
                                <p className="text-[#141414] text-base font-medium leading-normal hover:text-blue-600 transition-colors">
                                    {post.title}
                                </p>
                                <p className="text-neutral-500 text-sm font-normal leading-normal">
                                    {excerpt}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="mt-6">
                <div className="flex justify-end px-4">
                    <Link
                        href="/blog"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                        View All Blog →
                    </Link>
                </div>
            </div>
        </div>
    )
}
