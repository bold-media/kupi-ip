'use client'
import { Category } from '@payload-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useQueryState, useQueryStates } from 'nuqs'
import { postParsers } from '@/app/(app)/blog/searchParams'
import { Button } from '@/components/Button'
import useEmblaCarousel from 'embla-carousel-react'
import { useResizeObserver } from '@react-hookz/web'

interface PostCategoriesProps {
  categories: Pick<Category, 'id' | 'name' | 'slug'>[]
}

export const PostCategories = ({ categories }: PostCategoriesProps) => {
  // const [category, setCategory] = useQueryState(categoryParamName, postParsers[categoryParamName])
  const [{ category }, setQuery] = useQueryStates(postParsers)
  const [isScrollable, setIsScrollable] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'start',
    active: isScrollable,
  })

  const checkScrollable = useCallback(() => {
    if (!emblaApi) return

    const viewport = emblaApi.rootNode()
    const container = emblaApi.containerNode()
    const needsScroll = container.scrollWidth > viewport.clientWidth

    if (needsScroll !== isScrollable) {
      setIsScrollable(needsScroll)
    }
  }, [emblaApi, isScrollable, setIsScrollable])

  useResizeObserver(viewportRef.current, checkScrollable)

  useEffect(() => {
    if (emblaApi) {
      checkScrollable()
    }
  }, [emblaApi, checkScrollable])

  return (
    <div className="overflow-hidden w-full pb-4" ref={viewportRef}>
      <div className="w-full" ref={emblaRef}>
        <div className={`flex gap-2 ${!isScrollable ? 'md:justify-center md:flex-wrap' : ''}`}>
          <Button
            size="xs"
            variant={category === '' ? 'tertiary' : 'outline'}
            onClick={() => (category !== '' ? setQuery({ category: '', page: 1 }) : undefined)}
            className="shrink-0"
          >
            Все
          </Button>
          {categories &&
            Array.isArray(categories) &&
            categories?.map((item) => (
              <Button
                key={item.id}
                variant={category === item.slug ? 'tertiary' : 'outline'}
                onClick={() =>
                  category !== item.slug && typeof item?.slug === 'string'
                    ? setQuery({ category: item.slug, page: 1 })
                    : undefined
                }
                size="xs"
                className="shrink-0"
              >
                {item?.name}
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}
