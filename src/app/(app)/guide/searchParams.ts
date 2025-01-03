import { createSearchParamsCache, parseAsInteger } from 'nuqs/server'

export const pageParamName = 'page'

export const guideParsers = {
  [pageParamName]: parseAsInteger
    .withOptions({
      clearOnDefault: true,
      shallow: false,
      scroll: true,
    })
    .withDefault(1),
}

export const guidesSearchParamsCache = createSearchParamsCache(guideParsers)
