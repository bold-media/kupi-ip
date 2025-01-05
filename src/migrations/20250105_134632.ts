import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "media" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" varchar DEFAULT 'none',
  	"smiley_title" jsonb,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_call_to_action_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" varchar DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"content" jsonb,
  	"with_sublink" boolean,
  	"sublink_type" varchar DEFAULT 'reference',
  	"sublink_new_tab" boolean,
  	"sublink_url" varchar,
  	"sublink_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"suffix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_tariffs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_blocks_recent_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"settings_limit" numeric DEFAULT 5,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" uuid,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "page" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"pathname" varchar,
  	"parent_id" uuid,
  	"hero_type" varchar DEFAULT 'standard',
  	"hero_rich_text" jsonb,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" varchar DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid,
  	"category_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" varchar DEFAULT 'none',
  	"smiley_title" jsonb,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_call_to_action_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" varchar DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"content" jsonb,
  	"with_sublink" boolean,
  	"sublink_type" varchar DEFAULT 'reference',
  	"sublink_new_tab" boolean,
  	"sublink_url" varchar,
  	"sublink_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"suffix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_tariffs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_blocks_recent_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"settings_limit" numeric DEFAULT 5,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"doc_id" uuid,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_pathname" varchar,
  	"version_parent_id" uuid,
  	"version_hero_type" varchar DEFAULT 'standard',
  	"version_hero_rich_text" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" uuid,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" varchar DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_page_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid,
  	"category_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" varchar DEFAULT 'none',
  	"smiley_title" jsonb,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_call_to_action_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" varchar DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"content" jsonb,
  	"with_sublink" boolean,
  	"sublink_type" varchar DEFAULT 'reference',
  	"sublink_new_tab" boolean,
  	"sublink_url" varchar,
  	"sublink_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"suffix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_tariffs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post_blocks_recent_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"settings_limit" numeric DEFAULT 5,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "post" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"cover_id" uuid,
  	"excerpt" varchar,
  	"article" jsonb,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" varchar DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "post_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"category_id" uuid,
  	"page_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" varchar DEFAULT 'none',
  	"smiley_title" jsonb,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_call_to_action_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" varchar DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"content" jsonb,
  	"with_sublink" boolean,
  	"sublink_type" varchar DEFAULT 'reference',
  	"sublink_new_tab" boolean,
  	"sublink_url" varchar,
  	"sublink_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"suffix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_tariffs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_blocks_recent_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"settings_limit" numeric DEFAULT 5,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_cover_id" uuid,
  	"version_excerpt" varchar,
  	"version_article" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" uuid,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" varchar DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_post_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"category_id" uuid,
  	"page_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "category" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "download_platforms" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" varchar,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "download" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"links_windows" varchar,
  	"links_macos" varchar,
  	"links_linux" varchar,
  	"links_android" varchar,
  	"links_ios" varchar,
  	"intro" jsonb,
  	"icon_id" uuid,
  	"content" jsonb,
  	"preview_text" varchar,
  	"mockup_id" uuid,
  	"buy_link_type" varchar DEFAULT 'reference',
  	"buy_link_new_tab" boolean,
  	"buy_link_url" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" varchar DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "download_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_download_v_version_platforms" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" varchar,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_download_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_links_windows" varchar,
  	"version_links_macos" varchar,
  	"version_links_linux" varchar,
  	"version_links_android" varchar,
  	"version_links_ios" varchar,
  	"version_intro" jsonb,
  	"version_icon_id" uuid,
  	"version_content" jsonb,
  	"version_preview_text" varchar,
  	"version_mockup_id" uuid,
  	"version_buy_link_type" varchar DEFAULT 'reference',
  	"version_buy_link_new_tab" boolean,
  	"version_buy_link_url" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" uuid,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" varchar DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_download_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" varchar DEFAULT 'none',
  	"smiley_title" jsonb,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_call_to_action_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" varchar DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"content" jsonb,
  	"with_sublink" boolean,
  	"sublink_type" varchar DEFAULT 'reference',
  	"sublink_new_tab" boolean,
  	"sublink_url" varchar,
  	"sublink_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"suffix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_tariffs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide_blocks_recent_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"settings_limit" numeric DEFAULT 5,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "guide" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"cover_id" uuid,
  	"excerpt" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" uuid,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" varchar DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "guide_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid,
  	"category_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" varchar DEFAULT 'none',
  	"smiley_title" jsonb,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_call_to_action_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" varchar DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"content" jsonb,
  	"with_sublink" boolean,
  	"sublink_type" varchar DEFAULT 'reference',
  	"sublink_new_tab" boolean,
  	"sublink_url" varchar,
  	"sublink_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"suffix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_tariffs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"with_prefix" boolean DEFAULT true,
  	"prefix" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_blocks_recent_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"background_padding_top" varchar DEFAULT 'md',
  	"background_padding_bottom" varchar DEFAULT 'md',
  	"background_type" varchar DEFAULT 'none',
  	"prefix" jsonb,
  	"settings_limit" numeric DEFAULT 5,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_cover_id" uuid,
  	"version_excerpt" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" uuid,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" varchar DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_guide_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid,
  	"category_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "user_roles" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" varchar,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid,
  	"page_id" uuid,
  	"post_id" uuid,
  	"category_id" uuid,
  	"download_id" uuid,
  	"guide_id" uuid,
  	"user_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"user_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings_navigation_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings_navigation_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" varchar DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"tariffs_month_term" varchar,
  	"tariffs_month_benefit" varchar,
  	"tariffs_month_limit" varchar,
  	"tariffs_month_description" jsonb,
  	"tariffs_month_price" varchar,
  	"tariffs_month_link_type" varchar DEFAULT 'reference',
  	"tariffs_month_link_new_tab" boolean,
  	"tariffs_month_link_url" varchar,
  	"tariffs_month_trial_link_type" varchar DEFAULT 'reference',
  	"tariffs_month_trial_link_new_tab" boolean,
  	"tariffs_month_trial_link_url" varchar,
  	"tariffs_quarter_term" varchar,
  	"tariffs_quarter_benefit" varchar,
  	"tariffs_quarter_limit" varchar,
  	"tariffs_quarter_description" jsonb,
  	"tariffs_quarter_price" varchar,
  	"tariffs_quarter_link_type" varchar DEFAULT 'reference',
  	"tariffs_quarter_link_new_tab" boolean,
  	"tariffs_quarter_link_url" varchar,
  	"tariffs_quarter_trial_link_type" varchar DEFAULT 'reference',
  	"tariffs_quarter_trial_link_new_tab" boolean,
  	"tariffs_quarter_trial_link_url" varchar,
  	"tariffs_year_term" varchar,
  	"tariffs_year_benefit" varchar,
  	"tariffs_year_limit" varchar,
  	"tariffs_year_description" jsonb,
  	"tariffs_year_price" varchar,
  	"tariffs_year_link_type" varchar DEFAULT 'reference',
  	"tariffs_year_link_new_tab" boolean,
  	"tariffs_year_link_url" varchar,
  	"tariffs_year_trial_link_type" varchar DEFAULT 'reference',
  	"tariffs_year_trial_link_new_tab" boolean,
  	"tariffs_year_trial_link_url" varchar,
  	"navigation_header_with_support_link" boolean,
  	"navigation_header_support_link_type" varchar DEFAULT 'reference',
  	"navigation_header_support_link_new_tab" boolean,
  	"navigation_header_support_link_url" varchar,
  	"navigation_header_support_link_label" varchar,
  	"navigation_footer_copy_text" varchar,
  	"downloads_content" jsonb,
  	"seo_default_title" varchar,
  	"seo_default_description" varchar,
  	"seo_default_image_id" uuid,
  	"seo_posts_title" varchar,
  	"seo_posts_description" varchar,
  	"seo_posts_image_id" uuid,
  	"seo_downloads_title" varchar,
  	"seo_downloads_description" varchar,
  	"seo_downloads_image_id" uuid,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"page_id" uuid
  );
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_accordion_items" ADD CONSTRAINT "page_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_accordion" ADD CONSTRAINT "page_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_call_to_action_links" ADD CONSTRAINT "page_blocks_call_to_action_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_blocks_call_to_action"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_call_to_action" ADD CONSTRAINT "page_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_downloads" ADD CONSTRAINT "page_blocks_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_features_features" ADD CONSTRAINT "page_blocks_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_features" ADD CONSTRAINT "page_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_steps_items" ADD CONSTRAINT "page_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_steps" ADD CONSTRAINT "page_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_tariffs" ADD CONSTRAINT "page_blocks_tariffs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_blocks_recent_posts" ADD CONSTRAINT "page_blocks_recent_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_breadcrumbs" ADD CONSTRAINT "page_breadcrumbs_doc_id_page_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_breadcrumbs" ADD CONSTRAINT "page_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page" ADD CONSTRAINT "page_parent_id_page_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page" ADD CONSTRAINT "page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_rels" ADD CONSTRAINT "page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_rels" ADD CONSTRAINT "page_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "page_rels" ADD CONSTRAINT "page_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_accordion_items" ADD CONSTRAINT "_page_v_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_accordion" ADD CONSTRAINT "_page_v_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_call_to_action_links" ADD CONSTRAINT "_page_v_blocks_call_to_action_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v_blocks_call_to_action"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_call_to_action" ADD CONSTRAINT "_page_v_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_downloads" ADD CONSTRAINT "_page_v_blocks_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_features_features" ADD CONSTRAINT "_page_v_blocks_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_features" ADD CONSTRAINT "_page_v_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_steps_items" ADD CONSTRAINT "_page_v_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_steps" ADD CONSTRAINT "_page_v_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_tariffs" ADD CONSTRAINT "_page_v_blocks_tariffs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_blocks_recent_posts" ADD CONSTRAINT "_page_v_blocks_recent_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_version_breadcrumbs" ADD CONSTRAINT "_page_v_version_breadcrumbs_doc_id_page_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_version_breadcrumbs" ADD CONSTRAINT "_page_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v" ADD CONSTRAINT "_page_v_parent_id_page_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v" ADD CONSTRAINT "_page_v_version_parent_id_page_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v" ADD CONSTRAINT "_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_rels" ADD CONSTRAINT "_page_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_rels" ADD CONSTRAINT "_page_v_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_page_v_rels" ADD CONSTRAINT "_page_v_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_accordion_items" ADD CONSTRAINT "post_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_accordion" ADD CONSTRAINT "post_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_call_to_action_links" ADD CONSTRAINT "post_blocks_call_to_action_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post_blocks_call_to_action"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_call_to_action" ADD CONSTRAINT "post_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_downloads" ADD CONSTRAINT "post_blocks_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_features_features" ADD CONSTRAINT "post_blocks_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_features" ADD CONSTRAINT "post_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_steps_items" ADD CONSTRAINT "post_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_steps" ADD CONSTRAINT "post_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_tariffs" ADD CONSTRAINT "post_blocks_tariffs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_blocks_recent_posts" ADD CONSTRAINT "post_blocks_recent_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post" ADD CONSTRAINT "post_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post" ADD CONSTRAINT "post_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_rels" ADD CONSTRAINT "post_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_rels" ADD CONSTRAINT "post_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "post_rels" ADD CONSTRAINT "post_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_accordion_items" ADD CONSTRAINT "_post_v_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_accordion" ADD CONSTRAINT "_post_v_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_call_to_action_links" ADD CONSTRAINT "_post_v_blocks_call_to_action_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v_blocks_call_to_action"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_call_to_action" ADD CONSTRAINT "_post_v_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_downloads" ADD CONSTRAINT "_post_v_blocks_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_features_features" ADD CONSTRAINT "_post_v_blocks_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_features" ADD CONSTRAINT "_post_v_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_steps_items" ADD CONSTRAINT "_post_v_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_steps" ADD CONSTRAINT "_post_v_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_tariffs" ADD CONSTRAINT "_post_v_blocks_tariffs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_blocks_recent_posts" ADD CONSTRAINT "_post_v_blocks_recent_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v" ADD CONSTRAINT "_post_v_parent_id_post_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."post"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v" ADD CONSTRAINT "_post_v_version_cover_id_media_id_fk" FOREIGN KEY ("version_cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v" ADD CONSTRAINT "_post_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_rels" ADD CONSTRAINT "_post_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_post_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_rels" ADD CONSTRAINT "_post_v_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_post_v_rels" ADD CONSTRAINT "_post_v_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download_platforms" ADD CONSTRAINT "download_platforms_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download" ADD CONSTRAINT "download_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download" ADD CONSTRAINT "download_mockup_id_media_id_fk" FOREIGN KEY ("mockup_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download" ADD CONSTRAINT "download_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download_rels" ADD CONSTRAINT "download_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "download_rels" ADD CONSTRAINT "download_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v_version_platforms" ADD CONSTRAINT "_download_v_version_platforms_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_download_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v" ADD CONSTRAINT "_download_v_parent_id_download_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."download"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v" ADD CONSTRAINT "_download_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v" ADD CONSTRAINT "_download_v_version_mockup_id_media_id_fk" FOREIGN KEY ("version_mockup_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v" ADD CONSTRAINT "_download_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v_rels" ADD CONSTRAINT "_download_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_download_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_download_v_rels" ADD CONSTRAINT "_download_v_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_accordion_items" ADD CONSTRAINT "guide_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_accordion" ADD CONSTRAINT "guide_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_call_to_action_links" ADD CONSTRAINT "guide_blocks_call_to_action_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide_blocks_call_to_action"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_call_to_action" ADD CONSTRAINT "guide_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_downloads" ADD CONSTRAINT "guide_blocks_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_features_features" ADD CONSTRAINT "guide_blocks_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_features" ADD CONSTRAINT "guide_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_steps_items" ADD CONSTRAINT "guide_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_steps" ADD CONSTRAINT "guide_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_tariffs" ADD CONSTRAINT "guide_blocks_tariffs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_blocks_recent_posts" ADD CONSTRAINT "guide_blocks_recent_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide" ADD CONSTRAINT "guide_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide" ADD CONSTRAINT "guide_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_rels" ADD CONSTRAINT "guide_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_rels" ADD CONSTRAINT "guide_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "guide_rels" ADD CONSTRAINT "guide_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_accordion_items" ADD CONSTRAINT "_guide_v_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_accordion" ADD CONSTRAINT "_guide_v_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_call_to_action_links" ADD CONSTRAINT "_guide_v_blocks_call_to_action_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v_blocks_call_to_action"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_call_to_action" ADD CONSTRAINT "_guide_v_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_downloads" ADD CONSTRAINT "_guide_v_blocks_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_features_features" ADD CONSTRAINT "_guide_v_blocks_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_features" ADD CONSTRAINT "_guide_v_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_steps_items" ADD CONSTRAINT "_guide_v_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_steps" ADD CONSTRAINT "_guide_v_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_tariffs" ADD CONSTRAINT "_guide_v_blocks_tariffs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_blocks_recent_posts" ADD CONSTRAINT "_guide_v_blocks_recent_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v" ADD CONSTRAINT "_guide_v_parent_id_guide_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guide"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v" ADD CONSTRAINT "_guide_v_version_cover_id_media_id_fk" FOREIGN KEY ("version_cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v" ADD CONSTRAINT "_guide_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_rels" ADD CONSTRAINT "_guide_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guide_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_rels" ADD CONSTRAINT "_guide_v_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_guide_v_rels" ADD CONSTRAINT "_guide_v_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_post_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_category_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_download_fk" FOREIGN KEY ("download_id") REFERENCES "public"."download"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guide_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guide"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_user_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_navigation_header_links" ADD CONSTRAINT "settings_navigation_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_navigation_footer_links" ADD CONSTRAINT "settings_navigation_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_seo_default_image_id_media_id_fk" FOREIGN KEY ("seo_default_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_seo_posts_image_id_media_id_fk" FOREIGN KEY ("seo_posts_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_seo_downloads_image_id_media_id_fk" FOREIGN KEY ("seo_downloads_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX IF NOT EXISTS "page_blocks_accordion_items_order_idx" ON "page_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_accordion_items_parent_id_idx" ON "page_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_accordion_order_idx" ON "page_blocks_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_accordion_parent_id_idx" ON "page_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_accordion_path_idx" ON "page_blocks_accordion" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_links_order_idx" ON "page_blocks_call_to_action_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_links_parent_id_idx" ON "page_blocks_call_to_action_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_order_idx" ON "page_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_parent_id_idx" ON "page_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_path_idx" ON "page_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_downloads_order_idx" ON "page_blocks_downloads" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_downloads_parent_id_idx" ON "page_blocks_downloads" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_downloads_path_idx" ON "page_blocks_downloads" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_features_order_idx" ON "page_blocks_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_features_parent_id_idx" ON "page_blocks_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_order_idx" ON "page_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_parent_id_idx" ON "page_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_path_idx" ON "page_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_steps_items_order_idx" ON "page_blocks_steps_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_steps_items_parent_id_idx" ON "page_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_steps_order_idx" ON "page_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_steps_parent_id_idx" ON "page_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_steps_path_idx" ON "page_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_tariffs_order_idx" ON "page_blocks_tariffs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_tariffs_parent_id_idx" ON "page_blocks_tariffs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_tariffs_path_idx" ON "page_blocks_tariffs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_recent_posts_order_idx" ON "page_blocks_recent_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_recent_posts_parent_id_idx" ON "page_blocks_recent_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_recent_posts_path_idx" ON "page_blocks_recent_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_breadcrumbs_order_idx" ON "page_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_breadcrumbs_parent_id_idx" ON "page_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_breadcrumbs_doc_idx" ON "page_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "page_slug_idx" ON "page" USING btree ("slug");
  CREATE UNIQUE INDEX IF NOT EXISTS "page_pathname_idx" ON "page" USING btree ("pathname");
  CREATE INDEX IF NOT EXISTS "page_parent_idx" ON "page" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "page_meta_meta_image_idx" ON "page" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "page_updated_at_idx" ON "page" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "page_created_at_idx" ON "page" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "page__status_idx" ON "page" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "page_rels_order_idx" ON "page_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "page_rels_parent_idx" ON "page_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "page_rels_path_idx" ON "page_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "page_rels_page_id_idx" ON "page_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "page_rels_category_id_idx" ON "page_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_accordion_items_order_idx" ON "_page_v_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_accordion_items_parent_id_idx" ON "_page_v_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_accordion_order_idx" ON "_page_v_blocks_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_accordion_parent_id_idx" ON "_page_v_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_accordion_path_idx" ON "_page_v_blocks_accordion" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_call_to_action_links_order_idx" ON "_page_v_blocks_call_to_action_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_call_to_action_links_parent_id_idx" ON "_page_v_blocks_call_to_action_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_call_to_action_order_idx" ON "_page_v_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_call_to_action_parent_id_idx" ON "_page_v_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_call_to_action_path_idx" ON "_page_v_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_downloads_order_idx" ON "_page_v_blocks_downloads" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_downloads_parent_id_idx" ON "_page_v_blocks_downloads" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_downloads_path_idx" ON "_page_v_blocks_downloads" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_features_features_order_idx" ON "_page_v_blocks_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_features_features_parent_id_idx" ON "_page_v_blocks_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_features_order_idx" ON "_page_v_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_features_parent_id_idx" ON "_page_v_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_features_path_idx" ON "_page_v_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_steps_items_order_idx" ON "_page_v_blocks_steps_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_steps_items_parent_id_idx" ON "_page_v_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_steps_order_idx" ON "_page_v_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_steps_parent_id_idx" ON "_page_v_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_steps_path_idx" ON "_page_v_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_tariffs_order_idx" ON "_page_v_blocks_tariffs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_tariffs_parent_id_idx" ON "_page_v_blocks_tariffs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_tariffs_path_idx" ON "_page_v_blocks_tariffs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_recent_posts_order_idx" ON "_page_v_blocks_recent_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_recent_posts_parent_id_idx" ON "_page_v_blocks_recent_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_blocks_recent_posts_path_idx" ON "_page_v_blocks_recent_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_page_v_version_breadcrumbs_order_idx" ON "_page_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_page_v_version_breadcrumbs_parent_id_idx" ON "_page_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_version_breadcrumbs_doc_idx" ON "_page_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_page_v_parent_idx" ON "_page_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_version_version_slug_idx" ON "_page_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_page_v_version_version_pathname_idx" ON "_page_v" USING btree ("version_pathname");
  CREATE INDEX IF NOT EXISTS "_page_v_version_version_parent_idx" ON "_page_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_version_meta_version_meta_image_idx" ON "_page_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_page_v_version_version_updated_at_idx" ON "_page_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_page_v_version_version_created_at_idx" ON "_page_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_page_v_version_version__status_idx" ON "_page_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_page_v_created_at_idx" ON "_page_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_page_v_updated_at_idx" ON "_page_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_page_v_latest_idx" ON "_page_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_page_v_autosave_idx" ON "_page_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_order_idx" ON "_page_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_parent_idx" ON "_page_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_path_idx" ON "_page_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_page_id_idx" ON "_page_v_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_page_v_rels_category_id_idx" ON "_page_v_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_accordion_items_order_idx" ON "post_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_accordion_items_parent_id_idx" ON "post_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_accordion_order_idx" ON "post_blocks_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_accordion_parent_id_idx" ON "post_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_accordion_path_idx" ON "post_blocks_accordion" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "post_blocks_call_to_action_links_order_idx" ON "post_blocks_call_to_action_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_call_to_action_links_parent_id_idx" ON "post_blocks_call_to_action_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_call_to_action_order_idx" ON "post_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_call_to_action_parent_id_idx" ON "post_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_call_to_action_path_idx" ON "post_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "post_blocks_downloads_order_idx" ON "post_blocks_downloads" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_downloads_parent_id_idx" ON "post_blocks_downloads" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_downloads_path_idx" ON "post_blocks_downloads" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "post_blocks_features_features_order_idx" ON "post_blocks_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_features_features_parent_id_idx" ON "post_blocks_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_features_order_idx" ON "post_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_features_parent_id_idx" ON "post_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_features_path_idx" ON "post_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "post_blocks_steps_items_order_idx" ON "post_blocks_steps_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_steps_items_parent_id_idx" ON "post_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_steps_order_idx" ON "post_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_steps_parent_id_idx" ON "post_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_steps_path_idx" ON "post_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "post_blocks_tariffs_order_idx" ON "post_blocks_tariffs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_tariffs_parent_id_idx" ON "post_blocks_tariffs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_tariffs_path_idx" ON "post_blocks_tariffs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "post_blocks_recent_posts_order_idx" ON "post_blocks_recent_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "post_blocks_recent_posts_parent_id_idx" ON "post_blocks_recent_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "post_blocks_recent_posts_path_idx" ON "post_blocks_recent_posts" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "post_slug_idx" ON "post" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "post_cover_idx" ON "post" USING btree ("cover_id");
  CREATE INDEX IF NOT EXISTS "post_meta_meta_image_idx" ON "post" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "post_updated_at_idx" ON "post" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "post_created_at_idx" ON "post" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "post__status_idx" ON "post" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "post_rels_order_idx" ON "post_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "post_rels_parent_idx" ON "post_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "post_rels_path_idx" ON "post_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "post_rels_category_id_idx" ON "post_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "post_rels_page_id_idx" ON "post_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_accordion_items_order_idx" ON "_post_v_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_accordion_items_parent_id_idx" ON "_post_v_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_accordion_order_idx" ON "_post_v_blocks_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_accordion_parent_id_idx" ON "_post_v_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_accordion_path_idx" ON "_post_v_blocks_accordion" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_call_to_action_links_order_idx" ON "_post_v_blocks_call_to_action_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_call_to_action_links_parent_id_idx" ON "_post_v_blocks_call_to_action_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_call_to_action_order_idx" ON "_post_v_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_call_to_action_parent_id_idx" ON "_post_v_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_call_to_action_path_idx" ON "_post_v_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_downloads_order_idx" ON "_post_v_blocks_downloads" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_downloads_parent_id_idx" ON "_post_v_blocks_downloads" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_downloads_path_idx" ON "_post_v_blocks_downloads" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_features_features_order_idx" ON "_post_v_blocks_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_features_features_parent_id_idx" ON "_post_v_blocks_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_features_order_idx" ON "_post_v_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_features_parent_id_idx" ON "_post_v_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_features_path_idx" ON "_post_v_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_steps_items_order_idx" ON "_post_v_blocks_steps_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_steps_items_parent_id_idx" ON "_post_v_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_steps_order_idx" ON "_post_v_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_steps_parent_id_idx" ON "_post_v_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_steps_path_idx" ON "_post_v_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_tariffs_order_idx" ON "_post_v_blocks_tariffs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_tariffs_parent_id_idx" ON "_post_v_blocks_tariffs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_tariffs_path_idx" ON "_post_v_blocks_tariffs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_recent_posts_order_idx" ON "_post_v_blocks_recent_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_recent_posts_parent_id_idx" ON "_post_v_blocks_recent_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_blocks_recent_posts_path_idx" ON "_post_v_blocks_recent_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_post_v_parent_idx" ON "_post_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_version_version_slug_idx" ON "_post_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_post_v_version_version_cover_idx" ON "_post_v" USING btree ("version_cover_id");
  CREATE INDEX IF NOT EXISTS "_post_v_version_meta_version_meta_image_idx" ON "_post_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_post_v_version_version_updated_at_idx" ON "_post_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_post_v_version_version_created_at_idx" ON "_post_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_post_v_version_version__status_idx" ON "_post_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_post_v_created_at_idx" ON "_post_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_post_v_updated_at_idx" ON "_post_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_post_v_latest_idx" ON "_post_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_post_v_autosave_idx" ON "_post_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_order_idx" ON "_post_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_parent_idx" ON "_post_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_path_idx" ON "_post_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_category_id_idx" ON "_post_v_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "_post_v_rels_page_id_idx" ON "_post_v_rels" USING btree ("page_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "category_slug_idx" ON "category" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "category_updated_at_idx" ON "category" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "category_created_at_idx" ON "category" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "download_platforms_order_idx" ON "download_platforms" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "download_platforms_parent_idx" ON "download_platforms" USING btree ("parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "download_slug_idx" ON "download" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "download_icon_idx" ON "download" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "download_mockup_idx" ON "download" USING btree ("mockup_id");
  CREATE INDEX IF NOT EXISTS "download_meta_meta_image_idx" ON "download" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "download_updated_at_idx" ON "download" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "download_created_at_idx" ON "download" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "download__status_idx" ON "download" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "download_rels_order_idx" ON "download_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "download_rels_parent_idx" ON "download_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "download_rels_path_idx" ON "download_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "download_rels_page_id_idx" ON "download_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_download_v_version_platforms_order_idx" ON "_download_v_version_platforms" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_download_v_version_platforms_parent_idx" ON "_download_v_version_platforms" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_download_v_parent_idx" ON "_download_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_download_v_version_version_slug_idx" ON "_download_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_download_v_version_version_icon_idx" ON "_download_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_download_v_version_version_mockup_idx" ON "_download_v" USING btree ("version_mockup_id");
  CREATE INDEX IF NOT EXISTS "_download_v_version_meta_version_meta_image_idx" ON "_download_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_download_v_version_version_updated_at_idx" ON "_download_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_download_v_version_version_created_at_idx" ON "_download_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_download_v_version_version__status_idx" ON "_download_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_download_v_created_at_idx" ON "_download_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_download_v_updated_at_idx" ON "_download_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_download_v_latest_idx" ON "_download_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_download_v_autosave_idx" ON "_download_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_order_idx" ON "_download_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_parent_idx" ON "_download_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_path_idx" ON "_download_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_download_v_rels_page_id_idx" ON "_download_v_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_accordion_items_order_idx" ON "guide_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_accordion_items_parent_id_idx" ON "guide_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_accordion_order_idx" ON "guide_blocks_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_accordion_parent_id_idx" ON "guide_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_accordion_path_idx" ON "guide_blocks_accordion" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_blocks_call_to_action_links_order_idx" ON "guide_blocks_call_to_action_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_call_to_action_links_parent_id_idx" ON "guide_blocks_call_to_action_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_call_to_action_order_idx" ON "guide_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_call_to_action_parent_id_idx" ON "guide_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_call_to_action_path_idx" ON "guide_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_blocks_downloads_order_idx" ON "guide_blocks_downloads" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_downloads_parent_id_idx" ON "guide_blocks_downloads" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_downloads_path_idx" ON "guide_blocks_downloads" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_blocks_features_features_order_idx" ON "guide_blocks_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_features_features_parent_id_idx" ON "guide_blocks_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_features_order_idx" ON "guide_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_features_parent_id_idx" ON "guide_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_features_path_idx" ON "guide_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_blocks_steps_items_order_idx" ON "guide_blocks_steps_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_steps_items_parent_id_idx" ON "guide_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_steps_order_idx" ON "guide_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_steps_parent_id_idx" ON "guide_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_steps_path_idx" ON "guide_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_blocks_tariffs_order_idx" ON "guide_blocks_tariffs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_tariffs_parent_id_idx" ON "guide_blocks_tariffs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_tariffs_path_idx" ON "guide_blocks_tariffs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_blocks_recent_posts_order_idx" ON "guide_blocks_recent_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "guide_blocks_recent_posts_parent_id_idx" ON "guide_blocks_recent_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "guide_blocks_recent_posts_path_idx" ON "guide_blocks_recent_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "guide_cover_idx" ON "guide" USING btree ("cover_id");
  CREATE INDEX IF NOT EXISTS "guide_meta_meta_image_idx" ON "guide" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "guide_slug_idx" ON "guide" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "guide_updated_at_idx" ON "guide" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "guide_created_at_idx" ON "guide" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "guide__status_idx" ON "guide" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "guide_rels_order_idx" ON "guide_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "guide_rels_parent_idx" ON "guide_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "guide_rels_path_idx" ON "guide_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "guide_rels_page_id_idx" ON "guide_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "guide_rels_category_id_idx" ON "guide_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_accordion_items_order_idx" ON "_guide_v_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_accordion_items_parent_id_idx" ON "_guide_v_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_accordion_order_idx" ON "_guide_v_blocks_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_accordion_parent_id_idx" ON "_guide_v_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_accordion_path_idx" ON "_guide_v_blocks_accordion" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_call_to_action_links_order_idx" ON "_guide_v_blocks_call_to_action_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_call_to_action_links_parent_id_idx" ON "_guide_v_blocks_call_to_action_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_call_to_action_order_idx" ON "_guide_v_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_call_to_action_parent_id_idx" ON "_guide_v_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_call_to_action_path_idx" ON "_guide_v_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_downloads_order_idx" ON "_guide_v_blocks_downloads" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_downloads_parent_id_idx" ON "_guide_v_blocks_downloads" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_downloads_path_idx" ON "_guide_v_blocks_downloads" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_features_features_order_idx" ON "_guide_v_blocks_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_features_features_parent_id_idx" ON "_guide_v_blocks_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_features_order_idx" ON "_guide_v_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_features_parent_id_idx" ON "_guide_v_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_features_path_idx" ON "_guide_v_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_steps_items_order_idx" ON "_guide_v_blocks_steps_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_steps_items_parent_id_idx" ON "_guide_v_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_steps_order_idx" ON "_guide_v_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_steps_parent_id_idx" ON "_guide_v_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_steps_path_idx" ON "_guide_v_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_tariffs_order_idx" ON "_guide_v_blocks_tariffs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_tariffs_parent_id_idx" ON "_guide_v_blocks_tariffs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_tariffs_path_idx" ON "_guide_v_blocks_tariffs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_recent_posts_order_idx" ON "_guide_v_blocks_recent_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_recent_posts_parent_id_idx" ON "_guide_v_blocks_recent_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_blocks_recent_posts_path_idx" ON "_guide_v_blocks_recent_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_guide_v_parent_idx" ON "_guide_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_version_version_cover_idx" ON "_guide_v" USING btree ("version_cover_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_version_meta_version_meta_image_idx" ON "_guide_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_version_version_slug_idx" ON "_guide_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_guide_v_version_version_updated_at_idx" ON "_guide_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_guide_v_version_version_created_at_idx" ON "_guide_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_guide_v_version_version__status_idx" ON "_guide_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_guide_v_created_at_idx" ON "_guide_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_guide_v_updated_at_idx" ON "_guide_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_guide_v_latest_idx" ON "_guide_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_guide_v_autosave_idx" ON "_guide_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_order_idx" ON "_guide_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_parent_idx" ON "_guide_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_path_idx" ON "_guide_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_page_id_idx" ON "_guide_v_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_guide_v_rels_category_id_idx" ON "_guide_v_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "user_roles_order_idx" ON "user_roles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "user_roles_parent_idx" ON "user_roles" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "user_updated_at_idx" ON "user" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_created_at_idx" ON "user" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_email_idx" ON "user" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_page_id_idx" ON "payload_locked_documents_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_post_id_idx" ON "payload_locked_documents_rels" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_category_id_idx" ON "payload_locked_documents_rels" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_download_id_idx" ON "payload_locked_documents_rels" USING btree ("download_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_guide_id_idx" ON "payload_locked_documents_rels" USING btree ("guide_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_id_idx" ON "payload_locked_documents_rels" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_user_id_idx" ON "payload_preferences_rels" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "settings_navigation_header_links_order_idx" ON "settings_navigation_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "settings_navigation_header_links_parent_id_idx" ON "settings_navigation_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "settings_navigation_footer_links_order_idx" ON "settings_navigation_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "settings_navigation_footer_links_parent_id_idx" ON "settings_navigation_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "settings_seo_default_seo_default_image_idx" ON "settings" USING btree ("seo_default_image_id");
  CREATE INDEX IF NOT EXISTS "settings_seo_posts_seo_posts_image_idx" ON "settings" USING btree ("seo_posts_image_id");
  CREATE INDEX IF NOT EXISTS "settings_seo_downloads_seo_downloads_image_idx" ON "settings" USING btree ("seo_downloads_image_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_order_idx" ON "settings_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "settings_rels_parent_idx" ON "settings_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_path_idx" ON "settings_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "settings_rels_page_id_idx" ON "settings_rels" USING btree ("page_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "media" CASCADE;
  DROP TABLE "page_blocks_accordion_items" CASCADE;
  DROP TABLE "page_blocks_accordion" CASCADE;
  DROP TABLE "page_blocks_call_to_action_links" CASCADE;
  DROP TABLE "page_blocks_call_to_action" CASCADE;
  DROP TABLE "page_blocks_downloads" CASCADE;
  DROP TABLE "page_blocks_features_features" CASCADE;
  DROP TABLE "page_blocks_features" CASCADE;
  DROP TABLE "page_blocks_steps_items" CASCADE;
  DROP TABLE "page_blocks_steps" CASCADE;
  DROP TABLE "page_blocks_tariffs" CASCADE;
  DROP TABLE "page_blocks_recent_posts" CASCADE;
  DROP TABLE "page_breadcrumbs" CASCADE;
  DROP TABLE "page" CASCADE;
  DROP TABLE "page_rels" CASCADE;
  DROP TABLE "_page_v_blocks_accordion_items" CASCADE;
  DROP TABLE "_page_v_blocks_accordion" CASCADE;
  DROP TABLE "_page_v_blocks_call_to_action_links" CASCADE;
  DROP TABLE "_page_v_blocks_call_to_action" CASCADE;
  DROP TABLE "_page_v_blocks_downloads" CASCADE;
  DROP TABLE "_page_v_blocks_features_features" CASCADE;
  DROP TABLE "_page_v_blocks_features" CASCADE;
  DROP TABLE "_page_v_blocks_steps_items" CASCADE;
  DROP TABLE "_page_v_blocks_steps" CASCADE;
  DROP TABLE "_page_v_blocks_tariffs" CASCADE;
  DROP TABLE "_page_v_blocks_recent_posts" CASCADE;
  DROP TABLE "_page_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_page_v" CASCADE;
  DROP TABLE "_page_v_rels" CASCADE;
  DROP TABLE "post_blocks_accordion_items" CASCADE;
  DROP TABLE "post_blocks_accordion" CASCADE;
  DROP TABLE "post_blocks_call_to_action_links" CASCADE;
  DROP TABLE "post_blocks_call_to_action" CASCADE;
  DROP TABLE "post_blocks_downloads" CASCADE;
  DROP TABLE "post_blocks_features_features" CASCADE;
  DROP TABLE "post_blocks_features" CASCADE;
  DROP TABLE "post_blocks_steps_items" CASCADE;
  DROP TABLE "post_blocks_steps" CASCADE;
  DROP TABLE "post_blocks_tariffs" CASCADE;
  DROP TABLE "post_blocks_recent_posts" CASCADE;
  DROP TABLE "post" CASCADE;
  DROP TABLE "post_rels" CASCADE;
  DROP TABLE "_post_v_blocks_accordion_items" CASCADE;
  DROP TABLE "_post_v_blocks_accordion" CASCADE;
  DROP TABLE "_post_v_blocks_call_to_action_links" CASCADE;
  DROP TABLE "_post_v_blocks_call_to_action" CASCADE;
  DROP TABLE "_post_v_blocks_downloads" CASCADE;
  DROP TABLE "_post_v_blocks_features_features" CASCADE;
  DROP TABLE "_post_v_blocks_features" CASCADE;
  DROP TABLE "_post_v_blocks_steps_items" CASCADE;
  DROP TABLE "_post_v_blocks_steps" CASCADE;
  DROP TABLE "_post_v_blocks_tariffs" CASCADE;
  DROP TABLE "_post_v_blocks_recent_posts" CASCADE;
  DROP TABLE "_post_v" CASCADE;
  DROP TABLE "_post_v_rels" CASCADE;
  DROP TABLE "category" CASCADE;
  DROP TABLE "download_platforms" CASCADE;
  DROP TABLE "download" CASCADE;
  DROP TABLE "download_rels" CASCADE;
  DROP TABLE "_download_v_version_platforms" CASCADE;
  DROP TABLE "_download_v" CASCADE;
  DROP TABLE "_download_v_rels" CASCADE;
  DROP TABLE "guide_blocks_accordion_items" CASCADE;
  DROP TABLE "guide_blocks_accordion" CASCADE;
  DROP TABLE "guide_blocks_call_to_action_links" CASCADE;
  DROP TABLE "guide_blocks_call_to_action" CASCADE;
  DROP TABLE "guide_blocks_downloads" CASCADE;
  DROP TABLE "guide_blocks_features_features" CASCADE;
  DROP TABLE "guide_blocks_features" CASCADE;
  DROP TABLE "guide_blocks_steps_items" CASCADE;
  DROP TABLE "guide_blocks_steps" CASCADE;
  DROP TABLE "guide_blocks_tariffs" CASCADE;
  DROP TABLE "guide_blocks_recent_posts" CASCADE;
  DROP TABLE "guide" CASCADE;
  DROP TABLE "guide_rels" CASCADE;
  DROP TABLE "_guide_v_blocks_accordion_items" CASCADE;
  DROP TABLE "_guide_v_blocks_accordion" CASCADE;
  DROP TABLE "_guide_v_blocks_call_to_action_links" CASCADE;
  DROP TABLE "_guide_v_blocks_call_to_action" CASCADE;
  DROP TABLE "_guide_v_blocks_downloads" CASCADE;
  DROP TABLE "_guide_v_blocks_features_features" CASCADE;
  DROP TABLE "_guide_v_blocks_features" CASCADE;
  DROP TABLE "_guide_v_blocks_steps_items" CASCADE;
  DROP TABLE "_guide_v_blocks_steps" CASCADE;
  DROP TABLE "_guide_v_blocks_tariffs" CASCADE;
  DROP TABLE "_guide_v_blocks_recent_posts" CASCADE;
  DROP TABLE "_guide_v" CASCADE;
  DROP TABLE "_guide_v_rels" CASCADE;
  DROP TABLE "user_roles" CASCADE;
  DROP TABLE "user" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "settings_navigation_header_links" CASCADE;
  DROP TABLE "settings_navigation_footer_links" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "settings_rels" CASCADE;`)
}
