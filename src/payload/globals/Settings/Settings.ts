import { basicEditor } from '@/payload/fields/lexical'
import { link } from '@/payload/fields/link'
import { linkGroup } from '@/payload/fields/link/linkGroup'
import { revalidateGlobal } from '@/payload/hooks/revalidateGlobal'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { GlobalConfig } from 'payload'
import { tariffFields } from './tariffFields'
import { en } from '@/payload/i18n/en'
import { ru } from '@/payload/i18n/ru'

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
            ru: 'Тарифы',
          },
          fields: [
            {
              name: 'month',
              type: 'group',
              label: {
                en: 'Monthly',
                ru: '1 месяц',
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
                ru: '3 месяца',
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
                ru: '1 год',
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
              label: {
                en: 'Header',
                ru: 'Шапка',
              },
              type: 'group',
              fields: [
                linkGroup({
                  appearances: false,
                  overrides: {
                    label: {
                      en: 'Menu Items',
                      ru: 'Пункты меню',
                    },
                    labels: {
                      singular: {
                        en: 'Menu Item',
                        ru: 'Пункт меню',
                      },
                      plural: {
                        en: 'Menu Items',
                        ru: 'Пункты меню',
                      },
                    },
                  },
                }),
                {
                  name: 'withSupportLink',
                  label: {
                    en: 'With Support Link',
                    ru: 'Ссылка на страницу Поддержки',
                  },
                  type: 'checkbox',
                },
                link({
                  appearances: false,
                  overrides: {
                    name: 'supportLink',
                    label: {
                      en: 'Support Link',
                      ru: 'Ссылка на страницу Поддержки',
                    },
                    admin: {
                      condition: (_: any, siblingData: any) => siblingData?.withSupportLink,
                    },
                  },
                }),
              ],
            },
            {
              name: 'footer',
              label: {
                en: 'Footer',
                ru: 'Подвал',
              },
              type: 'group',
              fields: [
                {
                  name: 'copyText',
                  label: {
                    en: 'Copy Text',
                    ru: 'Текст копирайта',
                  },
                  type: 'text',
                },
                linkGroup({
                  appearances: false,
                  overrides: {
                    label: {
                      en: 'Menu Items',
                      ru: 'Пункты меню',
                    },
                    labels: {
                      singular: {
                        en: 'Menu Item',
                        ru: 'Пункт меню',
                      },
                      plural: {
                        en: 'Menu Items',
                        ru: 'Пункты меню',
                      },
                    },
                  },
                }),
              ],
            },
          ],
        },
        {
          name: 'downloads',
          label: {
            en: 'Downloads',
            ru: 'Загрузки',
          },
          description: {
            en: 'Controls the text within the hero section of the "/download" page.',
            ru: 'Текст на главном экране на странице "/download"',
          },
          fields: [
            {
              name: 'content',
              label: {
                en: en.common.content,
                ru: ru.common.content,
              },
              admin: {
                style: {
                  marginTop: '1rem',
                },
              },
              type: 'richText',
              editor: basicEditor({ headingSizes: ['h1'], disableAlign: true }),
            },
          ],
        },
        {
          name: 'seo',
          label: 'SEO',
          fields: [
            {
              label: {
                en: 'Default',
                ru: 'По умолчанию',
              },
              type: 'collapsible',
              admin: {
                style: {
                  marginBottom: 'calc(var(--spacing-field)* -2 + 0.5rem)',
                },
              },
              fields: [
                {
                  type: 'group',
                  name: 'default',
                  label: {
                    en: 'Default SEO Settings',
                    ru: 'Настройки SEO по умолчанию',
                  },
                  admin: {
                    description: {
                      en: `These settings serve as a fallback for any pages that do not have SEO configured. If a page has SEO configured, these settings will be ignored.`,
                      ru: `Эти настройки используются как запасные для страниц, у которых не настроен SEO. Если у страницы настроен SEO, эти настройки будут проигнорированы.`,
                    },
                  },
                  fields: [
                    OverviewField({
                      titlePath: 'seo.default.title',
                      descriptionPath: 'seo.default.description',
                      imagePath: 'seo.default.image',
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
                      titlePath: 'seo.default.title',
                      descriptionPath: 'seo.default.description',
                    }),
                  ],
                },
              ],
            },
            {
              label: {
                en: 'Posts',
                ru: 'Статьи',
              },
              type: 'collapsible',
              admin: {
                style: {
                  marginBottom: 'calc(var(--spacing-field)* -2 + 0.5rem)',
                },
              },
              fields: [
                {
                  type: 'group',
                  name: 'posts',
                  label: {
                    en: 'Posts SEO Settings',
                    ru: 'Настройки SEO страницы Статьи',
                  },
                  admin: {
                    description: {
                      en: `For the page "/blog"`,
                      ru: `Для страницы "/blog"`,
                    },
                  },
                  fields: [
                    OverviewField({
                      titlePath: 'seo.posts.title',
                      descriptionPath: 'seo.posts.description',
                      imagePath: 'seo.posts.image',
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
                      titlePath: 'seo.posts.title',
                      descriptionPath: 'seo.posts.description',
                    }),
                  ],
                },
              ],
            },
            {
              label: {
                en: 'Downloads',
                ru: 'Загрузки',
              },
              type: 'collapsible',
              admin: {
                style: {
                  marginBottom: 'calc(var(--spacing-field)* -2 + 0.5rem)',
                },
              },
              fields: [
                {
                  type: 'group',
                  name: 'downloads',
                  label: {
                    en: 'Downloads SEO Settings',
                    ru: 'Настройки SEO страницы Загрузки',
                  },
                  admin: {
                    description: {
                      en: `For the page "/download"`,
                      ru: `Для страницы "/download"`,
                    },
                  },
                  fields: [
                    OverviewField({
                      titlePath: 'seo.downloads.title',
                      descriptionPath: 'seo.downloads.description',
                      imagePath: 'seo.downloads.image',
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
                      titlePath: 'seo.downloads.title',
                      descriptionPath: 'seo.downloads.description',
                    }),
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
