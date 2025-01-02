import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { Block } from 'payload'

export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlock',
  fields: [
    background(),
    {
      name: 'prefix',
      type: 'select',
      defaultValue: 'none',
      admin: {
        isClearable: false,
      },
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Smiley',
          value: 'smiley',
        },
        {
          label: 'Rich Text',
          value: 'richText',
        },
      ],
    },
    {
      name: 'smileyTitle',
      type: 'richText',
      editor: basicEditor({ disableAlign: true, disableHeadings: true }),
      admin: {
        condition: (_, siblingData) => siblingData?.prefix === 'smiley',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h2', 'h3', 'h4'] }),
      admin: {
        condition: (_, siblingData) => siblingData?.prefix === 'richText',
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
          name: 'content',
          type: 'richText',
          editor: basicEditor({ disableAlign: true, disableHeadings: true }),
        },
      ],
    },
  ],
}
