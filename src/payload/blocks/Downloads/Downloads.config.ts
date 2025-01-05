import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const Downloads: Block = {
  slug: 'downloads',
  interfaceName: 'DownloadsBlock',
  labels: {
    singular: {
      en: 'Downloads',
      ru: 'Загрузка приложений',
    },
    plural: {
      en: 'Downloads',
      ru: 'Загрузка приложений',
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
  ],
}
