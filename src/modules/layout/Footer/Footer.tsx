import { getLinkProps } from '@/utils/getLinkProps'
import { Settings } from '@payload-types'
import { Link } from '@/components/Link'
import React from 'react'

export const Footer = ({ data }: { data: NonNullable<Settings['navigation']>['footer'] }) => {
  return (
    <footer className="w-full py-12 md:py-16 bg-background-light">
      <div className="container flex flex-col gap-4 items-center">
        {data?.copyText && (
          <div className="text-base font-normal text-center">{data?.copyText}</div>
        )}
        <div className="flex flex-col text-center md:flex-row gap-2 md:gap-4">
          {data?.links &&
            Array.isArray(data?.links) &&
            data?.links?.map(({ id, link }) => (
              <Link
                key={id}
                {...getLinkProps(link)}
                className="transition-colors text-white/80 hover:text-white/100 leading-[1.3] font-light text-sm active-class"
              >
                {link?.label}
              </Link>
            ))}
        </div>
        <p className="text-white/80 font-light text-sm">Дизайн: alexpyriev</p>
      </div>
    </footer>
  )
}
