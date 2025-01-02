import React, { ComponentProps, ComponentPropsWithRef } from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/utils/cn'
import { ButtonProps, buttonVariants } from '@/components/Button/Button'

export const Pagination = ({ className, ...props }: ComponentPropsWithRef<'nav'>) => (
  <nav
    role="navigation"
    aria-label="пагинация"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

export const PaginationContent = ({ className, ...props }: ComponentPropsWithRef<'ul'>) => (
  <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />
)
PaginationContent.displayName = 'PaginationContent'

export const PaginationItem = ({ className, ...props }: ComponentPropsWithRef<'li'>) => (
  <li className={cn('', className)} {...props} />
)
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  ComponentPropsWithRef<'button'>

export const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  onClick,
  ...props
}: PaginationLinkProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'tertiary' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

export const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Вернуться на предыдущую страницу"
    size="iconText"
    className={cn('', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Назад</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

export const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Перейти на следующую страницу"
    size="iconText"
    className={cn('', className)}
    {...props}
  >
    <span>Вперед</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

export const PaginationEllipsis = ({ className, ...props }: ComponentPropsWithRef<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Ещё</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'
