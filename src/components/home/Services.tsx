'use client'

import { motion } from 'framer-motion'
import Accordion from '@/components/ui/Accordion'

const services = [
    {
        title: "オンライン経理サポート",
        content: (
            <div className="space-y-4">
                <p>
                    日々の記帳代行から、請求書発行、経費精算、決算サポートまで、経理業務をトータルでサポートします。
                    クラウド会計ソフト（freee, MoneyForward等）の導入・運用支援も行い、リアルタイムな経営数値の可視化を実現します。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 pl-2">
                    <li>記帳代行・仕訳入力</li>
                    <li>請求書発行・入金管理</li>
                    <li>振込代行・支払管理</li>
                    <li>月次決算・レポート作成</li>
                </ul>
            </div>
        )
    },
    {
        title: "オンライン事務サポート",
        content: (
            <div className="space-y-4">
                <p>
                    スケジュール調整、メール対応、資料作成、リサーチ業務など、多岐にわたる事務作業を代行します。
                    あなたの「右腕」として、スムーズな事業運営をバックアップします。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 pl-2">
                    <li>スケジュール管理・アポイント調整</li>
                    <li>メール対応・一次返信</li>
                    <li>資料作成（プレゼン資料、議事録等）</li>
                    <li>各種リサーチ・データ入力</li>
                </ul>
            </div>
        )
    },
    {
        title: "業務改善・DXコンサルティング",
        content: (
            <div className="space-y-4">
                <p>
                    現状の業務フローを分析し、無駄を省いた効率的な仕組みを構築します。
                    Notion, Slack, ChatworkなどのITツールを活用した業務効率化をご提案します。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 pl-2">
                    <li>業務フローの可視化・改善提案</li>
                    <li>ITツール導入・定着支援</li>
                    <li>マニュアル作成・運用ルール策定</li>
                </ul>
            </div>
        )
    }
]

export default function Services() {
    return (
        <div id="services" className="py-32 relative bg-slate-50">
            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                        Services
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        あなたのビジネスを加速させる、<br className="hidden md:block" />
                        プロフェッショナルなオンラインサポート。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion items={services} />
                </motion.div>
            </div>
        </div>
    )
}
