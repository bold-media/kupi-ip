import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithRef, createElement } from 'react'

const titleVariants = cva('font-light', {
  variants: {
    level: {
      h1: [
        'text-[2.5rem] leading-[1.1]',
        'md:text-[3.75rem] md:leading-[1]',
        'lg:text-[5rem] lg:leading-[1]',
        'xl:text-[6.25rem] xl:leading-[1]',
      ],
      h2: [
        'text-[2rem] leading-[1.2]',
        'md:text-[2.75rem] md:leading-[1.1]',
        'lg:text-[3.5rem] lg:leading-[1.1]',
        'xl:text-[4.125rem] xl:leading-[1.1]',
      ],
      h3: [
        'text-[1.75rem] leading-[1.3]',
        'md:text-[2rem] md:leading-[1.2]',
        'lg:text-[2.5rem] lg:leading-[1.2]',
        'xl:text-[3rem] xl:leading-[1.2]',
      ],
      h4: [
        'text-[1.5rem] leading-[1.4]',
        'md:text-[1.75rem] md:leading-[1.3]',
        'lg:text-[2rem] lg:leading-[1.3]',
        'xl:text-[2.25rem] xl:leading-[1.3]',
      ],
    },
  },
  defaultVariants: {
    level: 'h2',
  },
})

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4'
type Props<T extends HeadingElement> = ComponentPropsWithRef<T>
export type TitleProps = Props<HeadingElement> & VariantProps<typeof titleVariants>

export const Title = ({ level = 'h1', className, children, ...props }: TitleProps) => {
  return createElement(
    level || 'h1',
    {
      className: cn(titleVariants({ level }), className),
      ...props,
    },
    children,
  )
}
Title.displayName = 'Title'
