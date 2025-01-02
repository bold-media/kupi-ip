import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithRef } from 'react'

const borderGlowVariants = cva([], {
  variants: {
    variant: {
      default: [
        'bg-[linear-gradient(to_right,#00205A,#000013_50%,#00205A)]',
        '[background-clip:border-box]',
        'border',
        'border-transparent',
        'rounded-xl',
        'relative',
        // 'isolate',
        'before:content-[""]',
        'before:absolute',
        'before:inset-0',
        'before:p-[1px]',
        'before:rounded-xl',
        'before:bg-[var(--background)]',
        'before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        'before:[-webkit-mask-composite:xor]',
        'before:[mask-composite:exclude]',
        'before:-z-10',
      ],
      highlighted: [
        'bg-[radial-gradient(circle,#3939FF_0%,#0404AD_100%)]',
        '[background-clip:border-box]',
        'border',
        'border-transparent',
        'rounded-xl',
        'relative',
        // 'isolate',
        'before:content-[""]',
        'before:absolute',
        'before:inset-0',
        'before:p-[1px]',
        'before:rounded-xl',
        'before:bg-[var(--background)]',
        'before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        'before:[-webkit-mask-composite:xor]',
        'before:[mask-composite:exclude]',
        'before:-z-10',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const brandCardVariants = cva(['rounded-xl', 'w-full h-full', 'overflow-hidden'], {
  variants: {
    variant: {
      flareHorizontal: ['bg-[linear-gradient(290deg,#140961_0%,#000013_18%)]'],
      flareVertical: 'bg-[radial-gradient(50%_23.24%_at_50%_0%,#00008F_0%,#000013_100%)]',
      verticalDoubleFlare: [
        'bg-[#010126]',
        'relative',
        'before:absolute before:inset-0 before:-z-[1] before:bg-[linear-gradient(0deg,rgba(12,60,255,0.2)_0%,rgba(12,60,255,0)_28.61%)]',
        'after:absolute after:inset-0 after:-z-[1] after:bg-[radial-gradient(31.64%_31.64%_at_50%_0%,rgba(12,60,255,0.4)_0%,rgba(0,0,19,0)_100%)]',
      ],
      highlightedVertical: [
        'bg-[radial-gradient(50%_23.24%_at_50%_0%,#3939FF_0%,#0404AD_100%)]',
        '[box-shadow:inset_0px_4px_6px_rgba(255,255,255,0.3)]',
      ],
      highlightedHorizontal: [
        'bg-[radial-gradient(200%_200%_at_-20%_-20%,#1010BC_30%,#2C2CF7_100%)]',
      ],
    },
    size: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
  },
  defaultVariants: {
    variant: 'flareVertical',
    size: 'md',
  },
})

export interface BrandCardProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof brandCardVariants> {}

export const BrandCard = ({ className, variant, size, ...props }: BrandCardProps) => (
  <div
    className={borderGlowVariants({
      variant: variant?.startsWith('highlighted') ? 'highlighted' : 'default',
    })}
  >
    <div
      className={cn(brandCardVariants({ variant, size }), 'relative z-10', className)}
      {...props}
    />
  </div>
)

BrandCard.displayName = 'BrandCard'
