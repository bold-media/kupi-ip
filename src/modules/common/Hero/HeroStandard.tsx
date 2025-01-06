import { Page } from '@payload-types'
import React from 'react'
import { RichText } from '../RichText'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const heroStandardVariants = cva('mt-header pt-20 lg:pt-[9.25rem]', {
  variants: {
    paddingBottom: {
      none: '',
      xs: 'pb-8 xs:pb-9 sm:pb-10 md:pb-11 lg:pb-12',
      sm: 'pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-20',
      md: 'pb-[rem-convert(80px)] xs:pb-24 sm:pb-28 md:pb-32 lg:pb-[rem-convert(148px)]',
      lg: 'pb-28 xs:pb-32 sm:pb-36 md:pb-40 lg:pb-44',
      xl: 'pb-36 xs:pb-40 sm:pb-44 md:pb-48 lg:pb-52',
    },
  },
  defaultVariants: {
    paddingBottom: 'md',
  },
})

type HeroStandardComponentProps = {
  className?: string
} & VariantProps<typeof heroStandardVariants> &
  Page['hero']

export const HeroStandard = ({ className, ...props }: HeroStandardComponentProps) => {
  const { richText, settings } = props
  return (
    <div
      className={cn(heroStandardVariants({ paddingBottom: settings?.paddingBottom }), className)}
    >
      <RichText data={richText} prose="standard" className="md-text small-header" />
    </div>
  )
}
