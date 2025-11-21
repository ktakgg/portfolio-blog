'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PainPoints() {
    const points = [
        '請求書作成や経費精算に追われて、本業の時間が足りない…',
        '人を雇うほどの業務量ではないが、誰かにサポートしてほしい…',
        '日々のスケジュール管理やメール対応が煩わしい…',
        '信頼して任せられる経理・秘書担当を探している…',
    ]

    return (
        <div className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
                <motion.div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold tracking-widest text-indigo-400 uppercase"
                    >
                        Pain Points
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading"
                    >
                        こんなお悩みありませんか？
                    </motion.p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-16 group"
                            >
                                <dt className="text-lg font-medium leading-7 text-slate-300 group-hover:text-white transition-colors">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/30 group-hover:bg-indigo-500/20 group-hover:ring-indigo-500/50 transition-all">
                                        <CheckCircle2
                                            className="h-6 w-6 text-indigo-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {point}
                                </dt>
                            </motion.div>
                        ))}
                    </dl>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 flex flex-col items-center text-center"
                >
                    <p className="text-2xl font-bold text-white mb-8 font-heading">
                        そのお悩み、すべて解決します。
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:scale-105"
                    >
                        まずはご相談ください
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
