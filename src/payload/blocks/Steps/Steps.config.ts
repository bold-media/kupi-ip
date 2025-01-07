import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const Steps: Block = {
  slug: 'steps',
  interfaceName: 'StepsBlock',
  labels: {
    singular: {
      en: 'Steps',
      ru: 'Шаги',
    },
    plural: {
      en: 'Steps',
      ru: 'Шаги',
    },
  },
  fields: [
    background(),
    {
      name: 'withPrefix',
      label: {
        en: 'With Prefix',
        ru: 'С заголовком',
      },
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'prefix',
      type: 'richText',
      label: {
        en: 'Prefix',
        ru: ru.common.title.singular,
      },
      editor: basicEditor({ disableAlign: true, headingSizes: ['h2', 'h3', 'h4'] }),
      admin: {
        condition: (_, siblingData) => siblingData?.withPrefix,
      },
    },
    {
      name: 'items',
      label: {
        en: en.common.item.plural,
        ru: ru.common.item.plural,
      },
      labels: {
        singular: {
          en: en.common.item.singular,
          ru: ru.common.item.singular,
        },
        plural: {
          en: en.common.item.plural,
          ru: ru.common.item.plural,
        },
      },
      type: 'array',
      fields: [
        {
          name: 'title',
          label: {
            en: en.common.title.singular,
            ru: ru.common.title.singular,
          },
          type: 'text',
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
      ],
    },
  ],
}
