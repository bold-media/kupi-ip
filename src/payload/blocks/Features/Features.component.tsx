import { RichText } from '@/modules/common/RichText'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { FeaturesBlock } from '@payload-types'
import React from 'react'
import Sphere from '@/assets/sphere.svg'
import { BrandCard } from '@/components/BrandCard'
import { iconMap } from '@/modules/common/iconMap'
import { FeaturesCarousel } from './FeaturesCarousel'

export const Features = (props: FeaturesBlock) => {
  const { background, prefix, features, suffix } = props
  return (
    <BackgroundField
      {...background}
      withContainer={true}
      containerClassName="flex flex-col justify-center items-center"
    >
      <RichText
        data={prefix}
        className="prose-md md:prose-lg lg:prose-xl xl:prose-2xl mb-4 sm:mb-8 lg:mb-12 max-w-5xl"
      />
      <Sphere className="w-56 h-56 mb-4 sm:mb-8 md:mb-12" />
      <FeaturesCarousel features={features} />
      <RichText
        data={suffix}
        className="prose-md md:prose-lg text-center text-muted-foreground mt-4"
      />
    </BackgroundField>
  )
}
