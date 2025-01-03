import { queryAllRoutes } from '@/utils/queryAllRoutes'
import { Download, Page } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook, CollectionAfterDeleteHook, Payload } from 'payload'

const revalidate = async (slug: string, payload: Payload) => {
  revalidateTag(slug)
  revalidateTag('download')
  revalidatePath('(app)/download', 'page')
  revalidatePath('(app)/[[...segments]]', 'page')
  // revalidateTag('download')
  // revalidateTag(slug)
  // revalidatePath(`/download/${slug}`)
  // revalidatePath(`/download`)

  // const [pages, posts] = await Promise.all([
  //   payload.find({ ...queryAllRoutes({ collection: 'page', type: 'pathname' }) }),
  //   payload.find({ ...queryAllRoutes({ collection: 'post', type: 'slug' }) }),
  // ])

  // pages.docs.forEach((doc) => doc?.pathname && revalidatePath(doc?.pathname))
  // posts.docs.forEach((doc) => doc?.slug && revalidatePath(`/post/${doc?.slug}`))

  // return
}

export const revalidateDownload: CollectionAfterChangeHook<Download> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    if (doc._status === 'published') {
      payload.logger.info(`Revalidating download page for: ${doc.slug}`)

      await revalidate(doc.slug, payload)
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published' && previousDoc?.slug) {
      await revalidate(previousDoc?.slug, payload)
    }
  }

  return doc
}

export const revalidateDownloadDelete: CollectionAfterDeleteHook<Download> = async ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    await revalidate(doc?.slug, payload)
  }
}
