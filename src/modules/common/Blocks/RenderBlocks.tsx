import { Accordion } from '@/payload/blocks/Accordion/Accordion.component'
import { CallToAction } from '@/payload/blocks/CallToAction/CallToAction.component'
import { Content } from '@/payload/blocks/Content/Content.component'
import { Downloads } from '@/payload/blocks/Downloads/Downloads.component'
import { Features } from '@/payload/blocks/Features/Features.component'
import { RecentPosts } from '@/payload/blocks/RecentPosts/RecentPosts.component'
import { Steps } from '@/payload/blocks/Steps/Steps.component'
import { Tariffs } from '@/payload/blocks/Tariffs/Tariffs.component'
import {
  AccordionBlock,
  CallToActionBlock,
  ContentBlock,
  DownloadsBlock,
  FeaturesBlock,
  RecentPostsBlock,
  StepsBlock,
  TariffsBlock,
} from '@payload-types'
import React, { Fragment } from 'react'

type Block =
  | AccordionBlock
  | CallToActionBlock
  | ContentBlock
  | DownloadsBlock
  | FeaturesBlock
  | StepsBlock
  | TariffsBlock
  | RecentPostsBlock

export const RenderBlocks = ({ blocks }: { blocks?: Array<Block> | null }) => {
  if (!blocks?.length) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'callToAction':
            return <CallToAction key={block.id ?? index} {...(block as CallToActionBlock)} />
          case 'accordion':
            return <Accordion key={block.id ?? index} {...(block as AccordionBlock)} />
          case 'recent-posts':
            return <RecentPosts key={block.id ?? index} {...(block as RecentPostsBlock)} />
          case 'downloads':
            return <Downloads key={block.id ?? index} {...(block as DownloadsBlock)} />
          case 'features':
            return <Features key={block.id ?? index} {...(block as FeaturesBlock)} />
          case 'tariffs':
            return <Tariffs key={block.id ?? index} {...(block as TariffsBlock)} />
          case 'steps':
            return <Steps key={block.id ?? index} {...(block as StepsBlock)} />
          case 'content':
            return <Content key={block.id ?? index} {...(block as ContentBlock)} />
          default:
            return null
        }
      })}
    </Fragment>
  )
}
