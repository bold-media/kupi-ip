import { RichText } from '@/modules/common/RichText'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { FeaturesBlock } from '@payload-types'
import React from 'react'
import Sphere from '@/assets/sphere.svg'
import { FeaturesCarousel } from './FeaturesCarousel'
import { cn } from '@/utils/cn'
import { FeaturesGrid } from './FeaturesGrid'

export const Features = (props: FeaturesBlock) => {
  const { background, variant, prefix, features } = props
  return (
    <BackgroundField {...background} containerClassName="flex flex-col justify-center items-center">
      <RichText
        data={prefix}
        enableGutter={false}
        className={cn('md-text', {
          'mb-4 sm:mb-8 lg:mb-12': variant === 'sphere',
          'mb-20': variant === 'grid',
        })}
      />
      {variant === 'sphere' ? (
        <>
          <Sphere className="w-[8.375rem] h-[8.375rem] sm:w-[10.75rem] sm:h-[10.75rem] lg:w-56 lg:h-56 mb-4 sm:mb-8 md:mb-12" />
          <FeaturesCarousel features={features} />
        </>
      ) : variant === 'grid' ? (
        <FeaturesGrid features={features} />
      ) : null}
    </BackgroundField>
  )
}
