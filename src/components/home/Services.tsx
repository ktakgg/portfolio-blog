'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Accordion from '@/components/ui/Accordion'
import { SiSlack, SiTrello, SiZoom, SiGooglemeet, SiDiscord } from 'react-icons/si'



const services = [
    {
        title: "経理・財務実務サポート",
        content: (
            <div className="space-y-4">
                <p>
                    正確な数字で経営の土台を守る。
                    日々の記帳から決算前の準備まで経理の実務を引き受けます。
                    銀行員としての実務経験からこれまでの業務経験に基づいた精度の高い入力と管理を提供します。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 pl-2">
                    <li>クラウド会計ソフト（マネーフォワード、freee等）への入力・仕訳</li>
                    <li>弥生会計、JDL、フリーウェイ等への入力・仕訳</li>
                    <li>請求書作成・発行・入金管理</li>
                    <li>振込データの作成・支払い業務代行</li>
                    <li>税理士との連絡調整　※税務申告そのものは税理士の領域となりますが、そこに至るまでのデータ整理を行います。</li>
                </ul>
            </div>
        )
    },
    {
        title: "バックオフィスの仕組み化",
        content: (
            <div className="space-y-4">
                <p>
                    属人化した業務を整理し、ミスを減らす。
                    「なんとなく」で回っている事務作業を整理整頓します。専任の担当者がいなくても業務が回るよう、マニュアル作成やフロー構築を行います。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 pl-2">
                    <li>経理・事務処理の業務フロー設計</li>
                    <li>業務マニュアルの作成・更新</li>
                    <li>証憑のデジタル管理・保存ルールの策定</li>
                    <li>補助金申請の事務サポート</li>
                </ul>
            </div>
        )
    },
    {
        title: "エグゼクティブ秘書業務",
        content: (
            <div className="space-y-4">
                <p>
                    日々の気掛かりを先回りして整える。
                    マニュアル通りのタスク処理ではなく、状況に応じた柔軟な対応を行います。スケジュール調整やメール対応などの細務を私が引き受けることで、安心して本業に向き合える環境を整えます。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 pl-2">
                    <li>スケジュール調整・アポイント管理</li>
                    <li>メール対応・問い合わせ一次対応（フィルター役）</li>
                    <li>オンラインミーティング同席</li>
                    <li>タスク管理・リマインド</li>
                    <li>リサーチ業務</li>
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
                        <br className="hidden md:block" />
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

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 text-center"
                >
                    <p className="text-sm font-medium text-slate-400 mb-8 tracking-wider uppercase">Supported Tools</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Slack */}
                        <SiSlack className="h-8 w-auto text-[#4A154B]" />

                        {/* Chatwork */}
                        <div className="relative h-8 w-8">
                            <NextImage
                                src="/images/logos/chatwork.png"
                                alt="Chatwork"
                                fill
                                className="object-contain p-[2px]"
                            />
                        </div>

                        {/* Trello */}
                        <SiTrello className="h-8 w-auto text-[#0079BF]" />

                        {/* Zoom */}
                        <SiZoom className="h-8 w-auto text-[#2D8CFF]" />

                        {/* Google Meet */}
                        <SiGooglemeet className="h-8 w-auto text-[#00897B]" />

                        {/* Discord */}
                        <SiDiscord className="h-7 w-auto text-[#5865F2]" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
