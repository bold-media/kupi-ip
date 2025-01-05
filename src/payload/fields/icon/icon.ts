import { deepMerge } from '@/utils/deepMerge'
import { SelectField } from 'payload'

type IconType = (options?: { overrides?: Record<string, unknown> }) => SelectField

export const icon: IconType = ({ overrides = {} } = {}) => {
  const iconResult: SelectField = {
    name: 'icon',
    type: 'select',
    label: {
      en: 'Icon',
      ru: 'Иконка',
    },
    options: [
      {
        label: {
          en: 'Globe',
          ru: 'Глобус',
        },
        value: 'globe',
      },
      {
        label: {
          en: 'Rocketship',
          ru: 'Рокета',
        },
        value: 'rocketship',
      },
      {
        label: {
          en: 'Signal',
          ru: 'Сигнал',
        },
        value: 'signal',
      },
      {
        label: {
          en: 'Happy Face',
          ru: 'Счастливый смайлик',
        },
        value: 'smiley',
      },
      {
        label: {
          en: 'Shield',
          ru: 'Щит',
        },
        value: 'shield',
      },
      {
        label: {
          en: 'Battery',
          ru: 'Батарея',
        },
        value: 'battery',
      },
      {
        label: {
          en: 'Piggy Bank',
          ru: 'Копилка',
        },
        value: 'piggyBank',
      },
      {
        label: {
          en: 'Lightning',
          ru: 'Молния',
        },
        value: 'lightning',
      },
      {
        label: {
          en: 'Document Shield',
          ru: 'Документ защищенный',
        },
        value: 'documentShield',
      },
    ],
  }

  return deepMerge(iconResult, overrides)
}
