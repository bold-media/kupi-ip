import React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { Spinner } from '../Spinner'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden',
    'text-sm font-regular transition-colors active-class',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    'shrink-0 border border-transparent',
  ],
  {
    variants: {
      variant: {
        default: [
          'relative text-primary-foreground shadow',
          'before:absolute before:inset-0 before:transition-opacity before:duration-150 before:-z-10',
          'before:bg-gradient-to-b before:brand-gradient-active before:opacity-0',
          'hover:before:opacity-100',
          'bg-gradient-to-b brand-gradient',
          'after:absolute after:inset-0 after:bg-black/[0.03] after:opacity-0 after:z-[5]',
          'hover:after:opacity-100 after:transition-opacity',
          '[&>*:not(.spinner-container)]:z-10 [&>*:not(.spinner-container)]:relative',
        ],
        secondary: [
          'relative text-foreground shadow',
          'before:absolute before:inset-0 before:transition-opacity before:duration-150 before:-z-10',
          'before:bg-gradient-to-b before:brand-gradient-secondary-active before:opacity-0',
          'hover:before:opacity-100',
          'bg-gradient-to-b brand-gradient-secondary',
          'after:absolute after:inset-0 after:bg-black/[0.03] after:opacity-0 after:z-[5]',
          'hover:after:opacity-100 after:transition-opacity',
          '[&>*:not(.spinner-container)]:z-10 [&>*:not(.spinner-container)]:relative',
        ],
        tertiary: [
          'bg-brand-tertiary text-brand-tertiary-foreground hover:bg-brand-tertiary-active',
        ],
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-brand-tertiary underline-offset-4 underline hover:text-brand-tertiary-active italic',
      },
      size: {
        xs: 'text-md h-[1.75rem] px-4 font-regular',
        sm: 'h-8 px-3 text-xs xs:h-10 xs:px-4 text-sm',
        default: 'h-10 px-4 xs:h-12 xs:px-6',
        lg: 'h-11 px-5 xs:h-14 xs:px-8',
        xl: 'h-11 px-10',
        icon: 'h-9 w-9',
        iconText: 'h-9 px-3 xs:px-4 text-xs',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
      uppercase: {
        true: 'uppercase',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'md',
      uppercase: true,
    },
  },
)

export interface ButtonProps
  extends React.ComponentPropsWithRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const getSpinnerVariant = (buttonVariant: ButtonProps['variant'] = 'default') => {
  switch (buttonVariant) {
    case 'default':
      return 'default'
    default:
      return 'white'
  }
}

// Helper function to determine spinner size based on button size
const getSpinnerSize = (buttonSize: ButtonProps['size'] = 'default') => {
  switch (buttonSize) {
    case 'sm':
      return 'xs'
    case 'lg':
      return 'sm'
    case 'xl':
      return 'md'
    case 'icon':
      return 'sm'
    default:
      return 'sm'
  }
}

export const Button = ({
  className,
  variant,
  size,
  uppercase,
  children,
  asChild = false,
  disabled,
  loading = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonVariants({ variant, uppercase, size, className }), {
        'disabled:pointer-events-none text-transparent relative select-none': loading,
        'disabled:pointer-events-none disabled:opacity-50': disabled && !loading,
      })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center spinner-container">
          <Spinner size={getSpinnerSize(size)} variant={getSpinnerVariant(variant)} />
        </div>
      )}
      <Slottable>{children}</Slottable>
    </Comp>
  )
}

Button.displayName = 'Button'
