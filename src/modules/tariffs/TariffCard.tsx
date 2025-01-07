import { BrandCard } from '@/components/BrandCard'
import { cn } from '@/utils/cn'
import { Settings } from '@payload-types'
import React, { ComponentPropsWithRef } from 'react'
import { RichText } from '../common/RichText'
import { Button } from '@/components/Button'
import NextLink from 'next/link'
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
        <p className="text-sm font-bold text-center leading-none">{benefit}</p>
      </div>
      <p className="text-xl sm:text-[1.5rem]  lg:text-[1.75rem] font-light text-center ">{limit}</p>
      <RichText
        data={description}
        enableGutter={false}
        className="text-center font-normal text-base leading-[1.3] text-white/80"
      />
      <p className="text-center font-light text-[2.5rem] sm:text-[3.125rem] lg:text-6xl">{price}</p>
      <div className="flex flex-col items-stretch">
        {link && (
          <Button asChild>
            <NextLink {...getLinkProps(link)}>Купить ключ</NextLink>
          </Button>
        )}
        {trialLink && (
          <Button
            variant="link"
            className="text-slate-50/80 hover:text-slate-50/100 self-center mt-3 decoration-inherit"
            asChild
          >
            <NextLink {...getLinkProps(trialLink)}>Протестировать бесплатно</NextLink>
          </Button>
        )}
      </div>
    </BrandCard>
  )
}
