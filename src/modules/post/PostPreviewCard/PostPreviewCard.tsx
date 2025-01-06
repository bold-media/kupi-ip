import { AspectRatio } from '@/components/AspectRatio'
import { Button } from '@/components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'
import { Icon } from '@/components/Icon'
import { Post } from '@payload-types'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

type PostPreviewCardProps = Pick<Post, 'title' | 'cover' | 'excerpt' | 'slug'> & {
  type?: 'post' | 'guide'
}

export const PostPreviewCard = (props: PostPreviewCardProps) => {
  const { title, cover, excerpt, slug, type = 'post' } = props

  return (
    <NextLink href={`/${type === 'post' ? 'post' : 'guide'}/${slug}`}>
      <Card className="group flex flex-col h-full border-none bg-background-light/0 hover:bg-background-light/100 transition-colors duration-300">
        <AspectRatio ratio={16 / 9}>
          {cover && typeof cover === 'object' && typeof cover?.url === 'string' ? (
            <Image
              src={cover.url}
              alt={cover?.alt}
              fill={true}
              className="object-cover object-center"
              draggable={false}
            />
          ) : (
            <div className="bg-gradient-to-br from-background-light/80 to-background-light/10 h-full w-full flex items-center justify-center">
              <Icon size="xl" className="opacity-80 stroke-1 size-12">
                <ImageIcon />
              </Icon>
            </div>
          )}
        </AspectRatio>

        <CardHeader className="flex items-start p-5 pb-3">
          <CardTitle className="line-clamp-2 text-xl md:text-3xl font-light leading-normal pr-1">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 gap-3">
          <p className="line-clamp-3 font-normal leading-[1.3]">{excerpt}</p>
          <Icon size="xl" className="transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight />
          </Icon>
        </CardContent>
      </Card>
    </NextLink>
  )
}
