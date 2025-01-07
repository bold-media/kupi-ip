import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedInlineBlockNode,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { cn } from '@/utils/cn'
import { ButtonBlockProps, CarouselBlock, ImageBlock, YellowTextInlineBlock } from '@payload-types'
import { Carousel } from '@/payload/blocks/Carousel/Carousel.component'
import { LinkJSXConverter } from './LinkJSXConverter'
import { Image } from '@/payload/blocks/Image/Image.component'
import { RichTextProps, richTextVariants } from './variants'
import { internalDocToHref } from './internalDocToHref'
import { ButtonBlock } from '@/payload/blocks/Button/Button.component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<ButtonBlockProps>
  | SerializedBlockNode<CarouselBlock>
  | SerializedBlockNode<ImageBlock>
  | SerializedInlineBlockNode<YellowTextInlineBlock>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    carousel: ({ node }) => <Carousel {...node.fields} className="max-w-none" />,
    // eslint-disable-next-line jsx-a11y/alt-text
    image: ({ node }) => <Image {...node.fields} />,
    button: ({ node }) => <ButtonBlock {...node.fields} />,
  },
  inlineBlocks: {
    yellowText: ({ node }) => <span className="text-brand-tertiary">{node?.fields?.text}</span>,
  },
})

export const RichText = (props: RichTextProps) => {
  const { className, enableGutter = true, prose, data, ...rest } = props

  if (!data) return null

  return (
    <RichTextWithoutBlocks
      converters={jsxConverters as any}
      data={data}
      className={cn(
        richTextVariants({
          enableGutter,
          prose,
        }),
        className,
      )}
      {...rest}
    />
  )
}
