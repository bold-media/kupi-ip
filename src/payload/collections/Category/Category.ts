import { slug } from '@/payload/fields/slug'
import { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'category',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'createdAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    slug('name'),
  ],
}
