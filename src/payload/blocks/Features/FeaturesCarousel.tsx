'use client'

import { BrandCard } from '@/components/BrandCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel'
import { iconMap } from '@/modules/common/iconMap'
import { RichText } from '@/modules/common/RichText'
import { cn } from '@/utils/cn'
import { FeaturesBlock } from '@payload-types'
import { useMediaQuery } from '@react-hookz/web'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

export const FeaturesCarousel = ({ features }: { features: FeaturesBlock['features'] }) => {
  const [mounted, setMounted] = useState(false)
  const alignStart = useMediaQuery('(min-width: 80em)')
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const active = useMemo(() => {
    if (!mounted) return true

    if (alignStart && features && features?.length <= 5) {
      return false
    } else {
      return true
    }
  }, [alignStart, features, mounted])

  const handleFeatureSelect = useCallback(
    (index: number) => {
      setSelectedIndex(index)
    },
    [setSelectedIndex],
  )

  const carouselApi = useCallback(
    (api: any) => {
      if (!api) return

      api.on('select', () => {
        const currentIndex = api.selectedScrollSnap()
        setSelectedIndex(currentIndex)
      })

      if (active) {
        api.scrollTo(selectedIndex)
      }
    },
    [active, selectedIndex],
  )
  const selectedFeature = useMemo(
    () => features?.[selectedIndex] || features?.[0],
    [features, selectedIndex],
  )

  return (
    <div className="w-full">
      <Carousel
        opts={{
          loop: true,
          active,
          align: alignStart ? 'start' : 'center',
        }}
        setApi={carouselApi}
        className="container p-0 overflow-hidden w-full"
      >
        <CarouselContent gap="small">
          {features?.map((feature, index) => {
            const Icon = iconMap[feature?.icon || 'globe']
            return (
              <CarouselItem
                key={feature.id}
                className={cn(
                  'basis-[80%] sm:basis-[40%] md:basis-1/3 xl:basis-1/5',
                  !active && 'active-class',
                )}
                gap="small"
              >
                <BrandCard
                  variant={index === selectedIndex ? 'highlightedHorizontal' : 'flareHorizontal'}
                  size="feature"
                  hoverable={true}
                  asChild
                >
                  <button
                    onClick={() => handleFeatureSelect(index)}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <Icon className="w-12 h-12" />
                    <p className="text-center font-normal text-base">{feature.text}</p>
                  </button>
                </BrandCard>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
      <RichText
        data={selectedFeature?.content}
        enableGutter={false}
        className="text-center mt-6 font-normal"
      />
    </div>
  )
}
