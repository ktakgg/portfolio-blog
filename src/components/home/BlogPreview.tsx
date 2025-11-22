'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface BlogPreviewProps {
    posts: any[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
    return (
        <div className="py-24 sm:py-32 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-heading"
                    >
                        Latest Updates
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-lg leading-8 text-slate-600"
                    >
                        最新の活動や知見を発信しています。
                    </motion.p>
                </div>
                <div className="mx-auto mt-16 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20 lg:overflow-visible lg:pb-0 lg:mx-0 lg:max-w-none scrollbar-hide">
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
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className="min-w-[85vw] sm:min-w-[400px] snap-center lg:min-w-0 flex flex-col items-start justify-between glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                            >
                                <div className="relative w-full">
                                    <div
                                        className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${image}")` }}
                                    ></div>
                                </div>
                                <div className="max-w-xl p-8">
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-600 transition-colors font-heading">
                                            <Link href={`/blog/${slug}`}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                            {excerpt}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                        View All Posts <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
