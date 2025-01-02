'use client'
import { OperatingSystem, useOS } from '@/hooks/useOS'
import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useResizeObserver } from '@react-hookz/web'
import { Button } from '@/components/Button'

interface OSFiltersProps {
  filter: '' | OperatingSystem
  setFilter: (value: '' | OperatingSystem) => void
}

interface FilterOption {
  label: string
  value: '' | OperatingSystem
}

const filterOptions: FilterOption[] = [
  {
    label: 'Все',
    value: '',
  },
  {
    label: 'Windows',
    value: OperatingSystem.Windows,
  },
  {
    label: 'MacOS',
    value: OperatingSystem.Mac,
  },
  {
    label: 'Linux',
    value: OperatingSystem.Linux,
  },
  {
    label: 'Android',
    value: OperatingSystem.Android,
  },
  {
    label: 'iOS',
    value: OperatingSystem.iOS,
  },
]

export const OSFilters = ({ filter, setFilter }: OSFiltersProps) => {
  const { isLoading, os } = useOS()
  const [isScrollable, setIsScrollable] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'start',
    active: isScrollable,
  })

  const checkScrollable = () => {
    if (!emblaApi) return

    const viewport = emblaApi.rootNode()
    const container = emblaApi.containerNode()
    const needsScroll = container.scrollWidth > viewport.clientWidth

    if (needsScroll !== isScrollable) {
      setIsScrollable(needsScroll)
    }
  }

  useResizeObserver(viewportRef.current, checkScrollable)

  useEffect(() => {
    if (emblaApi) {
      checkScrollable()
    }
  }, [emblaApi])

  useEffect(() => {
    if (!isLoading && os && os !== OperatingSystem.Unknown) {
      setFilter(os)

      if (emblaApi && isScrollable) {
        const selectedIndex = filterOptions.findIndex((option) => option.value === os)
        if (selectedIndex !== -1) {
          emblaApi.scrollTo(selectedIndex)
        }
      }
    }
  }, [setFilter, isLoading, os, emblaApi, isScrollable])

  return (
    <div className="overflow-hidden w-full pb-4" ref={viewportRef}>
      <div className="w-full" ref={emblaRef}>
        <div className={`flex gap-2 ${!isScrollable ? 'md:justify-center md:flex-wrap' : ''}`}>
          {filterOptions?.map((option) => {
            return (
              <Button
                key={option.value ?? 'all'}
                size="xs"
                uppercase={false}
                variant={filter === option.value ? 'tertiary' : 'outline'}
                onClick={() => filter !== option.value && setFilter(option?.value)}
              >
                {option.label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}