'use client'

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  isValidElement,
  cloneElement,
} from 'react'
import { cn } from '@/utils/cn'
import Logo from '@/assets/Logo.svg'
import NextLink from 'next/link'
import { Settings } from '@payload-types'
import { getLinkProps } from '@/utils/getLinkProps'
import { usePathname } from 'next/navigation'
import { Link } from '@/components/Link'
import { Hamburger } from '@/components/Hamburger'
import { useResizeObserver } from '@react-hookz/web'

// Utility to lock scroll
const lockScroll = (shouldLock: boolean) => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  const root = document.documentElement

  if (shouldLock) {
    root.style.setProperty('--removed-body-scroll-bar-size', `${scrollbarWidth}px`)
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  } else {
    root.style.removeProperty('--removed-body-scroll-bar-size')
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

// Utility for focus trapping
const useFocusTrap = (isActive: boolean, containerRefs: React.RefObject<HTMLElement | null>[]) => {
  useEffect(() => {
    if (!isActive) return

    // Get all focusable elements from all container refs
    const focusableElements = containerRefs
      .map((ref) =>
        ref.current?.querySelectorAll<HTMLElement>(
          'a[href]:not([disabled]), button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
      .flatMap((nodeList) => Array.from(nodeList || []))

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Only focus the first element if we're not already focused within the container
    if (!containerRefs.some((ref) => ref.current?.contains(document.activeElement))) {
      firstElement?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, containerRefs])
}

const wrapWithCloseBehavior = (
  children: React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>,
  onClose: () => void,
) => {
  if (isValidElement(children)) {
    const childOnClick = children.props.onClick

    const wrappedOnClick = (e: React.MouseEvent) => {
      onClose?.()

      requestAnimationFrame(() => {
        if (typeof childOnClick === 'function') {
          childOnClick(e)
        }
      })
    }

    return cloneElement(children, { onClick: wrappedOnClick, onClose } as any)
  }

  return children
}

export const Header = ({
  data,
}: {
  data: Partial<NonNullable<Settings['navigation']>>['header']
}) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const headerContentRef = useRef<HTMLDivElement>(null)

  const isActiveLink = useCallback(
    (href: string) => {
      const cleanPathname = pathname.replace(/\/$/, '')
      const cleanHref = href.replace(/\/$/, '')
      return cleanPathname === cleanHref
    },
    [pathname],
  )

  useFocusTrap(isOpen, [headerContentRef, wrapperRef])

  useEffect(() => {
    lockScroll(isOpen)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      lockScroll(false)
    }
  }, [isOpen])

  useResizeObserver(headerRef?.current, (entry) => {
    if (entry.contentRect.width > 1024 && isOpen) {
      setIsOpen(false)
    }
  })

  return (
    <>
      {/* Background Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Header Content */}
      <header
        ref={headerRef}
        className={cn([
          'fixed top-0 w-full z-50 transition-[height] duration-300',
          'bg-black/70 backdrop-blur-lg',
          'shadow-sm',
          'pr-[var(--removed-body-scroll-bar-size)]',
          isOpen ? 'h-auto' : 'h-header',
        ])}
      >
        <div ref={headerContentRef} className="container flex h-header">
          {/* Left Side */}
          <div className="grow basis-1/2 md:basis-1/4 flex justify-start items-center">
            {wrapWithCloseBehavior(
              <NextLink href="/" aria-label="Вернуться на главную страницу">
                <Logo className="h-8 md:h-9" role="img" aria-labelledby="logoTitle" />
              </NextLink>,
              () => setIsOpen(false),
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:basis-1/2 justify-center items-center">
            {data?.links?.map(({ id, link }) => {
              const linkProps = getLinkProps(link)
              return (
                <Link
                  key={id}
                  {...linkProps}
                  className={cn(
                    'font-regular uppercase text-sm px-4 py-3 transition-colors duration-200',
                    isActiveLink(linkProps.href)
                      ? 'text-slate-100'
                      : 'text-slate-300 hover:text-slate-100',
                  )}
                >
                  {link?.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Side */}
          <div className="grow basis-1/2 md:basis-1/4 flex justify-end items-center">
            <div className="hidden md:block">
              {data?.withSupportLink && data?.supportLink && (
                <Link
                  {...getLinkProps(data?.supportLink)}
                  className={cn(
                    'font-regular uppercase text-sm px-4 py-3 transition-colors duration-200',
                    isActiveLink(getLinkProps(data.supportLink).href)
                      ? 'text-slate-100'
                      : 'text-slate-300 hover:text-slate-100',
                  )}
                >
                  {data?.supportLink?.label}
                </Link>
              )}
            </div>
            <Hamburger
              isOpen={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="-mr-4 md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={wrapperRef}
          className={cn(
            'overflow-hidden transition-[max-height] duration-300 pb-6',
            isOpen
              ? 'max-h-[400px] opacity-100 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none',
          )}
        >
          <nav className="flex flex-col gap-2 px-4 items-end">
            {data?.links?.map(({ id, link }) => {
              const linkProps = getLinkProps(link)
              return wrapWithCloseBehavior(
                <Link key={id} {...linkProps} className="text-xl md:text-2xl font-light">
                  {link?.label}
                </Link>,
                () => setIsOpen(false),
              )
            })}

            {data?.withSupportLink && data?.supportLink && (
              <div className="mt-4">
                {wrapWithCloseBehavior(
                  <Link
                    {...getLinkProps(data?.supportLink)}
                    className="text-xl md:text-2xl font-light"
                  >
                    {data?.supportLink?.label}
                  </Link>,
                  () => setIsOpen(false),
                )}
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  )
}
