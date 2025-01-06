'use client'
import { YandexMetricaProvider } from 'next-yandex-metrica'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const YandexMetrika = ({ children }: Props) => {
  if (process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID) {
    return (
      <YandexMetricaProvider
        tagID={
          process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID
            ? Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID)
            : undefined
        }
        strategy="afterInteractive"
        initParameters={{
          accurateTrackBounce: true,
          clickmap: true,
          trackLinks: true,
          webvisor: true,
          trackHash: true,
          defer: true,
          ecommerce: false,
        }}
      >
        {children}
      </YandexMetricaProvider>
    )
  } else {
    return children
  }
}
