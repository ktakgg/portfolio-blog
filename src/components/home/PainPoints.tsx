import Link from 'next/link'

export default function PainPoints() {
    return (
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                こんなお悩みありませんか？
            </h2>
            <div className="px-4 py-5">
                <ul className="space-y-4 text-neutral-500">
                    <li className="flex items-start">
                        <svg
                            className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>請求書作成や経費精算に追われて、本業の時間が足りない…</span>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>人を雇うほどの業務量ではないが、誰かにサポートしてほしい…</span>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>日々のスケジュール管理やメール対応が煩わしい…</span>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>信頼して任せられる経理・秘書担当を探している…</span>
                    </li>
                </ul>
                <p className="mt-6 text-center text-[22px] font-bold text-[#141414]">
                    そのお悩み、すべて解決します。
                </p>
                <div className="flex flex-col items-center gap-4 mt-4">
                    <p className="text-[#141414] text-base font-normal leading-normal">
                        まずはご相談ください。
                    </p>
                    <Link
                        href="/contact"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#535353] text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                        <span className="truncate">お問い合わせ</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
