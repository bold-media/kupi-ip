'use client'
import { OperatingSystem } from '@/hooks/useOS'
import React, { useMemo, useState } from 'react'
import { OSFilters } from '../OSFilters'
import { Download } from '@payload-types'
import { DownloadsCarousel } from '@/modules/downloads/DownloadsCarousel'

interface FilteredDownloadsProps {
  data?: Download[]
}

export const FilteredDownloads = ({ data }: FilteredDownloadsProps) => {
  const [filter, setFilter] = useState<'' | OperatingSystem>('')

  const downloads = useMemo(() => {
    if (!data) return []
    if (filter === '') return data
    return data.filter((item) => item.platforms?.includes(filter as any))
  }, [data, filter])

  return (
    <div className="w-full overflow-hidden">
      <section>
        <div className="container">
          <OSFilters filter={filter} setFilter={setFilter} />
        </div>

        <DownloadsCarousel data={downloads} />
      </section>
    </div>
  )
}
