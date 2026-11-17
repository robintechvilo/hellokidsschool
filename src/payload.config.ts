import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { importExportPlugin } from "@payloadcms/plugin-import-export";
import { resendAdapter } from "@payloadcms/email-resend";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Events, Facilities, Faqs, Programs, Team, Testimonials } from "./payload/collections/content";
import { Admissions, Messages, VisitBookings } from "./payload/collections/leads";
import { AboutPage, AdmissionsPage, HomePage, Offer, SiteSettings } from "./payload/globals";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Database: Postgres when DATABASE_URI starts with "postgres" (Neon on Vercel, Postgres on the VPS);
 * otherwise a local SQLite file for development.
 */
const dbUri = process.env.DATABASE_URI || "file:./data/hello-kids.db";
const db = dbUri.startsWith("postgres")
  ? postgresAdapter({ pool: { connectionString: dbUri } })
  : sqliteAdapter({ client: { url: dbUri } });

const useS3 = !!process.env.S3_BUCKET;

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  secret: process.env.PAYLOAD_SECRET || "dev-only-secret-change-me",
  admin: {
    user: Users.slug,
    meta: { titleSuffix: " · Hello Kids Admin", icons: [{ url: "/logo-256.png" }] },
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [
    // Content
    Programs, Facilities, Team, Events, Testimonials, Faqs, Media,
    // Leads
    Admissions, VisitBookings, Messages,
    // Settings
    Users,
  ],
  globals: [HomePage, AboutPage, AdmissionsPage, SiteSettings, Offer],
  db,
  // Admin password-reset emails. Without a key, emails are printed to the server console.
  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        apiKey: process.env.RESEND_API_KEY,
        defaultFromAddress: (process.env.MAIL_FROM?.match(/<(.+)>/)?.[1] ?? process.env.MAIL_FROM) || "onboarding@resend.dev",
        defaultFromName: "Hello Kids Admin",
      })
    : undefined,
  sharp,
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  upload: { limits: { fileSize: 10_000_000 } },
  plugins: [
    importExportPlugin({ collections: [{ slug: "admissions" }, { slug: "visit-bookings" }, { slug: "messages" }] }),
    s3Storage({
      enabled: useS3,
      collections: { media: process.env.S3_PUBLIC_URL
        ? { generateFileURL: ({ filename, prefix }) => `${process.env.S3_PUBLIC_URL!.replace(/\/$/, "")}/${[prefix, filename].filter(Boolean).join("/")}` }
        : true },
      bucket: process.env.S3_BUCKET || "",
      config: {
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION || "auto",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
      },
    }),
  ],
});
