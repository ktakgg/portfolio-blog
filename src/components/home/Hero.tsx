'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2])

    return (
        <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ scale: scaleBg }}
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 2,
                        }}
                    />
                </div>
            </div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 mx-auto max-w-7xl px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
                >
                    <span className="text-sm font-medium text-indigo-300">
                        Next Generation Business Support
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="mx-auto max-w-5xl font-heading text-6xl font-bold tracking-tight text-white sm:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
                >
                    ToDoCoWorks
                    <span className="block text-4xl sm:text-6xl mt-4 text-indigo-400 font-light italic">
                        Online Business Support
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400"
                >
                    経営者・個人事業主の皆様が、本来の業務にもっと時間を注げるように。
                    <br className="hidden sm:block" />
                    経理や秘書業務をオンラインでまるごとサポートします。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-12 flex items-center justify-center gap-x-6"
                >
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-slate-200 hover:scale-105"
                    >
                        お問い合わせ
                        <div className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                    <Link
                        href="/works"
                        className="text-base font-semibold leading-6 text-white hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                    >
                        実績を見る
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
        </div>
    )
}
