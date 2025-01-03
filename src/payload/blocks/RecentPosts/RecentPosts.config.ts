import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { Block } from 'payload'

export const RecentPosts: Block = {
  slug: 'recent-posts',
  interfaceName: 'RecentPostsBlock',
  fields: [
    background(),
    {
      name: 'prefix',
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h2', 'h3', 'h4'] }),
    },
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'limit',
              type: 'number',
              defaultValue: 5,
              admin: {
                step: 1,
                width: '50%',
              },
            },
            {
              name: 'categories',
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
