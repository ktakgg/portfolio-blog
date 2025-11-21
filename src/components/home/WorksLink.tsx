import Link from 'next/link'

export default function WorksLink() {
    return (
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Works
            </h2>
            <div className="px-4 py-2">
                <p className="text-[#141414] text-base leading-normal">
                    サポート実績の概要をご紹介しています。詳細は下記よりご覧ください。
                </p>
                <div className="mt-4 flex justify-end">
                    <Link
                        href="/works"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                        View Works →
                    </Link>
                </div>
            </div>
        </div>
    )
}
