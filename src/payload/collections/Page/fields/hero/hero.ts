import { basicEditor } from '@/payload/fields/lexical'
import { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  label: {
    en: 'Hero',
    ru: 'Первый экран',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'standard',
      label: {
        en: 'Type',
        ru: 'Тип',
      },
      required: true,
      options: [
        {
          label: {
            en: 'None',
            ru: 'Нет',
          },
          value: 'none',
        },
        {
          label: {
            en: 'Standard',
            ru: 'Стандартный',
          },
          value: 'standard',
        },
        {
          label: {
            en: 'Wave',
            ru: 'Волна',
          },
          value: 'wave',
        },
      ],
    },
    {
      name: 'richText',
      label: {
        en: 'Rich Text',
        ru: 'Форматированный текст',
      },
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h1'] }),
    },
  ],
}
