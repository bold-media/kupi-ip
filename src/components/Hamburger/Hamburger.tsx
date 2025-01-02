import React, { ComponentPropsWithRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const hamburgerVariants = cva(
  'relative flex justify-center items-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background group',
  {
    variants: {
      variant: {
        default: 'text-foreground hover:text-foreground/80',
        outline: 'border border-input hover:text-accent-foreground',
        ghost: 'hover:text-accent-foreground',
      },
      size: {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

interface HamburgerProps
  extends ComponentPropsWithRef<'button'>,
    VariantProps<typeof hamburgerVariants> {
  asChild?: boolean
}

export const Hamburger = ({ className, variant, size = 'md', ...props }: HamburgerProps) => {
  const sizeClass = {
    sm: 'w-4',
    md: 'w-5',
    lg: 'w-6',
  }[size ?? 'md']

  return (
    <button
      type="button"
      className={cn(hamburgerVariants({ variant, size }), className)}
      {...props}
    >
      <div className={cn('relative w-full h-[40%]', sizeClass)}>
        <span
          className="absolute top-0 left-0 right-0 h-[2px] bg-current transform origin-center transition-all duration-200
                       group-data-[state=open]:top-[50%] group-data-[state=open]:-translate-y-[50%] group-data-[state=open]:rotate-45"
        />
        <span
          className="absolute top-[50%] left-0 right-0 h-[2px] bg-current -translate-y-[50%] transform origin-center transition-all duration-200
                       group-data-[state=open]:opacity-0"
        />
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-current transform origin-center transition-all duration-200
                       group-data-[state=open]:top-[50%] group-data-[state=open]:-translate-y-[50%] group-data-[state=open]:-rotate-45"
        />
      </div>
    </button>
  )
}

Hamburger.displayName = 'Hamburger'
