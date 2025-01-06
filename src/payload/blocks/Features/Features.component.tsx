import { RichText } from '@/modules/common/RichText'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { FeaturesBlock } from '@payload-types'
import React from 'react'
import Sphere from '@/assets/sphere.svg'
import { FeaturesCarousel } from './FeaturesCarousel'

export const Features = (props: FeaturesBlock) => {
  const { background, prefix, features } = props
  return (
    <BackgroundField {...background} containerClassName="flex flex-col justify-center items-center">
      <RichText data={prefix} enableGutter={false} className="mb-4 sm:mb-8 lg:mb-12 md-text" />
      <Sphere className="w-56 h-56 mb-4 sm:mb-8 md:mb-12" />
      <FeaturesCarousel features={features} />
    </BackgroundField>
  )
}
