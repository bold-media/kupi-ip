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
  labels: {
    singular: {
      en: 'Guide',
      ru: 'Инструкция',
    },
    plural: {
      en: 'Guides',
      ru: 'Инструкции',
    },
  },
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
            en: en.common.content,
            ru: ru.common.content,
          },
          fields: [
            {
              name: 'title',
              label: {
                en: en.common.title.singular,
                ru: ru.common.title.singular,
              },
              type: 'text',
              required: true,
            },
            {
              name: 'cover',
              label: {
                en: en.common.cover,
                ru: ru.common.cover,
              },
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'excerpt',
              label: {
                en: en.common.excerpt,
                ru: ru.common.excerpt,
              },
              type: 'textarea',
              admin: {
                description: {
                  en: en.common.excerptDescription,
                  ru: ru.common.excerptDescription,
                },
              },
            },
            {
              name: 'content',
              label: {
                en: en.common.content,
                ru: ru.common.content,
              },
              type: 'richText',
              editor: postEditor,
            },
            {
              name: 'blocks',
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
            {
              name: 'noIndex',
              label: {
                en: 'Do not index',
                ru: 'Не индексировать',
              },
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: {
                  en: 'Checking this box will add metatags to the page, asking search engines not to index this page.',
                  ru: 'При установке этого флажка к странице будут добавлены метатеги, запрашивающие поисковые системы не индексировать эту страницу.',
                },
              },
            },
          ],
        },
      ],
    },
    slug(),
  ],
}
