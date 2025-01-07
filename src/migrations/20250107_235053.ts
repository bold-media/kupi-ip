import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_blocks_steps_items" ADD COLUMN "description" jsonb;
  ALTER TABLE "_page_v_blocks_steps_items" ADD COLUMN "description" jsonb;
  ALTER TABLE "post_blocks_steps_items" ADD COLUMN "description" jsonb;
  ALTER TABLE "_post_v_blocks_steps_items" ADD COLUMN "description" jsonb;
  ALTER TABLE "guide_blocks_steps_items" ADD COLUMN "description" jsonb;
  ALTER TABLE "_guide_v_blocks_steps_items" ADD COLUMN "description" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_blocks_steps_items" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_page_v_blocks_steps_items" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "post_blocks_steps_items" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_post_v_blocks_steps_items" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "guide_blocks_steps_items" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_guide_v_blocks_steps_items" DROP COLUMN IF EXISTS "description";`)
}
