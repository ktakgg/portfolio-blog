'use client'

import { Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
    return (
        <div className="py-24 bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-base font-semibold leading-7 text-indigo-600"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-heading"
                    >
                        コア業務に集中できる環境を、
                        <br className="hidden sm:block" />
                        オンラインで。
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-slate-600"
                    >
                        煩雑になりがちな経理や秘書業務をオンラインでまるごとサポートします。必要な時に、必要な分だけ。貴社のビジネスを黒子として支えるパートナーです。
                    </motion.p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        {/* Service 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50">
                                <Clock className="h-8 w-8 text-indigo-600" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className="text-xl font-bold leading-7 text-slate-900 font-heading">
                                    オンライン経理サポート
                                </h3>
                                <p className="mt-4 flex-auto text-base leading-7 text-slate-600">
                                    記帳代行から月次レポート作成まで、正確かつスピーディーに対応。面倒な経理業務から解放します。
                                </p>
                            </div>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-teal-50">
                                <Users className="h-8 w-8 text-teal-600" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className="text-xl font-bold leading-7 text-slate-900 font-heading">
                                    オンライン事務サポート
                                </h3>
                                <p className="mt-4 flex-auto text-base leading-7 text-slate-600">
                                    スケジュール調整、請求書作成、連絡代行など、日々の細かなタスクを巻き取り、あなたの業務を円滑に進めます。
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
