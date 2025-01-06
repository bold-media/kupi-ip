import { RichText } from '@/modules/common/RichText'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { AccordionBlock } from '@payload-types'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as BaseAccordion,
} from '@/components/Accordion'
import React from 'react'

export const Accordion = (props: AccordionBlock) => {
  const { background, prefix, smileyTitle, content, items } = props
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
      <BaseAccordion type="single" collapsible>
        {items &&
          Array.isArray(items) &&
          items?.length > 0 &&
          items?.map(
            (item) =>
              item?.id && (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item?.title}</AccordionTrigger>
                  <AccordionContent>
                    <RichText
                      data={item?.content}
                      enableGutter={false}
                      className="text-slate-100 text-left"
                    />
                  </AccordionContent>
                </AccordionItem>
              ),
          )}
      </BaseAccordion>
    </BackgroundField>
  )
}
