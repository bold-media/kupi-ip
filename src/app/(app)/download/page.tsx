export const dynamic = 'force-dynamic'
import { getSettings } from '@/modules/common/data'
import { RichText } from '@/modules/common/RichText'
import { getAllDownloads } from '@/modules/downloads/data'
import { FilteredDownloads } from '@/modules/downloads/FilteredDownloads'
import { generateMeta } from '@/utils/generateMeta'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

const AllDownloadsPage = async () => {
  const settings = await getSettings()
  const downloads = await getAllDownloads()

  return (
    <div className="min-h-svh mt-header py-12 sm:py-20 md:py-24">
      <div className="container">
        {settings?.downloads?.content && (
          <RichText
            data={settings?.downloads?.content}
            size="pageTitle"
            enableGutter={false}
            className="text-center"
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
