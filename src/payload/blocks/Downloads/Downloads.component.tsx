import { getSettings } from '@/modules/common/data'
import { RichText } from '@/modules/common/RichText'
import { getAllDownloads } from '@/modules/downloads/data'
import { FilteredDownloads } from '@/modules/downloads/FilteredDownloads'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { DownloadsBlock } from '@payload-types'
import React from 'react'

export const Downloads = async (props: DownloadsBlock) => {
  const { background, prefix } = props
  const downloads = await getAllDownloads()

  if (!downloads || downloads?.length < 1) return null

  return (
    <BackgroundField {...background}>
      <RichText data={prefix} enableGutter={false} size="mdScale" />
      <FilteredDownloads data={downloads} />
    </BackgroundField>
  )
}
