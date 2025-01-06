import React from 'react'
import type { CallToActionBlock } from '@payload-types'
import { BackgroundField } from '@/payload/fields/background/Background.component'
import { RichText } from '@/modules/common/RichText'
import { PayloadLink } from '@/components/PayloadLink'

export const CallToAction = (props: CallToActionBlock) => {
  const { background, content, links, withSublink, sublink } = props

  return (
    <BackgroundField {...background}>
      <RichText data={content} enableGutter={false} className="text-center md-text" />
      <div className="flex flex-col justify-center items-center gap-3 mt-10 md:mt-20">
        {Array.isArray(links) && links?.length > 0 && (
          <div className="flex justify-center gap-4">
            {links.map((item) => (
              <PayloadLink key={item.id} {...item?.link} />
            ))}
          </div>
        )}
        {withSublink && <PayloadLink {...sublink} appearance="link" />}
      </div>
    </BackgroundField>
  )
}
