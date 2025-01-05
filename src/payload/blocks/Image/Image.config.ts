import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const Image: Block = {
  slug: 'image',
  interfaceName: 'ImageBlock',
  labels: {
    singular: {
      en: en.common.image.singular,
      ru: ru.common.image.singular,
    },
    plural: {
      en: en.common.image.plural,
      ru: ru.common.image.plural,
    },
  },
  fields: [
    {
      name: 'image',
      label: {
        en: en.common.image.singular,
        ru: ru.common.image.singular,
      },
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
