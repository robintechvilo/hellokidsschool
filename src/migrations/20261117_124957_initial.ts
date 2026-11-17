import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_programs_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum__programs_v_version_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum_facilities_icon" AS ENUM('Apple', 'Baby', 'Blocks', 'BookOpen', 'Bus', 'GraduationCap', 'MonitorPlay', 'Palette', 'Smile', 'Snowflake', 'Sun', 'Users');
  CREATE TYPE "public"."enum_facilities_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum__facilities_v_version_icon" AS ENUM('Apple', 'Baby', 'Blocks', 'BookOpen', 'Bus', 'GraduationCap', 'MonitorPlay', 'Palette', 'Smile', 'Snowflake', 'Sun', 'Users');
  CREATE TYPE "public"."enum__facilities_v_version_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum_events_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum__events_v_version_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum_media_gallery_category" AS ENUM('Classroom', 'Events', 'Art & Craft', 'Play & Tours');
  CREATE TYPE "public"."enum_admissions_status" AS ENUM('new', 'contacted', 'visited', 'admitted', 'closed');
  CREATE TYPE "public"."enum_visit_bookings_status" AS ENUM('new', 'confirmed', 'visited', 'no-show', 'cancelled');
  CREATE TYPE "public"."enum_messages_status" AS ENUM('new', 'replied', 'closed');
  CREATE TYPE "public"."enum_users_role" AS ENUM('super-admin', 'admin', 'editor');
  CREATE TYPE "public"."enum_exports_format" AS ENUM('csv', 'json');
  CREATE TYPE "public"."enum_exports_sort_order" AS ENUM('asc', 'desc');
  CREATE TYPE "public"."enum_exports_drafts" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_imports_import_mode" AS ENUM('create', 'update', 'upsert');
  CREATE TYPE "public"."enum_imports_status" AS ENUM('pending', 'completed', 'partial', 'failed');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'createCollectionExport', 'createCollectionImport');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'createCollectionExport', 'createCollectionImport');
  CREATE TYPE "public"."enum_home_page_sections_section" AS ENUM('classes', 'welcome', 'facilities', 'stats', 'daycare', 'routine', 'leadership', 'gallery', 'events', 'testimonials', 'admissionCta', 'faq');
  CREATE TYPE "public"."enum_home_page_stats_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum_home_page_routine_icon" AS ENUM('Apple', 'Baby', 'Blocks', 'BookOpen', 'Bus', 'GraduationCap', 'MonitorPlay', 'Palette', 'Smile', 'Snowflake', 'Sun', 'Users');
  CREATE TYPE "public"."enum_home_page_routine_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum__home_page_v_version_sections_section" AS ENUM('classes', 'welcome', 'facilities', 'stats', 'daycare', 'routine', 'leadership', 'gallery', 'events', 'testimonials', 'admissionCta', 'faq');
  CREATE TYPE "public"."enum__home_page_v_version_stats_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum__home_page_v_version_routine_icon" AS ENUM('Apple', 'Baby', 'Blocks', 'BookOpen', 'Bus', 'GraduationCap', 'MonitorPlay', 'Palette', 'Smile', 'Snowflake', 'Sun', 'Users');
  CREATE TYPE "public"."enum__home_page_v_version_routine_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum_about_page_values_icon" AS ENUM('Apple', 'Baby', 'Blocks', 'BookOpen', 'Bus', 'GraduationCap', 'MonitorPlay', 'Palette', 'Smile', 'Snowflake', 'Sun', 'Users');
  CREATE TYPE "public"."enum_about_page_values_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TYPE "public"."enum__about_page_v_version_values_icon" AS ENUM('Apple', 'Baby', 'Blocks', 'BookOpen', 'Bus', 'GraduationCap', 'MonitorPlay', 'Palette', 'Smile', 'Snowflake', 'Sun', 'Users');
  CREATE TYPE "public"."enum__about_page_v_version_values_color" AS ENUM('pink', 'orange', 'green', 'teal', 'purple', 'red', 'navy', 'yellow');
  CREATE TABLE "programs_learn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programs_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"age" varchar NOT NULL,
  	"color" "enum_programs_color" DEFAULT 'pink' NOT NULL,
  	"image_id" integer NOT NULL,
  	"blurb" varchar NOT NULL,
  	"intro" varchar NOT NULL,
  	"fee" varchar,
  	"show_on_home" boolean DEFAULT true,
  	"active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "programs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_programs_v_version_learn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_programs_v_version_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_programs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar NOT NULL,
  	"version_slug" varchar NOT NULL,
  	"version_age" varchar NOT NULL,
  	"version_color" "enum__programs_v_version_color" DEFAULT 'pink' NOT NULL,
  	"version_image_id" integer NOT NULL,
  	"version_blurb" varchar NOT NULL,
  	"version_intro" varchar NOT NULL,
  	"version_fee" varchar,
  	"version_show_on_home" boolean DEFAULT true,
  	"version_active" boolean DEFAULT true,
  	"version_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_programs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "facilities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"icon" "enum_facilities_icon" DEFAULT 'Smile' NOT NULL,
  	"color" "enum_facilities_color" DEFAULT 'pink' NOT NULL,
  	"image_id" integer NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_facilities_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar NOT NULL,
  	"version_text" varchar NOT NULL,
  	"version_icon" "enum__facilities_v_version_icon" DEFAULT 'Smile' NOT NULL,
  	"version_color" "enum__facilities_v_version_color" DEFAULT 'pink' NOT NULL,
  	"version_image_id" integer NOT NULL,
  	"version_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"photo_id" integer NOT NULL,
  	"qualification" varchar,
  	"message" varchar,
  	"show_message" boolean DEFAULT false,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_team_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar NOT NULL,
  	"version_role" varchar NOT NULL,
  	"version_photo_id" integer NOT NULL,
  	"version_qualification" varchar,
  	"version_message" varchar,
  	"version_show_message" boolean DEFAULT false,
  	"version_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date_label" varchar NOT NULL,
  	"color" "enum_events_color" DEFAULT 'pink' NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" varchar NOT NULL,
  	"featured" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_events_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar NOT NULL,
  	"version_date_label" varchar NOT NULL,
  	"version_color" "enum__events_v_version_color" DEFAULT 'pink' NOT NULL,
  	"version_image_id" integer NOT NULL,
  	"version_text" varchar NOT NULL,
  	"version_featured" boolean DEFAULT true,
  	"version_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"child" varchar,
  	"quote" varchar NOT NULL,
  	"photo_id" integer,
  	"show" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"show_on_home" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"show_in_gallery" boolean DEFAULT false,
  	"gallery_category" "enum_media_gallery_category",
  	"featured_on_home" boolean DEFAULT false,
  	"gallery_order" numeric DEFAULT 0,
  	"_objectkey" varchar,
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
  	"sizes_thumb_url" varchar,
  	"sizes_thumb_width" numeric,
  	"sizes_thumb_height" numeric,
  	"sizes_thumb_mime_type" varchar,
  	"sizes_thumb_filesize" numeric,
  	"sizes_thumb_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar
  );
  
  CREATE TABLE "admissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"email" varchar,
  	"child_name" varchar NOT NULL,
  	"child_dob" varchar NOT NULL,
  	"class_name" varchar NOT NULL,
  	"message" varchar,
  	"status" "enum_admissions_status" DEFAULT 'new' NOT NULL,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "visit_bookings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"date" varchar NOT NULL,
  	"time" varchar NOT NULL,
  	"children" numeric DEFAULT 1,
  	"status" "enum_visit_bookings_status" DEFAULT 'new' NOT NULL,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "messages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"email" varchar,
  	"message" varchar NOT NULL,
  	"status" "enum_messages_status" DEFAULT 'new' NOT NULL,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "exports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"format" "enum_exports_format" DEFAULT 'csv' NOT NULL,
  	"limit" numeric,
  	"page" numeric DEFAULT 1,
  	"sort" varchar,
  	"sort_order" "enum_exports_sort_order",
  	"drafts" "enum_exports_drafts" DEFAULT 'yes',
  	"collection_slug" varchar DEFAULT 'admissions' NOT NULL,
  	"where" jsonb DEFAULT '{}'::jsonb,
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
  	"focal_y" numeric
  );
  
  CREATE TABLE "exports_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "imports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection_slug" varchar DEFAULT 'admissions' NOT NULL,
  	"import_mode" "enum_imports_import_mode",
  	"match_field" varchar DEFAULT 'id',
  	"status" "enum_imports_status" DEFAULT 'pending',
  	"summary_imported" numeric,
  	"summary_updated" numeric,
  	"summary_total" numeric,
  	"summary_issues" numeric,
  	"summary_issue_details" jsonb,
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
  	"focal_y" numeric
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"programs_id" integer,
  	"facilities_id" integer,
  	"team_id" integer,
  	"events_id" integer,
  	"testimonials_id" integer,
  	"faqs_id" integer,
  	"media_id" integer,
  	"admissions_id" integer,
  	"visit_bookings_id" integer,
  	"messages_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_hero_badges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section" "enum_home_page_sections_section" NOT NULL,
  	"enabled" boolean DEFAULT true
  );
  
  CREATE TABLE "home_page_welcome_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_welcome_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL,
  	"color" "enum_home_page_stats_color" DEFAULT 'pink' NOT NULL
  );
  
  CREATE TABLE "home_page_daycare_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_routine" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"icon" "enum_home_page_routine_icon" DEFAULT 'Smile' NOT NULL,
  	"color" "enum_home_page_routine_color" DEFAULT 'pink' NOT NULL
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar NOT NULL,
  	"hero_title_line2" varchar NOT NULL,
  	"hero_text" varchar NOT NULL,
  	"hero_image_id" integer NOT NULL,
  	"hero_mini_id" integer NOT NULL,
  	"hero_mini_caption" varchar DEFAULT 'Admission Open!',
  	"welcome_eyebrow" varchar NOT NULL,
  	"welcome_title" varchar NOT NULL,
  	"welcome_badge_number" varchar DEFAULT '4',
  	"welcome_badge_text" varchar DEFAULT 'Happy classes for little learners',
  	"daycare_eyebrow" varchar NOT NULL,
  	"daycare_title" varchar NOT NULL,
  	"daycare_text" varchar NOT NULL,
  	"daycare_image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_home_page_v_version_hero_badges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section" "enum__home_page_v_version_sections_section" NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_welcome_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_welcome_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" numeric NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL,
  	"color" "enum__home_page_v_version_stats_color" DEFAULT 'pink' NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_daycare_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_routine" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"icon" "enum__home_page_v_version_routine_icon" DEFAULT 'Smile' NOT NULL,
  	"color" "enum__home_page_v_version_routine_color" DEFAULT 'pink' NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_eyebrow" varchar NOT NULL,
  	"version_hero_title_line2" varchar NOT NULL,
  	"version_hero_text" varchar NOT NULL,
  	"version_hero_image_id" integer NOT NULL,
  	"version_hero_mini_id" integer NOT NULL,
  	"version_hero_mini_caption" varchar DEFAULT 'Admission Open!',
  	"version_welcome_eyebrow" varchar NOT NULL,
  	"version_welcome_title" varchar NOT NULL,
  	"version_welcome_badge_number" varchar DEFAULT '4',
  	"version_welcome_badge_text" varchar DEFAULT 'Happy classes for little learners',
  	"version_daycare_eyebrow" varchar NOT NULL,
  	"version_daycare_title" varchar NOT NULL,
  	"version_daycare_text" varchar NOT NULL,
  	"version_daycare_image_id" integer NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_home_page_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "about_page_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"icon" "enum_about_page_values_icon" DEFAULT 'Smile' NOT NULL,
  	"color" "enum_about_page_values_color" DEFAULT 'pink' NOT NULL
  );
  
  CREATE TABLE "about_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"story_image_id" integer,
  	"mission" varchar NOT NULL,
  	"vision" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_about_page_v_version_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_about_page_v_version_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"icon" "enum__about_page_v_version_values_icon" DEFAULT 'Smile' NOT NULL,
  	"color" "enum__about_page_v_version_values_color" DEFAULT 'pink' NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_about_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_story_image_id" integer,
  	"version_mission" varchar NOT NULL,
  	"version_vision" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "admissions_page_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "admissions_page_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "admissions_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"fee_note" varchar DEFAULT 'Please call or visit us for the latest fee details and the 50% admission offer.',
  	"form_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_admissions_page_v_version_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_admissions_page_v_version_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_admissions_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_fee_note" varchar DEFAULT 'Please call or visit us for the latest fee details and the 50% admission offer.',
  	"version_form_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"short_name" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"motto" varchar NOT NULL,
  	"hours" varchar,
  	"phone_display" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"whatsapp" varchar NOT NULL,
  	"email" varchar,
  	"whatsapp_text" varchar,
  	"address_line1" varchar NOT NULL,
  	"address_line2" varchar,
  	"address_city" varchar NOT NULL,
  	"map_query" varchar NOT NULL,
  	"facebook" varchar,
  	"youtube" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"og_image_id" integer,
  	"ga4_id" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_name" varchar NOT NULL,
  	"version_short_name" varchar NOT NULL,
  	"version_tagline" varchar NOT NULL,
  	"version_motto" varchar NOT NULL,
  	"version_hours" varchar,
  	"version_phone_display" varchar NOT NULL,
  	"version_phone" varchar NOT NULL,
  	"version_whatsapp" varchar NOT NULL,
  	"version_email" varchar,
  	"version_whatsapp_text" varchar,
  	"version_address_line1" varchar NOT NULL,
  	"version_address_line2" varchar,
  	"version_address_city" varchar NOT NULL,
  	"version_map_query" varchar NOT NULL,
  	"version_facebook" varchar,
  	"version_youtube" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_og_image_id" integer,
  	"version_ga4_id" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "offer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"text" varchar NOT NULL,
  	"cta" varchar,
  	"href" varchar DEFAULT '/admissions',
  	"end_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_offer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_enabled" boolean DEFAULT true,
  	"version_text" varchar NOT NULL,
  	"version_cta" varchar,
  	"version_href" varchar DEFAULT '/admissions',
  	"version_end_date" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "programs_learn" ADD CONSTRAINT "programs_learn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programs_highlights" ADD CONSTRAINT "programs_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programs" ADD CONSTRAINT "programs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programs_rels" ADD CONSTRAINT "programs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programs_rels" ADD CONSTRAINT "programs_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_programs_v_version_learn" ADD CONSTRAINT "_programs_v_version_learn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_programs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_programs_v_version_highlights" ADD CONSTRAINT "_programs_v_version_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_programs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_programs_v" ADD CONSTRAINT "_programs_v_parent_id_programs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."programs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_programs_v" ADD CONSTRAINT "_programs_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_programs_v_rels" ADD CONSTRAINT "_programs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_programs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_programs_v_rels" ADD CONSTRAINT "_programs_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "facilities" ADD CONSTRAINT "facilities_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_facilities_v" ADD CONSTRAINT "_facilities_v_parent_id_facilities_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."facilities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_facilities_v" ADD CONSTRAINT "_facilities_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_parent_id_team_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."team"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exports_texts" ADD CONSTRAINT "exports_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_programs_fk" FOREIGN KEY ("programs_id") REFERENCES "public"."programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_facilities_fk" FOREIGN KEY ("facilities_id") REFERENCES "public"."facilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_admissions_fk" FOREIGN KEY ("admissions_id") REFERENCES "public"."admissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_visit_bookings_fk" FOREIGN KEY ("visit_bookings_id") REFERENCES "public"."visit_bookings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_messages_fk" FOREIGN KEY ("messages_id") REFERENCES "public"."messages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_hero_badges" ADD CONSTRAINT "home_page_hero_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_sections" ADD CONSTRAINT "home_page_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_welcome_paragraphs" ADD CONSTRAINT "home_page_welcome_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_welcome_points" ADD CONSTRAINT "home_page_welcome_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_stats" ADD CONSTRAINT "home_page_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_daycare_points" ADD CONSTRAINT "home_page_daycare_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_routine" ADD CONSTRAINT "home_page_routine_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_mini_id_media_id_fk" FOREIGN KEY ("hero_mini_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_daycare_image_id_media_id_fk" FOREIGN KEY ("daycare_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_hero_badges" ADD CONSTRAINT "_home_page_v_version_hero_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_sections" ADD CONSTRAINT "_home_page_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_welcome_paragraphs" ADD CONSTRAINT "_home_page_v_version_welcome_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_welcome_points" ADD CONSTRAINT "_home_page_v_version_welcome_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_stats" ADD CONSTRAINT "_home_page_v_version_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_daycare_points" ADD CONSTRAINT "_home_page_v_version_daycare_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_routine" ADD CONSTRAINT "_home_page_v_version_routine_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_hero_mini_id_media_id_fk" FOREIGN KEY ("version_hero_mini_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_daycare_image_id_media_id_fk" FOREIGN KEY ("version_daycare_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v_rels" ADD CONSTRAINT "_home_page_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_rels" ADD CONSTRAINT "_home_page_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_story" ADD CONSTRAINT "about_page_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_values" ADD CONSTRAINT "about_page_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_story_image_id_media_id_fk" FOREIGN KEY ("story_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_page_v_version_story" ADD CONSTRAINT "_about_page_v_version_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_page_v_version_values" ADD CONSTRAINT "_about_page_v_version_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_page_v" ADD CONSTRAINT "_about_page_v_version_story_image_id_media_id_fk" FOREIGN KEY ("version_story_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "admissions_page_steps" ADD CONSTRAINT "admissions_page_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."admissions_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "admissions_page_documents" ADD CONSTRAINT "admissions_page_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."admissions_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "admissions_page" ADD CONSTRAINT "admissions_page_form_image_id_media_id_fk" FOREIGN KEY ("form_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_admissions_page_v_version_steps" ADD CONSTRAINT "_admissions_page_v_version_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_admissions_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_admissions_page_v_version_documents" ADD CONSTRAINT "_admissions_page_v_version_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_admissions_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_admissions_page_v" ADD CONSTRAINT "_admissions_page_v_version_form_image_id_media_id_fk" FOREIGN KEY ("version_form_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_og_image_id_media_id_fk" FOREIGN KEY ("og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_og_image_id_media_id_fk" FOREIGN KEY ("version_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "programs_learn_order_idx" ON "programs_learn" USING btree ("_order");
  CREATE INDEX "programs_learn_parent_id_idx" ON "programs_learn" USING btree ("_parent_id");
  CREATE INDEX "programs_highlights_order_idx" ON "programs_highlights" USING btree ("_order");
  CREATE INDEX "programs_highlights_parent_id_idx" ON "programs_highlights" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "programs_slug_idx" ON "programs" USING btree ("slug");
  CREATE INDEX "programs_image_idx" ON "programs" USING btree ("image_id");
  CREATE INDEX "programs_updated_at_idx" ON "programs" USING btree ("updated_at");
  CREATE INDEX "programs_created_at_idx" ON "programs" USING btree ("created_at");
  CREATE INDEX "programs_rels_order_idx" ON "programs_rels" USING btree ("order");
  CREATE INDEX "programs_rels_parent_idx" ON "programs_rels" USING btree ("parent_id");
  CREATE INDEX "programs_rels_path_idx" ON "programs_rels" USING btree ("path");
  CREATE INDEX "programs_rels_media_id_idx" ON "programs_rels" USING btree ("media_id");
  CREATE INDEX "_programs_v_version_learn_order_idx" ON "_programs_v_version_learn" USING btree ("_order");
  CREATE INDEX "_programs_v_version_learn_parent_id_idx" ON "_programs_v_version_learn" USING btree ("_parent_id");
  CREATE INDEX "_programs_v_version_highlights_order_idx" ON "_programs_v_version_highlights" USING btree ("_order");
  CREATE INDEX "_programs_v_version_highlights_parent_id_idx" ON "_programs_v_version_highlights" USING btree ("_parent_id");
  CREATE INDEX "_programs_v_parent_idx" ON "_programs_v" USING btree ("parent_id");
  CREATE INDEX "_programs_v_version_version_slug_idx" ON "_programs_v" USING btree ("version_slug");
  CREATE INDEX "_programs_v_version_version_image_idx" ON "_programs_v" USING btree ("version_image_id");
  CREATE INDEX "_programs_v_version_version_updated_at_idx" ON "_programs_v" USING btree ("version_updated_at");
  CREATE INDEX "_programs_v_version_version_created_at_idx" ON "_programs_v" USING btree ("version_created_at");
  CREATE INDEX "_programs_v_created_at_idx" ON "_programs_v" USING btree ("created_at");
  CREATE INDEX "_programs_v_updated_at_idx" ON "_programs_v" USING btree ("updated_at");
  CREATE INDEX "_programs_v_rels_order_idx" ON "_programs_v_rels" USING btree ("order");
  CREATE INDEX "_programs_v_rels_parent_idx" ON "_programs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_programs_v_rels_path_idx" ON "_programs_v_rels" USING btree ("path");
  CREATE INDEX "_programs_v_rels_media_id_idx" ON "_programs_v_rels" USING btree ("media_id");
  CREATE INDEX "facilities_image_idx" ON "facilities" USING btree ("image_id");
  CREATE INDEX "facilities_updated_at_idx" ON "facilities" USING btree ("updated_at");
  CREATE INDEX "facilities_created_at_idx" ON "facilities" USING btree ("created_at");
  CREATE INDEX "_facilities_v_parent_idx" ON "_facilities_v" USING btree ("parent_id");
  CREATE INDEX "_facilities_v_version_version_image_idx" ON "_facilities_v" USING btree ("version_image_id");
  CREATE INDEX "_facilities_v_version_version_updated_at_idx" ON "_facilities_v" USING btree ("version_updated_at");
  CREATE INDEX "_facilities_v_version_version_created_at_idx" ON "_facilities_v" USING btree ("version_created_at");
  CREATE INDEX "_facilities_v_created_at_idx" ON "_facilities_v" USING btree ("created_at");
  CREATE INDEX "_facilities_v_updated_at_idx" ON "_facilities_v" USING btree ("updated_at");
  CREATE INDEX "team_photo_idx" ON "team" USING btree ("photo_id");
  CREATE INDEX "team_updated_at_idx" ON "team" USING btree ("updated_at");
  CREATE INDEX "team_created_at_idx" ON "team" USING btree ("created_at");
  CREATE INDEX "_team_v_parent_idx" ON "_team_v" USING btree ("parent_id");
  CREATE INDEX "_team_v_version_version_photo_idx" ON "_team_v" USING btree ("version_photo_id");
  CREATE INDEX "_team_v_version_version_updated_at_idx" ON "_team_v" USING btree ("version_updated_at");
  CREATE INDEX "_team_v_version_version_created_at_idx" ON "_team_v" USING btree ("version_created_at");
  CREATE INDEX "_team_v_created_at_idx" ON "_team_v" USING btree ("created_at");
  CREATE INDEX "_team_v_updated_at_idx" ON "_team_v" USING btree ("updated_at");
  CREATE INDEX "events_image_idx" ON "events" USING btree ("image_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");
  CREATE INDEX "_events_v_version_version_image_idx" ON "_events_v" USING btree ("version_image_id");
  CREATE INDEX "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");
  CREATE INDEX "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");
  CREATE INDEX "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");
  CREATE INDEX "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");
  CREATE INDEX "testimonials_photo_idx" ON "testimonials" USING btree ("photo_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumb_sizes_thumb_filename_idx" ON "media" USING btree ("sizes_thumb_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "admissions_updated_at_idx" ON "admissions" USING btree ("updated_at");
  CREATE INDEX "admissions_created_at_idx" ON "admissions" USING btree ("created_at");
  CREATE INDEX "visit_bookings_updated_at_idx" ON "visit_bookings" USING btree ("updated_at");
  CREATE INDEX "visit_bookings_created_at_idx" ON "visit_bookings" USING btree ("created_at");
  CREATE INDEX "messages_updated_at_idx" ON "messages" USING btree ("updated_at");
  CREATE INDEX "messages_created_at_idx" ON "messages" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "exports_updated_at_idx" ON "exports" USING btree ("updated_at");
  CREATE INDEX "exports_created_at_idx" ON "exports" USING btree ("created_at");
  CREATE UNIQUE INDEX "exports_filename_idx" ON "exports" USING btree ("filename");
  CREATE INDEX "exports_texts_order_parent" ON "exports_texts" USING btree ("order","parent_id");
  CREATE INDEX "imports_updated_at_idx" ON "imports" USING btree ("updated_at");
  CREATE INDEX "imports_created_at_idx" ON "imports" USING btree ("created_at");
  CREATE UNIQUE INDEX "imports_filename_idx" ON "imports" USING btree ("filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_programs_id_idx" ON "payload_locked_documents_rels" USING btree ("programs_id");
  CREATE INDEX "payload_locked_documents_rels_facilities_id_idx" ON "payload_locked_documents_rels" USING btree ("facilities_id");
  CREATE INDEX "payload_locked_documents_rels_team_id_idx" ON "payload_locked_documents_rels" USING btree ("team_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_admissions_id_idx" ON "payload_locked_documents_rels" USING btree ("admissions_id");
  CREATE INDEX "payload_locked_documents_rels_visit_bookings_id_idx" ON "payload_locked_documents_rels" USING btree ("visit_bookings_id");
  CREATE INDEX "payload_locked_documents_rels_messages_id_idx" ON "payload_locked_documents_rels" USING btree ("messages_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_page_hero_badges_order_idx" ON "home_page_hero_badges" USING btree ("_order");
  CREATE INDEX "home_page_hero_badges_parent_id_idx" ON "home_page_hero_badges" USING btree ("_parent_id");
  CREATE INDEX "home_page_sections_order_idx" ON "home_page_sections" USING btree ("_order");
  CREATE INDEX "home_page_sections_parent_id_idx" ON "home_page_sections" USING btree ("_parent_id");
  CREATE INDEX "home_page_welcome_paragraphs_order_idx" ON "home_page_welcome_paragraphs" USING btree ("_order");
  CREATE INDEX "home_page_welcome_paragraphs_parent_id_idx" ON "home_page_welcome_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "home_page_welcome_points_order_idx" ON "home_page_welcome_points" USING btree ("_order");
  CREATE INDEX "home_page_welcome_points_parent_id_idx" ON "home_page_welcome_points" USING btree ("_parent_id");
  CREATE INDEX "home_page_stats_order_idx" ON "home_page_stats" USING btree ("_order");
  CREATE INDEX "home_page_stats_parent_id_idx" ON "home_page_stats" USING btree ("_parent_id");
  CREATE INDEX "home_page_daycare_points_order_idx" ON "home_page_daycare_points" USING btree ("_order");
  CREATE INDEX "home_page_daycare_points_parent_id_idx" ON "home_page_daycare_points" USING btree ("_parent_id");
  CREATE INDEX "home_page_routine_order_idx" ON "home_page_routine" USING btree ("_order");
  CREATE INDEX "home_page_routine_parent_id_idx" ON "home_page_routine" USING btree ("_parent_id");
  CREATE INDEX "home_page_hero_hero_image_idx" ON "home_page" USING btree ("hero_image_id");
  CREATE INDEX "home_page_hero_hero_mini_idx" ON "home_page" USING btree ("hero_mini_id");
  CREATE INDEX "home_page_daycare_daycare_image_idx" ON "home_page" USING btree ("daycare_image_id");
  CREATE INDEX "home_page_rels_order_idx" ON "home_page_rels" USING btree ("order");
  CREATE INDEX "home_page_rels_parent_idx" ON "home_page_rels" USING btree ("parent_id");
  CREATE INDEX "home_page_rels_path_idx" ON "home_page_rels" USING btree ("path");
  CREATE INDEX "home_page_rels_media_id_idx" ON "home_page_rels" USING btree ("media_id");
  CREATE INDEX "_home_page_v_version_hero_badges_order_idx" ON "_home_page_v_version_hero_badges" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_hero_badges_parent_id_idx" ON "_home_page_v_version_hero_badges" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_sections_order_idx" ON "_home_page_v_version_sections" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_sections_parent_id_idx" ON "_home_page_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_welcome_paragraphs_order_idx" ON "_home_page_v_version_welcome_paragraphs" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_welcome_paragraphs_parent_id_idx" ON "_home_page_v_version_welcome_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_welcome_points_order_idx" ON "_home_page_v_version_welcome_points" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_welcome_points_parent_id_idx" ON "_home_page_v_version_welcome_points" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_stats_order_idx" ON "_home_page_v_version_stats" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_stats_parent_id_idx" ON "_home_page_v_version_stats" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_daycare_points_order_idx" ON "_home_page_v_version_daycare_points" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_daycare_points_parent_id_idx" ON "_home_page_v_version_daycare_points" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_routine_order_idx" ON "_home_page_v_version_routine" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_routine_parent_id_idx" ON "_home_page_v_version_routine" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_hero_version_hero_image_idx" ON "_home_page_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_home_page_v_version_hero_version_hero_mini_idx" ON "_home_page_v" USING btree ("version_hero_mini_id");
  CREATE INDEX "_home_page_v_version_daycare_version_daycare_image_idx" ON "_home_page_v" USING btree ("version_daycare_image_id");
  CREATE INDEX "_home_page_v_created_at_idx" ON "_home_page_v" USING btree ("created_at");
  CREATE INDEX "_home_page_v_updated_at_idx" ON "_home_page_v" USING btree ("updated_at");
  CREATE INDEX "_home_page_v_rels_order_idx" ON "_home_page_v_rels" USING btree ("order");
  CREATE INDEX "_home_page_v_rels_parent_idx" ON "_home_page_v_rels" USING btree ("parent_id");
  CREATE INDEX "_home_page_v_rels_path_idx" ON "_home_page_v_rels" USING btree ("path");
  CREATE INDEX "_home_page_v_rels_media_id_idx" ON "_home_page_v_rels" USING btree ("media_id");
  CREATE INDEX "about_page_story_order_idx" ON "about_page_story" USING btree ("_order");
  CREATE INDEX "about_page_story_parent_id_idx" ON "about_page_story" USING btree ("_parent_id");
  CREATE INDEX "about_page_values_order_idx" ON "about_page_values" USING btree ("_order");
  CREATE INDEX "about_page_values_parent_id_idx" ON "about_page_values" USING btree ("_parent_id");
  CREATE INDEX "about_page_story_image_idx" ON "about_page" USING btree ("story_image_id");
  CREATE INDEX "_about_page_v_version_story_order_idx" ON "_about_page_v_version_story" USING btree ("_order");
  CREATE INDEX "_about_page_v_version_story_parent_id_idx" ON "_about_page_v_version_story" USING btree ("_parent_id");
  CREATE INDEX "_about_page_v_version_values_order_idx" ON "_about_page_v_version_values" USING btree ("_order");
  CREATE INDEX "_about_page_v_version_values_parent_id_idx" ON "_about_page_v_version_values" USING btree ("_parent_id");
  CREATE INDEX "_about_page_v_version_version_story_image_idx" ON "_about_page_v" USING btree ("version_story_image_id");
  CREATE INDEX "_about_page_v_created_at_idx" ON "_about_page_v" USING btree ("created_at");
  CREATE INDEX "_about_page_v_updated_at_idx" ON "_about_page_v" USING btree ("updated_at");
  CREATE INDEX "admissions_page_steps_order_idx" ON "admissions_page_steps" USING btree ("_order");
  CREATE INDEX "admissions_page_steps_parent_id_idx" ON "admissions_page_steps" USING btree ("_parent_id");
  CREATE INDEX "admissions_page_documents_order_idx" ON "admissions_page_documents" USING btree ("_order");
  CREATE INDEX "admissions_page_documents_parent_id_idx" ON "admissions_page_documents" USING btree ("_parent_id");
  CREATE INDEX "admissions_page_form_image_idx" ON "admissions_page" USING btree ("form_image_id");
  CREATE INDEX "_admissions_page_v_version_steps_order_idx" ON "_admissions_page_v_version_steps" USING btree ("_order");
  CREATE INDEX "_admissions_page_v_version_steps_parent_id_idx" ON "_admissions_page_v_version_steps" USING btree ("_parent_id");
  CREATE INDEX "_admissions_page_v_version_documents_order_idx" ON "_admissions_page_v_version_documents" USING btree ("_order");
  CREATE INDEX "_admissions_page_v_version_documents_parent_id_idx" ON "_admissions_page_v_version_documents" USING btree ("_parent_id");
  CREATE INDEX "_admissions_page_v_version_version_form_image_idx" ON "_admissions_page_v" USING btree ("version_form_image_id");
  CREATE INDEX "_admissions_page_v_created_at_idx" ON "_admissions_page_v" USING btree ("created_at");
  CREATE INDEX "_admissions_page_v_updated_at_idx" ON "_admissions_page_v" USING btree ("updated_at");
  CREATE INDEX "site_settings_og_image_idx" ON "site_settings" USING btree ("og_image_id");
  CREATE INDEX "_site_settings_v_version_version_og_image_idx" ON "_site_settings_v" USING btree ("version_og_image_id");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_offer_v_created_at_idx" ON "_offer_v" USING btree ("created_at");
  CREATE INDEX "_offer_v_updated_at_idx" ON "_offer_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "programs_learn" CASCADE;
  DROP TABLE "programs_highlights" CASCADE;
  DROP TABLE "programs" CASCADE;
  DROP TABLE "programs_rels" CASCADE;
  DROP TABLE "_programs_v_version_learn" CASCADE;
  DROP TABLE "_programs_v_version_highlights" CASCADE;
  DROP TABLE "_programs_v" CASCADE;
  DROP TABLE "_programs_v_rels" CASCADE;
  DROP TABLE "facilities" CASCADE;
  DROP TABLE "_facilities_v" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "_team_v" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "_events_v" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "admissions" CASCADE;
  DROP TABLE "visit_bookings" CASCADE;
  DROP TABLE "messages" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "exports" CASCADE;
  DROP TABLE "exports_texts" CASCADE;
  DROP TABLE "imports" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_page_hero_badges" CASCADE;
  DROP TABLE "home_page_sections" CASCADE;
  DROP TABLE "home_page_welcome_paragraphs" CASCADE;
  DROP TABLE "home_page_welcome_points" CASCADE;
  DROP TABLE "home_page_stats" CASCADE;
  DROP TABLE "home_page_daycare_points" CASCADE;
  DROP TABLE "home_page_routine" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "home_page_rels" CASCADE;
  DROP TABLE "_home_page_v_version_hero_badges" CASCADE;
  DROP TABLE "_home_page_v_version_sections" CASCADE;
  DROP TABLE "_home_page_v_version_welcome_paragraphs" CASCADE;
  DROP TABLE "_home_page_v_version_welcome_points" CASCADE;
  DROP TABLE "_home_page_v_version_stats" CASCADE;
  DROP TABLE "_home_page_v_version_daycare_points" CASCADE;
  DROP TABLE "_home_page_v_version_routine" CASCADE;
  DROP TABLE "_home_page_v" CASCADE;
  DROP TABLE "_home_page_v_rels" CASCADE;
  DROP TABLE "about_page_story" CASCADE;
  DROP TABLE "about_page_values" CASCADE;
  DROP TABLE "about_page" CASCADE;
  DROP TABLE "_about_page_v_version_story" CASCADE;
  DROP TABLE "_about_page_v_version_values" CASCADE;
  DROP TABLE "_about_page_v" CASCADE;
  DROP TABLE "admissions_page_steps" CASCADE;
  DROP TABLE "admissions_page_documents" CASCADE;
  DROP TABLE "admissions_page" CASCADE;
  DROP TABLE "_admissions_page_v_version_steps" CASCADE;
  DROP TABLE "_admissions_page_v_version_documents" CASCADE;
  DROP TABLE "_admissions_page_v" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "offer" CASCADE;
  DROP TABLE "_offer_v" CASCADE;
  DROP TYPE "public"."enum_programs_color";
  DROP TYPE "public"."enum__programs_v_version_color";
  DROP TYPE "public"."enum_facilities_icon";
  DROP TYPE "public"."enum_facilities_color";
  DROP TYPE "public"."enum__facilities_v_version_icon";
  DROP TYPE "public"."enum__facilities_v_version_color";
  DROP TYPE "public"."enum_events_color";
  DROP TYPE "public"."enum__events_v_version_color";
  DROP TYPE "public"."enum_media_gallery_category";
  DROP TYPE "public"."enum_admissions_status";
  DROP TYPE "public"."enum_visit_bookings_status";
  DROP TYPE "public"."enum_messages_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_exports_format";
  DROP TYPE "public"."enum_exports_sort_order";
  DROP TYPE "public"."enum_exports_drafts";
  DROP TYPE "public"."enum_imports_import_mode";
  DROP TYPE "public"."enum_imports_status";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_home_page_sections_section";
  DROP TYPE "public"."enum_home_page_stats_color";
  DROP TYPE "public"."enum_home_page_routine_icon";
  DROP TYPE "public"."enum_home_page_routine_color";
  DROP TYPE "public"."enum__home_page_v_version_sections_section";
  DROP TYPE "public"."enum__home_page_v_version_stats_color";
  DROP TYPE "public"."enum__home_page_v_version_routine_icon";
  DROP TYPE "public"."enum__home_page_v_version_routine_color";
  DROP TYPE "public"."enum_about_page_values_icon";
  DROP TYPE "public"."enum_about_page_values_color";
  DROP TYPE "public"."enum__about_page_v_version_values_icon";
  DROP TYPE "public"."enum__about_page_v_version_values_color";`)
}
