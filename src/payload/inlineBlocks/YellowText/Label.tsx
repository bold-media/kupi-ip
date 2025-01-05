'use client'
import React from 'react'
import { useFormFields, useTranslation } from '@payloadcms/ui'

const Label = () => {
  const text = (useFormFields(([fields]) => fields?.text?.value || null) as string) || null
  const { i18n } = useTranslation()

  const labels: Record<any, string> = {
    en: 'Add Yellow Text...',
    ru: 'Добавить жёлтый текст...',
  }

  return (
    <div style={{ color: '#FFD900' }}>
      {text ?? labels[i18n.language || (i18n.fallbackLanguage as any)] ?? 'Add Yellow Text...'}
    </div>
  )
}

export default Label
