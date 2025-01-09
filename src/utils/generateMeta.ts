import type { Metadata, ResolvedMetadata } from 'next'

import type { Media, Config } from '@payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

type PayloadMetadata =
  | {
      title?: string | null
      description?: string | null
      image?: Media | string | null | undefined
      noIndex?: boolean | null | undefined
    }
  | string
  | undefined

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image?.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image?.url
  }

  return url
}

export const generateMeta = async (args: {
  meta: PayloadMetadata
  fallback?: ResolvedMetadata
  pathname?: string
}): Promise<Metadata> => {
  const { meta: data, fallback, pathname } = args
  const seo = typeof data === 'object' ? data : undefined

  const ogImage = getImageURL(seo?.image)

  const title = seo?.title
    ? seo?.title
    : fallback?.title
      ? fallback?.title
      : process.env.NEXT_PUBLIC_APP_NAME || ''
  const description = seo?.description
    ? seo?.description
    : fallback?.description
      ? fallback?.description
      : ''
  return {
    title,
    description,
    openGraph: mergeOpenGraph({
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : fallback?.openGraph?.images,
      url: pathname ? `${process.env.NEXT_PUBLIC_APP_URL}${pathname}` : undefined,
    }),
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : undefined,
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { rel: 'icon', url: '/favicon.ico' },
        { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: [{ rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }],
      other: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  }
}
