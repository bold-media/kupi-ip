import { AspectRatio } from '@/components/AspectRatio'
import { Button } from '@/components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'
import { Icon } from '@/components/Icon'
import { Post } from '@payload-types'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PostPreviewCardProps = Pick<Post, 'title' | 'cover' | 'excerpt' | 'slug'>

export const PostPreviewCard = (props: PostPreviewCardProps) => {
  const { title, cover, excerpt, slug } = props

  return (
    <Card>
      <Link href={`/statii/${slug}`}>
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
      </Link>
      <CardHeader className="flex items-start">
        <Link href={`/statii/${slug}`}>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
        <Button variant="ghost" size="icon" className="mt-2">
          <Link href={`/statii/${slug}`}>
            <Icon size="xl">
              <ArrowUpRight />
            </Icon>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
