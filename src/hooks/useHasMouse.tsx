import { canUseDOM } from '@/utils/canUseDOM'
import { useEffect, useState } from 'react'

export const useHasMouse = () => {
  const [hasMouse, setHasMouse] = useState<boolean | null>(null)
  const [isDetecting, setIsDetecting] = useState(true)

  useEffect(() => {
    if (!canUseDOM) return

    const detectInitialMouse = () => {
      if (!canUseDOM) return false

      const hasFinePtrSupport = window.matchMedia('(pointer: fine)').matches

      const hasHoverSupport = window.matchMedia('(hover: hover)').matches

      const isNotTouch = !('ontouchstart' in window || navigator.maxTouchPoints > 0)

      setHasMouse(hasFinePtrSupport && hasHoverSupport && isNotTouch)
      setIsDetecting(false)
    }

    const handleMouseMove = () => {
      if (hasMouse === false || hasMouse === null) {
        setHasMouse(true)
      }
    }

    const handleTouchStart = () => {
      const hasFinePtrSupport = window.matchMedia('(pointer: fine)').matches
      if (hasFinePtrSupport) return

      setHasMouse(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart)

    detectInitialMouse()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [hasMouse])

  return {
    hasMouse: hasMouse ?? false,
    isDetecting,
  } as const
}
