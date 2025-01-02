import { postEditor } from '@/payload/fields/lexical'
import { slug } from '@/payload/fields/slug'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import { generatePreviewPath } from '@/utils/generatePreviewPath'
import { CollectionConfig } from 'payload'
import { access } from '@/payload/access'
import { revalidatePost, revalidatePostDelete } from './hooks/revalidatePost'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Post: CollectionConfig = {
  slug: 'post',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pathname', 'publishedAt', 'updatedAt'],
    livePreview: {
      url: ({ data }) =>
        generatePreviewPath({
          collection: 'post',
          pathname: typeof data?.slug === 'string' ? `/statii/${data?.slug}` : '',
          slug: data?.slug,
        }),
    },
    preview: (data) =>
      generatePreviewPath({
        collection: 'post',
        pathname: typeof data?.slug === 'string' ? `/statii/${data?.slug}` : '',
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
    afterChange: [revalidatePost],
    afterDelete: [revalidatePostDelete],
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
                  en: 'Short description of the article, for content previews.',
                },
              },
            },
            {
              name: 'article',
              type: 'richText',
              editor: postEditor,
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
    {
      name: 'categories',
      type: 'relationship',
      hasMany: true,
      relationTo: 'category',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
