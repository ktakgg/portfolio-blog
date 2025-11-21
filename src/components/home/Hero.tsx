'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.8])

    return (
        <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-slate-100 rounded-full blur-3xl opacity-60 animate-float" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-50 rounded-full blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <motion.div
                style={{ y: yText, opacity: opacityText, scale: scaleText }}
                className="relative z-10 container px-6 md:px-12 text-center"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-slate-900 mb-8">
                    Elevate Your <br />
                    <span className="text-slate-400">Business Flow</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-500"
                >
                    経営者・個人事業主の皆様が、本来の業務にもっと時間を注げるように。<br className="hidden sm:block" />
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
                        className="group relative inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        無料相談はこちら
                        <div className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                    <Link
                        href="#works"
                        className="text-base font-semibold leading-6 text-slate-900 hover:text-slate-600 transition-colors flex items-center gap-2 group"
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
                <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent" />
            </motion.div>
        </div>
    )
}
