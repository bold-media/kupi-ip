import { BrandCard } from '@/components/BrandCard'
import { iconMap } from '@/modules/common/iconMap'
import { RichText } from '@/modules/common/RichText'
import { cn } from '@/utils/cn'
import { FeaturesBlock } from '@payload-types'
import React from 'react'

export const FeaturesGrid = ({ features }: { features: FeaturesBlock['features'] }) => {
  if (!features || features.length < 1) return null

  return (
    <div className={cn('w-full flex flex-wrap justify-center gap-3')}>
      {features.map((feature) => {
        const Icon = iconMap[feature?.icon || 'globe']
        return (
          <div
            key={feature.id}
            className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] flex"
          >
            <BrandCard
              variant="flareHorizontal"
              className="px-5 py-[1.625rem] flex flex-col items-center justify-items-center gap-5 flex-1"
            >
              <Icon className="w-12 h-12" />
              <h3 className="text-center italic font-light text-[1.5rem] sm:text-[1.688rem] lg:text-[1.875rem] text-base leading-none tracking-[-1%]">
                {feature.text}
              </h3>
              <RichText
                data={feature?.content}
                enableGutter={false}
                className="text-center font-normal"
              />
            </BrandCard>
          </div>
        )
      })}
    </div>
  )
}
