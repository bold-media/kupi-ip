import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/Carousel'
import { Download } from '@payload-types'
import React from 'react'
import { DownloadCard } from '../DownloadCard'

interface DownloadsCarouselProps {
  data: Download[]
}

export const DownloadsCarousel = ({ data }: DownloadsCarouselProps) => {
  if (!data || (Array.isArray(data) && data?.length < 1)) return null
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent className="!overflow-visible">
        {data?.map((item) => (
          <CarouselItem key={item.id} className="basis-full">
            <DownloadCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselControls>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  )
}
