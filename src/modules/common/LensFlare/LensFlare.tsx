import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const lensFlareVariants = cva(
  [
    'absolute pointer-events-none overflow-visible -z-10',
    'w-[1px] h-[1px]',
    'before:absolute before:content-[""]',
    'before:-translate-x-1/2',
    'before:bg-[radial-gradient(31.64%_31.64%_at_50%_0%,hsl(var(--brand-bg-glow)/0.4)_0%,hsl(var(--brand-bg-glow)/0)_100%)]',
  ],
  {
    variants: {
      size: {
        xs: 'before:w-[30rem] before:h-[15rem]',
        sm: 'before:w-[48rem] before:h-[24rem]',
        md: 'before:w-[64rem] before:h-[32rem]',
        lg: 'before:w-[74rem] before:h-[37rem]',
        xl: 'before:w-[90rem] before:h-[45rem]',
        '2xl': 'before:w-[120rem] before:h-[60rem]',
      },
      variant: {
        default: [''],
        flipped: ['origin-bottom rotate-180'],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
)

interface LensFlareProps extends VariantProps<typeof lensFlareVariants> {
  className?: string
}

export const LensFlare = ({ size, variant, className }: LensFlareProps) => {
  return <div className={cn(lensFlareVariants({ size, variant }), className)} />
}
