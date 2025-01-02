'use client'

import { BrandCard } from '@/components/BrandCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel'
import { iconMap } from '@/modules/common/iconMap'
import { useMediaQuery } from '@react-hookz/web'
import React, { useMemo } from 'react'

export const FeaturesCarousel = ({
  features,
}: {
  features:
    | {
        icon?:
          | (
              | 'globe'
              | 'rocketship'
              | 'signal'
              | 'smiley'
              | 'shield'
              | 'battery'
              | 'piggyBank'
              | 'lightning'
              | 'documentShield'
            )
          | null
        text?: string | null
        id?: string | null
      }[]
    | null
    | undefined
}) => {
  const alignStart = useMediaQuery('(min-width: 80em)')

  const active = useMemo(() => {
    if (alignStart && features && features?.length <= 5) {
      return false
    } else {
      return true
    }
  }, [alignStart, features])
  return (
    <Carousel
      opts={{
        loop: true,
        active,
        align: alignStart ? 'start' : 'center',
      }}
      className="container p-0 overflow-hidden"
    >
      <CarouselContent>
        {features?.map((feature, index) => {
          const Icon = iconMap[feature?.icon || 'globe']
          return (
            <CarouselItem
              key={feature.id}
              className="basis-[80%] sm:basis-[40%] md:basis-1/3 xl:basis-1/5"
            >
              <BrandCard variant={index === 0 ? 'highlightedHorizontal' : 'flareHorizontal'}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <Icon className="w-12 h-12" />
                  <p className="text-center text-sm font-light">{feature.text}</p>
                </div>
              </BrandCard>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
