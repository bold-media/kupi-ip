'use client'
import { useHasMouse } from '@/hooks/useHasMouse'
import { cn } from '@/utils/cn'
import React, { ComponentPropsWithRef, useEffect, useState } from 'react'
import ArrowDown from '@/assets/icon-arrow-narrow-down.svg'
import ArrowUp from '@/assets/icon-arrow-narrow-up.svg'
import Pointer from '@/assets/icon-pointer.svg'
import Mouse from '@/assets/icon-mouse.svg'

type DisplayState = 'none' | 'mouse' | 'touch'

export const ScrollDown = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
  const { hasMouse, isDetecting } = useHasMouse()
  const [displayState, setDisplayState] = useState<DisplayState>('none')

  useEffect(() => {
    if (!isDetecting && displayState === 'none') {
      setDisplayState(hasMouse ? 'mouse' : 'touch')
    }
  }, [hasMouse, isDetecting, displayState])

  return (
    <div className={cn('absolute', className)} {...props}>
      {displayState === 'touch' ? (
        <div className="relative w-8 h-8 animate-fade-in duration-700">
          <ArrowUp className="w-8 h-8" />
          <Pointer className="w-8 h-8 absolute -bottom-3 -right-4 animate-bob-and-swipe" />
        </div>
      ) : displayState === 'mouse' ? (
        <div className="relative w-8 h-8 animate-fade-in duration-700">
          <ArrowDown className="w-8 h-8 animate-bob-down" />
          <Mouse className="absolute -top-2 -translate-y-full" />
        </div>
      ) : null}
    </div>
  )
}
