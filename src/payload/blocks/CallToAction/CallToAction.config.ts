import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical/basicEditor'
import { link } from '@/payload/fields/link'
import { linkGroup } from '@/payload/fields/link/linkGroup'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'callToAction',
  interfaceName: 'CallToActionBlock',
  labels: {
    singular: {
      en: 'Call to Action',
      ru: 'Призыв к действию',
    },
    plural: {
      en: 'Calls to Action',
      ru: 'Призывы к действию',
    },
  },
  fields: [
    background(),
    {
      name: 'content',
      type: 'richText',
      label: {
        en: en.common.content,
        ru: ru.common.content,
      },
      editor: basicEditor({ headingSizes: ['h2'], disableAlign: true }),
    },
    linkGroup(),
    {
      name: 'withSublink',
      label: {
        en: 'With Sublink',
        ru: 'Дополнительная ссылка',
      },
      type: 'checkbox',
    },
    link({
      appearances: false,
      overrides: {
        name: 'sublink',
        label: {
          en: 'Sublink',
          ru: 'Дополнительная ссылка',
        },
        admin: {
          condition: (_: any, siblingData: any) => siblingData?.withSublink,
        },
      },
    }),
  ],
}
