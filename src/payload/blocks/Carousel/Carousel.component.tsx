import React, { ComponentPropsWithRef } from 'react'
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/Carousel'
import { CarouselBlock } from '@payload-types'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { AspectRatio } from '@/components/AspectRatio'

export const Carousel = (props: CarouselBlock & ComponentPropsWithRef<'div'>) => {
  const { images, className } = props
  return (
    <div className={cn('not-prose my-10 !max-w-none !w-full', className)}>
      <BaseCarousel>
        <CarouselContent>
          {images &&
            Array.isArray(images) &&
            images?.map((image) => {
              if (typeof image === 'object' && image?.url) {
                return (
                  <CarouselItem key={image?.id} className="basis-[97%] lg:basis-full">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={image?.url}
                        alt={image?.alt}
                        className="object-cover select-none rounded-xl"
                        draggable={false}
                        fill
                      />
                    </AspectRatio>
                  </CarouselItem>
                )
              } else {
                return null
              }
            })}
        </CarouselContent>
        <CarouselControls>
          <CarouselPrevious />
          <CarouselNext />
        </CarouselControls>
      </BaseCarousel>
    </div>
  )
}
