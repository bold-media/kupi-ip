import { getSettings } from '@/modules/common/data'
import { RichText } from '@/modules/common/RichText'
import { TariffCard } from '@/modules/tariffs/TariffCard'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { TariffsBlock } from '@payload-types'
import React from 'react'

export const Tariffs = async (props: TariffsBlock) => {
  const { background, withPrefix, prefix } = props
  const settings = await getSettings()

  if (!settings?.tariffs) return null

  return (
    <div id="buy">
      <BackgroundField {...background}>
        {withPrefix && (
          <RichText
            data={prefix}
            size="mdScale"
            enableGutter={false}
            className="text-center mb-4 sm:mb-8 lg:mb-12"
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:self-center">
            <TariffCard variant="flareVertical" {...settings?.tariffs?.month} />
          </div>
          <div className="lg:order-3 lg:self-center">
            <TariffCard variant="verticalDoubleFlare" {...settings?.tariffs?.quarter} />
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:order-2">
            <TariffCard
              variant="highlightedVertical"
              className="lg:py-16"
              {...settings?.tariffs?.year}
            />
          </div>
        </div>
      </BackgroundField>
    </div>
  )
}
