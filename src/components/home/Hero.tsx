import Link from 'next/link'

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-slate-50 pt-16 pb-32 lg:pt-32 lg:pb-48">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="mx-auto max-w-4xl font-heading text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                    ToDoCoWorks
                    <span className="block text-indigo-600 mt-2">Online Business Support</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    経営者・個人事業主の皆様が、本来の業務にもっと時間を注げるように。<br className="hidden sm:block" />
                    経理や秘書業務をオンラインでまるごとサポートします。
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/contact"
                        className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        お問い合わせ
                    </Link>
                    <Link href="/works" className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600 transition-colors">
                        実績を見る <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
