import { Page, Post } from '@payload-types'

interface LinkProps {
  type?: ('reference' | 'custom') | null | undefined
  newTab?: boolean | null
  reference?: {
    relationTo: 'page' | 'post' | 'guide'
    value: string | Page | Post
  } | null
  url?: string | null
  label?: string
}

interface ReturnLinkProps {
  href: string
  target?: '_blank'
  rel?: 'noopener noreferrer'
}

export const getLinkProps = (link: LinkProps): ReturnLinkProps => {
  let url = '/'

  if (link.type === 'custom' && link?.url) {
    url = link.url
  } else if (link?.type === 'reference' && link?.reference?.value) {
    const { relationTo, value } = link.reference

    switch (relationTo) {
      case 'page':
        url = typeof value === 'string' ? `/${value}` : `/${(value as Page)?.pathname}`
        break
      case 'post':
        url = typeof value === 'string' ? `statii/${value}` : `statii/${(value as Post)?.slug}`
        break
      default:
        url = '/'
    }
  }
  const props: ReturnLinkProps = {
    href: url,
  }

  if (link.newTab) {
    props.target = '_blank'
    props.rel = 'noopener noreferrer'
  }

  return props
}
