import { Page } from '@payload-types'
import React from 'react'
import { RichText } from '../RichText'

export const HeroStandard = (props: Page['hero']) => {
  const { richText } = props
  return (
    <div className="container mt-header pt-20 lg:pt-[9.25rem]">
      <RichText
        data={richText}
        prose="standard"
        enableGutter={false}
        className="md-text small-header"
      />
    </div>
  )
}
