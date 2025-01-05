'use client'
import { type ComponentProps, type MouseEvent } from 'react'
import NextLink from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { canUseDOM } from '@/utils/canUseDOM'

type LinkProps = ComponentProps<typeof NextLink>

export const Link = ({ href = '/', onClick, ...props }: LinkProps) => {
  const router = useRouter()
  const pathname = usePathname()

  if (typeof href === 'string' && href.startsWith('#') && canUseDOM) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const id = href.replace('#', '')

      if (document.getElementById(id)) {
        window.location.hash = href
      } else if (pathname !== '/') {
        router.push(`/${href}`)
      } else {
        window.location.hash = href
      }
    }

    return <NextLink href={href} onClick={handleClick} {...props} />
  }

  return <NextLink href={href} onClick={onClick} {...props} />
}