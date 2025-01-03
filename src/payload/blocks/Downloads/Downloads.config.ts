import { background } from '@/payload/fields/background'
import { basicEditor } from '@/payload/fields/lexical'
import { Block } from 'payload'

export const Downloads: Block = {
  slug: 'downloads',
  interfaceName: 'DownloadsBlock',
  fields: [
    background(),
    {
      name: 'prefix',
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h2', 'h3', 'h4'] }),
    },
  ],
}
