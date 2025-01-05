import { SearchParams } from 'nuqs'
import React from 'react'
import { guidesSearchParamsCache } from './searchParams'
import { getPaginatedGuides } from '@/modules/guides/data'
import { PostPreviewCard } from '@/modules/post/PostPreviewCard'
import { PostPagination } from '@/modules/post/PostPagination'
import { notFound } from 'next/navigation'

type AllGuidesPageProps = {
  searchParams: Promise<SearchParams>
}

const AllGuidesPage = async ({ searchParams }: AllGuidesPageProps) => {
  const { page } = await guidesSearchParamsCache.parse(searchParams)

  if (page) {
    //just return notfound for this page, as it probably should not exist.
    notFound()
  }

  const guides = await getPaginatedGuides({ page })

  return (
    <>
      <div className="container py-header min-h-svh">
        <div className="text-center prose prose-md md:prose-lg prose-slate dark:prose-invert max-w-none mt-12 mb-10 sm:mt-20 sm:mb-16 md:mt-24 md:mb-20">
          <h1>Инструкции</h1>
        </div>
        {guides && Array.isArray(guides?.docs) && (
          <div className="grid sm:grid-cols-2 gap-4">
            {guides?.docs?.map((guide: any) => (
              <PostPreviewCard key={guide?.id} type="guide" {...guide} />
            ))}
          </div>
        )}
        {guides && Array.isArray(guides?.docs) && (
          <PostPagination
            hasPrevPage={guides?.hasPrevPage}
            hasNextPage={guides?.hasNextPage}
            totalPages={guides?.totalPages}
            prevPage={guides?.prevPage}
            nextPage={guides?.nextPage}
          />
        )}
      </div>
    </>
  )
}

export default AllGuidesPage
