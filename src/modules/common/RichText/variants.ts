import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithRef } from 'react'

export const richTextVariants = cva('', {
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

export interface RichTextProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof richTextVariants> {
  data: SerializedEditorState<SerializedLexicalNode> | undefined | null
}
