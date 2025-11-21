'use client'

import { Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Accordion from '@/components/ui/Accordion'

const services = [
    {
        title: "オンライン経理サポート",
        content: (
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                    <Clock className="w-6 h-6" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Accounting Support</span>
                </div>
                <p>
                    記帳代行から月次レポート作成まで、正確かつスピーディーに対応。
                    面倒な経理業務から解放され、経営判断に必要な数字をタイムリーに把握できます。
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-500 mt-2">
                    <li>記帳代行・仕訳入力</li>
                    <li>請求書発行・管理</li>
                    <li>経費精算・振込代行</li>
                    <li>月次決算レポート作成</li>
                </ul>
            </div>
        )
    },
    {
        title: "オンライン事務サポート",
        content: (
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-teal-400 mb-2">
                    <Users className="w-6 h-6" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Admin Support</span>
                </div>
                <p>
                    スケジュール調整、請求書作成、連絡代行など、日々の細かなタスクを巻き取り、
                    あなたの業務を円滑に進めます。まるで隣に優秀な秘書がいるような感覚で。
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-500 mt-2">
                    <li>スケジュール管理・調整</li>
                    <li>メール対応・一次返信</li>
                    <li>資料作成・リサーチ</li>
                    <li>SNS運用代行</li>
                </ul>
            </div>
        )
    }
]

export default function Services() {
    return (
        <div className="py-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold tracking-widest text-indigo-400 uppercase"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading"
                    >
                        コア業務に集中できる環境を
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-slate-400"
                    >
                        煩雑になりがちな経理や秘書業務をオンラインでまるごとサポート。
                        <br />
                        必要な時に、必要な分だけ。貴社のビジネスを黒子として支えるパートナーです。
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Accordion items={services} />
                </motion.div>
            </div>
        </div>
    )
}
