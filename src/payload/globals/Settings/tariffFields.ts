import { basicEditor } from '@/payload/fields/lexical'
import { link } from '@/payload/fields/link'
import { Field } from 'payload'

export const tariffFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'term',
        type: 'text',
        admin: {
          width: '33.333%',
        },
      },
      {
        name: 'benefit',
        type: 'text',
        admin: {
          width: '33.333%',
        },
      },
      {
        name: 'limit',
        type: 'text',
        admin: {
          width: '33.333%',
        },
      },
    ],
  },

  {
    name: 'description',
    type: 'richText',
    editor: basicEditor({ disableAlign: true, disableHeadings: true }),
  },
  {
    name: 'price',
    type: 'text',
  },
  {
    type: 'row',
    fields: [
      link({
        appearances: false,
        disableLabel: true,
        overrides: {
          label: {
            en: 'Payment Link',
            ru: '',
          },
          admin: {
            width: '50%',
          },
        },
      }),
      link({
        appearances: false,
        disableLabel: true,
        overrides: {
          name: 'trialLink',
          label: {
            en: 'Trial Link',
            ru: '',
          },
          admin: {
            width: '50%',
          },
        },
      }),
    ],
  },
]
