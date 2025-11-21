import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WorksLink() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        実績をご覧ください
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                        これまでのサポート実績の概要をご紹介しています。
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/works"
                            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 flex items-center gap-2"
                        >
                            View Works <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Decorative gradients */}
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="gradient">
                                <stop stopColor="#6366f1" />
                                <stop offset="1" stopColor="#14b8a6" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
