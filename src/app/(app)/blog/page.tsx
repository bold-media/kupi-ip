import { SearchParams } from 'nuqs/server'
import React from 'react'
import { postsSearchParamsCache } from './searchParams'
import { getAllCategories, getPaginatedPosts } from '@/modules/post/data'
import { PostPreviewCard } from '@/modules/post/PostPreviewCard'
import { PostCategories } from '@/modules/post/PostCategories'
import { PostPagination } from '@/modules/post/PostPagination'
import { Metadata, ResolvingMetadata } from 'next'
import { getSettings } from '@/modules/common/data'
import { generateMeta } from '@/utils/generateMeta'

type AllPostsPageProps = {
  searchParams: Promise<SearchParams>
}

const AllPostsPage = async ({ searchParams }: AllPostsPageProps) => {
  const { page, category } = await postsSearchParamsCache.parse(searchParams)
  const categories = await getAllCategories()

  const categoryId = category ? categories.find((cat) => cat.slug === category)?.id || null : null

  const posts = await getPaginatedPosts({
    page,
    category: categoryId,
  })

  return (
    <>
      <div className="container py-header min-h-svh">
        <div className="text-center prose prose-md md:prose-lg prose-slate dark:prose-invert max-w-none mt-12 mb-10 sm:mt-20 sm:mb-16 md:mt-24 md:mb-20">
          <h1>Статьи</h1>
        </div>
        <PostCategories categories={categories} />
        {posts && Array.isArray(posts?.docs) && (
          <div className="grid sm:grid-cols-2 gap-4">
            {posts?.docs?.map((post: any) => <PostPreviewCard key={post.id} {...post} />)}
          </div>
        )}
        {posts && Array.isArray(posts?.docs) && (
          <PostPagination
            hasPrevPage={posts?.hasPrevPage}
            hasNextPage={posts?.hasNextPage}
            totalPages={posts?.totalPages}
            prevPage={posts?.prevPage}
            nextPage={posts?.nextPage}
          />
        )}
      </div>
    </>
  )
}

export const generateMetadata = async ({}, parentPromise: ResolvingMetadata): Promise<Metadata> => {
  const settings = await getSettings()

  const fallback = await parentPromise

  return generateMeta({ meta: settings?.seo?.posts, fallback, pathname: `/blog` })
}

export default AllPostsPage
