import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "page_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "page_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "_page_v_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "_page_v_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "_page_v_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "post_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "post_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "post_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "_post_v_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "_post_v_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "_post_v_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "download_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "download_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "download_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "_download_v_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "_download_v_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "_download_v_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "guide_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "guide_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "guide_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "_guide_v_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "_guide_v_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "_guide_v_rels" ADD COLUMN "guide_id" uuid;
  ALTER TABLE "settings_rels" ADD COLUMN "post_id" uuid;
  ALTER TABLE "settings_rels" ADD COLUMN "download_id" uuid;
  ALTER TABLE "settings_rels" ADD COLUMN "guide_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "page_rels" ADD CONSTRAINT "page_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_rels" ADD CONSTRAINT "page_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_rels" ADD CONSTRAINT "page_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_rels" ADD CONSTRAINT "_page_v_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_rels" ADD CONSTRAINT "_page_v_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_rels" ADD CONSTRAINT "_page_v_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_rels" ADD CONSTRAINT "post_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_rels" ADD CONSTRAINT "post_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_rels" ADD CONSTRAINT "post_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_rels" ADD CONSTRAINT "_post_v_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_rels" ADD CONSTRAINT "_post_v_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_rels" ADD CONSTRAINT "_post_v_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download_rels" ADD CONSTRAINT "download_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download_rels" ADD CONSTRAINT "download_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download_rels" ADD CONSTRAINT "download_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v_rels" ADD CONSTRAINT "_download_v_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v_rels" ADD CONSTRAINT "_download_v_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v_rels" ADD CONSTRAINT "_download_v_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_rels" ADD CONSTRAINT "guide_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_rels" ADD CONSTRAINT "guide_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_rels" ADD CONSTRAINT "guide_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_rels" ADD CONSTRAINT "_guide_v_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_rels" ADD CONSTRAINT "_guide_v_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_rels" ADD CONSTRAINT "_guide_v_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "page_rels_post_id_idx" ON "page_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "page_rels_download_id_idx" ON "page_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "page_rels_guide_id_idx" ON "page_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_post_id_idx" ON "_page_v_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_download_id_idx" ON "_page_v_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_guide_id_idx" ON "_page_v_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "post_rels_post_id_idx" ON "post_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "post_rels_download_id_idx" ON "post_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "post_rels_guide_id_idx" ON "post_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_post_id_idx" ON "_post_v_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_download_id_idx" ON "_post_v_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_guide_id_idx" ON "_post_v_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "download_rels_post_id_idx" ON "download_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "download_rels_download_id_idx" ON "download_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "download_rels_guide_id_idx" ON "download_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_post_id_idx" ON "_download_v_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_download_id_idx" ON "_download_v_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_guide_id_idx" ON "_download_v_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "guide_rels_post_id_idx" ON "guide_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "guide_rels_download_id_idx" ON "guide_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "guide_rels_guide_id_idx" ON "guide_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_post_id_idx" ON "_guide_v_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_download_id_idx" ON "_guide_v_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_guide_id_idx" ON "_guide_v_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_post_id_idx" ON "settings_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_download_id_idx" ON "settings_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_guide_id_idx" ON "settings_rels" USING btree ("guide_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "page_rels" DROP CONSTRAINT "page_rels_post_fk";
  
  ALTER TABLE "page_rels" DROP CONSTRAINT "page_rels_download_fk";
  
  ALTER TABLE "page_rels" DROP CONSTRAINT "page_rels_guide_fk";
  
  ALTER TABLE "_page_v_rels" DROP CONSTRAINT "_page_v_rels_post_fk";
  
  ALTER TABLE "_page_v_rels" DROP CONSTRAINT "_page_v_rels_download_fk";
  
  ALTER TABLE "_page_v_rels" DROP CONSTRAINT "_page_v_rels_guide_fk";
  
  ALTER TABLE "post_rels" DROP CONSTRAINT "post_rels_post_fk";
  
  ALTER TABLE "post_rels" DROP CONSTRAINT "post_rels_download_fk";
  
  ALTER TABLE "post_rels" DROP CONSTRAINT "post_rels_guide_fk";
  
  ALTER TABLE "_post_v_rels" DROP CONSTRAINT "_post_v_rels_post_fk";
  
  ALTER TABLE "_post_v_rels" DROP CONSTRAINT "_post_v_rels_download_fk";
  
  ALTER TABLE "_post_v_rels" DROP CONSTRAINT "_post_v_rels_guide_fk";
  
  ALTER TABLE "download_rels" DROP CONSTRAINT "download_rels_post_fk";
  
  ALTER TABLE "download_rels" DROP CONSTRAINT "download_rels_download_fk";
  
  ALTER TABLE "download_rels" DROP CONSTRAINT "download_rels_guide_fk";
  
  ALTER TABLE "_download_v_rels" DROP CONSTRAINT "_download_v_rels_post_fk";
  
  ALTER TABLE "_download_v_rels" DROP CONSTRAINT "_download_v_rels_download_fk";
  
  ALTER TABLE "_download_v_rels" DROP CONSTRAINT "_download_v_rels_guide_fk";
  
  ALTER TABLE "guide_rels" DROP CONSTRAINT "guide_rels_post_fk";
  
  ALTER TABLE "guide_rels" DROP CONSTRAINT "guide_rels_download_fk";
  
  ALTER TABLE "guide_rels" DROP CONSTRAINT "guide_rels_guide_fk";
  
  ALTER TABLE "_guide_v_rels" DROP CONSTRAINT "_guide_v_rels_post_fk";
  
  ALTER TABLE "_guide_v_rels" DROP CONSTRAINT "_guide_v_rels_download_fk";
  
  ALTER TABLE "_guide_v_rels" DROP CONSTRAINT "_guide_v_rels_guide_fk";
  
  ALTER TABLE "settings_rels" DROP CONSTRAINT "settings_rels_post_fk";
  
  ALTER TABLE "settings_rels" DROP CONSTRAINT "settings_rels_download_fk";
  
  ALTER TABLE "settings_rels" DROP CONSTRAINT "settings_rels_guide_fk";
  
  DROP INDEX IF EXISTS "page_rels_post_id_idx";
  DROP INDEX IF EXISTS "page_rels_download_id_idx";
  DROP INDEX IF EXISTS "page_rels_guide_id_idx";
  DROP INDEX IF EXISTS "_page_v_rels_post_id_idx";
  DROP INDEX IF EXISTS "_page_v_rels_download_id_idx";
  DROP INDEX IF EXISTS "_page_v_rels_guide_id_idx";
  DROP INDEX IF EXISTS "post_rels_post_id_idx";
  DROP INDEX IF EXISTS "post_rels_download_id_idx";
  DROP INDEX IF EXISTS "post_rels_guide_id_idx";
  DROP INDEX IF EXISTS "_post_v_rels_post_id_idx";
  DROP INDEX IF EXISTS "_post_v_rels_download_id_idx";
  DROP INDEX IF EXISTS "_post_v_rels_guide_id_idx";
  DROP INDEX IF EXISTS "download_rels_post_id_idx";
  DROP INDEX IF EXISTS "download_rels_download_id_idx";
  DROP INDEX IF EXISTS "download_rels_guide_id_idx";
  DROP INDEX IF EXISTS "_download_v_rels_post_id_idx";
  DROP INDEX IF EXISTS "_download_v_rels_download_id_idx";
  DROP INDEX IF EXISTS "_download_v_rels_guide_id_idx";
  DROP INDEX IF EXISTS "guide_rels_post_id_idx";
  DROP INDEX IF EXISTS "guide_rels_download_id_idx";
  DROP INDEX IF EXISTS "guide_rels_guide_id_idx";
  DROP INDEX IF EXISTS "_guide_v_rels_post_id_idx";
  DROP INDEX IF EXISTS "_guide_v_rels_download_id_idx";
  DROP INDEX IF EXISTS "_guide_v_rels_guide_id_idx";
  DROP INDEX IF EXISTS "settings_rels_post_id_idx";
  DROP INDEX IF EXISTS "settings_rels_download_id_idx";
  DROP INDEX IF EXISTS "settings_rels_guide_id_idx";
  ALTER TABLE "page_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "page_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "page_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "_page_v_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "_page_v_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "_page_v_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "post_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "post_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "post_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "_post_v_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "_post_v_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "_post_v_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "download_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "download_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "download_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "_download_v_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "_download_v_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "_download_v_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "guide_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "guide_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "guide_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "_guide_v_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "_guide_v_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "_guide_v_rels" DROP COLUMN IF EXISTS "guide_id";
  ALTER TABLE "settings_rels" DROP COLUMN IF EXISTS "post_id";
  ALTER TABLE "settings_rels" DROP COLUMN IF EXISTS "download_id";
  ALTER TABLE "settings_rels" DROP COLUMN IF EXISTS "guide_id";`)
}
