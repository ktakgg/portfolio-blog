# Portfolio & Blog Site

ビジネス効率化のためのポートフォリオとブログサイト

## 技術スタック

- **フロントエンド**: Next.js 14 (React + TypeScript)
- **スタイリング**: Tailwind CSS
- **CMS**: Sanity
- **ホスティング**: Vercel
- **分析**: Google Analytics

## 機能

- レスポンシブデザイン（モバイルファースト）
- ポートフォリオ表示
- ブログ機能（Sanity CMS連携）
- SEO最適化
- パフォーマンス最適化

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
```

### 3. Sanity CMSの設定

1. [Sanity.io](https://www.sanity.io/)でアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトIDとデータセット名を`.env.local`に設定
4. 必要に応じてAPIトークンを生成

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## ページ構成

- `/` - ホームページ
- `/portfolio` - ポートフォリオ一覧
- `/blog` - ブログ一覧
- `/services` - サービス紹介（未実装）
- `/contact` - お問い合わせ（未実装）

## デプロイ

### Vercelでのデプロイ

1. [Vercel](https://vercel.com)でアカウントを作成
2. GitHubリポジトリを接続
3. 環境変数を設定
4. デプロイ

## Sanityスキーマ

### ブログ記事 (post)

```javascript
{
  title: string,
  slug: slug,
  excerpt: text,
  content: rich text,
  featuredImage: image,
  category: reference,
  tags: array of strings,
  publishedAt: datetime,
  author: reference
}
```

### ポートフォリオ (portfolio)

```javascript
{
  title: string,
  slug: slug,
  description: text,
  content: rich text,
  featuredImage: image,
  technologies: array of strings,
  projectUrl: url,
  githubUrl: url,
  completedAt: date
}
```

## カスタマイズ

### デザインの変更

- `src/styles/globals.css` - グローバルスタイル
- `tailwind.config.js` - Tailwindの設定
- カラーパレットは`tailwind.config.js`の`primary`色で調整可能

### コンテンツの追加

- ブログ記事: Sanity Studioで管理
- ポートフォリオ項目: Sanity Studioで管理
- 静的ページ: `src/app`ディレクトリに追加

## パフォーマンス最適化

- 静的サイト生成（SSG）
- 画像最適化（next/image）
- 遅延読み込み
- バンドルサイズ最適化

## SEO対応

- メタタグの動的生成
- OGP対応
- サイトマップ自動生成
- 構造化データ（JSON-LD）

## ライセンス

MIT License
