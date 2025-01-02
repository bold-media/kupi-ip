import { getPostBySlug } from '@/modules/post/data'
import { PostBreadcrumbs } from '@/modules/post/PostBreadcrumbs'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { RichText } from '@/modules/common/RichText'

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
      <div className="container relative mt-header">
        <PostBreadcrumbs title={title} />
        {image && image?.url && image?.height && image?.width && (
          <Image
            src={image?.url}
            alt={image?.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto object-contain"
            draggable={false}
          />
        )}
      </div>
      <div className="container prose prose-md md:prose-lg dark:prose-invert md:max-w-4xl mt-6 xs:mt-8 sm:mt-12">
        <h1>{title}</h1>
      </div>
      <article>
        <RichText
          data={article}
          enableGutter={true}
          className="md:max-w-4xl pb-8 xs:pb-12 sm:pb-20"
        />
      </article>
    </>
  )
}

export default PostPage
