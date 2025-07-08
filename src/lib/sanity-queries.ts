import { client } from './sanity'

// ブログ記事の型定義
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  body?: any[] // ★★★ contentからbodyに変更 ★★★
  category?: string
  tags?: string[]
  publishedAt: string
  readTime?: string
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
        "category": category->title,
        "tags": tags[]->title,
        publishedAt,
        readTime,
        "featuredImage": mainImage.asset->url
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
        "category": category->title,
        "tags": tags[]->title,
        publishedAt,
        readTime,
        "featuredImage": mainImage.asset->url
      }
    `)
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }
}

// 特定のブログ記事を取得するための、唯一の正しい関数
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        body, // ★★★ Bodyからbody(小文字)に変更 ★★★
        excerpt,
        publishedAt,
        "category": category->title,
        "tags": tags[]->title,
        "featuredImage": mainImage.asset->url
      }
    `, { slug })
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}


// (ここから下のポートフォリオや他の関数は、元のままでOKです)

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
        "featuredImage": mainImage.asset->url
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
        "featuredImage": mainImage.asset->url
      }
    `)
  } catch (error) {
    console.error('Error fetching latest posts:', error)
    return []
  }
}

// サイドバー用：日付順の記事を取得
export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
        _id,
        title,
        slug,
        excerpt,
        "category": category->title,
        publishedAt,
        "featuredImage": mainImage.asset->url
      }
    `)
  } catch (error) {
    console.error('Error fetching recent posts:', error)
    return []
  }
}

// サイドバー用：カテゴリ別の記事を取得
export async function getPostsByCategories(): Promise<{ category: string; posts: BlogPost[] }[]> {
  try {
    const categories = await client.fetch(`
      *[_type == "category"] {
        title,
        "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          "featuredImage": mainImage.asset->url
        }
      }
    `)
    
    return categories.map((cat: any) => ({
      category: cat.title,
      posts: cat.posts || []
    }))
  } catch (error) {
    console.error('Error fetching posts by categories:', error)
    return []
  }
}

// サイドバー用：人気記事を取得（ビュー数がない場合は最新記事で代用）
export async function getPopularPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    // 実際のビュー数フィールドがない場合は、最新記事で代用
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
        _id,
        title,
        slug,
        excerpt,
        "category": category->title,
        publishedAt,
        "featuredImage": mainImage.asset->url
      }
    `)
  } catch (error) {
    console.error('Error fetching popular posts:', error)
    return []
  }
}
