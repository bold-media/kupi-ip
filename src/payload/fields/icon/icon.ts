import { deepMerge } from '@/utils/deepMerge'
import { SelectField } from 'payload'

type IconType = (options?: { overrides?: Record<string, unknown> }) => SelectField

export const icon: IconType = ({ overrides = {} } = {}) => {
  const iconResult: SelectField = {
    name: 'icon',
    type: 'select',
    label: {
      en: 'Icon',
      ru: '',
    },
    options: [
      {
        label: {
          en: 'Globe',
          ru: '',
        },
        value: 'globe',
      },
      {
        label: {
          en: 'Rocketship',
          ru: '',
        },
        value: 'rocketship',
      },
      {
        label: {
          en: 'Signal',
          ru: '',
        },
        value: 'signal',
      },
      {
        label: {
          en: 'Happy Face',
          ru: '',
        },
        value: 'smiley',
      },
      {
        label: {
          en: 'Shield',
          ru: '',
        },
        value: 'shield',
      },
      {
        label: {
          en: 'Battery',
          ru: '',
        },
        value: 'battery',
      },
      {
        label: {
          en: 'Piggy Bank',
          ru: '',
        },
        value: 'piggyBank',
      },
      {
        label: {
          en: 'Lightning',
          ru: '',
        },
        value: 'lightning',
      },
      {
        label: {
          en: 'Document Shield',
          ru: '',
        },
        value: 'documentShield',
      },
    ],
  }

  return deepMerge(iconResult, overrides)
}
