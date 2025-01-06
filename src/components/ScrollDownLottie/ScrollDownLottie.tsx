'use client'
import dynamic from 'next/dynamic'
import mouseAnimation from '@/assets/Mouse.json'
import swipeAnimation from '@/assets/Swipe.json'
import { ComponentPropsWithRef, useEffect, useState } from 'react'
import { useHasMouse } from '@/hooks/useHasMouse'
import { cn } from '@/utils/cn'
import { motion, useScroll, useTransform } from 'motion/react'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

type DisplayState = 'none' | 'mouse' | 'touch'

export const ScrollDownLottie = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof motion.div>) => {
  const { hasMouse, isDetecting } = useHasMouse()
  const [displayState, setDisplayState] = useState<DisplayState>('none')
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  useEffect(() => {
    if (!isDetecting && displayState === 'none') {
      setDisplayState(hasMouse ? 'mouse' : 'touch')
    }
  }, [hasMouse, isDetecting, displayState])

  return (
    <motion.div style={{ opacity }} className={cn('absolute', className)} {...props}>
      {displayState === 'touch' ? (
        <Lottie
          animationData={swipeAnimation}
          className="relative w-16 h-16 animate-fade-in duration-700"
        />
      ) : displayState === 'mouse' ? (
        <Lottie
          animationData={mouseAnimation}
          className="relative w-16 h-16 animate-fade-in duration-700"
        />
      ) : null}
    </motion.div>
  )
}
