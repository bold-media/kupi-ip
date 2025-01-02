import { getServerSideURL } from './getURL'

type Args = {
  collection: 'page' | 'post' | 'download' | 'guide'
  pathname: string
  slug?: string
}

export const generatePreviewPath = ({ collection, pathname, slug }: Args) => {
  const params = {
    collection,
    pathname,
    ...(slug && { slug }),
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  return `${getServerSideURL()}/next/preview?${encodedParams.toString()}`
}
