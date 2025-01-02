import { getSettings } from '@/modules/common/data'
import { RichText } from '@/modules/common/RichText'
import { getAllDownloads } from '@/modules/downloads/data'
import { FilteredDownloads } from '@/modules/downloads/FilteredDownloads'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { DownloadsBlock } from '@payload-types'
import React from 'react'

export const Downloads = async (props: DownloadsBlock) => {
  const { background } = props
  const settings = await getSettings()
  const downloads = await getAllDownloads()

  if (!settings) return null
  if (!downloads || downloads?.length < 1) return null

  return (
    <BackgroundField {...background}>
      {settings?.downloads?.content && (
        <RichText
          data={settings?.downloads?.content}
          className="text-center prose-md md:prose-lg"
        />
      )}
      <FilteredDownloads data={downloads} />
    </BackgroundField>
  )
}
