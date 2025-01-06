import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "page_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "page" ADD COLUMN "meta_no_index" boolean;
  ALTER TABLE "_page_v" ADD COLUMN "version_meta_no_index" boolean;
  ALTER TABLE "post" ADD COLUMN "meta_no_index" boolean;
  ALTER TABLE "_post_v" ADD COLUMN "version_meta_no_index" boolean;
  ALTER TABLE "download" ADD COLUMN "meta_no_index" boolean;
  ALTER TABLE "_download_v" ADD COLUMN "version_meta_no_index" boolean;
  ALTER TABLE "guide" ADD COLUMN "meta_no_index" boolean DEFAULT true;
  ALTER TABLE "_guide_v" ADD COLUMN "version_meta_no_index" boolean DEFAULT true;
  ALTER TABLE "settings" ADD COLUMN "seo_default_no_index" boolean;
  ALTER TABLE "settings" ADD COLUMN "seo_posts_no_index" boolean;
  ALTER TABLE "settings" ADD COLUMN "seo_downloads_no_index" boolean;
  DO $$ BEGIN
   ALTER TABLE "page_blocks_content" ADD CONSTRAINT "page_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_content" ADD CONSTRAINT "_page_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "page_blocks_content_order_idx" ON "page_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_content_parent_id_idx" ON "page_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_content_path_idx" ON "page_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_content_order_idx" ON "_page_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_content_parent_id_idx" ON "_page_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_content_path_idx" ON "_page_v_blocks_content" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "page_blocks_content" CASCADE;
  DROP TABLE "_page_v_blocks_content" CASCADE;
  ALTER TABLE "page" DROP COLUMN IF EXISTS "meta_no_index";
  ALTER TABLE "_page_v" DROP COLUMN IF EXISTS "version_meta_no_index";
  ALTER TABLE "post" DROP COLUMN IF EXISTS "meta_no_index";
  ALTER TABLE "_post_v" DROP COLUMN IF EXISTS "version_meta_no_index";
  ALTER TABLE "download" DROP COLUMN IF EXISTS "meta_no_index";
  ALTER TABLE "_download_v" DROP COLUMN IF EXISTS "version_meta_no_index";
  ALTER TABLE "guide" DROP COLUMN IF EXISTS "meta_no_index";
  ALTER TABLE "_guide_v" DROP COLUMN IF EXISTS "version_meta_no_index";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "seo_default_no_index";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "seo_posts_no_index";
  ALTER TABLE "settings" DROP COLUMN IF EXISTS "seo_downloads_no_index";`)
}
