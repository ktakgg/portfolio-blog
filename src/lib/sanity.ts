import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Blog post queries
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "featuredImage": featuredImage.asset->url,
      "category": category->title,
      "tags": tags[]->title
    }
  `)
}

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      publishedAt,
      "featuredImage": featuredImage.asset->url,
      "category": category->title,
      "tags": tags[]->title
    }
  `, { slug })
}

// Portfolio queries
export async function getPortfolioItems() {
  return client.fetch(`
    *[_type == "portfolio"] | order(completedAt desc) {
      _id,
      title,
      slug,
      description,
      "featuredImage": featuredImage.asset->url,
      technologies,
      projectUrl,
      githubUrl,
      completedAt
    }
  `)
}

export async function getPortfolioItem(slug: string) {
  return client.fetch(`
    *[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      content,
      "featuredImage": featuredImage.asset->url,
      technologies,
      projectUrl,
      githubUrl,
      completedAt
    }
  `, { slug })
}
