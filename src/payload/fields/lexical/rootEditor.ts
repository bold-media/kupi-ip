import { Button } from '@/payload/blocks/Button/Button.config'
import { YellowText } from '@/payload/inlineBlocks/YellowText'
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  IndentFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

export const rootEditor = lexicalEditor({
  features: () => {
    return [
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      InlineCodeFeature(),
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      LinkFeature({ enabledCollections: ['page', 'post', 'download', 'guide'] }),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      InlineToolbarFeature(),
      BlocksFeature({
        inlineBlocks: [YellowText],
        blocks: [Button],
      }),
    ]
  },
})
