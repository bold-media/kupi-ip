import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { Block } from 'payload'

export const RecentPosts: Block = {
  slug: 'recent-posts',
  interfaceName: 'RecentPostsBlock',
  labels: {
    singular: {
      en: 'Recent Posts',
      ru: 'Недавние статьи',
    },
    plural: {
      en: 'Recent Posts',
      ru: 'Недавние статьи',
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
      name: 'settings',
      label: {
        en: en.common.setting.plural,
        ru: ru.common.setting.plural,
      },
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'limit',
              label: {
                en: 'Limit',
                ru: 'Максимум',
              },
              type: 'number',
              defaultValue: 5,
              admin: {
                step: 1,
                width: '50%',
              },
            },
            {
              name: 'categories',
              label: {
                en: 'Categories',
                ru: 'Категории',
              },
              type: 'relationship',
              relationTo: 'category',
              hasMany: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
