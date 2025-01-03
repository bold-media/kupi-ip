import { access } from '@/payload/access'
import { postEditor } from '@/payload/fields/lexical'
import { generatePreviewPath } from '@/utils/generatePreviewPath'
import { CollectionConfig } from 'payload'
import { CallToAction } from '@/payload/blocks/CallToAction/CallToAction.config'
import { Accordion } from '@/payload/blocks/Accordion/Accordion.config'
import { RecentPosts } from '@/payload/blocks/RecentPosts/RecentPosts.config'
import { Downloads } from '@/payload/blocks/Downloads/Downloads.config'
import { Features } from '@/payload/blocks/Features/Features.config'
import { Tariffs } from '@/payload/blocks/Tariffs/Tariffs.config'
import { Steps } from '@/payload/blocks/Steps/Steps.config'
import { slug } from '@/payload/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { revalidateGuide, revalidateGuideDelete } from './hooks/revalidateGuide'

export const Guide: CollectionConfig = {
  slug: 'guide',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedAt', 'updatedAt'],
    livePreview: {
      url: ({ data }) =>
        generatePreviewPath({
          collection: 'guide',
          pathname: typeof data?.slug === 'string' ? `/guide/${data?.slug}` : '',
          slug: data?.slug,
        }),
    },
    preview: (data) =>
      generatePreviewPath({
        collection: 'guide',
        pathname: typeof data?.slug === 'string' ? `/guide/${data?.slug}` : '',
        slug: data?.slug as string,
      }),
  },
  defaultPopulate: {
    title: true,
    slug: true,
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
    afterChange: [revalidateGuide],
    afterDelete: [revalidateGuideDelete],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Main',
            ru: 'Основное',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'cover',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'excerpt',
              type: 'textarea',
              admin: {
                description: {
                  en: 'Short description of the guide, for content previews.',
                },
              },
            },
            {
              name: 'content',
              type: 'richText',
              editor: postEditor,
            },
            {
              name: 'blocks',
              type: 'blocks',
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
            MetaDescriptionField({}),
            MetaImageField({ relationTo: 'media' }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    slug(),
  ],
}
