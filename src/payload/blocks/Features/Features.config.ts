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
      name: 'variant',
      type: 'select',
      label: {
        en: 'Variant',
        ru: 'Вариант',
      },
      defaultValue: 'sphere',
      admin: {
        isClearable: false,
      },
      options: [
        {
          label: {
            en: 'Sphere',
            ru: 'Сфера',
          },
          value: 'sphere',
        },
        {
          label: {
            en: 'Grid',
            ru: 'Сетка',
          },
          value: 'grid',
        },
      ],
    },
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
            en: en.common.title.singular,
            ru: ru.common.title.singular,
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: {
            en: en.common.content,
            ru: ru.common.content,
          },
          editor: basicEditor({ disableHeadings: true, disableAlign: true }),
        },
      ],
    },
  ],
}
