export const dynamic = 'force-dynamic'
import { getSettings } from '@/modules/common/data'
import { RichText } from '@/modules/common/RichText'
import { getAllDownloads } from '@/modules/downloads/data'
import { FilteredDownloads } from '@/modules/downloads/FilteredDownloads'
import { generateMeta } from '@/utils/generateMeta'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

// py-12 sm:py-20 md:py-24 (original outer wrapper padding)
const AllDownloadsPage = async () => {
  const settings = await getSettings()
  const downloads = await getAllDownloads()

  return (
    <div className="min-h-svh mt-header py-20 lg:py-[9.25rem] w-full overflow-x-hidden">
      <div className="container">
        {settings?.downloads?.content && (
          <RichText
            data={settings?.downloads?.content}
            enableGutter={false}
            className="text-center md-text small-header mb-10 sm:mb-16 lg:mb-20"
          />
        )}
      </div>
      <FilteredDownloads data={downloads} />
    </div>
  )
}

export const generateMetadata = async ({}, parentPromise: ResolvingMetadata): Promise<Metadata> => {
  const settings = await getSettings()

  const fallback = await parentPromise

  return generateMeta({ meta: settings?.seo?.downloads, fallback, pathname: `/download` })
}

export default AllDownloadsPage
