import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/Breadcrumbs/Breadcrumbs'
import React from 'react'

type PostBreadcrumbsProps = {
  title: string
}

export const PostBreadcrumbs = ({ title }: PostBreadcrumbsProps) => {
  return (
    <Breadcrumb className="py-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={'/statii'}>Статьи</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="truncate max-w-24">{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
