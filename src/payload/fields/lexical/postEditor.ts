import { BlocksFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const postEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      BlocksFeature({ blocks: [] }),
    ]
  },
})
