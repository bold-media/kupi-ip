import { basicEditor } from '@/payload/fields/lexical'
import { link } from '@/payload/fields/link'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Field } from 'payload'

export const tariffFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'term',
        label: {
          en: 'Term',
          ru: 'Длительность',
        },
        type: 'text',
        admin: {
          width: '33.333%',
        },
      },
      {
        name: 'benefit',
        label: {
          en: 'Benefit',
          ru: 'Выгода',
        },
        type: 'text',
        admin: {
          width: '33.333%',
        },
      },
      {
        name: 'limit',
        label: {
          en: 'Limit',
          ru: 'Лимит',
        },
        type: 'text',
        admin: {
          width: '33.333%',
        },
      },
    ],
  },

  {
    name: 'description',
    label: {
      en: en.common.description.singular,
      ru: ru.common.description.singular,
    },
    type: 'richText',
    editor: basicEditor({ disableAlign: true, disableHeadings: true }),
  },
  {
    name: 'price',
    label: {
      en: 'Price',
      ru: 'Цена',
    },
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
            ru: 'Ссылка на оплату',
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
            ru: 'Ссылка на тестирование',
          },
          admin: {
            width: '50%',
          },
        },
      }),
    ],
  },
]
