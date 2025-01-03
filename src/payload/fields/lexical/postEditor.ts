import { Carousel } from '@/payload/blocks/Carousel/Carousel.config'
import { Image } from '@/payload/blocks/Image/Image.config'
import { BlocksFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const postEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      BlocksFeature({ blocks: [Carousel, Image] }),
    ]
  },
})
