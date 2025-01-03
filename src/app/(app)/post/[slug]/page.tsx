import { getPostBySlug } from '@/modules/post/data'
import { PostBreadcrumbs } from '@/modules/post/PostBreadcrumbs'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { RichText } from '@/modules/common/RichText'
import { AspectRatio } from '@/components/AspectRatio'
import { RenderBlocks } from '@/modules/common/Blocks/RenderBlocks'

interface Props {
  params: Promise<{
    slug: string
  }>
}

const PostPage = async ({ params }: Props) => {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { title, cover, article } = post

  const image = typeof cover === 'object' ? cover : null

  return (
    <>
      <div className="container relative mt-header min-h-svh">
        <PostBreadcrumbs title={title} />
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
          data={article}
          enableGutter="empty"
          withPadding={true}
          size="blog"
          className="pb-8 xs:pb-12 sm:pb-20 mx-auto"
        />
      </article>
      <RenderBlocks blocks={post?.blocks} />
    </>
  )
}

export default PostPage
