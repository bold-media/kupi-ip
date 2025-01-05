import { AspectRatio } from '@/components/AspectRatio'
import { RenderBlocks } from '@/modules/common/Blocks/RenderBlocks'
import { RichText } from '@/modules/common/RichText'
import { getGuideBySlug } from '@/modules/guides/data'
import { generateMeta } from '@/utils/generateMeta'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'

interface Props {
  params: Promise<{
    slug: string
  }>
}

const GuidePage = async ({ params }: Props) => {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  const { title, cover, content } = guide

  const image = typeof cover === 'object' ? cover : null

  return (
    <>
      <div className="container relative mt-header min-h-svh">
        {image && image?.url && image?.height && image?.width && (
          <AspectRatio className="relative w-full" ratio={16 / 9}>
            <Image
              src={image?.url}
              alt={image?.alt}
              fill={true}
              className="object-cover rounded-xl select-none"
              draggable={false}
            />
          </AspectRatio>
        )}
      </div>
      <div className="prose prose-xs sm:prose-sm md:prose-md lg:prose-lg dark:prose-invert mt-6 xs:mt-8 sm:mt-12 italic mx-auto max-w-[62.5rem] px-4 md:px-6">
        <h1>{title}</h1>
      </div>
      <article className="w-full overflow-x-hidden">
        <RichText
          data={content}
          enableGutter="empty"
          withPadding={true}
          size="blog"
          className="pb-8 xs:pb-12 sm:pb-20 mx-auto"
        />
      </article>
      <RenderBlocks blocks={guide?.blocks} />
    </>
  )
}

export const generateStaticParams = async () => {
  try {
    const payload = await getPayload({ config })
    const guide = await payload.find({
      collection: 'guide',
      draft: false,
      limit: 0,
      overrideAccess: false,
      select: {
        slug: true,
      },
      where: {
        slug: {
          exists: true,
        },
      },
    })

    const params = guide?.docs?.map(({ slug }) => ({ slug }))
    return params
  } catch {
    return []
  }
}

export const generateMetadata = async (
  { params }: Props,
  parentPromise: ResolvingMetadata,
): Promise<Metadata> => {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)

  const fallback = await parentPromise

  return generateMeta({ meta: guide?.meta, fallback, pathname: `/guide/${guide?.slug}` })
}

export default GuidePage
