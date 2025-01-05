import { Block } from 'payload'

export const YellowText: Block = {
  slug: 'yellowText',
  interfaceName: 'YellowTextInlineBlock',
  labels: {
    singular: {
      en: 'Yellow Text',
      ru: 'Жёлтый текст',
    },
    plural: {
      en: 'Yellow Texts',
      ru: 'Жёлтые тексты',
    },
  },
  admin: {
    components: {
      Label: {
        path: '/inlineBlocks/YellowText/Label',
      },
    },
  },

  fields: [
    {
      name: 'text',
      label: {
        en: 'Text',
        ru: 'Текст',
      },
      type: 'text',
    },
  ],
}
