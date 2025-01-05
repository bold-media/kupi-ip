'use client'
import { cn } from '@/utils/cn'
import React, { useCallback } from 'react'
import Logo from '@/assets/Logo.svg'
import NextLink from 'next/link'
import { Settings } from '@payload-types'
import { getLinkProps } from '@/utils/getLinkProps'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/Sheet'
import { VisuallyHidden } from '@/components/VisuallyHidden'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'

export const Header = ({
  data,
}: {
  data: Partial<NonNullable<Settings['navigation']>['header']>
}) => {
  const pathname = usePathname()

  const isActiveLink = useCallback(
    (href: string) => {
      const cleanPathname = pathname.replace(/\/$/, '')
      const cleanHref = href.replace(/\/$/, '')

      return cleanPathname === cleanHref
    },
    [pathname],
  )

  return (
    <header
      className={cn([
        'fixed top-0 w-full h-header z-40',
        'bg-black/70 backdrop-blur-lg',
        'shadow-sm',
        'pr-[var(--removed-body-scroll-bar-size)]',
      ])}
    >
      <div className="container flex h-full">
        {/* Left side */}
        <div className="grow basis-1/2 md:basis-1/4 flex justify-start items-center">
          <NextLink href="/" aria-label="Вернуться на главную страницу">
            <Logo className="h-8 md:h-9" role="img" aria-labelledby="logoTitle" />
          </NextLink>
        </div>
        {/* Desktop / middle nav */}
        <nav className="hidden md:flex md:basis-1/2 justify-center items-center">
          {data?.links &&
            data?.links?.map(({ id, link }) => {
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
        {/* Right side */}
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon className="w-7 h-7" strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <SheetHeader>
                    <SheetClose asChild>
                      <NextLink
                        href="/"
                        aria-label="Вернуться на главную страницу"
                        className="mb-4 mr-auto"
                      >
                        <Logo className="h-8" role="img" aria-labelledby="logoTitle" />
                      </NextLink>
                    </SheetClose>

                    <VisuallyHidden>
                      <SheetTitle>Navigation Menu</SheetTitle>
                    </VisuallyHidden>
                  </SheetHeader>

                  <div className="flex-grow flex flex-col gap-2">
                    {data?.links &&
                      data?.links?.map(({ id, link }) => {
                        const linkProps = getLinkProps(link)
                        return (
                          <SheetClose key={id} asChild>
                            <Link {...linkProps} className="text-xl md:text-2xl">
                              {link?.label}
                            </Link>
                          </SheetClose>
                        )
                      })}
                  </div>

                  {data?.withSupportLink && data?.supportLink && (
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button variant="tertiary" asChild>
                          <Link {...getLinkProps(data?.supportLink)}>
                            {data?.supportLink?.label}
                          </Link>
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
