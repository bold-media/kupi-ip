import { cache } from '@/utils/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import { draftMode } from 'next/headers'

export const getAllDownloads = cache(
  async () => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'download',
      limit: 0,
      pagination: false,
      disableErrors: true,
    })

    return docs ?? []
  },
  { tags: ['download'] },
)

const getDownloadData = async (slug: string, draft: boolean) => {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'download',
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

const getCachedDownloadData = cache(
  async (slug: string) => {
    console.log(`Cache Miss for download: ${slug}`)
    return getDownloadData(slug, false)
  },
  { tags: (slug) => ['download', slug] },
)

export const getDownloadBySlug = async (slug: string) => {
  try {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
      return getDownloadData(slug, true)
    }

    return getCachedDownloadData(slug)
  } catch (error) {
    console.error(`Error fetching download:`, error)
    return null
  }
}
