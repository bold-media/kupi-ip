import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const Tariffs: Block = {
  slug: 'tariffs',
  interfaceName: 'TariffsBlock',
  labels: {
    singular: {
      en: 'Tariffs',
      ru: 'Тарифы',
    },
    plural: {
      en: 'Tariffs',
      ru: 'Тарифы',
    },
  },
  fields: [
    background(),
    {
      name: 'withPrefix',
      label: {
        en: 'With Prefix',
        ru: 'C заголовком',
      },
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'prefix',
      label: {
        en: 'Prefix',
        ru: ru.common.title.singular,
      },
      type: 'richText',
      editor: basicEditor({ disableAlign: true }),
      admin: {
        condition: (_, siblingData) => siblingData?.withPrefix,
      },
    },
  ],
}
