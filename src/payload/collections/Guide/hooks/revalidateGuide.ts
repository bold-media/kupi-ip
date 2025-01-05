import { Guide } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const revalidate = (slug: string) => {
  revalidateTag(slug)
  revalidateTag('guide')
  revalidatePath(`/guide/${slug}`)
}

export const revalidateGuide: CollectionAfterChangeHook<Guide> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    if (doc._status === 'published') {
      payload.logger.info(`Revalidating guide with slug: ${doc?.slug}`)

      revalidate(doc?.slug)
    }

    if (previousDoc?._status === 'published' && doc?._status !== 'published' && previousDoc?.slug) {
      payload.logger.info(`Revalidating guide with slug: ${doc?.slug}`)

      revalidate(previousDoc?.slug)
    }
  }
  return doc
}

export const revalidateGuideDelete: CollectionAfterDeleteHook<Guide> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    revalidate(doc?.slug)
  }
}
