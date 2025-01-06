import { MetadataRoute } from 'next'
import { getServerSideURL } from '@/utils/getURL'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getServerSideURL()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/', '/api', '/api/', '/guide/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
