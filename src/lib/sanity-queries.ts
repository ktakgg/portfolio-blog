import { client } from './sanity'

// ブログ記事の型定義
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content?: any[]
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  featuredImage?: string
}

// ポートフォリオプロジェクトの型定義
export interface PortfolioProject {
  _id: string
  title: string
  slug: { current: string }
  description: string
  content?: any[]
  technologies: string[]
  category: string
  projectUrl?: string
  githubUrl?: string
  completedAt?: string
  featuredImage?: string
}

// 全ブログ記事を取得
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
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
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// 注目記事を取得（最新3件）
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...3] {
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
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }
}

// 特定のブログ記事を取得
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
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
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

// 全ポートフォリオプロジェクトを取得
export async function getAllPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    return await client.fetch(`
      *[_type == "portfolio"] | order(completedAt desc) {
        _id,
        title,
        slug,
        description,
        technologies,
        category,
        projectUrl,
        githubUrl,
        completedAt,
        "featuredImage": featuredImage.asset->url
      }
    `)
  } catch (error) {
    console.error('Error fetching portfolio projects:', error)
    return []
  }
}

// 特定のポートフォリオプロジェクトを取得
export async function getPortfolioProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  try {
    return await client.fetch(`
      *[_type == "portfolio" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        content,
        technologies,
        category,
        projectUrl,
        githubUrl,
        completedAt,
        "featuredImage": featuredImage.asset->url
      }
    `, { slug })
  } catch (error) {
    console.error('Error fetching portfolio project by slug:', error)
    return null
  }
}

// カテゴリ別ブログ記事を取得
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    return await client.fetch(`
      *[_type == "post" && category == $category] | order(publishedAt desc) {
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
    `, { category })
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

// 最新のブログ記事を取得（ホームページ用）
export async function getLatestPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
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
  } catch (error) {
    console.error('Error fetching latest posts:', error)
    return []
  }
}
// 【▼▼▼ この関数を追記 ▼▼▼】
export async function getBlogPost(slug: string) {
  // client.fetchの第2引数で、GROQクエリに$slugの値を渡す
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      Body, // 本文(Portable Text)を取得
      publishedAt,
      "category": category->title,
      "tags": tags[]->title
    }
  `, { slug }) // { slug: slug } のショートハンド
}