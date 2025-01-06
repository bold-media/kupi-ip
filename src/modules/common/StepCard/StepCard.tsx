import { cn } from '@/utils/cn'
import React, { ComponentPropsWithRef } from 'react'
import classes from './StepCard.module.css'

interface Props extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
  title?: string | null | undefined
  description?: string | null | undefined
  number?: number
  highlighted?: boolean
}

export const StepCard = ({
  className,
  title,
  description,
  number,
  highlighted,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden min-h-64 flex flex-col justify-between',
        highlighted
          ? 'bg-gradient-radial from-[#1010BC] to-[#2C2CF7]'
          : 'bg-gradient-radial from-[#A7BDF6] to-[#C8D7FF]',
        className,
      )}
      {...props}
    >
      <div className="flex justify-between">
        <h3
          className={cn('text-2xl md:text-3xl font-light p-5 leading-normal', {
            'text-slate-900': highlighted === false,
          })}
        >
          {title}
        </h3>
        <div className="relative w-24 h-24">
          <div
            className={cn('absolute top-0 right-0 w-24 h-24 bg-[#5A5AFF]', classes.clipPathPip)}
          />
          <div className="absolute top-8 right-8  translate-x-1/2 -translate-y-1/2 text-white font-medium text-xl">
            {number}
          </div>
        </div>
      </div>
      <p className={cn('p-5 leading-[1.3]', { 'text-slate-900': highlighted === false })}>
        {description}
      </p>
    </div>
  )
}
