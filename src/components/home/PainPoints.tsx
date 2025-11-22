'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const points = [
    "経理業務に追われて、本業に集中できない",
    "事務作業が苦手で、ミスが起きてしまう",
    "人を雇う余裕はないが、手助けが欲しい",
    "業務フローが整っておらず、非効率だと感じる",
    "オンラインでのやり取りに不安がある"
]

export default function PainPoints() {
    return (
        <div className="relative py-24 sm:py-32 overflow-hidden bg-white">
            {/* Background Accents */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12" />
            </div>

            <div className="relative z-10 container px-6 md:px-12 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                            こんな<span className="text-slate-500">お悩み</span>は<br />
                            ありませんか？
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            一人で抱え込んでいませんか？<br />
                            その業務、プロに任せてみませんか。<br />
                            私たちは、あなたのビジネスの「余白」を作ります。
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-all duration-300"
                        >
                            無料相談はこちら
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-slate-900" />
                                </div>
                                <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
