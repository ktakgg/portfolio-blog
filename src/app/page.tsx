'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // HomeのWorksはサーバーAPI経由で取得（/works と同じソース・最新2件）
    const fetchLatestWorks = async () => {
      try {
        const res = await fetch('/api/latest-works', { cache: 'no-store' })
        if (!res.ok) throw new Error(`Failed to fetch latest works: ${res.status}`)
        const items = await res.json()
        setFeaturedPosts(Array.isArray(items) ? items : [])
      } catch (error) {
        console.error('Error fetching latest works via API:', error)
        // /works と同じフォールバックの先頭2件
        const fallbackPosts = [
          {
            id: '1',
            title: 'Streamlining Your Workflow: A Guide to Efficiency',
            slug: 'streamlining-workflow-guide-efficiency',
            excerpt:
              'Learn how to optimize your daily tasks and projects for maximum productivity.',
            featuredImage:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA_H-4gozJlEeyGCivUv2M_kuqww_etwdm4rA5y0u1yk8p01yzZlJs81AbHTZW3Bam4virlG6rlZkCRpd26h0skdWu89ogwtsGHSxGf7mbgpikaeXV70QWOfmKKDg536T4O9Aiu_rlxiSZ8ReDenm84WEDPP2K-ZQKb-3LGjEVCtjVAa9ZyI2J1eh_CJxXZO05RBjQvc_skAMGOH84iHv1PXRJ3r44ykKQ5p1bPDV1iUlgHQ8nj2hOrHw7XIedjIcvMiLKiMTIyGQw',
            publishedAt: '2024-01-15',
          },
          {
            id: '2',
            title: 'The Power of Prioritization: Mastering Time Management',
            slug: 'power-prioritization-mastering-time-management',
            excerpt:
              'Discover effective strategies for prioritizing tasks and managing your time efficiently.',
            featuredImage:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ojr92JMeK68_GLBrjyCwVW_HyhGdt8ZhHEwRZf7s5eBaaXvyRA5HbjA_xZOm2FpGRjk-0Kih-GSycovEIeROhAgUqykh68mA-owg5zmRCJ7uHLoUOh1bsjxUfYvdj0AcIy1KaY8z5dgw659x5jPy7qJ-5Zn9vRf5STxTF0Te48bhKlFOuWLP1noU4X0OTx4W6sh2d2wJBdHwheOyTuUH_pc9uBGgGTD7ClCeNdacSDflkzEHuo8y5lljcX-GPYG3cum5GOCW2bo',
            publishedAt: '2024-01-10',
          },
        ]
        setFeaturedPosts(fallbackPosts)
      }
    }

    fetchLatestWorks()

    // スクロールアニメーションの設定（パフォーマンス最適化）
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('opacity-0', 'translate-y-8')
              entry.target.classList.add('opacity-100', 'translate-y-0')
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target)
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
          root: null,
        }
      )

      setTimeout(() => {
        const animateElements = document.querySelectorAll('.animate-on-scroll')
        animateElements.forEach((el) => {
          if (observerRef.current) {
            observerRef.current.observe(el)
          }
        })
      }, 100)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="px-4 md:px-40 flex flex-1 justify-center py-5 overflow-x-hidden">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 min-w-0">
            {/* News Section Removed */}

            {/* Hero Section */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[384px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/home_new.png")'}}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      ToDoCoWorks
                       <span className="block"></span>
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    オンライン経理・業務サポート
                    </h2>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Services</h2>
              <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h2
                  className="text-[#141414] tracking-light text-[22px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  コア業務に集中できる環境を、オンラインで。
                </h2>
                <p className="text-[#141414] text-base font-normal leading-normal max-w-[720px]">
                経営者・個人事業主の皆様が、本来の業務にもっと時間を注げるように。煩雑になりがちな経理や秘書業務をオンラインでまるごとサポートします。必要な時に、必要な分だけ。貴社のビジネスを黒子として支えるパートナーです。
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbdbdb] bg-neutral-50 p-4 flex-col">
                  <div className="flex items-center gap-2">
                    <div className="text-green-600" data-icon="Clock" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#141414] text-[22px] font-bold leading-tight">オンライン経理サポート</h2>
                  </div>
                  <p className="text-neutral-500 text-sm font-normal leading-normal">記帳代行から月次レポート作成まで、正確かつスピーディーに対応。面倒な経理業務から解放します。</p>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbdbdb] bg-neutral-50 p-4 flex-col">
                  <div className="flex items-center gap-2">
                    <div className="text-green-600" data-icon="UsersThree" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#141414] text-[22px] font-bold leading-tight">オンライン事務サポート</h2>
                  </div>
                  <p className="text-neutral-500 text-sm font-normal leading-normal">スケジュール調整、請求書作成、連絡代行など、日々の細かなタスクを巻き取り、あなたの業務を円滑に進めます。</p>
                </div>
              </div>
              </div>
            </div>

            {/* こんなお悩みありませんか？ Section */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">こんなお悩みありませんか？</h2>
              <div className="px-4 py-5">
                <ul className="space-y-4 text-neutral-500">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>請求書作成や経費精算に追われて、本業の時間が足りない…</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>人を雇うほどの業務量ではないが、誰かにサポートしてほしい…</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>日々のスケジュール管理やメール対応が煩わしい…</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>信頼して任せられる経理・秘書担当を探している…</span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-[22px] font-bold text-[#141414]">そのお悩み、すべて解決します。</p>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <p className="text-[#141414] text-base font-normal leading-normal">まずはご相談ください。</p>
                  <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#535353] text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">お問い合わせ</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200"></div>

            {/* Works Section (between Services and Blog) */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Works</h2>
              <div className="px-4 py-2">
                <p className="text-[#141414] text-base leading-normal">
                  サポート実績の概要をご紹介しています。詳細は下記よりご覧ください。
                </p>
                <div className="mt-4 flex">
                  <Link href="/works" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                    View Works →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200"></div>

            {/* Latest Blog Posts (Works) */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Blog</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                {(featuredPosts || []).slice(0, 2).map((post: any, index: number) => {
                  const slug =
                    typeof post.slug === 'string'
                      ? post.slug
                      : post.slug?.current || post.slug
                  const image =
                    post.featuredImage ||
                    post.mainImage ||
                    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80'
                  const excerpt =
                    post.excerpt ||
                    (post.publishedAt
                      ? `Published on ${new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}`
                      : '')

                  return (
                    <Link
                      key={index}
                      href={`/blog/${slug}`}
                      className="flex flex-col gap-3 pb-3 hover:transform hover:scale-105 transition-transform duration-200"
                    >
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        style={{ backgroundImage: `url("${image}")` }}
                      ></div>
                      <div>
                        <p className="text-[#141414] text-base font-medium leading-normal hover:text-blue-600 transition-colors">
                          {post.title}
                        </p>
                        <p className="text-neutral-500 text-sm font-normal leading-normal">
                          {excerpt}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="mt-6">
                <div className="flex justify-center">
                  <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                    View All Blog →
                  </Link>
                </div>
              </div>
            </div>

      </div>
    </div>
  )
}
