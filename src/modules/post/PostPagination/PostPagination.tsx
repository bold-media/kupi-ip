'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/Pagination'
import React from 'react'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import { pageParamName, postParsers } from '@/app/(app)/statii/searchParams'
interface PostPaginationProps {
  hasPrevPage: boolean
  hasNextPage: boolean
  totalPages: number
  prevPage: number | null | undefined
  nextPage: number | null | undefined
}

export const PostPagination = ({
  hasPrevPage,
  hasNextPage,
  totalPages,
  prevPage,
  nextPage,
}: PostPaginationProps) => {
  const [page, setPage] = useQueryState(pageParamName, postParsers[pageParamName])

  const getPageNumbers = (currentPage: number) => {
    const pages: (number | 'ellipsis')[] = [1]

    if (currentPage > 3) {
      pages.push('ellipsis')
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 1 || i === totalPages) continue
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis')
    }

    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  if (totalPages <= 1) return null

  const handlePageChange = (newPage: number | null | undefined) => {
    if (typeof newPage !== 'number') return
    setPage(newPage)
  }

  const pageNumbers = getPageNumbers(page)

  return (
    <Pagination className="py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => hasPrevPage && handlePageChange(prevPage)}
            className={!hasPrevPage ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        <div className="hidden sm:flex gap-1">
          {pageNumbers.map((pageNumber, index) => (
            <PaginationItem key={`${pageNumber}-${index}`}>
              {pageNumber === 'ellipsis' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => handlePageChange(pageNumber)}
                  isActive={page === pageNumber}
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <div className="sm:hidden flex items-center">
          <span className="text-sm">
            Страница {page} из {totalPages}
          </span>
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={() => hasNextPage && handlePageChange(nextPage)}
            className={!hasNextPage ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
