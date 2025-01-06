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
    prose: {
      standard:
        'prose prose-slate dark:prose-invert prose-mobile sm:prose-tablet lg:prose-desktop mx-auto',
      blog: 'prose prose-slate dark:prose-invert prose-blog-mobile sm:prose-blog-tablet lg:prose-blog-desktop mx-auto',
      false: '',
    },
  },
  defaultVariants: {
    enableGutter: true,
    prose: 'standard',
  },
})

export interface RichTextProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof richTextVariants> {
  data: SerializedEditorState<SerializedLexicalNode> | undefined | null
}
