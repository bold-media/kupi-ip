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
    <Card className="flex flex-col h-full">
      <NextLink href={`/${type === 'post' ? 'post' : 'guide'}/${slug}`}>
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
            <div className="bg-gradient-to-br from-slate-900/10 to-slate-900/50 h-full w-full flex items-center justify-center">
              <Icon size="xl">
                <ImageIcon />
              </Icon>
            </div>
          )}
        </AspectRatio>
      </NextLink>
      <CardHeader className="flex items-start">
        <NextLink href={`/${type === 'post' ? 'post' : 'guide'}/${slug}`}>
          <CardTitle className="line-clamp-2 text-lg md:text-xl">{title}</CardTitle>
        </NextLink>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
        <Button variant="ghost" size="icon" className="mt-auto">
          <NextLink href={`/${type === 'post' ? 'post' : 'guide'}/${slug}`}>
            <Icon size="xl">
              <ArrowUpRight />
            </Icon>
          </NextLink>
        </Button>
      </CardContent>
    </Card>
  )
}
