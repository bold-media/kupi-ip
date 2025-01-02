import { SearchParams } from 'nuqs/server'
import React from 'react'
import { postsSearchParamsCache } from './searchParams'
import { getAllCategories, getPaginatedPosts } from '@/modules/post/data'
import { PostPreviewCard } from '@/modules/post/PostPreviewCard'
import { PostCategories } from '@/modules/post/PostCategories'
import { PostPagination } from '@/modules/post/PostPagination'

type AllPostsPageProps = {
  searchParams: Promise<SearchParams>
}

const AllPostsPage = async ({ searchParams }: AllPostsPageProps) => {
  const { stranitsa, kategoriya } = await postsSearchParamsCache.parse(searchParams)
  const categories = await getAllCategories()

  const categoryId = kategoriya
    ? categories.find((cat) => cat.slug === kategoriya)?.id || null
    : null

  const posts = await getPaginatedPosts({
    page: stranitsa,
    category: categoryId,
  })

  return (
    <>
      <div className="container py-header">
        <div className="text-center prose prose-md md:prose-lg prose-slate dark:prose-invert mt-12 mb-10 sm:mt-20 sm:mb-16 md:mt-24 md:mb-20">
          <h1>Статьи</h1>
        </div>
        <PostCategories categories={categories} />
        {posts && Array.isArray(posts?.docs) && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
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

export default AllPostsPage
