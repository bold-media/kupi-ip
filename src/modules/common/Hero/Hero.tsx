import { Page } from '@payload-types'
import React from 'react'
import { HeroWave } from './HeroWave'
import { HeroStandard } from './HeroStandard'

const heroes = {
  wave: HeroWave,
  standard: HeroStandard,
}

export const Hero = (props: Page['hero']) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
