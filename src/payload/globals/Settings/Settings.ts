import { basicEditor } from '@/payload/fields/lexical'
import { link } from '@/payload/fields/link'
import { linkGroup } from '@/payload/fields/link/linkGroup'
import { revalidateGlobal } from '@/payload/hooks/revalidateGlobal'
import { MetaDescriptionField, MetaTitleField } from '@payloadcms/plugin-seo/fields'
import { GlobalConfig } from 'payload'
import { tariffFields } from './tariffFields'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: {
    en: 'Settings',
    ru: 'Настройки',
  },
  admin: {
    group: {
      en: 'Admin',
      ru: 'Админ',
    },
  },
  hooks: {
    afterChange: [revalidateGlobal],
  },
  typescript: {
    interface: 'Settings',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'tariffs',
          label: {
            en: 'Tariffs',
            ru: '',
          },
          fields: [
            {
              name: 'month',
              type: 'group',
              label: {
                en: 'Monthly',
                ru: '',
              },
              admin: {
                style: {
                  paddingTop: '2rem',
                  paddingBottom: '5rem',
                },
              },
              fields: tariffFields,
            },
            {
              name: 'quarter',
              type: 'group',
              label: {
                en: 'Quarterly',
                ru: '',
              },
              admin: {
                style: {
                  paddingTop: '2rem',
                  paddingBottom: '5rem',
                },
              },
              fields: tariffFields,
            },
            {
              name: 'year',
              type: 'group',
              label: {
                en: 'Yearly',
                ru: '',
              },
              admin: {
                style: {
                  paddingTop: '2rem',
                  paddingBottom: '5rem',
                },
              },
              fields: tariffFields,
            },
          ],
        },
        {
          name: 'navigation',
          label: {
            en: 'Navigation',
            ru: 'Навигация',
          },
          fields: [
            {
              name: 'header',
              type: 'group',
              fields: [
                linkGroup({
                  appearances: false,
                }),
                {
                  name: 'withSupportLink',
                  type: 'checkbox',
                },
                link({
                  appearances: false,
                  overrides: {
                    name: 'supportLink',
                    admin: {
                      condition: (_: any, siblingData: any) => siblingData?.withSupportLink,
                    },
                  },
                }),
              ],
            },
            {
              name: 'footer',
              type: 'group',
              fields: [
                {
                  name: 'copyText',
                  type: 'text',
                },
                linkGroup({
                  appearances: false,
                }),
              ],
            },
          ],
        },
        {
          name: 'downloads',
          label: {
            en: 'Downloads',
            ru: '',
          },
          description: {
            en: 'Controls the text within the hero section of the /download page',
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: basicEditor({ headingSizes: ['h1'], disableAlign: true }),
            },
            MetaTitleField({
              hasGenerateFn: false,
            }),
            MetaDescriptionField({
              hasGenerateFn: false,
            }),
          ],
        },
        {
          name: 'seo',
          label: 'SEO',
          description: {
            en: `These settings serve as a fallback for any pages that do not have SEO configured. If a page has SEO configured, these settings will be ignored.`,
            ru: `Эти настройки используются как запасные для страниц, у которых не настроен SEO. Если у страницы настроен SEO, эти настройки будут проигнорированы.`,
          },
          fields: [
            MetaTitleField({
              hasGenerateFn: false,
            }),
            MetaDescriptionField({
              hasGenerateFn: false,
            }),
          ],
        },
      ],
    },
  ],
}
