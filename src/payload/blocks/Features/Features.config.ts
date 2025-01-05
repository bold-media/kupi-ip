import { background } from '@/payload/fields/background'
import { icon } from '@/payload/fields/icon'
import { basicEditor } from '@/payload/fields/lexical'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  labels: {
    singular: {
      en: 'Features',
      ru: 'Преимущества',
    },
    plural: {
      en: 'Features',
      ru: 'Преимущества',
    },
  },
  fields: [
    background(),
    {
      name: 'prefix',
      label: {
        en: 'Prefix',
        ru: ru.common.title.singular,
      },
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h2', 'h3', 'h4'] }),
    },
    {
      name: 'features',
      type: 'array',
      label: {
        en: 'Features',
        ru: 'Преимущества',
      },
      labels: {
        singular: {
          en: 'Feature',
          ru: 'Преимущество',
        },
        plural: {
          en: 'Features',
          ru: 'Преимущества',
        },
      },
      fields: [
        icon(),
        {
          name: 'text',
          type: 'text',
          label: {
            en: en.common.text.singular,
            ru: ru.common.text.singular,
          },
        },
      ],
    },
    {
      name: 'suffix',
      type: 'richText',
      label: {
        en: 'Suffix',
        ru: 'Текст после',
      },
      editor: basicEditor({ disableHeadings: true, disableAlign: true }),
    },
  ],
}
