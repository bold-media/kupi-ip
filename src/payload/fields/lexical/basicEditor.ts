import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const basicEditor = (options?: {
  headingSizes?: Array<'h1' | 'h2' | 'h3' | 'h4'>
  disableHeadings?: boolean
  disableAlign?: boolean
}) => {
  return lexicalEditor({
    features: ({ rootFeatures }) => {
      const filteredFeatures = rootFeatures.filter((feature) => {
        const featureName = feature?.key
        const featuresToRemove = [
          'unorderedList',
          'orderedList',
          'blockquote',
          'indent',
          'horizontalRule',
        ]

        if (options?.disableAlign && featureName === 'align') {
          return false
        }

        if (options?.disableHeadings && featureName === 'heading') {
          return false
        }

        return !featuresToRemove.includes(featureName)
      })

      const customizedFeatures = filteredFeatures.map((feature) => {
        const featureName = feature?.key

        if (featureName === 'heading' && options?.headingSizes) {
          return HeadingFeature({
            enabledHeadingSizes: options.headingSizes,
          })
        }

        return feature
      })

      return customizedFeatures
    },
  })
}
