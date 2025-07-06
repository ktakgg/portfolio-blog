# Sanity CMS セットアップガイド

## 1. Sanityアカウントの作成

1. [Sanity.io](https://www.sanity.io/)にアクセス
2. 「Get started for free」をクリック
3. GitHubまたはGoogleアカウントでサインアップ

## 2. 新しいSanityプロジェクトの作成

### オプション1: Sanity CLIを使用（推奨）

```bash
# Sanity CLIをグローバルインストール
npm install -g @sanity/cli

# Sanityにログイン
sanity login

# 新しいプロジェクトを作成
sanity init

# プロジェクト設定
# - Project name: portfolio-blog-cms
# - Use the default dataset configuration? Yes
# - Project output path: ./sanity-studio
# - Select project template: Blog (schema)
```

### オプション2: Sanity管理画面から作成

1. [Sanity管理画面](https://www.sanity.io/manage)にログイン
2. 「Create new project」をクリック
3. プロジェクト名を入力（例：portfolio-blog-cms）
4. データセット名は「production」のまま

## 3. 環境変数の設定

`.env.local`ファイルを更新：

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
```

### プロジェクトIDの確認方法
1. [Sanity管理画面](https://www.sanity.io/manage)
2. 作成したプロジェクトをクリック
3. 「Settings」→「API」でProject IDを確認

### APIトークンの作成方法
1. Sanity管理画面のプロジェクト設定
2. 「API」→「Tokens」
3. 「Add API token」をクリック
4. 名前を入力（例：portfolio-blog-token）
5. 権限を「Editor」に設定
6. 生成されたトークンをコピー

## 4. Sanityスキーマの設定

### ブログ記事スキーマ (schemas/post.js)

```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Productivity', value: 'productivity'},
          {title: 'Time Management', value: 'time-management'},
          {title: 'Branding', value: 'branding'},
          {title: 'Communication', value: 'communication'},
          {title: 'Leadership', value: 'leadership'},
          {title: 'Workspace', value: 'workspace'}
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: '5 min read'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage'
    }
  }
}
```

### ポートフォリオスキーマ (schemas/portfolio.js)

```javascript
export default {
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Automation', value: 'automation'},
          {title: 'Management', value: 'management'},
          {title: 'CRM', value: 'crm'},
          {title: 'Analytics', value: 'analytics'},
          {title: 'Tool', value: 'tool'},
          {title: 'Project', value: 'project'}
        ]
      }
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    },
    {
      name: 'completedAt',
      title: 'Completed At',
      type: 'date'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage'
    }
  }
}
```

## 5. Sanity Studioの起動

```bash
# Sanityプロジェクトディレクトリに移動
cd sanity-studio

# 開発サーバーを起動
sanity dev
```

Sanity Studioは http://localhost:3333 で起動します。

## 6. データの作成

1. Sanity Studio (http://localhost:3333) にアクセス
2. 「Blog Post」または「Portfolio Project」を選択
3. 新しい記事/プロジェクトを作成
4. 必要な情報を入力して「Publish」

## 7. Next.jsでのデータ取得

現在のサイトでは、`src/lib/sanity.ts`にSanityクライアントが設定済みです。

### ブログ記事の取得例

```typescript
import { client } from '@/lib/sanity'

// 全ブログ記事を取得
export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      tags,
      publishedAt,
      readTime,
      "featuredImage": featuredImage.asset->url
    }
  `)
}

// 特定のブログ記事を取得
export async function getPostBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      category,
      tags,
      publishedAt,
      readTime,
      "featuredImage": featuredImage.asset->url
    }
  `, { slug })
}
```

## 8. 本番環境での設定

### Vercelでのデプロイ時
1. Vercelの環境変数設定で以下を追加：
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

### Sanityの本番設定
1. Sanity管理画面で「API」→「CORS Origins」
2. 本番ドメインを追加（例：https://your-site.vercel.app）

## トラブルシューティング

### よくある問題
1. **プロジェクトIDが見つからない**: Sanity管理画面で確認
2. **APIトークンエラー**: トークンの権限を「Editor」に設定
3. **CORS エラー**: Sanity管理画面でドメインを追加

### サポート
- [Sanity公式ドキュメント](https://www.sanity.io/docs)
- [Sanity + Next.js ガイド](https://www.sanity.io/guides/nextjs)
