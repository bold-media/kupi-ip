import { getSettings } from '@/modules/common/data'
import { RichText } from '@/modules/common/RichText'
import { getAllDownloads } from '@/modules/downloads/data'
import { FilteredDownloads } from '@/modules/downloads/FilteredDownloads'
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
            className="text-center prose-md md:prose-lg"
          />
        )}
      </div>
      <FilteredDownloads data={downloads} />
    </div>
  )
}

export default AllDownloadsPage
