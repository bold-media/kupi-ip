import { Field, SelectField } from 'payload'
import { selectSize } from '../partials/selectSize'
import { deepMerge } from '@/utils/deepMerge'

export type BackgroundVariants = 'none' | 'darkBlue' | 'blue' | 'flare' | 'doubleFlare'

export const variantOptions: Record<
  BackgroundVariants,
  { label: { en: string; ru: string }; value: string }
> = {
  none: {
    label: {
      en: 'None',
      ru: '',
    },
    value: 'none',
  },
  darkBlue: {
    label: {
      en: 'Dark Blue',
      ru: 'Тёмно-синий',
    },
    value: 'darkBlue',
  },
  blue: {
    label: {
      en: 'Blue',
      ru: 'Синий',
    },
    value: 'blue',
  },
  flare: {
    label: {
      en: 'Flare',
      ru: 'Блик',
    },
    value: 'flare',
  },
  doubleFlare: {
    label: {
      en: 'Double Flare',
      ru: 'Двойной блик',
    },
    value: 'doubleFlare',
  },
}

type BackgroundType = (options?: {
  variants?: BackgroundVariants[]
  overrides?: Record<string, unknown>
}) => Field

export const background: BackgroundType = ({ variants, overrides = {} } = {}) => {
  const backgroundResult: Field = {
    name: 'background',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          selectSize({ overrides: { name: 'paddingTop', admin: { width: '50%' } } }),
          selectSize({ overrides: { name: 'paddingBottom', admin: { width: '50%' } } }),
        ],
      },
    ],
  }

  let backgroundType: SelectField = {
    name: 'type',
    type: 'select',
    defaultValue: variantOptions.none.value,
    required: true,
    admin: {
      isClearable: false,
    },
    options: [],
  }

  let variantsToUse = [
    variantOptions.none,
    variantOptions.darkBlue,
    variantOptions.blue,
    variantOptions.flare,
    variantOptions.doubleFlare,
  ]

  if (variants) {
    variantsToUse = variants.map((variant) => variantOptions[variant])
    backgroundType.defaultValue = variantsToUse[0]?.value
  }

  variantsToUse.map((option) => backgroundType.options.push(option))

  backgroundResult.fields.push(backgroundType)

  return deepMerge(backgroundResult, overrides)
}
