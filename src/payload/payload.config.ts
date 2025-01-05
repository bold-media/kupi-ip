// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from 'payload/i18n/en'
//use local overrides for now until we merge updated ru translations in to master of Payload
import { ru } from './i18n/default-ru'

import { collections } from './collections'
import { User } from './collections/User'
import { messages } from './i18n'
import { plugins } from './plugins'
import { rootEditor } from './fields/lexical/rootEditor'
import { globals } from './globals'
// import { migrations } from '@/migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: User.slug,
    dateFormat: 'PP p',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  i18n: {
    supportedLanguages: { en, ru },
    fallbackLanguage: 'en',
    translations: messages,
  },
  collections,
  globals,
  editor: rootEditor,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    idType: 'uuid',
    /**
     * Enums currently have many issues when entries are added, or removed.
     * This opts out of enums and replaces them with varchar columns instead.
     */
    beforeSchemaInit: [
      ({ schema, adapter }) => {
        for (const tableName in adapter.rawTables) {
          const table = adapter.rawTables[tableName]

          for (const fieldName in table.columns) {
            const column = table.columns[fieldName]

            if (column.type === 'enum') {
              ;(column as any).type = 'varchar'
            }
          }
        }
        return schema
      },
    ],
    // prodMigrations: migrations,
  }),
  sharp,
  plugins,
})
