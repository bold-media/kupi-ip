import { Page } from '@payload-types'
import React from 'react'
import { RichText } from '../RichText'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const heroStandardVariants = cva('mt-header', {
  variants: {
    paddingTop: {
      none: '',
      xs: 'pt-8 xs:pt-9 sm:pt-10 md:pt-11 lg:pt-12',
      sm: 'pt-10 xs:pt-12 sm:pt-14 md:pt-16 lg:pt-20',
      md: 'pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-[9.25rem]',
      lg: 'pt-28 xs:pt-32 sm:pt-36 md:pt-40 lg:pt-44',
      xl: 'pt-36 xs:pt-40 sm:pt-44 md:pt-48 lg:pt-52',
    },
    paddingBottom: {
      none: '',
      xs: 'pb-8 xs:pb-9 sm:pb-10 md:pb-11 lg:pb-12',
      sm: 'pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-20',
      md: 'pb-20 xs:pb-24 sm:pb-28 md:pb-32 lg:pb-[9.25rem]',
      lg: 'pb-28 xs:pb-32 sm:pb-36 md:pb-40 lg:pb-44',
      xl: 'pb-36 xs:pb-40 sm:pb-44 md:pb-48 lg:pb-52',
    },
  },
  defaultVariants: {
    paddingTop: 'md',
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
      className={cn(
        heroStandardVariants({
          paddingTop: settings?.paddingTop,
          paddingBottom: settings?.paddingBottom,
        }),
        className,
      )}
    >
      <RichText data={richText} prose="standard" className="md-text small-header" />
    </div>
  )
}
