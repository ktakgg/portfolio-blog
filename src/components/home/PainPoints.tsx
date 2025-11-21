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
        <div className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
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
                        className="text-base font-semibold leading-7 text-indigo-400"
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
                                className="relative pl-16"
                            >
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-indigo-500/50">
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
                        className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        まずはご相談ください
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
