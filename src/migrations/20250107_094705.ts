import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_blocks_features" ADD COLUMN "variant" varchar DEFAULT 'sphere';
  ALTER TABLE "page" ADD COLUMN "hero_settings_padding_top" varchar DEFAULT 'md';
  ALTER TABLE "_page_v_blocks_features" ADD COLUMN "variant" varchar DEFAULT 'sphere';
  ALTER TABLE "_page_v" ADD COLUMN "version_hero_settings_padding_top" varchar DEFAULT 'md';
  ALTER TABLE "post_blocks_features" ADD COLUMN "variant" varchar DEFAULT 'sphere';
  ALTER TABLE "_post_v_blocks_features" ADD COLUMN "variant" varchar DEFAULT 'sphere';
  ALTER TABLE "guide_blocks_features" ADD COLUMN "variant" varchar DEFAULT 'sphere';
  ALTER TABLE "_guide_v_blocks_features" ADD COLUMN "variant" varchar DEFAULT 'sphere';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_blocks_features" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "page" DROP COLUMN IF EXISTS "hero_settings_padding_top";
  ALTER TABLE "_page_v_blocks_features" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_page_v" DROP COLUMN IF EXISTS "version_hero_settings_padding_top";
  ALTER TABLE "post_blocks_features" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_post_v_blocks_features" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "guide_blocks_features" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_guide_v_blocks_features" DROP COLUMN IF EXISTS "variant";`)
}
