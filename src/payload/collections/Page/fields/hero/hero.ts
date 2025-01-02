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
          label: 'Wave',
          value: 'wave',
        },
        {
          label: 'Standard',
          value: 'standard',
        },
        {
          label: 'Minimal',
          value: 'minimal',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
    },
  ],
}
