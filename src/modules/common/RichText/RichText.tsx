import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
} from '@payloadcms/richtext-lexical'
import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { CarouselBlock, ImageBlock } from '@payload-types'
import { Carousel } from '@/payload/blocks/Carousel/Carousel.component'
import { ComponentPropsWithRef } from 'react'
import { LinkJSXConverter } from './LinkJSXConverter'
import { Image } from '@/payload/blocks/Image/Image.component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CarouselBlock>
  | SerializedBlockNode<ImageBlock>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }): string => {
  const { value, relationTo } = linkNode.fields.doc!

  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }

  switch (relationTo) {
    case 'page':
      return `${value?.pathname}`
    case 'post':
      return `/post/${value?.slug}`
    case 'download':
      return `/download/${value?.slug}`
    case 'guide':
      return `/guide/${value?.slug}`
    default:
      return '#'
  }
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    carousel: ({ node }) => <Carousel {...node.fields} className="max-w-none" />,
    image: ({ node }) => <Image {...node.fields} />,
  },
})

const richTextVariants = cva('', {
  variants: {
    enableGutter: {
      true: 'container',
      false: 'max-w-none',
      empty: '',
    },
    enableProse: {
      true: 'prose prose-slate dark:prose-invert',
      false: '',
    },
    withPadding: {
      true: 'px-4 md:px-6',
      false: '',
    },
    size: {
      manual: '',
      baseScale: 'md:prose-md xl:prose-lg',
      mdScale: 'prose-md md:prose-lg lg:prose-xl xl:prose-2xl',
      pageTitle: 'prose-md md:prose-lg',
      lgScale: 'prose-md sm:prose-lg md:prose-xl lg:prose-2xl',
      blog: 'prose-xs sm:prose-sm md:prose-md lg:prose-lg',
    },
  },
  defaultVariants: {
    size: 'manual',
    enableGutter: true,
    enableProse: true,
    withPadding: false,
  },
})

interface RichTextProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof richTextVariants> {
  data: SerializedEditorState<SerializedLexicalNode> | undefined | null
}

export const RichText = (props: RichTextProps) => {
  const {
    className,
    enableProse = true,
    enableGutter = true,
    size,
    withPadding,
    data,
    ...rest
  } = props

  if (!data) return null

  return (
    <RichTextWithoutBlocks
      converters={jsxConverters as any}
      data={data}
      className={cn(
        richTextVariants({
          enableGutter,
          enableProse,
          size,
          withPadding,
        }),
        className,
      )}
      {...rest}
    />
  )
}
