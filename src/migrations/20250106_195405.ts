import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page" ADD COLUMN "hero_settings_padding_bottom" varchar DEFAULT 'md';
  ALTER TABLE "_page_v" ADD COLUMN "version_hero_settings_padding_bottom" varchar DEFAULT 'md';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page" DROP COLUMN IF EXISTS "hero_settings_padding_bottom";
  ALTER TABLE "_page_v" DROP COLUMN IF EXISTS "version_hero_settings_padding_bottom";`)
}
