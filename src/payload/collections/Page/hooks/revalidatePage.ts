import { Page } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const revalidate = (pathname: string) => {
  revalidateTag(pathname)
  revalidateTag('page')
  // revalidatePath('(app)/[[...segments]]', 'page')
  revalidatePath(pathname)
}

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate && doc?.pathname) {
    if (doc._status === 'published') {
      payload.logger.info(`Revalidating page at path: ${doc.pathname}`)

      revalidate(doc?.pathname)
    }

    if (
      previousDoc?._status === 'published' &&
      doc._status !== 'published' &&
      previousDoc?.pathname
    ) {
      revalidate(previousDoc?.pathname)
    }
  }

  return doc
}

export const revalidatePageDelete: CollectionAfterDeleteHook<Page> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate && doc?.pathname) {
    revalidate(doc?.pathname)
  }

  return doc
}
