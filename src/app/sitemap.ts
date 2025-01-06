import { cache } from '@/utils/cache'
import { getServerSideURL } from '@/utils/getURL'
import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

type ChangeFrequency = MetadataRoute.Sitemap[number]['changeFrequency']

const collectionSettings = {
  page: {
    priority: 0.8,
    changeFrequency: 'monthly' as ChangeFrequency,
  },
  post: {
    priority: 0.7,
    changeFrequency: 'weekly' as ChangeFrequency,
  },
  download: {
    priority: 0.6,
    changeFrequency: 'monthly' as ChangeFrequency,
  },
  guide: {
    priority: 0.5,
    changeFrequency: 'monthly' as ChangeFrequency,
  },
}

const getPages = cache(
  async () => {
    const payload = await getPayload({ config })
    const { docs: pages } = await payload.find({
      collection: 'page',
      draft: false,
      overrideAccess: false,
      select: {
        updatedAt: true,
        pathname: true,
      },
    })
    return pages
  },
  { revalidate: 3600, tags: ['page'] },
  ['sitemap-pages'],
)

const getPosts = cache(
  async () => {
    const payload = await getPayload({ config })
    const { docs: posts } = await payload.find({
      collection: 'post',
      draft: false,
      overrideAccess: false,
      select: {
        updatedAt: true,
        slug: true,
      },
    })
    return posts
  },
  { revalidate: 3600, tags: ['post'] },
  ['sitemap-posts'],
)

const getDownloads = cache(
  async () => {
    const payload = await getPayload({ config })
    const { docs: downloads } = await payload.find({
      collection: 'download',
      draft: false,
      overrideAccess: false,
      select: {
        updatedAt: true,
        slug: true,
      },
    })
    return downloads
  },
  { revalidate: 3600, tags: ['download'] },
  ['sitemap-downloads'],
)

const getGuides = cache(
  async () => {
    const payload = await getPayload({ config })
    const { docs: guides } = await payload.find({
      collection: 'guide',
      draft: false,
      overrideAccess: false,
      select: {
        updatedAt: true,
        slug: true,
      },
    })
    return guides
  },
  { revalidate: 3600, tags: ['guide'] },
  ['sitemap-guides'],
)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getServerSideURL()

  // Fetch all content
  const [pages, posts, downloads, guides] = await Promise.all([
    getPages(),
    getPosts(),
    getDownloads(),
    getGuides(),
  ])

  const homepage = pages.find((page) => page.pathname === '/')

  const staticRoutes = [
    {
      url: `${baseUrl}/download`,
      priority: 0.8,
      changeFrequency: 'daily' as ChangeFrequency,
      lastModified:
        downloads.length > 0
          ? new Date(
              Math.max(...downloads.map((d) => new Date(d.updatedAt).getTime())),
            ).toISOString()
          : new Date().toISOString(),
    },
    // this changes every time a blog post is made
    {
      url: `${baseUrl}/blog`,
      priority: 0.8,
      changeFrequency: 'daily' as ChangeFrequency,
      lastModified:
        posts.length > 0
          ? new Date(Math.max(...posts.map((p) => new Date(p.updatedAt).getTime()))).toISOString()
          : new Date().toISOString(),
    },
  ]

  // Transform pages, handling homepage separately
  const pageRoutes = pages
    .filter((page) => page.pathname !== '/')
    .map((page) => ({
      url: `${baseUrl}${page.pathname}`,
      lastModified: new Date(page.updatedAt).toISOString(),
      ...collectionSettings.page,
    }))

  // Add homepage with highest priority
  if (homepage) {
    pageRoutes.unshift({
      url: baseUrl,
      lastModified: new Date(homepage.updatedAt).toISOString(),
      priority: 1.0,
      changeFrequency: 'daily' as const,
    })
  }

  // Transform downloads
  const downloadRoutes = downloads.map((download) => ({
    url: `${baseUrl}/download/${download.slug}`,
    lastModified: new Date(download.updatedAt).toISOString(),
    ...collectionSettings.download,
  }))

  // Transform posts
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
    ...collectionSettings.post,
  }))

  // Transform guides
  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}/guide/${guide.slug}`,
    lastModified: new Date(guide.updatedAt).toISOString(),
    ...collectionSettings.guide,
  }))

  return [...pageRoutes, ...staticRoutes, ...downloadRoutes, ...postRoutes, ...guideRoutes]
}
