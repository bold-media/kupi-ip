import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_blocks_features_features" ADD COLUMN "content" jsonb;
  ALTER TABLE "_page_v_blocks_features_features" ADD COLUMN "content" jsonb;
  ALTER TABLE "post_blocks_features_features" ADD COLUMN "content" jsonb;
  ALTER TABLE "_post_v_blocks_features_features" ADD COLUMN "content" jsonb;
  ALTER TABLE "guide_blocks_features_features" ADD COLUMN "content" jsonb;
  ALTER TABLE "_guide_v_blocks_features_features" ADD COLUMN "content" jsonb;
  ALTER TABLE "page_blocks_features" DROP COLUMN IF EXISTS "suffix";
  ALTER TABLE "_page_v_blocks_features" DROP COLUMN IF EXISTS "suffix";
  ALTER TABLE "post_blocks_features" DROP COLUMN IF EXISTS "suffix";
  ALTER TABLE "_post_v_blocks_features" DROP COLUMN IF EXISTS "suffix";
  ALTER TABLE "guide_blocks_features" DROP COLUMN IF EXISTS "suffix";
  ALTER TABLE "_guide_v_blocks_features" DROP COLUMN IF EXISTS "suffix";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_blocks_features" ADD COLUMN "suffix" jsonb;
  ALTER TABLE "_page_v_blocks_features" ADD COLUMN "suffix" jsonb;
  ALTER TABLE "post_blocks_features" ADD COLUMN "suffix" jsonb;
  ALTER TABLE "_post_v_blocks_features" ADD COLUMN "suffix" jsonb;
  ALTER TABLE "guide_blocks_features" ADD COLUMN "suffix" jsonb;
  ALTER TABLE "_guide_v_blocks_features" ADD COLUMN "suffix" jsonb;
  ALTER TABLE "page_blocks_features_features" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_page_v_blocks_features_features" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "post_blocks_features_features" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_post_v_blocks_features_features" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "guide_blocks_features_features" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_guide_v_blocks_features_features" DROP COLUMN IF EXISTS "content";`)
}
