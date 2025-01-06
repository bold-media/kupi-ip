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
    <Carousel opts={{ loop: true }} className="container !w-full">
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
    // <Carousel
    //   opts={{
    //     loop: true,
    //     align: 'center',
    //   }}
    //   className="w-full"
    // >
    //   <CarouselContent>
    //     {data?.map((item) => (
    //       <CarouselItem
    //         key={item.id}
    //         // The slide itself should be constrained
    //         className="min-w-0 max-w-[77rem] flex-[0_0_77rem]"
    //       >
    //         <div className="px-4">
    //           <DownloadCard data={item} />
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselControls>
    //     <CarouselPrevious />
    //     <CarouselNext />
    //   </CarouselControls>
    // </Carousel>
  )
}
