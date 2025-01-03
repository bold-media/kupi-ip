import { Page } from '@payload-types'
import React from 'react'
import { LensFlare } from '../LensFlare'
import { RichText } from '@/modules/common/RichText'

import { VideoBackground } from '@/components/VideoBackground'

import posterImg from '@/assets/hero-waves-poster.png'
import { ScrollDown } from '@/components/ScrollDown'

export const HeroWave = (props: Page['hero']) => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <VideoBackground
          src={{
            mobile: { webm: '/hero-waves-mobile.webm' },
            desktop: { webm: '/hero-waves.webm', mp4: '/hero-waves.mp4' },
          }}
          poster={posterImg}
          alt="waves"
          className="opacity-80"
        />
        <LensFlare size="2xl" className="top-0 left-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background/90 to-background/0" />
      </div>
      <div className="container mt-24">
        {props?.richText && <RichText data={props.richText} enableGutter={false} size="lgScale" />}
      </div>
      <ScrollDown className="absolute left-1/2 bottom-24 md:bottom-16 -translate-x-1/2 opacity-80" />
    </section>
  )
}
