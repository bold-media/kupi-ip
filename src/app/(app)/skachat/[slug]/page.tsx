import { RichText } from '@/modules/common/RichText'
import { getDownloadBySlug } from '@/modules/downloads/data'
import { DownloadButtons } from '@/modules/downloads/DownloadButtons'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: Promise<{
    slug: string
  }>
}

const DownloadPage = async ({ params }: Props) => {
  const { slug } = await params
  const download = await getDownloadBySlug(slug)

  if (!download) notFound()

  const { name, intro, icon, content, platforms, links, buyLink } = download
  return (
    <>
      <div className="container relative mt-header py-12 sm:py-20 md:py-24">
        <div className="flex flex-col gap-10 md:gap-20">
          <RichText
            data={intro}
            className="text-center prose-md md:prose-lg lg:prose-xl xl:prose-2xl !mb-0"
          />
          {icon && typeof icon === 'object' && icon?.url && (
            <Image
              src={icon.url}
              alt={icon.alt}
              width={140}
              height={140}
              draggable={false}
              className="select-none mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36"
              sizes="(min-width: 64em) 144px, (min-width: 48em) 96px, 64px"
            />
          )}
          <RichText data={content} className="text-lg md:text-2xl text-center" />
          <DownloadButtons name={name} platforms={platforms} links={links} buyLink={buyLink} />
        </div>
      </div>
    </>
  )
}

export default DownloadPage
