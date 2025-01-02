import { Page } from '@payload-types'
import React from 'react'
import { HeroWave } from './HeroWave'
import { HeroStandard } from './HeroStandard'
import { HeroMinimal } from './HeroMinimal'

const heroes = {
  wave: HeroWave,
  standard: HeroStandard,
  minimal: HeroMinimal,
}

export const Hero = (props: Page['hero']) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
