'use client'
import { cn } from '@/utils/cn'
import Image, { type ImageProps } from 'next/image'
import { ComponentPropsWithRef, useEffect, useRef, useState } from 'react'

import classes from './VideoBackground.module.css'

interface VideoBackgroundProps extends ComponentPropsWithRef<'div'> {
  src: {
    desktop?: {
      webm?: string
      mp4?: string
    }
    mobile?: {
      webm?: string
      mp4?: string
    }
  }
  poster: ImageProps['src']
  alt: string
  priority?: boolean
  withBlur?: boolean
}

export const VideoBackground = ({
  className,
  src,
  poster,
  alt,
  priority = false,
  withBlur = false,
  ...props
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0

    const handleReady = () => {
      if (video.readyState >= 2) {
        requestAnimationFrame(() => {
          setIsVideoReady(true)
        })
      }
    }

    if (video.readyState >= 2) {
      handleReady()
    }

    video.addEventListener('loadeddata', handleReady)
    video.addEventListener('canplay', handleReady)

    return () => {
      video.removeEventListener('loadeddata', handleReady)
      video.removeEventListener('canplay', handleReady)
    }
  }, [])

  return (
    <div
      className={cn('absolute inset-0 w-full h-full overflow-hidden -z-10', className)}
      {...props}
    >
      {withBlur && (
        <div
          className={cn(
            'absolute inset-0 w-full h-full top-0 left-0 z-10 backdrop-blur-sm',
            classes.blurMask,
          )}
        />
      )}
      <Image
        src={poster}
        alt={alt}
        fill
        className={cn(
          'object-cover transition-opacity duration-0',
          isVideoReady ? 'opacity-0' : 'opacity-100',
        )}
        priority={priority}
        placeholder="blur"
      />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-0',
          isVideoReady ? 'opacity-100' : 'opacity-0',
        )}
      >
        {src?.mobile?.webm && (
          <source src={src?.mobile?.webm} type="video/webm" media="(max-width: 48em)" />
        )}
        {src?.mobile?.mp4 && (
          <source src={src?.mobile?.mp4} type="video/mp4" media="(max-width: 48em)" />
        )}
        {src?.desktop?.webm && <source src={src?.desktop?.webm} type="video/webm" />}
        {src?.desktop?.mp4 && <source src={src?.desktop?.mp4} type="video/mp4" />}
      </video>
    </div>
  )
}
