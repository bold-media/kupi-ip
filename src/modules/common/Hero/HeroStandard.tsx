import { Page } from '@payload-types'
import React from 'react'
import { RichText } from '../RichText'

export const HeroStandard = (props: Page['hero']) => {
  const { richText } = props
  return (
    <div className="mt-header container pt-12 sm:pt-20 md:pt-24">
      <RichText
        data={richText}
        prose="standard"
        enableGutter={false}
        className="md-text small-header"
      />
    </div>
  )
}
