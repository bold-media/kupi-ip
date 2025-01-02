import { deepMerge } from '@/utils/deepMerge'
import { SelectField } from 'payload'

export type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const variantOptions: Record<SizeVariants, { label: string; value: string }> = {
  xs: {
    label: 'XS',
    value: 'xs',
  },
  sm: {
    label: 'SM',
    value: 'sm',
  },
  md: {
    label: 'MD',
    value: 'md',
  },
  lg: {
    label: 'LG',
    value: 'lg',
  },
  xl: {
    label: 'XL',
    value: 'xl',
  },
}

type SizeType = (options?: {
  variants?: SizeVariants[]
  overrides?: Partial<SelectField>
}) => SelectField

export const selectSize: SizeType = ({ variants, overrides = {} } = {}) => {
  const sizeResult: SelectField = {
    name: 'size',
    type: 'select',
    required: true,
    admin: { isClearable: false },
    options: [],
  }

  let variantsToUse = [
    variantOptions.xs,
    variantOptions.sm,
    variantOptions.md,
    variantOptions.lg,
    variantOptions.xl,
  ]

  if (variants) {
    variantsToUse = variants.map((variant) => variantOptions[variant])

    if (!variants.includes('md') && !overrides.defaultValue) {
      sizeResult.defaultValue = variants[0]
    }
  } else {
    if (!overrides.defaultValue) {
      sizeResult.defaultValue = 'md'
    }
  }

  variantsToUse.map((option) => sizeResult.options.push(option))

  return deepMerge(sizeResult, overrides)
}
