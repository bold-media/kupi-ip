import { Post } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

// const revalidate = (slug: string) => {

// }

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    if (doc._status === 'published') {
      payload.logger.info(`Revalidating post by slug: ${doc?.slug}`)

      revalidateTag(doc?.slug)
      revalidatePath(`/statii/${doc?.slug}`)
    }

    if (previousDoc?._status === 'published' && doc?._status !== 'published' && previousDoc?.slug) {
      payload.logger.info(`Revalidating post by slug: ${doc.slug}`)

      revalidateTag(doc.slug)
      revalidatePath(`/statii/${doc?.slug}`)
    }
  }

  return doc
}

export const revalidatePostDelete: CollectionAfterDeleteHook<Post> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    revalidateTag(doc?.slug)
    revalidatePath(`/statii/${doc?.slug}`)
  }

  return doc
}
