import { access } from '@/payload/access'
import { basicEditor } from '@/payload/fields/lexical'
import { link } from '@/payload/fields/link'
import { slug } from '@/payload/fields/slug'
import { generatePreviewPath } from '@/utils/generatePreviewPath'
import { CollectionConfig } from 'payload'
import { revalidateDownload, revalidateDownloadDelete } from './hooks/revalidateDownload'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Download: CollectionConfig = {
  slug: 'download',
  labels: {
    singular: {
      en: 'Download',
      ru: 'Загрузка',
    },
    plural: {
      en: 'Downloads',
      ru: 'Загрузки',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) =>
        generatePreviewPath({
          collection: 'download',
          pathname: typeof data?.slug === 'string' ? `/download/${data?.slug}` : '',
          slug: data?.slug,
        }),
    },
    preview: (data) =>
      generatePreviewPath({
        collection: 'download',
        pathname: typeof data?.slug === 'string' ? `/download/${data?.slug}` : '',
        slug: data?.slug as string,
      }),
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
    afterChange: [revalidateDownload],
    afterDelete: [revalidateDownloadDelete],
  },
  fields: [
    {
      name: 'name',
      label: {
        en: en.common.name.title.singular,
        ru: ru.common.name.title.singular,
      },
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug('name'),
    {
      name: 'platforms',
      label: {
        en: 'Platforms',
        ru: 'Платформы',
      },
      type: 'select',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Windows',
          value: 'windows',
        },
        {
          label: 'Mac OS',
          value: 'macos',
        },
        {
          label: 'Linux',
          value: 'linux',
        },
        {
          label: 'Android',
          value: 'android',
        },
        {
          label: 'iOS',
          value: 'ios',
        },
      ],
    },
    {
      name: 'links',
      label: {
        en: 'Download Links',
        ru: 'Ссылки загрузок',
      },
      type: 'group',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'windows',
          type: 'text',
          required: true,
          admin: {
            condition: (data) => data?.platforms?.includes('windows'),
          },
        },
        {
          name: 'macos',
          label: 'Mac OS',
          type: 'text',
          required: true,
          admin: {
            condition: (data) => data?.platforms?.includes('macos'),
          },
        },
        {
          name: 'linux',
          type: 'text',
          required: true,
          admin: {
            condition: (data) => data?.platforms?.includes('linux'),
          },
        },
        {
          name: 'android',
          type: 'text',
          required: true,
          admin: {
            condition: (data) => data?.platforms?.includes('android'),
          },
        },
        {
          name: 'ios',
          label: 'iOS',
          type: 'text',
          required: true,
          admin: {
            condition: (data) => data?.platforms?.includes('ios'),
          },
        },
      ],
    },
    {
      name: 'intro',
      label: {
        en: 'Intro',
        ru: ru.common.title.singular,
      },
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h1'], disableAlign: true }),
    },
    {
      name: 'icon',
      label: {
        en: 'Icon',
        ru: 'Иконка',
      },
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: {
        en: en.common.content,
        ru: ru.common.content,
      },
      type: 'richText',
      editor: basicEditor({ disableHeadings: true, disableAlign: true }),
    },
    {
      name: 'previewText',
      label: {
        en: 'Preview Text',
        ru: 'Превью текст',
      },
      type: 'textarea',
      admin: {
        description: {
          en: 'Text summarizing the application. It is used in preview elements, such as the cards on the "/download" page.',
          ru: 'Текст с кратким описанием приложения. Используется в превью элементах, например, в карточках на странице "/download".',
        },
      },
    },
    {
      name: 'mockup',
      label: {
        en: 'Mockup',
        ru: 'Мокап',
      },
      type: 'upload',
      relationTo: 'media',
    },
    link({
      appearances: false,
      disableLabel: true,
      overrides: {
        name: 'buyLink',
        label: {
          en: 'Buy Link',
          ru: 'Ссылка для покупки (доп. ссылка)',
        },
      },
    }),
    {
      name: 'meta',
      label: 'SEO',
      type: 'group',
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
          overrides: { label: { en: en.common.image.singular, ru: ru.common.image.singular } },
        }),
        PreviewField({
          hasGenerateFn: true,
          titlePath: 'meta.title',
          descriptionPath: 'meta.description',
        }),
      ],
    },
  ],
}
