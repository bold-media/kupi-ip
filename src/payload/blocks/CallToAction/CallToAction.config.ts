import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical/basicEditor'
import { link } from '@/payload/fields/link'
import { linkGroup } from '@/payload/fields/link/linkGroup'
import { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'callToAction',
  interfaceName: 'CallToActionBlock',
  fields: [
    background(),
    {
      name: 'content',
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h2'], disableAlign: true }),
    },
    linkGroup(),
    {
      name: 'withSublink',
      type: 'checkbox',
    },
    link({
      appearances: false,
      overrides: {
        name: 'sublink',
        admin: {
          condition: (_: any, siblingData: any) => siblingData?.withSublink,
        },
      },
    }),
  ],
}
