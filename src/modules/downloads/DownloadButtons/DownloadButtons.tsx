'use client'
import { Download } from '@payload-types'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { OperatingSystem, OS_DISPLAY_NAMES, useOS } from '@/hooks/useOS'
import { osIconMap } from './osIconMap'
import { cn } from '@/utils/cn'
import NextLink from 'next/link'
import { getLinkProps } from '@/utils/getLinkProps'
import { Link } from '@/components/Link'

interface Props {
  name: string
  platforms: Download['platforms']
  links: Download['links']
  buyLink: Download['buyLink']
}

export const DownloadButtons = ({ name, platforms, links, buyLink }: Props) => {
  const { isLoading, os } = useOS()
  const [currentOS, setCurrentOS] = useState<OperatingSystem | null>(
    platforms?.length
      ? (Object.values(OperatingSystem).find(
          (enumValue) => enumValue.toLowerCase() === platforms[0],
        ) ?? null)
      : null,
  )

  useEffect(() => {
    if (isLoading || !os || os === OperatingSystem.Unknown) return
    if (!platforms?.includes(os.toLowerCase() as 'windows' | 'macos' | 'linux' | 'android' | 'ios'))
      return
    if (currentOS === os) return

    setCurrentOS(os)
  }, [isLoading, os, currentOS, setCurrentOS, platforms])

  return (
    <div className="flex flex-col items-center gap-4">
      {Array.isArray(platforms) && platforms?.length > 0 && (
        <div className="flex gap-1 justify-center">
          {platforms?.map((platform) => {
            const Icon = osIconMap?.[platform]
            if (!Icon) return null
            return (
              <Button
                key={platform}
                variant="ghost"
                size="icon"
                onClick={() => setCurrentOS(platform as any)}
                className="w-20 h-20 flex-col normal-case"
              >
                <Icon className="w-8 h-8" active={platform === currentOS} />
                <div className={cn({ 'brand-gradient-text': platform === currentOS })}>
                  {OS_DISPLAY_NAMES[platform]}
                </div>
              </Button>
            )
          })}
        </div>
      )}
      <div className="flex flex-col justify-center">
        <Button asChild>
          <NextLink
            href={
              currentOS && currentOS !== OperatingSystem.Unknown
                ? (links?.[
                    currentOS.toLowerCase() as 'windows' | 'macos' | 'linux' | 'android' | 'ios'
                  ] ?? '')
                : ''
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Скачать для {typeof currentOS === 'string' ? OS_DISPLAY_NAMES[currentOS] : ''}
          </NextLink>
        </Button>
        {buyLink && (
          <Button variant="link" asChild>
            <Link {...getLinkProps(buyLink)}>Купить ключ для {name}</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
