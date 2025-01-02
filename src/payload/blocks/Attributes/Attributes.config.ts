import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical/basicEditor'
import { truncate } from 'fs/promises'
import { Block } from 'payload'

export const Attributes: Block = {
  slug: 'attributes',
  interfaceName: 'AttributesBlock',
  fields: [
    background(),
    {
      name: 'content',
      type: 'richText',
      editor: basicEditor({ disableHeadings: true, disableAlign: true }),
    },
  ],
}
