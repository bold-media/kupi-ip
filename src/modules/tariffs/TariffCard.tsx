import { BrandCard } from '@/components/BrandCard'
import { cn } from '@/utils/cn'
import { Settings } from '@payload-types'
import React, { ComponentPropsWithRef } from 'react'
import { RichText } from '../common/RichText'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { getLinkProps } from '@/utils/getLinkProps'

type TariffProps = NonNullable<NonNullable<Settings['tariffs']>['month' | 'quarter' | 'year']> &
  ComponentPropsWithRef<typeof BrandCard>

export const TariffCard = ({
  className,
  term,
  benefit,
  limit,
  description,
  price,
  link,
  trialLink,
  ...props
}: TariffProps) => {
  return (
    <BrandCard className={cn('flex flex-col gap-7 px-5 py-12 md:px-10', className)} {...props}>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-3xl md:text-4xl font-light italic text-center leading-none">{term}</h3>
        <p className="text-sm font-medium text-center leading-none">{benefit}</p>
      </div>
      <p className="text-xl md:text-2xl font-light text-center ">{limit}</p>
      <RichText
        data={description}
        enableGutter={false}
        enableProse={false}
        className="text-center font-regular text-base text-white/80"
      />
      <p className="text-center font-light text-4xl md:text-6xl">{price}</p>
      <div className="flex flex-col items-stretch">
        {link && (
          <Button asChild>
            <Link {...getLinkProps(link)}>Купить ключ</Link>
          </Button>
        )}
        {trialLink && (
          <Button variant="link" className="text-slate-200 hover:text-slate-50 self-center" asChild>
            <Link {...getLinkProps(trialLink)}>Протестировать бесплатно</Link>
          </Button>
        )}
      </div>
    </BrandCard>
  )
}
