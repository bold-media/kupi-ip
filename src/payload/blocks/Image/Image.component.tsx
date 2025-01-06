import { AspectRatio } from '@/components/AspectRatio'
import { ImageBlock } from '@payload-types'
import NextImage from 'next/image'
import React from 'react'

export const Image = (props: ImageBlock) => {
  const { image } = props
  if (!image || typeof image !== 'object' || !image?.url) return null

  return (
    <AspectRatio className="not-prose w-full relative my-10" ratio={16 / 9}>
      <NextImage
        src={image?.url}
        alt={image?.alt}
        fill={true}
        draggable={false}
        className="select-none object-cover rounded-xl"
      />
    </AspectRatio>
  )
}
