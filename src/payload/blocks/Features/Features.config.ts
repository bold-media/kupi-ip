import { background } from '@/payload/fields/background'
import { icon } from '@/payload/fields/icon'
import { basicEditor } from '@/payload/fields/lexical'
import { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    background(),
    {
      name: 'prefix',
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h2', 'h3', 'h4'] }),
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        icon(),
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
    {
      name: 'suffix',
      type: 'richText',
      editor: basicEditor({ disableHeadings: true, disableAlign: true }),
    },
  ],
}
