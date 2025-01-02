import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { Block } from 'payload'

export const Tariffs: Block = {
  slug: 'tariffs',
  interfaceName: 'TariffsBlock',
  fields: [
    background(),
    {
      name: 'withPrefix',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'prefix',
      type: 'richText',
      editor: basicEditor({ disableAlign: true }),
      admin: {
        condition: (_, siblingData) => siblingData?.withPrefix,
      },
    },
  ],
}
