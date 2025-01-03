import { BasePayload, getPayload } from 'payload'
import config from '@payload-config'
import { cache } from '@/utils/cache'
import { draftMode } from 'next/headers'

const getGuideData = async (slug: string, draft: boolean) => {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'guide',
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

const getCachedGuideData = cache(
  async (slug: string) => {
    console.log(`Cache Miss for guide slug: ${slug}`)
    return getGuideData(slug, false)
  },
  { tags: (slug) => [slug, 'guide'] },
)

export const getGuideBySlug = async (slug: string) => {
  try {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
      return getGuideData(slug, true)
    }

    return getCachedGuideData(slug)
  } catch (error) {
    console.error(`Error fetching guide by slug: ${slug}`)
    return null
  }
}

type PaginatedGuidesProps = {
  page: number
}

const getPaginatedGuidesData = async ({ page }: PaginatedGuidesProps) => {
  const payload = await getPayload({ config })

  const queryOptions: Parameters<BasePayload['find']>[0] = {
    collection: 'guide',
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

  return await payload.find(queryOptions)
}

const getCachedPaginatedGuides = cache(
  async ({ page }: PaginatedGuidesProps) => getPaginatedGuidesData({ page }),
  { tags: ['guide'] },
)

export const getPaginatedGuides = async ({ page }: PaginatedGuidesProps) => {
  try {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
      return getPaginatedGuidesData({ page })
    }

    return getCachedPaginatedGuides({ page })
  } catch (error) {
    console.error('Error fetching guides:', error)
    return null
  }
}
