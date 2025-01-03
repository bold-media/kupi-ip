import React from 'react'
import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button'
import { cn } from '@/utils/cn'
import { Page } from '@payload-types'
import { getLinkProps } from '@/utils/getLinkProps'
import { Link } from '@/components/Link'

type PayloadLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string
  newTab?: boolean | null
  reference?: {
    relationTo: 'page'
    value: string | Page
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const PayloadLink = (props: PayloadLinkType) => {
  const { appearance = 'inline', children, className, label, size } = props

  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} {...getLinkProps(props)}>
        {label}
        {children}
      </Link>
    )
  }

  return (
    <Button asChild size={size} variant={appearance}>
      <Link className={cn(className)} {...getLinkProps(props)}>
        {label}
        {children}
      </Link>
    </Button>
  )
}
