import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Page } from '@payload-types'

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`
    : process.env.NEXT_PUBLIC_SITE_NAME!
}

const generateURL: GenerateURL<Page> = ({ doc, collectionSlug }) => {
  switch (collectionSlug) {
    case 'page':
      return `${process.env.NEXT_PUBLIC_APP_URL}${doc?.pathname === '/' ? '' : doc?.pathname}`.replace(
        /^\/+/,
        '/',
      )
    case 'post':
      return `${process.env.NEXT_PUBLIC_APP_URL}/post/${doc?.slug}`
    case 'download':
      return `${process.env.NEXT_PUBLIC_APP_URL}/download/${doc?.slug}`
    case 'guide':
      return `${process.env.NEXT_PUBLIC_APP_URL}/guide/${doc?.slug}`
    default:
      return ``
  }
}

export const seo = seoPlugin({
  generateTitle,
  generateURL,
})
