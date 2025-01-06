import { Button } from '@/components/Button'
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/Carousel'
import { Icon } from '@/components/Icon'
import { RichText } from '@/modules/common/RichText'
import { getRecentPosts } from '@/modules/post/data'
import { PostPreviewCard } from '@/modules/post/PostPreviewCard'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { RecentPostsBlock } from '@payload-types'
import { ArrowRight, FileQuestion } from 'lucide-react'
import NextLink from 'next/link'

export const RecentPosts = async (props: RecentPostsBlock) => {
  const { background, prefix, settings } = props
  const recentPosts = await getRecentPosts({
    limit: settings?.limit!,
    categories: settings?.categories!,
  })

  return (
    <BackgroundField {...background}>
      <RichText data={prefix} enableGutter={false} className="mb-10 sm:mb-16 lg:mb-20" />
      {recentPosts?.length > 0 ? (
        <Carousel
          opts={{ align: 'start', containScroll: 'trimSnaps', skipSnaps: false, dragFree: false }}
        >
          <div className="relative">
            <CarouselContent>
              {recentPosts &&
                Array.isArray(recentPosts) &&
                recentPosts?.map((post) => (
                  <CarouselItem key={post?.id} className="basis-full sm:basis-1/2">
                    <PostPreviewCard {...post} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselControls className="hidden sm:flex">
              <CarouselPrevious />
              <CarouselNext />
            </CarouselControls>
          </div>
          {/* <div className="mt-6 md:mt-8 flex justify-center">
            <Button variant="ghost" asChild>
              <NextLink href="/blog">
                Смотреть все
                <Icon>
                  <ArrowRight />
                </Icon>
              </NextLink>
            </Button>
          </div> */}
        </Carousel>
      ) : (
        <div className="text-center text-lg md:text-xl flex flex-col items-center gap-2 my-12 md:my-24">
          <Icon className="opacity-80 w-16 h-16 stroke-1">
            <FileQuestion />
          </Icon>
          <div className="text-muted-foreground font-light">Нет последних публикаций...</div>
        </div>
      )}
    </BackgroundField>
  )
}
