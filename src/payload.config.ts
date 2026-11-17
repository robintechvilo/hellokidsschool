import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
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
 * Database:
 *  - DATABASE_URI wins (local .env.local → SQLite file, or an explicit Postgres URL).
 *  - On Vercel, the Neon integration provides POSTGRES_URL (pooled).
 *  - Postgres (Neon / VPS) uses committed migrations in src/migrations; SQLite (dev) uses push.
 */
const dbUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || "file:./data/hello-kids.db";
const isPostgres = dbUri.startsWith("postgres");
const db = isPostgres
  ? postgresAdapter({ pool: { connectionString: dbUri }, migrationDir: path.resolve(dirname, "migrations") })
  : sqliteAdapter({ client: { url: dbUri } });

// Media storage: Vercel Blob in production (Postgres + token), or S3/R2 if configured, else local ./media.
const useBlob = isPostgres && !!process.env.BLOB_READ_WRITE_TOKEN && !process.env.S3_BUCKET;
const useS3 = !!process.env.S3_BUCKET;

const serverURL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");

if (process.env.NODE_ENV === "production" && isPostgres && !process.env.PAYLOAD_SECRET) {
  throw new Error("PAYLOAD_SECRET must be set in production.");
}

export default buildConfig({
  serverURL,
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
    vercelBlobStorage({
      enabled: useBlob,
      // Files are public images; serve them straight from the Blob CDN.
      collections: { media: { disablePayloadAccessControl: true } },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      // Upload from the browser straight to Blob (Vercel functions cap request bodies at 4.5 MB).
      clientUploads: true,
    }),
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
