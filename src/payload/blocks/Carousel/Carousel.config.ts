import { Block } from 'payload'

export const Carousel: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
  labels: {
    singular: {
      en: 'Carousel',
      ru: 'Карусель',
    },
    plural: {
      en: 'Carousels',
      ru: 'Карусели',
    },
  },
  fields: [
    {
      name: 'images',
      label: {
        en: 'Images',
        ru: 'Изображения',
      },
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
