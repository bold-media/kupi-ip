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
import Link from 'next/link'

export const RecentPosts = async (props: RecentPostsBlock) => {
  const { background, prefix, settings } = props
  const recentPosts = await getRecentPosts(settings?.limit ?? undefined)
  return (
    <BackgroundField {...background}>
      <RichText
        data={prefix}
        className="prose-md md:prose-lg lg:prose-xl xl:prose-2xl mb-4 sm:mb-8 lg:mb-12"
      />
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
            <CarouselPrevious absolute />
            <CarouselNext absolute />
          </div>
          <div className="mt-6 md:mt-8 flex justify-center">
            <Button variant="ghost" asChild>
              <Link href="/statii">
                Смотреть все
                <Icon>
                  <ArrowRight />
                </Icon>
              </Link>
            </Button>
          </div>
        </Carousel>
      ) : (
        <div className="text-center text-lg md:text-xl flex flex-col items-center gap-2 my-12 md:my-24">
          <Icon size="xl">
            <FileQuestion />
          </Icon>
          <div className="text-muted-foreground font-light">Нет последних публикаций...</div>
        </div>
      )}
    </BackgroundField>
  )
}