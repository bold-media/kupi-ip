import { Title } from '@/components/Title'
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
          <div className="flex-none mt-3">{':)'}</div>
          <Title level="h2" className="flex-1 text-right leading-none italic">
            <RichText data={smileyTitle} enableProse={false} enableGutter={false} />
          </Title>
        </div>
      )}
      {prefix === 'richText' && (
        <RichText
          data={content}
          enableGutter={false}
          size="mdScale"
          className="mb-4 sm:mb-8 lg:mb-12"
        />
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
                      size="baseScale"
                      className="text-slate-100"
                    />
                  </AccordionContent>
                </AccordionItem>
              ),
          )}
      </BaseAccordion>
    </BackgroundField>
  )
}
