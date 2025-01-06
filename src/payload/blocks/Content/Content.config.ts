import { background } from '@/payload/fields/background'
import { postEditor } from '@/payload/fields/lexical'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  labels: {
    singular: {
      en: en.common.content,
      ru: ru.common.content,
    },
    plural: {
      en: en.common.content,
      ru: ru.common.content,
    },
  },
  fields: [
    background(),
    {
      name: 'richText',
      type: 'richText',
      editor: postEditor,
    },
  ],
}
