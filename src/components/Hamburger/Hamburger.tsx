'use client'

import React, { ComponentPropsWithRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const hamburgerVariants = cva(
  [
    'relative flex items-center justify-center w-full h-full',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'ring-offset-background',
  ],
  {
    variants: {
      variant: {
        default: 'text-slate-100 hover:text-white',
        ghost: 'text-slate-300 hover:text-slate-100',
      },
      size: {
        default: 'h-12 w-12',
        lg: 'h-14 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const lineWidthVariants = cva('', {
  variants: {
    size: {
      default: 'w-7',
      lg: 'w-8',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface HamburgerProps
  extends ComponentPropsWithRef<'button'>,
    VariantProps<typeof hamburgerVariants> {
  isOpen?: boolean
}

export const Hamburger = ({ className, variant, size, isOpen, ...props }: HamburgerProps) => {
  return (
    <button
      type="button"
      data-state={isOpen ? 'open' : 'closed'}
      className={cn(hamburgerVariants({ variant, size }), className)}
      {...props}
    >
      <div className="relative flex items-center justify-center h-6 w-full">
        {/* Top Bar */}
        <span
          className={cn(
            'absolute h-[2px] bg-current rounded-full transition-all duration-200',
            lineWidthVariants({ size }),
            isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[12%]',
          )}
        />
        {/* Middle Bar */}
        <span
          className={cn(
            'absolute h-[2px] bg-current rounded-full transition-opacity duration-200',
            lineWidthVariants({ size }),
            isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2',
          )}
        />
        {/* Bottom Bar */}
        <span
          className={cn(
            'absolute h-[2px] bg-current rounded-full transition-all duration-200',
            lineWidthVariants({ size }),
            isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[12%]',
          )}
        />
      </div>
    </button>
  )
}

Hamburger.displayName = 'Hamburger'
