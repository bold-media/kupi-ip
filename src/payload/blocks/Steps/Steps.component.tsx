import { RichText } from '@/modules/common/RichText'
import { StepCard } from '@/modules/common/StepCard'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { StepsBlock } from '@payload-types'
import React from 'react'

export const Steps = (props: StepsBlock) => {
  const { background, withPrefix, prefix, items } = props
  return (
    <BackgroundField {...background}>
      {withPrefix && (
        <RichText
          data={prefix}
          className="text-center prose-md md:prose-lg lg:prose-xl xl:prose-2xl mb-4 sm:mb-8 lg:mb-12"
        />
      )}
      {items && Array.isArray(items) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items?.map((item, index) => (
            <StepCard
              key={item?.id}
              title={item?.title}
              description={item?.description}
              number={index + 1}
              highlighted={index === 0 ? true : false}
            />
          ))}
        </div>
      )}
    </BackgroundField>
  )
}
