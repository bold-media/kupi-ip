import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

// import type { BannerBlock as BannerBlockProps } from '@payload-types'
import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

type NodeTypes = DefaultNodeTypes
// | SerializedBlockNode<BannerBlockProps>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  // blocks: {
  //   banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
  // },
  blocks: {
    // banner: ({ node }) =>
  },
})

const richTextVariants = cva('', {
  variants: {
    gutter: {
      true: 'container',
      false: 'w-full',
    },
    prose: {
      true: 'prose prose-slate dark:prose-invert',
      false: '',
    },
  },
  defaultVariants: {
    gutter: true,
    prose: true,
  },
})

type Props = {
  data?: SerializedEditorState | null
  className?: string
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const RichText = (props: Props) => {
  const { className, enableProse = true, enableGutter = true, data, ...rest } = props

  if (!data) return null

  return (
    <RichTextWithoutBlocks
      converters={jsxConverters as any}
      data={data}
      className={cn(
        richTextVariants({
          gutter: enableGutter,
          prose: enableProse,
        }),
        className,
      )}
      {...rest}
    />
  )
}
