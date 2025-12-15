'use client'

import { motion } from 'framer-motion'
import Accordion from '@/components/ui/Accordion'

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
                        <svg className="h-8 w-auto text-[#4A154B] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.52 2.52 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.52 2.52 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zm8.833-2.52a2.528 2.528 0 0 1 2.521-2.521 2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521h-2.521v-2.521zm-1.26-6.32a2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V0A2.528 2.528 0 0 1 11.366 0a2.528 2.528 0 0 1 2.521 2.521v6.313zM6.313 6.325a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521 2.528 2.528 0 0 1 2.521 2.521v2.521H6.313zm2.521 2.52a2.528 2.528 0 0 1 2.521 2.523 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 11.367a2.527 2.527 0 0 1 2.522-2.521h6.312zm6.313 1.253a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521v-2.521h-2.521a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.52h2.521z" />
                        </svg>

                        {/* Chatwork */}
                        <svg className="h-8 w-auto text-[#ED1C24] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.728 17.042c-1.026 1.134-2.316 1.833-3.868 2.016a5.05 5.05 0 01-1.036.071c-.04 0-.08 0-.12-.001-.019 0-.038 0-.057-.001a5.418 5.418 0 01-3.693-1.46c-1.393-1.12-2.383-2.617-2.97-4.305C3.39 10.741 3.518 7.39 5.864 5.011c.961-.99 2.21-1.603 3.593-1.84a5.054 5.054 0 011.036-.071c.04 0 .08 0 .12.001.019 0 .038 0 .057.001a5.418 5.418 0 013.693 1.46c1.393 1.12 2.383 2.617 2.97 4.305.698 2.33-.292 5.681-2.639 8.061zM11.996 6.002a2.003 2.003 0 00-2.003 2.003c0 1.107.896 2.003 2.003 2.003s2.003-.896 2.003-2.003a2.003 2.003 0 00-2.003-2.003zm0 7.994a2.003 2.003 0 00-2.003 2.003c0 1.107.896 2.003 2.003 2.003s2.003-.896 2.003-2.003a2.003 2.003 0 00-2.003-2.003z" />
                        </svg>

                        {/* Trello */}
                        <svg className="h-8 w-auto text-[#0079BF] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.03 3.56H4.97A1.44 1.44 0 0 0 3.53 5v14.03c0 .8.64 1.34 1.44 1.34h14.06c.8 0 1.44-.54 1.44-1.34V5a1.44 1.44 0 0 0-1.44-1.44zm-8.66 12.06H6.66V6.25h3.71v9.37zm7.41-3.6H14.1V6.25h3.68v5.77z" />
                        </svg>

                        {/* Zoom */}
                        <svg className="h-8 w-auto text-[#2D8CFF] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.99 10.15v3.7c0 .55.45 1 1 1h5.5c.55 0 1-.45 1-1v-3.7c0-.55-.45-1-1-1h-5.5c-.55 0-1 .45-1 1zm-2.5-4h-9c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2z" />
                        </svg>

                        {/* Google Meet */}
                        <svg className="h-8 w-auto text-[#00897B] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5l-4-4h8v3.5l3.5-3.5v9l-3.5-3.5V16h-8l4-1.5z" />
                        </svg>

                        {/* Discord */}
                        <svg className="h-7 w-auto text-[#5865F2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.2 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.85 2.12-1.89 2.12z" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
