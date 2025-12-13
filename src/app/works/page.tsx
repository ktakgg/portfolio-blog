import Link from 'next/link'

export default async function WorksPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center pt-24 pb-12">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 固定ページ: サポート実績 */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
                サポート実績
              </h1>
            </div>

            <div className="px-4 space-y-6">
              <p className="text-[#141414] text-base leading-relaxed">
                これまで、オンライン経理・オンライン事務を中心に、多様な業種・規模のお客様を支援してきました。
                経理フローの整備から日次実務の代行、運用の可視化・定着化まで、一貫して「現場で機能する仕組みづくり」を重視しています。
              </p>

              <section className="bg-white rounded-lg border border-[#e5e7eb] p-5 space-y-3">
                <h2 className="text-[#141414] text-lg md:text-xl font-bold leading-tight">主な支援領域</h2>
                <ul className="list-disc pl-5 space-y-2 text-[#141414]">
                  <li>オンライン経理（記帳、月次レポート、請求・支払管理、資金繰りサポート）</li>
                  <li>オンライン事務（スケジュール/メール対応、請求書作成、見積・受発注サポート）</li>
                  <li>業務フロー整備（手順書作成、ツール選定、権限・運用ルール設計）</li>
                  <li>自動化の導入（テンプレート化、集計の自動化、通知・リマインド設計）</li>
                </ul>
              </section>

              <section className="bg-white rounded-lg border border-[#e5e7eb] p-5 space-y-3">
                <h2 className="text-[#141414] text-lg md:text-xl font-bold leading-tight">導入効果の一例</h2>
                <ul className="list-disc pl-5 space-y-2 text-[#141414]">
                  <li>月次締めの早期化（平均2〜5営業日の短縮）</li>
                  <li>請求・入金消込のミス削減と可視化（進捗・滞留の見える化）</li>
                  <li>定型タスクの自動化による対応時間の削減</li>
                  <li>属人化の解消と引き継ぎ工数の圧縮</li>
                </ul>
              </section>

              <section className="bg-white rounded-lg border border-[#e5e7eb] p-5 space-y-3">
                <h2 className="text-[#141414] text-lg md:text-xl font-bold leading-tight">ご相談の流れ</h2>
                <ol className="list-decimal pl-5 space-y-2 text-[#141414]">
                  <li>現状の課題ヒアリング（オンライン）</li>
                  <li>改善案・体制のご提案</li>
                  <li>初期整備（フロー設計・手順化・ツール設定）</li>
                  <li>定常運用（運用改善・自動化の継続）</li>
                </ol>
              </section>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg h-10 px-5 bg-[#535353] text-white text-sm font-bold hover:bg-[#3f3f3f] transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg h-10 px-5 bg-[#ededed] text-[#141414] text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Blogを見る
                </Link>
              </div>

              <p className="text-neutral-500 text-sm leading-normal pt-4">
                具体的な事例の公開は、お客様の機密保持の観点から限定的にしています。概要レベルでのご紹介は可能ですので、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
