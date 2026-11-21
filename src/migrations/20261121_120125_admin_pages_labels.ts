import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "programs_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"about_heading_eyebrow" varchar,
  	"about_heading_title" varchar,
  	"learn_heading_eyebrow" varchar,
  	"learn_heading_title" varchar,
  	"apply_heading_eyebrow" varchar,
  	"apply_heading_title" varchar,
  	"apply_heading_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_programs_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_about_heading_eyebrow" varchar,
  	"version_about_heading_title" varchar,
  	"version_learn_heading_eyebrow" varchar,
  	"version_learn_heading_title" varchar,
  	"version_apply_heading_eyebrow" varchar,
  	"version_apply_heading_title" varchar,
  	"version_apply_heading_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "facilities_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_facilities_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "gallery_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_gallery_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_events_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"message_heading_eyebrow" varchar,
  	"message_heading_title" varchar,
  	"location_heading_eyebrow" varchar,
  	"location_heading_title" varchar,
  	"visit_heading_eyebrow" varchar,
  	"visit_heading_title" varchar,
  	"visit_heading_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_contact_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_message_heading_eyebrow" varchar,
  	"version_message_heading_title" varchar,
  	"version_location_heading_eyebrow" varchar,
  	"version_location_heading_title" varchar,
  	"version_visit_heading_eyebrow" varchar,
  	"version_visit_heading_title" varchar,
  	"version_visit_heading_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faq_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_faq_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "privacy_page_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "privacy_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_eyebrow" varchar,
  	"banner_title" varchar,
  	"banner_text" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_privacy_page_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_privacy_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_banner_eyebrow" varchar,
  	"version_banner_title" varchar,
  	"version_banner_text" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_visit_times" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "_site_settings_v_version_visit_times" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  ALTER TABLE "home_page" ALTER COLUMN "hero_mini_caption" DROP DEFAULT;
  ALTER TABLE "_home_page_v" ALTER COLUMN "version_hero_mini_caption" DROP DEFAULT;
  ALTER TABLE "exports" ADD COLUMN "prefix" varchar DEFAULT 'private-5debd6a8fa70c66d3029804915ff407d';
  ALTER TABLE "exports" ADD COLUMN "_objectkey" varchar;
  ALTER TABLE "imports" ADD COLUMN "prefix" varchar DEFAULT 'private-5debd6a8fa70c66d3029804915ff407d';
  ALTER TABLE "imports" ADD COLUMN "_objectkey" varchar;
  ALTER TABLE "home_page" ADD COLUMN "hero_primary_cta" varchar;
  ALTER TABLE "home_page" ADD COLUMN "hero_secondary_cta" varchar;
  ALTER TABLE "home_page" ADD COLUMN "hero_classes_line" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_facilities_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_facilities_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_facilities_text" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_routine_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_routine_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_leadership_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_leadership_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_gallery_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_gallery_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_gallery_text" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_events_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_events_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_testimonials_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_testimonials_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_faq_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "headings_faq_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "home_page" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_hero_primary_cta" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_hero_secondary_cta" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_hero_classes_line" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_facilities_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_facilities_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_facilities_text" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_routine_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_routine_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_leadership_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_leadership_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_gallery_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_gallery_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_gallery_text" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_events_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_events_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_testimonials_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_testimonials_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_faq_eyebrow" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_headings_faq_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_seo_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_seo_description" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "about_page" ADD COLUMN "banner_eyebrow" varchar;
  ALTER TABLE "about_page" ADD COLUMN "banner_title" varchar;
  ALTER TABLE "about_page" ADD COLUMN "banner_text" varchar;
  ALTER TABLE "about_page" ADD COLUMN "story_heading_eyebrow" varchar;
  ALTER TABLE "about_page" ADD COLUMN "story_heading_title" varchar;
  ALTER TABLE "about_page" ADD COLUMN "values_heading_eyebrow" varchar;
  ALTER TABLE "about_page" ADD COLUMN "values_heading_title" varchar;
  ALTER TABLE "about_page" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "about_page" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "about_page" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_banner_eyebrow" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_banner_title" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_banner_text" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_story_heading_eyebrow" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_story_heading_title" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_values_heading_eyebrow" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_values_heading_title" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_seo_title" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_seo_description" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "admissions_page" ADD COLUMN "banner_eyebrow" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "banner_title" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "banner_text" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "steps_heading_eyebrow" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "steps_heading_title" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "form_heading_eyebrow" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "form_heading_title" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "form_heading_text" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "admissions_page" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_banner_eyebrow" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_banner_title" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_banner_text" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_steps_heading_eyebrow" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_steps_heading_title" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_form_heading_eyebrow" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_form_heading_title" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_form_heading_text" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_seo_title" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_seo_description" varchar;
  ALTER TABLE "_admissions_page_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "footer_about" varchar;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_logo_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_footer_about" varchar;
  ALTER TABLE "offer" ADD COLUMN "sticker_top" varchar;
  ALTER TABLE "offer" ADD COLUMN "sticker_bottom" varchar;
  ALTER TABLE "offer" ADD COLUMN "banner_eyebrow" varchar;
  ALTER TABLE "offer" ADD COLUMN "banner_image_id" integer;
  ALTER TABLE "_offer_v" ADD COLUMN "version_sticker_top" varchar;
  ALTER TABLE "_offer_v" ADD COLUMN "version_sticker_bottom" varchar;
  ALTER TABLE "_offer_v" ADD COLUMN "version_banner_eyebrow" varchar;
  ALTER TABLE "_offer_v" ADD COLUMN "version_banner_image_id" integer;
  ALTER TABLE "programs_page" ADD CONSTRAINT "programs_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_programs_page_v" ADD CONSTRAINT "_programs_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "facilities_page" ADD CONSTRAINT "facilities_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_facilities_page_v" ADD CONSTRAINT "_facilities_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gallery_page" ADD CONSTRAINT "gallery_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_page_v" ADD CONSTRAINT "_gallery_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_page" ADD CONSTRAINT "events_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_page_v" ADD CONSTRAINT "_events_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_contact_page_v" ADD CONSTRAINT "_contact_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faq_page" ADD CONSTRAINT "faq_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_faq_page_v" ADD CONSTRAINT "_faq_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "privacy_page_sections" ADD CONSTRAINT "privacy_page_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."privacy_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "privacy_page" ADD CONSTRAINT "privacy_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_privacy_page_v_version_sections" ADD CONSTRAINT "_privacy_page_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_privacy_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_privacy_page_v" ADD CONSTRAINT "_privacy_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_visit_times" ADD CONSTRAINT "site_settings_visit_times_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_visit_times" ADD CONSTRAINT "_site_settings_v_version_visit_times_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "programs_page_seo_seo_image_idx" ON "programs_page" USING btree ("seo_image_id");
  CREATE INDEX "_programs_page_v_version_seo_version_seo_image_idx" ON "_programs_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_programs_page_v_created_at_idx" ON "_programs_page_v" USING btree ("created_at");
  CREATE INDEX "_programs_page_v_updated_at_idx" ON "_programs_page_v" USING btree ("updated_at");
  CREATE INDEX "facilities_page_seo_seo_image_idx" ON "facilities_page" USING btree ("seo_image_id");
  CREATE INDEX "_facilities_page_v_version_seo_version_seo_image_idx" ON "_facilities_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_facilities_page_v_created_at_idx" ON "_facilities_page_v" USING btree ("created_at");
  CREATE INDEX "_facilities_page_v_updated_at_idx" ON "_facilities_page_v" USING btree ("updated_at");
  CREATE INDEX "gallery_page_seo_seo_image_idx" ON "gallery_page" USING btree ("seo_image_id");
  CREATE INDEX "_gallery_page_v_version_seo_version_seo_image_idx" ON "_gallery_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_gallery_page_v_created_at_idx" ON "_gallery_page_v" USING btree ("created_at");
  CREATE INDEX "_gallery_page_v_updated_at_idx" ON "_gallery_page_v" USING btree ("updated_at");
  CREATE INDEX "events_page_seo_seo_image_idx" ON "events_page" USING btree ("seo_image_id");
  CREATE INDEX "_events_page_v_version_seo_version_seo_image_idx" ON "_events_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_events_page_v_created_at_idx" ON "_events_page_v" USING btree ("created_at");
  CREATE INDEX "_events_page_v_updated_at_idx" ON "_events_page_v" USING btree ("updated_at");
  CREATE INDEX "contact_page_seo_seo_image_idx" ON "contact_page" USING btree ("seo_image_id");
  CREATE INDEX "_contact_page_v_version_seo_version_seo_image_idx" ON "_contact_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_contact_page_v_created_at_idx" ON "_contact_page_v" USING btree ("created_at");
  CREATE INDEX "_contact_page_v_updated_at_idx" ON "_contact_page_v" USING btree ("updated_at");
  CREATE INDEX "faq_page_seo_seo_image_idx" ON "faq_page" USING btree ("seo_image_id");
  CREATE INDEX "_faq_page_v_version_seo_version_seo_image_idx" ON "_faq_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_faq_page_v_created_at_idx" ON "_faq_page_v" USING btree ("created_at");
  CREATE INDEX "_faq_page_v_updated_at_idx" ON "_faq_page_v" USING btree ("updated_at");
  CREATE INDEX "privacy_page_sections_order_idx" ON "privacy_page_sections" USING btree ("_order");
  CREATE INDEX "privacy_page_sections_parent_id_idx" ON "privacy_page_sections" USING btree ("_parent_id");
  CREATE INDEX "privacy_page_seo_seo_image_idx" ON "privacy_page" USING btree ("seo_image_id");
  CREATE INDEX "_privacy_page_v_version_sections_order_idx" ON "_privacy_page_v_version_sections" USING btree ("_order");
  CREATE INDEX "_privacy_page_v_version_sections_parent_id_idx" ON "_privacy_page_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_privacy_page_v_version_seo_version_seo_image_idx" ON "_privacy_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_privacy_page_v_created_at_idx" ON "_privacy_page_v" USING btree ("created_at");
  CREATE INDEX "_privacy_page_v_updated_at_idx" ON "_privacy_page_v" USING btree ("updated_at");
  CREATE INDEX "site_settings_visit_times_order_idx" ON "site_settings_visit_times" USING btree ("_order");
  CREATE INDEX "site_settings_visit_times_parent_id_idx" ON "site_settings_visit_times" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_visit_times_order_idx" ON "_site_settings_v_version_visit_times" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_visit_times_parent_id_idx" ON "_site_settings_v_version_visit_times" USING btree ("_parent_id");
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_page_v" ADD CONSTRAINT "_about_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "admissions_page" ADD CONSTRAINT "admissions_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_admissions_page_v" ADD CONSTRAINT "_admissions_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "offer" ADD CONSTRAINT "offer_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_offer_v" ADD CONSTRAINT "_offer_v_version_banner_image_id_media_id_fk" FOREIGN KEY ("version_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "home_page_seo_seo_image_idx" ON "home_page" USING btree ("seo_image_id");
  CREATE INDEX "_home_page_v_version_seo_version_seo_image_idx" ON "_home_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "about_page_seo_seo_image_idx" ON "about_page" USING btree ("seo_image_id");
  CREATE INDEX "_about_page_v_version_seo_version_seo_image_idx" ON "_about_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "admissions_page_seo_seo_image_idx" ON "admissions_page" USING btree ("seo_image_id");
  CREATE INDEX "_admissions_page_v_version_seo_version_seo_image_idx" ON "_admissions_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "_site_settings_v_version_version_logo_idx" ON "_site_settings_v" USING btree ("version_logo_id");
  CREATE INDEX "offer_banner_image_idx" ON "offer" USING btree ("banner_image_id");
  CREATE INDEX "_offer_v_version_version_banner_image_idx" ON "_offer_v" USING btree ("version_banner_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "programs_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_programs_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "facilities_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_facilities_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "gallery_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_gallery_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_contact_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "privacy_page_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "privacy_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_privacy_page_v_version_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_privacy_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_visit_times" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_site_settings_v_version_visit_times" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "programs_page" CASCADE;
  DROP TABLE "_programs_page_v" CASCADE;
  DROP TABLE "facilities_page" CASCADE;
  DROP TABLE "_facilities_page_v" CASCADE;
  DROP TABLE "gallery_page" CASCADE;
  DROP TABLE "_gallery_page_v" CASCADE;
  DROP TABLE "events_page" CASCADE;
  DROP TABLE "_events_page_v" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  DROP TABLE "_contact_page_v" CASCADE;
  DROP TABLE "faq_page" CASCADE;
  DROP TABLE "_faq_page_v" CASCADE;
  DROP TABLE "privacy_page_sections" CASCADE;
  DROP TABLE "privacy_page" CASCADE;
  DROP TABLE "_privacy_page_v_version_sections" CASCADE;
  DROP TABLE "_privacy_page_v" CASCADE;
  DROP TABLE "site_settings_visit_times" CASCADE;
  DROP TABLE "_site_settings_v_version_visit_times" CASCADE;
  ALTER TABLE "home_page" DROP CONSTRAINT "home_page_seo_image_id_media_id_fk";
  
  ALTER TABLE "_home_page_v" DROP CONSTRAINT "_home_page_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "about_page" DROP CONSTRAINT "about_page_seo_image_id_media_id_fk";
  
  ALTER TABLE "_about_page_v" DROP CONSTRAINT "_about_page_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "admissions_page" DROP CONSTRAINT "admissions_page_seo_image_id_media_id_fk";
  
  ALTER TABLE "_admissions_page_v" DROP CONSTRAINT "_admissions_page_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_logo_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_logo_id_media_id_fk";
  
  ALTER TABLE "offer" DROP CONSTRAINT "offer_banner_image_id_media_id_fk";
  
  ALTER TABLE "_offer_v" DROP CONSTRAINT "_offer_v_version_banner_image_id_media_id_fk";
  
  DROP INDEX "home_page_seo_seo_image_idx";
  DROP INDEX "_home_page_v_version_seo_version_seo_image_idx";
  DROP INDEX "about_page_seo_seo_image_idx";
  DROP INDEX "_about_page_v_version_seo_version_seo_image_idx";
  DROP INDEX "admissions_page_seo_seo_image_idx";
  DROP INDEX "_admissions_page_v_version_seo_version_seo_image_idx";
  DROP INDEX "site_settings_logo_idx";
  DROP INDEX "_site_settings_v_version_version_logo_idx";
  DROP INDEX "offer_banner_image_idx";
  DROP INDEX "_offer_v_version_version_banner_image_idx";
  ALTER TABLE "home_page" ALTER COLUMN "hero_mini_caption" SET DEFAULT 'Admission Open!';
  ALTER TABLE "_home_page_v" ALTER COLUMN "version_hero_mini_caption" SET DEFAULT 'Admission Open!';
  ALTER TABLE "exports" DROP COLUMN "prefix";
  ALTER TABLE "exports" DROP COLUMN "_objectkey";
  ALTER TABLE "imports" DROP COLUMN "prefix";
  ALTER TABLE "imports" DROP COLUMN "_objectkey";
  ALTER TABLE "home_page" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "home_page" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "home_page" DROP COLUMN "hero_classes_line";
  ALTER TABLE "home_page" DROP COLUMN "headings_facilities_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_facilities_title";
  ALTER TABLE "home_page" DROP COLUMN "headings_facilities_text";
  ALTER TABLE "home_page" DROP COLUMN "headings_routine_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_routine_title";
  ALTER TABLE "home_page" DROP COLUMN "headings_leadership_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_leadership_title";
  ALTER TABLE "home_page" DROP COLUMN "headings_gallery_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_gallery_title";
  ALTER TABLE "home_page" DROP COLUMN "headings_gallery_text";
  ALTER TABLE "home_page" DROP COLUMN "headings_events_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_events_title";
  ALTER TABLE "home_page" DROP COLUMN "headings_testimonials_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_testimonials_title";
  ALTER TABLE "home_page" DROP COLUMN "headings_faq_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "headings_faq_title";
  ALTER TABLE "home_page" DROP COLUMN "seo_title";
  ALTER TABLE "home_page" DROP COLUMN "seo_description";
  ALTER TABLE "home_page" DROP COLUMN "seo_image_id";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_hero_primary_cta";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_hero_secondary_cta";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_hero_classes_line";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_facilities_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_facilities_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_facilities_text";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_routine_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_routine_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_leadership_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_leadership_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_gallery_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_gallery_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_gallery_text";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_events_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_events_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_testimonials_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_testimonials_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_faq_eyebrow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_headings_faq_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_seo_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_seo_description";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "about_page" DROP COLUMN "banner_eyebrow";
  ALTER TABLE "about_page" DROP COLUMN "banner_title";
  ALTER TABLE "about_page" DROP COLUMN "banner_text";
  ALTER TABLE "about_page" DROP COLUMN "story_heading_eyebrow";
  ALTER TABLE "about_page" DROP COLUMN "story_heading_title";
  ALTER TABLE "about_page" DROP COLUMN "values_heading_eyebrow";
  ALTER TABLE "about_page" DROP COLUMN "values_heading_title";
  ALTER TABLE "about_page" DROP COLUMN "seo_title";
  ALTER TABLE "about_page" DROP COLUMN "seo_description";
  ALTER TABLE "about_page" DROP COLUMN "seo_image_id";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_banner_eyebrow";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_banner_title";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_banner_text";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_story_heading_eyebrow";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_story_heading_title";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_values_heading_eyebrow";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_values_heading_title";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_seo_title";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_seo_description";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "admissions_page" DROP COLUMN "banner_eyebrow";
  ALTER TABLE "admissions_page" DROP COLUMN "banner_title";
  ALTER TABLE "admissions_page" DROP COLUMN "banner_text";
  ALTER TABLE "admissions_page" DROP COLUMN "steps_heading_eyebrow";
  ALTER TABLE "admissions_page" DROP COLUMN "steps_heading_title";
  ALTER TABLE "admissions_page" DROP COLUMN "form_heading_eyebrow";
  ALTER TABLE "admissions_page" DROP COLUMN "form_heading_title";
  ALTER TABLE "admissions_page" DROP COLUMN "form_heading_text";
  ALTER TABLE "admissions_page" DROP COLUMN "seo_title";
  ALTER TABLE "admissions_page" DROP COLUMN "seo_description";
  ALTER TABLE "admissions_page" DROP COLUMN "seo_image_id";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_banner_eyebrow";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_banner_title";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_banner_text";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_steps_heading_eyebrow";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_steps_heading_title";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_form_heading_eyebrow";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_form_heading_title";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_form_heading_text";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_seo_title";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_seo_description";
  ALTER TABLE "_admissions_page_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "logo_id";
  ALTER TABLE "site_settings" DROP COLUMN "footer_about";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_logo_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_footer_about";
  ALTER TABLE "offer" DROP COLUMN "sticker_top";
  ALTER TABLE "offer" DROP COLUMN "sticker_bottom";
  ALTER TABLE "offer" DROP COLUMN "banner_eyebrow";
  ALTER TABLE "offer" DROP COLUMN "banner_image_id";
  ALTER TABLE "_offer_v" DROP COLUMN "version_sticker_top";
  ALTER TABLE "_offer_v" DROP COLUMN "version_sticker_bottom";
  ALTER TABLE "_offer_v" DROP COLUMN "version_banner_eyebrow";
  ALTER TABLE "_offer_v" DROP COLUMN "version_banner_image_id";`)
}
