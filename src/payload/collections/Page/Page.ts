import { slug } from '@/payload/fields/slug'
import { syncPathname } from '@/payload/hooks/syncPathname'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { CollectionConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { createBreadcrumbsField, createParentField } from '@payloadcms/plugin-nested-docs'
import { access } from '@/payload/access'
import { generatePreviewPath } from '@/utils/generatePreviewPath'
import { revalidatePage, revalidatePageDelete } from './hooks/revalidatePage'
import { hero } from '@/payload/collections/Page/fields/hero'
import { CallToAction } from '@/payload/blocks/CallToAction/CallToAction.config'
import { Accordion } from '@/payload/blocks/Accordion/Accordion.config'
import { RecentPosts } from '@/payload/blocks/RecentPosts/RecentPosts.config'
import { Downloads } from '@/payload/blocks/Downloads/Downloads.config'
import { Features } from '@/payload/blocks/Features/Features.config'
import { Tariffs } from '@/payload/blocks/Tariffs/Tariffs.config'
import { Steps } from '@/payload/blocks/Steps/Steps.config'

export const Page: CollectionConfig = {
  slug: 'page',
  labels: {
    singular: {
      en: 'Page',
      ru: 'Страница',
    },
    plural: {
      en: 'Pages',
      ru: 'Страницы',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pathname', 'publishedAt', 'updatedAt'],
    livePreview: {
      url: ({ data }) =>
        generatePreviewPath({
          collection: 'page',
          pathname: typeof data?.pathname === 'string' ? data.pathname : '',
        }),
    },
    preview: (data) =>
      generatePreviewPath({
        collection: 'page',
        pathname: typeof data?.pathname === 'string' ? data.pathname : '',
      }),
  },
  defaultPopulate: {
    title: true,
    slug: true,
    pathname: true,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
  access: {
    read: access({ roles: { editor: true }, type: 'published' }),
    create: access({ roles: { editor: true } }),
    update: access({ roles: { editor: true } }),
    delete: access({ roles: { editor: true } }),
    readVersions: access({ roles: { editor: true } }),
  },
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidatePageDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: en.common.title.singular,
        ru: ru.common.title.singular,
      },
      admin: {
        position: 'sidebar',
        description: {
          en: 'This is for internal identification only. It is not shown to users.',
          ru: 'Это только для использования в админ-панели. Пользователям не отображается.',
        },
      },
    },
    slug(),
    {
      name: 'pathname',
      type: 'text',
      unique: true,
      index: true,
      label: {
        en: en.common.pathname.singular,
        ru: ru.common.pathname.singular,
      },
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [syncPathname],
      },
    },
    createParentField('page', {
      label: { en: en.common.parentPage.singular, ru: ru.common.parentPage.singular },
    }),
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: en.common.content,
            ru: ru.common.content,
          },
          fields: [
            hero,
            {
              name: 'blocks',
              type: 'blocks',
              label: {
                en: en.common.block.plural,
                ru: ru.common.block.plural,
              },
              labels: {
                singular: {
                  en: en.common.block.singular,
                  ru: ru.common.block.singular,
                },
                plural: {
                  en: en.common.block.plural,
                  ru: ru.common.block.plural,
                },
              },
              blocks: [Accordion, CallToAction, Downloads, Features, Steps, Tariffs, RecentPosts],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
              overrides: {
                label: {
                  en: en.common.title.singular,
                  ru: ru.common.title.singular,
                },
              },
            }),
            MetaDescriptionField({
              overrides: {
                label: {
                  en: en.common.description.singular,
                  ru: ru.common.description.singular,
                },
              },
            }),
            MetaImageField({
              relationTo: 'media',
              overrides: {
                label: {
                  en: en.common.image.singular,
                  ru: ru.common.image.singular,
                },
              },
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    createBreadcrumbsField('page', { admin: { hidden: true } }),
  ],
}
