'use client'
import { RichText } from '@/modules/common/RichText'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { AccordionBlock } from '@payload-types'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as BaseAccordion,
} from '@/components/Accordion'
import React, { useState, useCallback, useRef } from 'react'

export const Accordion = (props: AccordionBlock) => {
  const { background, prefix, smileyTitle, content, items } = props
  const [openItem, setOpenItem] = useState(items?.[0]?.id || '')
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const handleMouseEnter = useCallback((itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setOpenItem(itemId)
    }, 200)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleClick = useCallback((itemId: string) => {
    setOpenItem(itemId)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      // Re-enable hover effects after delay
    }, 1500)
  }, [])

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <BackgroundField {...background}>
      {prefix === 'smiley' && (
        <div className="flex items-start gap-4 text-4xl font-light leading-normal mb-4 sm:mb-8 lg:mb-12">
          <div className="flex-none lg:mt-3">{':)'}</div>
          <h2 className="flex-1 text-right leading-[1] mb-8 text-[2rem] sm:text-[3.25rem] lg:text-[4.5625rem] italic">
            <RichText data={smileyTitle} enableGutter={false} prose={false} />
          </h2>
        </div>
      )}
      {prefix === 'richText' && (
        <RichText data={content} enableGutter={false} className="mb-4 sm:mb-8 lg:mb-12 md-text" />
      )}
      <BaseAccordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
        {items &&
          Array.isArray(items) &&
          items?.length > 0 &&
          items?.map(
            (item) =>
              item?.id && (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id || '')}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(item.id || '')}
                  className="transition-all duration-300"
                >
                  <AccordionTrigger className="group">
                    {/* Version without the indicator */}
                    <div className="relative flex items-center w-full">
                      {/* Commented out indicator
                     <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand-tertiary group-hover:h-full transition-all duration-200" />
                     */}
                      {item?.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="transition-opacity duration-200">
                      <RichText
                        data={item?.content}
                        enableGutter={false}
                        className="text-slate-100 text-left"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ),
          )}
      </BaseAccordion>
    </BackgroundField>
  )
}

Accordion.displayName = 'Accordion'
