import type { Field } from 'payload'
import { deepMerge } from '@/utils/deepMerge'

export type LinkAppearances = 'default' | 'secondary' | 'outline' | 'ghost' | 'link'

export const appearanceOptions: Record<
  LinkAppearances,
  { label: { en: string; ru: string }; value: string }
> = {
  default: {
    label: {
      en: 'Primary',
      ru: '',
    },
    value: 'default',
  },
  secondary: {
    label: {
      en: 'Secondary',
      ru: '',
    },
    value: 'secondary',
  },
  outline: {
    label: {
      en: 'Outline',
      ru: '',
    },
    value: 'outline',
  },
  ghost: {
    label: {
      en: 'Ghost',
      ru: '',
    },
    value: 'ghost',
  },
  link: {
    label: {
      en: 'Anchor',
      ru: '',
    },
    value: 'link',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  overrides?: Record<string, unknown>
}) => Field

export const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    label: {
      en: 'Link',
      ru: '',
    },
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: {
                  en: 'Internal Link',
                  ru: '',
                },
                value: 'reference',
              },
              {
                label: {
                  en: 'Custom URL',
                  ru: '',
                },
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: {
              en: 'Open in new tab',
              ru: '',
            },
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: {
        en: 'Document to link to',
        ru: '',
      },
      relationTo: ['page'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: {
        en: 'Custom URL',
        ru: '',
      },
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: {
            en: 'Label',
            ru: '',
          },
          required: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.default,
      appearanceOptions.secondary,
      appearanceOptions.outline,
      appearanceOptions.ghost,
      appearanceOptions.link,
    ]

    if (appearances) {
      appearanceOptionsToUse = appearances.map((option) => appearanceOptions[option])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      admin: {
        description: 'Choose how the link should be rendered',
      },
      defaultValue: 'default',
      options: appearanceOptionsToUse,
    })
  }
  return deepMerge(linkResult, overrides)
}
