import { getSettings } from '@/modules/common/data'
import { LivePreviewListener } from '@/modules/layout/LivePreviewListener'
import { generateMeta } from '@/utils/generateMeta'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import '@/styles/globals.css'
import { ExitPreview } from '@/modules/layout/ExitPreview'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { cn } from '@/utils/cn'
import { GradientDefs } from '@/modules/layout/GradientDefs'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Header } from '@/modules/layout/Header'
import { Footer } from '@/modules/layout/Footer'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

const robotoMono = Roboto_Mono({
  subsets: ['cyrillic'],
  weight: ['400'],
  variable: '--font-mono',
})

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { isEnabled: draft } = await draftMode()
  const settings = await getSettings()

  return (
    <html lang="ru">
      <body className={cn(roboto.variable, robotoMono.variable, 'font-sans antialiased dark')}>
        {draft && (
          <>
            <LivePreviewListener />
            <ExitPreview />
          </>
        )}
        <GradientDefs />
        <NuqsAdapter>
          <Header data={settings?.navigation?.header ?? {}} />
          {children}
          <Footer data={settings?.navigation?.footer ?? {}} />
        </NuqsAdapter>
      </body>
    </html>
  )
}

export const generateMetadata = async (): Promise<Metadata> => {
  const settings = await getSettings()

  if (!settings) {
    notFound()
  }
  return generateMeta({ meta: settings?.seo?.default })
}

export default RootLayout
