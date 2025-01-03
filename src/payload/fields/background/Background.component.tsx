import { LensFlare } from '@/modules/common/LensFlare'
import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const backgroundVariants = cva('relative w-full', {
  variants: {
    type: {
      none: '',
      darkBlue: 'bg-gradient-to-br from-brand-secondary-dark to-transparent',
      black: 'bg-slate-950',
      blue: 'bg-gradient-to-b from-[#0606C0] to-[#00008F]',
      flare: '',
      doubleFlare: '',
    },
    paddingTop: {
      none: '',
      xs: 'pt-8 xs:pt-9 sm:pt-10 md:pt-11 lg:pt-12',
      sm: 'pt-10 xs:pt-12 sm:pt-14 md:pt-16 lg:pt-20',
      md: 'pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36',
      lg: 'pt-28 xs:pt-32 sm:pt-36 md:pt-40 lg:pt-44',
      xl: 'pt-36 xs:pt-40 sm:pt-44 md:pt-48 lg:pt-52',
    },
    paddingBottom: {
      none: '',
      xs: 'pb-8 xs:pb-9 sm:pb-10 md:pb-11 lg:pb-12',
      sm: 'pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-20',
      md: 'pb-20 xs:pb-24 sm:pb-28 md:pb-32 lg:pb-36',
      lg: 'pb-28 xs:pb-32 sm:pb-36 md:pb-40 lg:pb-44',
      xl: 'pb-36 xs:pb-40 sm:pb-44 md:pb-48 lg:pb-52',
    },
  },
  defaultVariants: {
    type: 'darkBlue',
    paddingTop: 'md',
    paddingBottom: 'md',
  },
})

type BackgroundComponentProps = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  withContainer?: boolean
} & VariantProps<typeof backgroundVariants>

export const BackgroundField = (props: BackgroundComponentProps) => {
  const {
    type,
    paddingTop,
    paddingBottom,
    children,
    className,
    containerClassName,
    withContainer = true,
  } = props

  return (
    <section
      className={cn(
        backgroundVariants({ type, paddingTop, paddingBottom }),
        'overflow-hidden',
        className,
      )}
    >
      {type === 'flare' && <LensFlare size="xl" className="top-0 left-1/2" />}
      {type === 'doubleFlare' && (
        <>
          <LensFlare size="2xl" className="top-0 left-1/2" />
          <LensFlare variant="flipped" size="md" className="bottom-0 left-1/2" />
        </>
      )}

      <div className={cn(withContainer && 'container', containerClassName)}>{children}</div>
    </section>
  )
}
