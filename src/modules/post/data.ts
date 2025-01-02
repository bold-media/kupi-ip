import { BasePayload, getPayload } from 'payload'
import config from '@payload-config'
import { cache } from '@/utils/cache'
import { draftMode } from 'next/headers'

const getPostData = async (slug: string, draft: boolean) => {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'post',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    disableErrors: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return docs?.[0] || null
}

export const getCachedPostData = cache(
  async (slug: string) => {
    console.log(`Cache Miss for article slug: ${slug}`)
    return getPostData(slug, false)
  },
  { tags: (slug) => [slug, 'post'] },
)

export const getPostBySlug = async (slug: string) => {
  try {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
      return getPostData(slug, true)
    }

    return getCachedPostData(slug)
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export const getAllCategories = cache(
  async () => {
    try {
      const payload = await getPayload({ config })
      const results = await payload.find({
        collection: 'category',
        limit: 100,
        pagination: false,
      })

      return results?.docs
    } catch (error) {
      console.error('Error fetching category by slug:', error)
      return []
    }
  },
  { tags: ['category'] },
)

type PaginatedPostsProps = {
  page: number
  category: string | null
}

export const getPaginatedPostsData = async ({ category, page }: PaginatedPostsProps) => {
  const payload = await getPayload({ config })

  const queryOptions: Parameters<BasePayload['find']>[0] = {
    collection: 'post',
    disableErrors: false,
    select: {
      title: true,
      cover: true,
      excerpt: true,
      slug: true,
    },
    limit: 12,
    page,
  }

  if (category) {
    return await payload.find({
      ...queryOptions,
      where: {
        categories: {
          contains: category,
        },
      },
    })
  }

  return await payload.find(queryOptions)
}

export const getCachedPaginatedPosts = cache(
  async ({ category, page }: PaginatedPostsProps) => getPaginatedPostsData({ category, page }),
  { tags: ({ category }) => ['post'].concat(category ? [category] : []) },
)

export const getPaginatedPosts = async ({ category, page }: PaginatedPostsProps) => {
  try {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
      return getPaginatedPostsData({ category, page })
    }

    return getCachedPaginatedPosts({ category, page })
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

const getRecentPostsData = async (limit: number, draft: boolean) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'post',
    limit,
    overrideAccess: draft,
    select: {
      title: true,
      cover: true,
      excerpt: true,
      slug: true,
    },
    disableErrors: true,
  })

  return result?.docs ?? []
}

const getCachedRecentPostsData = cache(
  async (limit: number) => {
    console.log(`Cache miss for recent posts...`)
    return getRecentPostsData(limit, false)
  },
  { tags: ['post'] },
)

export const getRecentPosts = async (limit: number = 5) => {
  try {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
      return getRecentPostsData(limit, true)
    }

    return getCachedRecentPostsData(limit)
  } catch (error) {
    console.error('Error fetching recent posts:', error)
    return []
  }
}
