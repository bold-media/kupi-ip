import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server'

export const categoryParamName = 'category'
export const pageParamName = 'page'

export const postParsers = {
  [categoryParamName]: parseAsString
    .withOptions({ clearOnDefault: true, shallow: false, scroll: true })
    .withDefault(''),
  [pageParamName]: parseAsInteger
    .withOptions({
      clearOnDefault: true,
      shallow: false,
      scroll: true,
    })
    .withDefault(1),
}

export const postsSearchParamsCache = createSearchParamsCache(postParsers)
