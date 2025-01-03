import { basicEditor } from '@/payload/fields/lexical'
import { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  label: false,
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'standard',
      label: 'Type',
      required: true,
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Standard',
          value: 'standard',
        },
        {
          label: 'Wave',
          value: 'wave',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h1'] }),
    },
  ],
}
