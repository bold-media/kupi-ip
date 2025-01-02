'use client'

import React, { ComponentPropsWithRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/utils/cn'
export const Accordion = AccordionPrimitive.Root

export const AccordionItem = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={cn('border-b border-slate-100/40', className)} {...props} />
)
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 italic items-start justify-between py-4 transition-all text-left text-slate-200 hover:text-white [&[data-state=open]]:text-white [&[data-state=open]>svg]:rotate-90',
        className,
      )}
      {...props}
    >
      <h3 className="font-light text-lg md:text-xl lg:text-2xl">{children}</h3>

      <ArrowUpRight className="h-6 w-6 stroke-[1.5] shrink-0 text-slate-100 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
)
AccordionContent.displayName = 'AccordionContent'
