import { background } from '@/payload/fields/background'
import { Block } from 'payload'

export const Downloads: Block = {
  slug: 'downloads',
  interfaceName: 'DownloadsBlock',
  fields: [background()],
}
