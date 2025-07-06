# Portfolio & Blog Website

仕様書.mdに基づいて作成されたポートフォリオ・ブログサイトです。Next.js 14、TypeScript、Tailwind CSS、Sanity CMSを使用して構築されています。

## 🚀 特徴

- **モダンな技術スタック**: Next.js 14 + TypeScript + Tailwind CSS
- **ヘッドレスCMS**: Sanity CMS統合
- **レスポンシブデザイン**: モバイルファースト対応
- **SEO最適化**: メタタグとOGタグ設定済み
- **高速パフォーマンス**: Next.js App Routerによる最適化

## 📁 プロジェクト構成

```
portfolio-blog/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # ホームページ
│   │   ├── blog/           # ブログページ
│   │   └── portfolio/      # ポートフォリオページ
│   ├── components/         # 再利用可能コンポーネント
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/               # ユーティリティとライブラリ
│   │   ├── sanity.ts      # Sanity設定
│   │   └── sanity-queries.ts # データ取得関数
│   └── styles/            # スタイルファイル
├── SANITY_SETUP.md        # Sanity設定ガイド
└── README.md
```

## 🛠 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定：

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

サイトは http://localhost:3000 で確認できます。

## 📝 Sanity CMS連携

### 初期設定

詳細な設定手順は `SANITY_SETUP.md` を参照してください。

1. **Sanityアカウント作成**: [Sanity.io](https://www.sanity.io/)でアカウント作成
2. **プロジェクト作成**: 新しいSanityプロジェクトを作成
3. **環境変数設定**: プロジェクトIDとAPIトークンを設定
4. **スキーマ設定**: ブログ記事とポートフォリオのスキーマを作成

### データ構造

#### ブログ記事 (post)
- title: タイトル
- slug: URL用スラッグ
- excerpt: 抜粋
- content: 本文（リッチテキスト）
- category: カテゴリ
- tags: タグ配列
- publishedAt: 公開日
- readTime: 読了時間
- featuredImage: アイキャッチ画像

#### ポートフォリオ (portfolio)
- title: プロジェクト名
- slug: URL用スラッグ
- description: 説明
- content: 詳細内容
- technologies: 使用技術配列
- category: カテゴリ
- projectUrl: プロジェクトURL
- githubUrl: GitHubリポジトリURL
- completedAt: 完了日
- featuredImage: プロジェクト画像

### フォールバック機能

Sanityからデータが取得できない場合、各ページは自動的にフォールバックデータを表示します。これにより、CMSの設定前でもサイトが正常に動作します。

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: 青色系（#3B82F6）
- **セカンダリ**: グレー系
- **アクセント**: 各セクションに応じたグラデーション

### コンポーネント
- **Card**: 統一されたカードデザイン
- **Button**: プライマリ・セカンダリボタン
- **Container**: レスポンシブコンテナ

## 📱 レスポンシブ対応

- **モバイル**: 320px〜768px
- **タブレット**: 768px〜1024px
- **デスクトップ**: 1024px以上

## 🚀 デプロイ

### Vercelでのデプロイ

1. GitHubリポジトリにプッシュ
2. Vercelでプロジェクトをインポート
3. 環境変数を設定
4. デプロイ実行

### 環境変数（本番環境）

Vercelの環境変数設定で以下を追加：
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

## 📊 パフォーマンス

- **Core Web Vitals**: 最適化済み
- **画像最適化**: Next.js Image コンポーネント使用
- **コード分割**: 自動的なコード分割
- **キャッシュ戦略**: ISR（Incremental Static Regeneration）対応

## 🔧 カスタマイズ

### 新しいページの追加

1. `src/app/` ディレクトリに新しいフォルダを作成
2. `page.tsx` ファイルを追加
3. ナビゲーションメニューを更新（`src/components/Header.tsx`）

### スタイルの変更

- **Tailwind CSS**: `tailwind.config.js` でカスタマイズ
- **グローバルスタイル**: `src/styles/globals.css`

### Sanityスキーマの追加

1. 新しいスキーマファイルを作成
2. `sanity-queries.ts` にクエリ関数を追加
3. 対応するページコンポーネントを更新

## 🐛 トラブルシューティング

### よくある問題

1. **Sanity接続エラー**: 環境変数の確認
2. **ビルドエラー**: TypeScript型エラーの確認
3. **スタイル適用されない**: Tailwind設定の確認

### サポート

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Sanity ドキュメント](https://www.sanity.io/docs)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

1. フォークしてください
2. フィーチャーブランチを作成してください (`git checkout -b feature/AmazingFeature`)
3. 変更をコミットしてください (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュしてください (`git push origin feature/AmazingFeature`)
5. プルリクエストを開いてください

---

**開発者**: Efficiency Boost Team  
**バージョン**: 1.0.0  
**最終更新**: 2024年1月
