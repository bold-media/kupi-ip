import { RichText } from '@/modules/common/RichText'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { ContentBlock } from '@payload-types'
import React from 'react'

export const Content = (props: ContentBlock) => {
  const { background, richText } = props

  return (
    <BackgroundField {...background}>
      <RichText data={richText} enableGutter={false} withPadding={true} />
    </BackgroundField>
  )
}
