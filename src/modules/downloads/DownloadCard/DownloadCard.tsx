import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { OS_DISPLAY_NAMES } from '@/hooks/useOS'
import { cn } from '@/utils/cn'
import { Download } from '@payload-types'
import Link from 'next/link'
import React, { ComponentPropsWithRef } from 'react'
import GridFloor from '@/assets/grid-floor.svg'

import classes from './DownloadCard.module.css'
import Image from 'next/image'

export const DownloadCard = ({
  className,
  data,
  ...props
}: ComponentPropsWithRef<typeof Card> & { data: Download }) => {
  const { name, platforms, previewText, slug, mockup } = data
  return (
    <Card className={cn(' overflow-hidden relative border-0 border-glow', className)} {...props}>
      <div className={cn(classes.background, 'w-full h-full absolute top-0 left-0 z-0')} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1280px] min-w-[1280px] mix-blend-soft-light">
        <GridFloor className="w-full  contrast-75" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
        <div className="p-8 md:p-12 flex flex-col gap-16 min-h-[rem-convert(500px)] justify-between">
          <div>
            <h2 className="text-[2.5rem sm:text-[3.125rem] lg:text-[3.75rem] font-light leading-[1.2]">
              {name}
            </h2>
            <div className="flex gap-x-3 mt-2 flex-wrap">
              {platforms?.map((platform) => (
                <span key={platform} className="text-muted-foreground">
                  {OS_DISPLAY_NAMES[platform]}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.7rem] font-light leading-[1.2]">
            {previewText}
          </p>
          <div>
            <Button className="w-full md:w-auto" asChild>
              <Link href={`/download/${slug}`}>СКАЧАТЬ</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="h-full w-full relative">
            {mockup && typeof mockup === 'object' && mockup?.url && (
              <Image
                src={mockup?.url}
                fill={true}
                alt={mockup.alt}
                className="h-full object-contain object-bottom select-none"
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
DownloadCard.displayName = 'DownloadCard'
