import { access } from '@/payload/access'
import { basicEditor } from '@/payload/fields/lexical'
import { link } from '@/payload/fields/link'
import { slug } from '@/payload/fields/slug'
import { generatePreviewPath } from '@/utils/generatePreviewPath'
import { CollectionConfig } from 'payload'
import { revalidateDownload, revalidateDownloadDelete } from './hooks/revalidateDownload'

export const Download: CollectionConfig = {
  slug: 'download',
  labels: {
    singular: {
      en: 'Download',
      ru: '',
    },
    plural: {
      en: 'Downloads',
      ru: '',
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
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug('name'),
    {
      name: 'platforms',
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
        ru: '',
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
      type: 'richText',
      editor: basicEditor({ headingSizes: ['h1'], disableAlign: true }),
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      editor: basicEditor({ disableHeadings: true, disableAlign: true }),
    },
    {
      name: 'previewText',
      type: 'textarea',
      admin: {
        description: {
          en: 'This is used for Card elements, to summarize the application.',
          ru: '',
        },
      },
    },
    {
      name: 'mockup',
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
          ru: '...',
        },
      },
    }),
  ],
}
