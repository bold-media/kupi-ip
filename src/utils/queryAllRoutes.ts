import { Download, Page, Post } from '@payload-types'
import { CollectionSlug, Payload } from 'payload'

type QueryType = 'pathname' | 'slug'

type CollectionTypes = {
  page: Page
  post: Post
  download: Download
}

interface QueryArgs<TSlug extends keyof CollectionTypes> {
  collection: TSlug
  type: QueryType
}

// type PayloadFindOptions = Parameters<Payload['find']>[0]

export const queryAllRoutes = <TSlug extends keyof CollectionTypes>({
  collection,
  type,
}: QueryArgs<TSlug>) => {
  return {
    collection,
    limit: 0,
    pagination: false,
    depth: 0,
    select: {
      [type]: true,
    },
    where: {
      [type]: {
        exists: true,
      },
    },
    overrideAccess: true,
    disableErrors: true,
  }
}
