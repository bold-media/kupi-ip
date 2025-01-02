import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { Block } from 'payload'

export const Steps: Block = {
  slug: 'steps',
  interfaceName: 'StepsBlock',
  fields: [
    background(),
    {
      name: 'withPrefix',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'prefix',
      type: 'richText',
      editor: basicEditor({ disableAlign: true, headingSizes: ['h2', 'h3', 'h4'] }),
      admin: {
        condition: (_, siblingData) => siblingData?.withPrefix,
      },
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
}
